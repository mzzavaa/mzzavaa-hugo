#!/usr/bin/env node
/**
 * Lee Za's weekly talks check. Reads data/talks.json and the public talk list,
 * and writes down what is missing. It reports and changes nothing.
 *
 *   node tools/check-talks.mjs              prints the report as Markdown
 *   node tools/check-talks.mjs --offline    skips the web reads
 *
 * Checks, for this year's talks: no exact date, no talk page, no public slides,
 * no recap of how the slides were made, and a talk page that does not answer.
 * Then it reads the public talk list and names every talk heading there whose
 * page is not in data/talks.json yet. No dependencies.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const data = JSON.parse(fs.readFileSync(path.join(ROOT, "data", "talks.json"), "utf8"));
const offline = process.argv.includes("--offline");
const talks = data.this_year;
const name = (t) => `${t.event}${t.title ? `: ${t.title}` : ""}`;
const list = (items) => (items.length ? items.map((t) => `- ${name(t)}`).join("\n") : "- Nothing. Nice.");

async function get(url) {
  try {
    const res = await fetch(url, { redirect: "follow", headers: { "user-agent": "talks-check" } });
    return { status: res.status, text: res.ok ? await res.text() : "" };
  } catch (err) {
    return { status: 0, text: "", error: String(err.message || err) };
  }
}

const out = [];
out.push(`Hi Linda. Lee Za here, with the talks check for ${new Date().toISOString().slice(0, 10)}.`);
out.push("");
out.push(`${talks.length} entries for ${data.year} in \`data/talks.json\`. I only report. Nothing was changed.`);

const today = new Date().toISOString().slice(0, 10);
const upcoming = talks.filter((t) => t.date && t.date >= today).sort((a, b) => a.date.localeCompare(b.date));
out.push("", "## Coming up");
out.push(upcoming.length ? upcoming.map((t) => `- ${t.date}: ${name(t)}`).join("\n") : "- No talk with a date in the future on my list. If one is planned, it is not written down here yet.");

out.push("", "## No public slides", list(talks.filter((t) => !t.slides)));
out.push("", "## No exact date", "The talk list only gives a year for these, so they cannot go on a calendar.", list(talks.filter((t) => !t.date)));
out.push("", "## No recap of how the slides were made", list(talks.filter((t) => !t.recap)));
out.push("", "## No talk page", list(talks.filter((t) => !t.page)));

if (!offline) {
  const pages = [...new Set(talks.map((t) => t.page).filter(Boolean))];
  const dead = [];
  for (const url of pages) {
    const res = await get(url);
    if (res.status !== 200) dead.push(`- ${url} answered ${res.status || res.error}`);
  }
  out.push("", "## Talk pages that do not answer", dead.length ? dead.join("\n") : `- All ${pages.length} answer.`);

  const listUrl = data.links.all_talks;
  const res = await get(listUrl);
  out.push("", "## On the public talk list, not on mine");
  if (res.status !== 200) {
    out.push(`- I could not read ${listUrl} (${res.status || res.error}), so I could not compare.`);
  } else {
    const origin = new URL(listUrl).origin;
    const known = new Set([...talks, ...data.earlier].map((t) => t.page).filter(Boolean).map((u) => new URL(u).pathname.replace(/^\/|\/$/g, "")));
    // On the talk list every talk is a heading that links to its talk page.
    const links = [...res.text.matchAll(/<h3>\s*<a href="([^"#?]+)"/g)].map((m) => m[1]);
    const found = new Set();
    for (const href of links) {
      let u;
      try { u = new URL(href, origin); } catch { continue; }
      const slug = u.pathname.replace(/^\/|\/$/g, "");
      if (u.origin === origin && !known.has(slug)) found.add(slug);
    }
    if (!links.length) out.push("- I found no talk headings on the list. Its layout may have changed, so this comparison needs a look.");
    else out.push(found.size
      ? [...found].sort().map((slug) => `- ${origin}/${slug}`).join("\n") + "\n\nThese want an entry in `data/talks.json`."
      : `- Nothing new. All ${links.length} talk headings there are on my list.`);
  }
}

out.push("", "---", "To close a gap: add the date, slides link or recap to the talk's entry in `data/talks.json`. The Talks page updates on the next deploy.");
console.log(out.join("\n"));
