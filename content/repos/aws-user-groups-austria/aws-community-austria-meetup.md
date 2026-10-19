---
title: "aws-community-austria-meetup"
date: 2026-10-19T16:07:00+02:00
draft: false
description: "The first attempt at the meetup tools: per-meetup config that generated slides and a prep guide in GitHub Actions."
repo: "aws-user-groups-austria/aws-community-austria-meetup"
voices: ["junior", "senior"]
status: "quiet"
started: "2026-04-04"
last_commit: "2026-04-04"
commits: 3
built_by: "Philipp Bergsmann with Linda"
tags: ["remotion", "slides", "github-actions", "meetups"]
---

The first attempt at tooling for the Austrian AWS meetups, from April 2026. Each meetup was a config file, and a GitHub Actions workflow generated the slides and a prep guide from it. Linda set up the repo, the workflow, the checklist and the README; Philipp Bergsmann wrote the slide deck generator and cleaned out files that should not have been committed.

{{< junior >}}
What I noticed reading it again:
- Philipp's commit is the real code: the generators, the group and sponsor config, a Remotion setup and the image assets.
- The workflow checked out a separate templates repo next to this one, so the "code" and the "config" lived apart.
- The organizer checklist, from two months before to the day after, is still good. It moved into `meetup-event-vienna/legacy/` today, together with the old deck pages.
- The newer tools went the other way: start from the Meetup link, not from a config file someone has to fill in.
{{< /junior >}}

{{< senior >}}
Three commits, all on 4 April 2026, then nothing. The legacy notes in `meetup-event-vienna` call it the first attempt and archived, and the new repos replaced it, so quiet is the correct state. It is the only repo in the org with a licence, CC BY-NC-SA 4.0. The README is out of date: it describes a `config/meetup.ts` that Philipp's commit removed and says there is no `package.json` when there is one. Before archiving for good, check what the config files still contain; see the findings list.
{{< /senior >}}

**Learned:** A first attempt is worth keeping when you write down which parts survived and where they went.
