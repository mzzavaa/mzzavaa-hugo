---
title: "meetup-workspace"
date: 2026-10-19T16:00:00+02:00
draft: false
description: "The starting point for the meetup tools: a Makefile, the spec all repos build against, and the guide from a Meetup link to the live site."
repo: "aws-user-groups-austria/meetup-workspace"
voices: ["junior", "senior"]
status: "active"
started: "2026-10-19"
last_commit: "2026-10-19"
commits: 4
built_by: "Linda"
tags: ["meetups", "makefile", "workspace", "community"]
---

The workspace for the AWS User Groups Austria meetup tools. It has no code of its own: a Makefile, a `SPEC.md` that every other repo builds against, and a long README that walks an organizer from a Meetup event link to the room screen, the slide deck and the page on awscommunity.at.

{{< junior >}}
- First commit today. `make clone` pulls the five part repos into this folder, `make start` syncs the event and runs the player and the website side by side.
- I wrote the contract first. `SPEC.md` describes `event.json` version 1, and the README says to change it there first, then in the code.
- I kept the parts as separate repos so the website can stay its own thing.
- Skipped on purpose: the slide deck is not automatic. The template holds organizer contacts and stays out of git.
{{< /junior >}}

{{< senior >}}
Four commits, all on 19 October 2026. The README is thorough and shows real rehearsal links with times, which a stranger can follow. No licence and no CI here, which is acceptable for a folder of glue, but the org profile invites reuse. One honest finding: `SPEC.md` still says each folder is a local repository with nothing committed and no remote. That stopped being true today. Spec drift in the one file everything points to is the first thing to fix.
{{< /senior >}}

**Learned:** A spec written before the repos existed needs one read-through on the day they go public.
