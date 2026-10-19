---
title: "community-gameday-europe-stream-templates"
date: 2026-10-19T18:14:00+02:00
draft: false
description: "Remotion stream visuals and web player for AWS Community GameDay Europe, the reusable engine of a two-repo setup."
repo: "linda-mhmd/community-gameday-europe-stream-templates"
voices: ["junior", "senior"]
status: "finished"
started: "2026-03-15"
last_commit: "2026-04-03"
commits: 108
built_by: "Linda"
tags: ["remotion", "live-stream", "community", "events"]
---

The stream visuals for AWS Community GameDay Europe 2026, an event across more than 53 AWS User Groups in over 20 countries. This repo holds all compositions, the design system and a web player; event data comes from a separate event repo at build time.

{{< junior >}}
- I built it around 35 Remotion compositions: pre-show loop, main event, gameplay overlay, closing and inserts.
- The big decision was splitting code from event data into two repos, so the next organiser forks the data and never touches the engine.
- In late March I replaced hardcoded names, faces and counts with config values. Should have done that from the start.
- `LESSONS_LEARNED.md` lists what to do next edition, like score commentary during gameplay.
{{< /junior >}}

{{< senior >}}
Finished: the event happened, the last commit was 3 April 2026 and it added community health files. That is a good way to end. It has a README with screenshots, a CC BY-NC-SA 4.0 licence, code of conduct, security policy and a Pages deploy workflow. Hygiene finding: a `.playwright-mcp/` folder of browser console logs is committed and should be removed and ignored. `LESSONS_LEARNED.md` also still has placeholder sections waiting for organisers.
{{< /senior >}}

**Learned:** Separate the engine from the event data and the second edition gets much cheaper.
