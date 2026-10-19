---
title: "garden-hub-wiki"
date: 2026-10-19T18:12:00+02:00
draft: false
description: "A bilingual garden wiki for the Austrian climate: plant profiles, sowing calendar, greenhouse guide and climate regions."
repo: "linda-mhmd/garden-hub-wiki"
voices: ["junior", "senior"]
status: "quiet"
started: "2026-08-09"
last_commit: "2026-08-10"
commits: 20
built_by: "Claude, under Linda's direction"
tags: ["react", "gardening", "i18n", "ai-built"]
---

A garden wiki for the Austrian and Pannonian climate, with plant profiles, a monthly calendar, a greenhouse guide and climate regions. It is a static React app with no backend and no sign-in. This one is AI-built: Claude wrote all 20 commits, under my direction.

{{< junior >}}
- It was pulled out of a private garden project as a public reference, with only general plant knowledge and nothing about a real plot.
- It started in German. On day one Claude added a DE/EN framework with language-stable URLs, then full English content.
- Small decision I liked: English uses "Eggplant" instead of "Aubergine", and Ice Saints get an explanation for readers outside Austria.
- The yield calculator stayed out. It lives on its own site and the wiki only links to it.
{{< /junior >}}

{{< senior >}}
All 20 commits landed on 9 and 10 August 2026, and nothing since. That is fine for a reference wiki whose content follows the seasons rather than releases. A stranger would find a clear README, contributor, deployment and localisation guides and a deploy workflow. Missing: a licence file, which a public knowledge base should have, and tests beyond linting. The README also still names a `mzzavaa.github.io` URL while the repo lives under linda-mhmd.
{{< /senior >}}

**Learned:** Directing an AI build works best when the brief says clearly what must never be in it.
