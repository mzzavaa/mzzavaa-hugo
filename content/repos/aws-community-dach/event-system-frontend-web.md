---
title: "event-system-frontend-web"
date: 2026-10-19T18:00:00+02:00
draft: false
description: "Next.js web app for registering for AWS Community DACH events, showing a participant QR code and checking people in."
repo: "aws-community-dach/event-system-frontend-web"
voices: ["junior", "senior"]
status: "quiet"
started: "2023-02-03"
last_commit: "2024-09-15"
commits: 305
built_by: "Eduard Schwarzkopf, with Thorsten Hoeger and makellner"
tags: ["nextjs", "events", "community", "typescript"]
---

The web frontend of the AWS Community DACH event system, used to manage participant registrations for community events. It was written by volunteers: Eduard Schwarzkopf made most of the 305 commits, with Thorsten Hoeger and makellner. I did not write this one.

{{< junior >}}
What I noticed reading it:
- Eduard started it in February 2023 with Next.js and Tailwind, and Thorsten moved it to projen later that month.
- Each participant gets a QR code. In April 2024 it switched from a token to the participant ID to generate it, matching a backend API change the same week.
- The check-in button, the badge name display and a "sold out" flag all arrived in small commits close to event dates. You can read the event calendar from the git log.
- There is an `example.env.local`, so a newcomer knows which settings to fill in without seeing real ones.
{{< /junior >}}

{{< senior >}}
Last commit was 15 September 2024, so the repo has been quiet for about two years. For an event tool that is fine: it runs around events and rests in between. The real risk is dependencies. It pins Next.js 13.5.6 and React 18.2, and anyone reviving it for the next event should plan an upgrade pass before touching features. It has an Apache 2.0 licence, a short README and projen-managed GitHub workflows, including an upgrade workflow that is worth checking still runs.
{{< /senior >}}

**Learned:** A seasonal tool needs a dependency refresh before each season, not just a bug fix during it.
