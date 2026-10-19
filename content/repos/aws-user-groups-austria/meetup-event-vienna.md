---
title: "meetup-event-vienna"
date: 2026-10-19T16:03:00+02:00
draft: false
description: "One folder per AWS User Group Vienna meetup with its Meetup link, overrides and generated event files, plus shared photos and badges."
repo: "aws-user-groups-austria/meetup-event-vienna"
voices: ["junior", "senior"]
status: "active"
started: "2026-10-19"
last_commit: "2026-10-19"
commits: 3
built_by: "Linda"
tags: ["meetups", "data", "github-actions", "community"]
---

The data repo for the AWS User Group Vienna meetups. Each meetup has a folder under `events/` with a `source.json` (the Meetup link and optional overrides) and the generated `event.json` and `meetup.json`. Shared folders hold the group's badges, community photos, photos of people in `people/` and logos in `logos/`.

{{< junior >}}
- First commit today, with folders for past meetups back to April 2025 and the one coming on 20 October 2026.
- `make new URL="..."` turns a Meetup link into a folder and syncs it. That is the whole input.
- Overrides win over Meetup and Sessionize, so I can fix a missing photo or logo without editing generated files.
- I kept a `legacy/` folder with what was worth keeping from the first attempt at these tools, with a note on where each file could go.
- Saved Meetup pages are never committed, because a page saved from a logged-in browser can carry session data.
{{< /junior >}}

{{< senior >}}
Three commits on 19 October 2026 and a workflow that updates the meetups every Monday and Friday, so this repo will show bot activity even when nobody touches it. The README is clear about what is generated and what to edit. No licence. The README asks that photos and logos are added only with the owner's consent; that rule matters more here than any code. Risk: `legacy/` is a parking spot, and parking spots tend to stay forever. It needs a date to be emptied.
{{< /senior >}}

**Learned:** Write down which files are generated and which are hand-edited, in the README, before the first contributor asks.
