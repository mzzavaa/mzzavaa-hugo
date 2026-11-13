#!/usr/bin/env node
/**
 * Lee Za's count of the work that is not on any website yet. It runs on
 * Linda's own machine, because that is where the files are, and writes
 * data/leeza.json for the page. Counts, dates and event names only: no file
 * contents, no notes, no paths.
 *
 *   node tools/leeza-scan.mjs                 ~/Videos and ~/code/talks
 *   VIDEOS=/path TALKS=/path node tools/leeza-scan.mjs
 *
 * Videos: every folder in VIDEOS is raw footage, except "Event Aftermovies",
 * "GRWM" and "Interviews", which hold the finished versions (the dated
 * folders inside GRWM are raw shoots). A finished film is a video file with
 * a version in its name, "<film>_v1.2_...". From those she counts versions
 * and measures, per project: shoot day (the day most raw clips were recorded)
 * to first cut, and first cut to latest cut. When three or more folders share
 * one "shoot day", that is the day the clips were copied, and she does not
 * time anything from it. Where a film's analysis file records the event's
 * real date, she uses that: event to first cut is how long the footage waited.
 * PIPELINE is the repository of the video pipeline; she counts its commits
 * per month, to set next to the waiting times.
 * Talks: every folder in TALKS is one talk. She counts deck versions, old
 * builds, changelog entries and demos.
 */
import fs from "node:fs";
import { execFileSync } from "node:child_process";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const VIDEOS = process.env.VIDEOS || path.join(os.homedir(), "Videos");
const TALKS = process.env.TALKS || path.join(os.homedir(), "code", "talks");
const PIPELINE = process.env.PIPELINE || path.join(os.homedir(), "code", "video-flow");
const FINISHED = ["Event Aftermovies", "GRWM", "Interviews"];
const NOT_FOOTAGE = ["_Publishing Plan", "Upwork Portfolio"];
const VIDEO = /\.(mp4|mov|m4v|mkv|avi|mts)$/i;
const VERSION = /^(.*?)_v(\d+(?:\.\d+)*)(?:[_.]|$)/;
const day = (ms) => new Date(ms).toISOString().slice(0, 10);
const days = (a, b) => Math.round((new Date(b) - new Date(a)) / 864e5);
const median = (xs) => { if (!xs.length) return null; const s = [...xs].sort((a, b) => a - b); const m = s.length >> 1; return s.length % 2 ? s[m] : Math.round((s[m - 1] + s[m]) / 2); };

function walk(dir, { hidden = false, depth = 12 } = {}) {
  let out = [];
  let entries = [];
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return out; }
  for (const e of entries) {
    if (e.name === "node_modules" || e.name === ".git") continue;
    if (!hidden && e.name.startsWith(".")) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (depth > 0) out = out.concat(walk(p, { hidden, depth: depth - 1 })); }
    else if (e.isFile()) out.push(p);
  }
  return out;
}
const dirs = (dir) => { try { return fs.readdirSync(dir, { withFileTypes: true }).filter((e) => e.isDirectory() && !e.name.startsWith(".")).map((e) => e.name).sort(); } catch { return []; } };
const mtime = (p) => fs.statSync(p).mtimeMs;
function shootDay(files) {
  const count = new Map();
  for (const f of files) { const d = day(mtime(f)); count.set(d, (count.get(d) || 0) + 1); }
  return [...count.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] || null;
}
const words = (s) => s.toLowerCase().replace(/&/g, " ").split(/[^a-z0-9]+/).filter((w) => w.length > 2 && !["aws", "the", "and", "community", "day", "videos", "user", "group", "groups", "options", "for", "feedback"].includes(w));
const CITY = { athens: "greece", istanbul: "turkey", prague: "cz", newyork: "york", lasvegas: "vegas", reinvent: "vegas", fhburgenland: "burgenland", cee: "cee" };
const expand = (ws) => ws.flatMap((w) => [w, ...(CITY[w] ? [CITY[w]] : [])]);

// ---- Videos
const report = { generated: new Date().toISOString().slice(0, 10), videos: null, talks: null };
if (fs.existsSync(VIDEOS)) {
  const raws = [];
  for (const name of dirs(VIDEOS)) {
    if (FINISHED.includes(name) || NOT_FOOTAGE.includes(name)) continue;
    const clips = walk(path.join(VIDEOS, name)).filter((f) => VIDEO.test(f));
    if (clips.length) raws.push({ name: name.replace(/_/g, " "), kind: "event", clips: clips.length, shot: shootDay(clips) });
  }
  for (const name of dirs(path.join(VIDEOS, "GRWM"))) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(name)) continue;
    const clips = walk(path.join(VIDEOS, "GRWM", name)).filter((f) => VIDEO.test(f));
    if (clips.length) raws.push({ name: `GRWM shoot ${name}`, kind: "grwm", clips: clips.length, shot: name });
  }

  // A shoot day shared by three or more folders is the day the clips were copied, not the day
  // they were shot. Those folders get no shoot day, and nothing is timed from them.
  const perDay = new Map();
  for (const r of raws.filter((r) => r.kind === "event")) perDay.set(r.shot, (perDay.get(r.shot) || 0) + 1);
  let copied = 0;
  for (const r of raws) if (r.kind === "event" && perDay.get(r.shot) >= 3) { r.shot = null; copied++; }

  const finished = [];
  for (const root of FINISHED) {
    for (const name of dirs(path.join(VIDEOS, root))) {
      if (/^\d{4}-\d{2}-\d{2}$/.test(name)) continue;
      const dir = path.join(VIDEOS, root, name);
      const films = new Map();
      for (const f of walk(dir).filter((f) => VIDEO.test(f))) {
        const m = path.basename(f).match(VERSION);
        if (!m) continue;
        const film = films.get(m[1]) || { versions: new Set(), first: Infinity, last: 0 };
        film.versions.add(m[2]);
        const t = mtime(f);
        film.first = Math.min(film.first, t); film.last = Math.max(film.last, t);
        films.set(m[1], film);
      }
      let published = 0, uploaded = [];
      try {
        const pub = JSON.parse(fs.readFileSync(path.join(dir, ".videoflow", "publishing.json"), "utf8"));
        for (const film of Object.values(pub.films || {})) {
          if (film.youtube?.video_id) { published++; if (film.youtube.uploaded) uploaded.push(film.youtube.uploaded.slice(0, 10)); }
        }
      } catch { /* no publishing record */ }
      // The analysis file of each film records the event's real date and the film's length
      let eventDate = null; const lengths = new Map();
      for (const f of walk(path.join(dir, ".videoflow", "films"), { hidden: true }).filter((f) => path.basename(f) === "film.json")) {
        try {
          const film = JSON.parse(fs.readFileSync(f, "utf8"));
          const d = film.event?.dates?.value?.[0];
          if (d && (!eventDate || d < eventDate)) eventDate = d;
          if (film.length?.total_s) lengths.set(film.film, { v: parseFloat(film.version) || 0, s: film.length.total_s, ...(lengths.get(film.film)?.v > (parseFloat(film.version) || 0) ? lengths.get(film.film) : {}) });
        } catch { /* unreadable analysis file */ }
      }
      const changelogs = walk(dir, { hidden: true }).filter((f) => /^CHANGELOG/i.test(path.basename(f)));
      const entries = changelogs.reduce((n, f) => n + (fs.readFileSync(f, "utf8").match(/^#{1,3} .*\bv\d+\.\d+/gm) || []).length, 0);
      if (!films.size && !published) continue;
      const all = [...films.values()];
      finished.push({
        name, kind: root === "Event Aftermovies" ? "aftermovie" : root === "GRWM" ? "grwm" : "interview",
        films: films.size,
        versions: all.reduce((n, f) => n + f.versions.size, 0),
        first_cut: all.length ? day(Math.min(...all.map((f) => f.first))) : null,
        latest_cut: all.length ? day(Math.max(...all.map((f) => f.last))) : null,
        on_youtube: published,
        first_upload: uploaded.sort()[0] || null,
        changelog_entries: entries,
        event_date: eventDate,
        film_seconds: Math.round([...lengths.values()].reduce((n, l) => n + l.s, 0)),
      });
    }
  }
  // Which raw folder belongs to which finished project: the best overlap of words, year included
  for (const f of finished) {
    const fw = expand(words(f.name));
    let best = null, score = 0;
    for (const r of raws.filter((r) => r.kind === (f.kind === "grwm" ? "grwm" : "event"))) {
      const rw = expand(words(r.name));
      const n = fw.filter((w) => rw.includes(w)).length;
      if (n > score) { best = r; score = n; }
    }
    if (best && score >= 2 && f.first_cut && best.shot && best.shot <= f.first_cut) {
      f.shot = best.shot;
      f.shoot_to_first_cut = days(best.shot, f.first_cut);
    }
    if (f.first_cut) f.first_to_latest_cut = days(f.first_cut, f.latest_cut);
    // How long the footage waited: from the event (its recorded date, or a real shoot day) to the first cut
    const start = f.event_date || f.shot;
    if (start && f.first_cut && start <= f.first_cut) { f.event_date = start; f.waited_days = days(start, f.first_cut); }
  }
  // The pipeline's own history: commits per month in its repository
  let pipeline = [];
  try {
    const log = execFileSync("git", ["-C", PIPELINE, "log", "--format=%ad", "--date=format:%Y-%m"], { encoding: "utf8" });
    const per = new Map();
    for (const m of log.split("\n").filter(Boolean)) per.set(m, (per.get(m) || 0) + 1);
    pipeline = [...per.entries()].sort().map(([month, commits]) => ({ month, commits }));
  } catch { /* no pipeline repository here */ }
  // The chart: one row per project that has a wait, oldest event first, on one time axis
  const waited = finished.filter((f) => f.waited_days != null && f.kind !== "grwm").sort((a, b) => a.event_date.localeCompare(b.event_date));
  let chart = null;
  if (waited.length) {
    const t0 = new Date(waited[0].event_date.slice(0, 7) + "-01").getTime();
    const t1 = Date.now();
    const x = (d) => Math.round(((new Date(d).getTime() - t0) / (t1 - t0)) * 10000) / 10000;
    const ticks = [];
    for (let d = new Date(t0); d.getTime() < t1; d.setMonth(d.getMonth() + 3)) ticks.push({ label: d.toISOString().slice(0, 7), x: x(d) });
    chart = {
      from: waited[0].event_date.slice(0, 7), to: new Date(t1).toISOString().slice(0, 10), ticks,
      rows: waited.map((f) => ({ name: f.name, kind: f.kind, event: f.event_date, first_cut: f.first_cut, days: f.waited_days, x0: x(f.event_date), x1: x(f.first_cut) })),
      pipeline: pipeline.filter((p) => new Date(p.month + "-01").getTime() >= t0).map((p) => ({ ...p, x0: x(p.month + "-01"), x1: Math.min(1, x(new Date(new Date(p.month + "-01").setMonth(new Date(p.month + "-01").getMonth() + 1)))) })),
      pipeline_max: Math.max(1, ...pipeline.map((p) => p.commits)),
    };
  }
  const timed = finished.filter((f) => f.shoot_to_first_cut != null);
  const iter = finished.filter((f) => f.first_to_latest_cut != null);
  const byKind = (k) => finished.filter((f) => f.kind === k);
  const sum = (xs, key) => xs.reduce((n, x) => n + (x[key] || 0), 0);
  report.videos = {
    raws: { folders: raws.length, clips: sum(raws, "clips"), event_folders: raws.filter((r) => r.kind === "event").length, grwm_shoots: raws.filter((r) => r.kind === "grwm").length, biggest: [...raws].sort((a, b) => b.clips - a.clips).slice(0, 5).map(({ name, clips }) => ({ name, clips })) },
    finished: Object.fromEntries(["aftermovie", "grwm", "interview"].map((k) => [k, { projects: byKind(k).length, films: sum(byKind(k), "films"), versions: sum(byKind(k), "versions"), on_youtube: sum(byKind(k), "on_youtube") }])),
    totals: { projects: finished.length, films: sum(finished, "films"), versions: sum(finished, "versions"), on_youtube: sum(finished, "on_youtube"), changelog_entries: sum(finished, "changelog_entries") },
    film_minutes: Math.round(sum(finished, "film_seconds") / 60),
    pipeline: { commits: pipeline.reduce((n, p) => n + p.commits, 0), first_month: pipeline[0]?.month || null, months: pipeline },
    waiting: waited.length ? {
      measured: waited.length,
      longest: [...waited].sort((a, b) => b.waited_days - a.waited_days).slice(0, 1).map(({ name, waited_days, event_date }) => ({ name, days: waited_days, event: event_date }))[0],
      shortest: [...waited].sort((a, b) => a.waited_days - b.waited_days).slice(0, 1).map(({ name, waited_days, event_date }) => ({ name, days: waited_days, event: event_date }))[0],
      median_days: median(waited.map((f) => f.waited_days)),
      by_year: Object.entries(waited.reduce((m, f) => { const y = f.event_date.slice(0, 4); (m[y] = m[y] || []).push(f.waited_days); return m; }, {})).sort().map(([year, ds]) => ({ year, events: ds.length, median_days: median(ds) })),
    } : null,
    chart,
    timing: {
      folders_with_copy_date: copied,
      first_cuts_per_day: Object.entries(finished.reduce((m, f) => { if (f.first_cut) m[f.first_cut] = (m[f.first_cut] || 0) + 1; return m; }, {})).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([date, projects]) => ({ date, projects })),
      first_to_latest_cut_longest: [...iter].sort((a, b) => b.first_to_latest_cut - a.first_to_latest_cut).slice(0, 3).map(({ name, first_to_latest_cut, versions }) => ({ name, days: first_to_latest_cut, versions })),
      most_versions: [...finished].sort((a, b) => b.versions - a.versions).slice(0, 3).map(({ name, films, versions }) => ({ name, films, versions })),
      measured: timed.length,
      shoot_to_first_cut_median_days: median(timed.map((f) => f.shoot_to_first_cut)),
      shoot_to_first_cut_fastest: [...timed].sort((a, b) => a.shoot_to_first_cut - b.shoot_to_first_cut).slice(0, 3).map(({ name, shoot_to_first_cut }) => ({ name, days: shoot_to_first_cut })),
      shoot_to_first_cut_slowest: [...timed].sort((a, b) => b.shoot_to_first_cut - a.shoot_to_first_cut).slice(0, 3).map(({ name, shoot_to_first_cut }) => ({ name, days: shoot_to_first_cut })),
      first_to_latest_cut_median_days: median(iter.map((f) => f.first_to_latest_cut)),
      versions_per_film_median: median(finished.filter((f) => f.films).map((f) => Math.round((f.versions / f.films) * 10) / 10)),
    },
    projects: finished.sort((a, b) => (b.latest_cut || "").localeCompare(a.latest_cut || "")),
  };
}

// ---- Talks
if (fs.existsSync(TALKS)) {
  const talks = [];
  for (const name of dirs(TALKS)) {
    const dir = path.join(TALKS, name);
    const files = walk(dir, { depth: 3 });
    const decks = new Map();
    for (const f of files) {
      if (!/\.(pptx|key|pdf|mp4|m4a)$/i.test(f)) continue;
      const m = path.basename(f).match(/^(.*?)_v(\d+(?:\.\d+)*)(?:[_.]|$)/);
      if (!m) continue;
      const d = decks.get(m[1]) || new Set(); d.add(m[2]); decks.set(m[1], d);
    }
    const versions = [...decks.values()].flatMap((s) => [...s]);
    const highest = versions.map((v) => parseFloat(v)).sort((a, b) => b - a)[0] ?? null;
    const oldBuilds = dirs(dir).map((d) => d.match(/^_old_(\d+)$/)).filter(Boolean).map((m) => Number(m[1]));
    const changelogs = files.filter((f) => /^CHANGELOG/i.test(path.basename(f)));
    const entries = changelogs.reduce((n, f) => n + (fs.readFileSync(f, "utf8").match(/^#{1,3} .*\bv?\d+\.\d+/gm) || []).length, 0);
    const demoDirs = ["demos", path.join("demo-repo", "demos")].flatMap((d) => dirs(path.join(dir, d)).filter((x) => !x.startsWith("_")));
    talks.push({
      name: name.replace(/^(\d{4})_/, "$1 ").replace(/_/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2"),
      deck_versions_kept: new Set(versions).size,
      highest_version: highest,
      highest_old_build: oldBuilds.length ? Math.max(...oldBuilds) : null,
      changelog_entries: entries,
      demos: new Set(demoDirs).size,
      has_runsheet: files.some((f) => /RUNSHEET/i.test(path.basename(f))),
      has_rehearsal_video: files.some((f) => /_timed\.mp4$/i.test(f)),
    });
  }
  report.talks = { folders: talks.length, list: talks };
}

fs.writeFileSync(path.join(ROOT, "data", "leeza.json"), JSON.stringify(report, null, 2) + "\n");
const v = report.videos, t = report.talks;
if (v) console.log(`videos: ${v.raws.clips} raw clips in ${v.raws.folders} folders; ${v.totals.films} finished films in ${v.totals.projects} projects, ${v.totals.versions} versions, ${v.totals.on_youtube} on YouTube; shoot to first cut: median ${v.timing.shoot_to_first_cut_median_days} days over ${v.timing.measured} projects`);
if (t) console.log(`talks: ${t.folders} folders`);
