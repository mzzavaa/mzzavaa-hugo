---
title: "the-juggling-company"
date: 2026-10-19T12:00:00+02:00
draft: false
description: "The Astro site behind thejugglingcompany.com: juggling, ideas, talks, videos and a map of places, all as typed content collections."
repo: "mzzavaa/the-juggling-company"
voices: ["junior", "senior"]
status: "active"
started: "2022-05-01"
last_commit: "2026-10-19"
commits: 430
built_by: "Tomas Bankauskas (2022 to 2024), then Linda"
tags: ["astro", "juggling", "website"]
---

The site for [The Juggling Company](https://thejugglingcompany.com), where juggling meets talks about change, cognitive load and AI. Tomas Bankauskas started the repo in 2022 and built the first versions; my commits start in 2024, and since then most of the work is mine.

{{< junior >}}
- It is Astro 5 with TypeScript, Tailwind and only two small React islands: the video filter and the map. Everything else ships no JavaScript.
- The content is eight typed collections: ideas, locations, posts, press, products, services, talks and videos. Broken front matter fails the build.
- This year I added an AI disclosure on generated images as a small caption, and later made it calmer: a subtle note with the detail on hover.
- Some blog images come from Juggling Lab, including the avatars I added in [my jugglinglab fork](/repos/mzzavaa/jugglinglab/).
{{< /junior >}}

{{< senior >}}
430 commits over four and a half years, Tomas first and then me, last one today, so this is the most alive project on the account. It has CI, preview builds, a deploy workflow, link checking and Dependabot updates that get rolled up instead of ignored. The README is short and correct. It is a good example of a playground project that grew up without moving house.
{{< /senior >}}

**Learned:** Typed content is worth it on a personal site too: the build tells you what you broke before a visitor does.
