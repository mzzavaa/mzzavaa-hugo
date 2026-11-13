#!/usr/bin/env node
/**
 * Lee Za's weekly talks check. The rule is in data/talks.json: every talk of
 * this year has four things, a landing page, a blog post, the slides and a
 * video, unless its "except" map says otherwise. She reports what is missing
 * and what she found that is not on her list yet. She changes nothing.
 *
 *   node tools/check-talks.mjs              prints the report as Markdown
 *   node tools/check-talks.mjs --offline    skips the web reads
 *
 * Web reads, all public: each landing page (does it answer, does it carry
 * slides, a video or a blog link that the list does not have, does it link to
 * a blog post that does not answer), every link already on the list, the blog
 * index (posts of this year that belong to no talk) and the public talk list
 * (talks that are not on hers). No dependencies.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const data = JSON.parse(fs.readFileSync(path.join(ROOT, "data", "talks.json"), "utf8"));
const offline = process.argv.includes("--offline");
const talks = data.this_year;
const LABEL = { page: "landing page", blog: "blog post", slides: "slides", video: "video" };
const name = (t) => `**${t.event}**${t.title ? `, ${t.title}` : ""}`;
const origin = new URL(data.links.all_talks).origin;

const cache = new Map();
async function get(url) {
  if (cache.has(url)) return cache.get(url);
  let res;
  try {
    const r = await fetch(url, { redirect: "follow", headers: { "user-agent": "talks-check" } });
    res = { status: r.status, text: r.ok ? await r.text() : "" };
  } catch (err) {
    res = { status: 0, text: "", error: String(err.message || err) };
  }
  cache.set(url, res);
  return res;
}
const abs = (href) => { try { return new URL(href, origin).href.replace(/[#?].*$/, ""); } catch { return null; } };
const hrefs = (html) => [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((m) => m[1]);
const slideLinks = (html) => [...new Set(hrefs(html).filter((h) => /drive\.google\.com\/file|docs\.google\.com\/presentation|speakerdeck\.com|\.pdf(\?|$)/.test(h)).map((h) => h.replace(/[?#].*$/, "")))];
const videoLinks = (html) => [...new Set([...html.matchAll(/(?:youtube(?:-nocookie)?\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([A-Za-z0-9_-]{11})/g)].map((m) => `https://www.youtube.com/watch?v=${m[1]}`))];
const blogLinks = (html) => [...new Set(hrefs(html).map(abs).filter((u) => u && u.startsWith(`${origin}/blog/`)))];

// ---- The count
const owed = (t) => data.rule.filter((k) => !t.except?.[k]);
const missing = (t) => owed(t).filter((k) => !t[k]);
const totalOwed = talks.reduce((n, t) => n + owed(t).length, 0);
const totalMissing = talks.reduce((n, t) => n + missing(t).length, 0);

const out = [];
out.push(`Linda. Lee Za. Talks check for ${new Date().toISOString().slice(0, 10)}.`);
out.push("");
out.push(`The rule has not changed: every talk gets a landing page, a blog post, the slides and a video. ${talks.length} talks this year, so ${totalOwed} things. **${totalOwed - totalMissing} are there. ${totalMissing} are not.**`);
out.push("");
out.push("| | there | owed |", "|---|---|---|");
for (const k of data.rule) {
  const o = talks.filter((t) => !t.except?.[k]);
  out.push(`| ${LABEL[k]} | ${o.filter((t) => t[k]).length} | ${o.length} |`);
}

out.push("", "## What each talk still owes me");
const open = talks.filter((t) => missing(t).length);
if (!open.length) out.push("Nothing. Every talk is complete. I am almost disappointed.");
for (const t of open) {
  const m = missing(t).map((k) => (k === "blog" && t.blog_broken ? "blog post (the landing page links to one, and it does not answer)" : LABEL[k]));
  out.push(`- ${name(t)}: ${m.join(", ")}`);
}
const excused = talks.filter((t) => Object.keys(t.except || {}).length);
if (excused.length) {
  out.push("", "## Excused, because you said so");
  for (const t of excused) out.push(`- ${name(t)}: ${Object.entries(t.except).map(([k, why]) => `${LABEL[k]} (${why})`).join(", ")}`);
}

const today = new Date().toISOString().slice(0, 10);
const upcoming = talks.filter((t) => t.date && t.date >= today).sort((a, b) => a.date.localeCompare(b.date));
out.push("", "## Coming up");
out.push(upcoming.length ? upcoming.map((t) => `- ${t.date}: ${name(t)}`).join("\n") : "- No talk with a future date on my list. If one is planned, nobody told me.");
const undated = talks.filter((t) => !t.date);
if (undated.length) out.push("", "## No exact date", `${undated.length} talks only have a year, so they cannot go on a calendar: ${undated.map((t) => t.event).filter((e, i, a) => a.indexOf(e) === i).join(", ")}.`);

if (!offline) {
  const found = [];
  const broken = [];
  const known = new Set(talks.flatMap((t) => [t.blog, t.slides, t.video]).filter(Boolean));
  const seenPages = new Set();
  for (const t of talks) {
    for (const k of ["blog", "slides", "video"]) {
      if (!t[k]) continue;
      const r = await get(t[k]);
      if (r.status !== 200) broken.push(`- ${name(t)}: the ${LABEL[k]} link answers ${r.status || r.error}: ${t[k]}`);
    }
    if (!t.page || seenPages.has(t.page)) continue;
    seenPages.add(t.page);
    const r = await get(t.page);
    if (r.status !== 200) { broken.push(`- ${name(t)}: the landing page answers ${r.status || r.error}: ${t.page}`); continue; }
    const sameEvent = talks.filter((x) => x.page === t.page);
    const have = new Set(sameEvent.flatMap((x) => [x.blog, x.slides, x.video]).filter(Boolean));
    for (const u of slideLinks(r.text)) if (!have.has(u) && !known.has(u)) found.push(`- ${t.event}: slides on the landing page that are not on my list: ${u}`);
    for (const u of videoLinks(r.text)) if (!have.has(u)) found.push(`- ${t.event}: a video on the landing page that is not on my list: ${u}`);
    for (const u of blogLinks(r.text)) {
      const b = await get(u);
      if (b.status !== 200) broken.push(`- ${t.event}: the landing page links to a blog post that answers ${b.status || b.error}: ${u}`);
    }
  }
  // Videos inside the blog posts that are on the list
  for (const t of talks) {
    if (!t.blog || t.video) continue;
    const r = await get(t.blog);
    for (const u of videoLinks(r.text)) found.push(`- ${name(t)}: its blog post carries a video that is not on my list: ${u}`);
  }
  // Blog posts of this year that belong to no talk
  const index = [];
  for (let n = 1; n <= 20; n++) {
    const r = await get(`${origin}/blog?page=${n}`);
    const posts = blogLinks(r.text).filter((u) => !index.includes(u));
    if (!posts.length) break;
    index.push(...posts);
  }
  const attached = new Set(talks.map((t) => t.blog).filter(Boolean));
  const loose = index.filter((u) => u.includes(String(data.year)) && !attached.has(u));
  // The public talk list
  const list = await get(data.links.all_talks);
  const slugs = new Set([...talks, ...data.earlier].map((t) => t.page).filter(Boolean).map((u) => new URL(u).pathname.replace(/^\/|\/$/g, "")));
  const heads = [...list.text.matchAll(/<h3>\s*<a href="([^"#?]+)"/g)].map((m) => abs(m[1])).filter(Boolean);
  const unlisted = [...new Set(heads.filter((u) => !slugs.has(new URL(u).pathname.replace(/^\/|\/$/g, ""))))];

  out.push("", "## Found, but not on my list yet");
  out.push("Things that exist in public and that `data/talks.json` does not know about. Add them and the count goes up.");
  const lines = [...new Set(found)];
  for (const u of loose) lines.push(`- A blog post from ${data.year} that belongs to no talk on my list: ${u}`);
  for (const u of unlisted) lines.push(`- On the public talk list, not on mine: ${u}`);
  if (list.status !== 200) lines.push(`- I could not read ${data.links.all_talks} (${list.status || list.error}), so I could not compare the talk list.`);
  else if (!heads.length) lines.push("- I found no talk headings on the public talk list. Its layout may have changed.");
  out.push(lines.length ? lines.join("\n") : "- Nothing. My list matches what is out there.");

  out.push("", "## Broken");
  out.push(broken.length ? [...new Set(broken)].join("\n") : "- Nothing. Every link I know answers.");
}

out.push("", "---");
out.push("How to shut me up: put the link into the talk's entry in `data/talks.json` (`page`, `blog`, `slides`, `video`). If a talk really will not get one of the four, add it to that talk's `except`, for example `\"except\": { \"video\": \"not recorded\" }`. I only take that from you.");
console.log(out.join("\n"));
