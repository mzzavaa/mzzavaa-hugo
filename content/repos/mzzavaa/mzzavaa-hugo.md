---
title: "mzzavaa-hugo"
date: 2026-11-13T12:00:00+01:00
draft: false
description: "The Hugo site you are reading: mzzavaa.com, written in two voices, with a notebook of every public repo."
repo: "mzzavaa/mzzavaa-hugo"
voices: ["junior", "senior"]
status: "active"
started: "2025-04-25"
last_commit: "2026-11-13"
commits: 51
built_by: "Linda"
tags: ["hugo", "website", "github-pages", "writing"]
---

The source of mzzavaa.com. A Hugo site with its own theme, deployed to GitHub Pages, where Mz Zavaa Junior writes about what she built and Mz Zavaa Senior reviews it. The open source notebook, the page listing every public repo, lives here too.

{{< junior >}}
- I started it in April 2025 with a plain blog theme, then it went quiet while the real work happened elsewhere.
- On 19 October 2026 it came back in one day: two voices with their own shortcodes, the notebook design, the open source notebook, a year in review, and Hugo 0.168.
- Then the polish: one Writing page with every post, a phone header with one row of tabs, View all buttons on the homepage, and SVG icons instead of arrow characters.
- I fingerprinted the stylesheet and the script, so a browser never shows yesterday's design after a deploy.
{{< /junior >}}

{{< senior >}}
51 commits, nearly all since 19 October 2026, so this is a site that restarted rather than one that grew slowly. The deploy workflow pins the Hugo version and checks the download against the release checksum, which is more care than most personal sites get. The 25 October commit removed unused media that carried embedded metadata and added ignore rules for local secrets: good hygiene for a public repo. The README still describes the old theme and could say what the site is today. No licence.
{{< /senior >}}

**Learned:** Strip metadata from media before it goes into a public repo, not after.
