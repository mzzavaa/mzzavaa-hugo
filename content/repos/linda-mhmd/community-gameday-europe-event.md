---
title: "community-gameday-europe-event"
date: 2026-10-19T18:15:00+02:00
draft: false
description: "Event configuration for AWS Community GameDay Europe 2026: participants, schedule and photos, deployed to GitHub Pages."
repo: "linda-mhmd/community-gameday-europe-event"
voices: ["junior", "senior"]
status: "finished"
started: "2026-03-15"
last_commit: "2026-04-03"
commits: 48
built_by: "Linda"
tags: ["github-actions", "github-pages", "community", "events"]
---

The event half of the GameDay Europe stream system. It holds only what changes between editions: participants, schedule and face photos. Every push to `main` builds the template repo with this config and deploys the live page to GitHub Pages.

{{< junior >}}
- I wanted forking to be the whole setup, so the README walks through the clicks GitHub will not let a workflow do for you: enabling workflows and Pages on a fork.
- I made the build always succeed and skip the deploy when Pages is not on yet, instead of failing on a fresh fork.
- I replaced name matching with a `streamRole` field for host, presenter and gamemaster. Much less fragile.
{{< /junior >}}

{{< senior >}}
Finished: last commit 3 April 2026, after the event, adding community health files. It has a clear README, a CC BY-NC-SA 4.0 licence, a code of conduct and a deploy workflow. One thing a stranger would trip over: `config/schedule.ts` still holds a date marked as a test date, so anyone forking should set their own before trusting the countdown.
{{< /senior >}}

**Learned:** Document the manual clicks; they are the part people get stuck on.
