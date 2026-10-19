---
title: "meetup-sync"
date: 2026-10-19T12:00:00+02:00
draft: false
description: "A Node and TypeScript command line that turns a Meetup event page into the event.json the room screen, deck and website run on."
repo: "aws-user-groups-austria/meetup-sync"
voices: ["junior", "senior"]
status: "active"
started: "2026-10-19"
last_commit: "2026-10-19"
commits: 1
built_by: "Linda"
tags: ["typescript", "nodejs", "meetups", "cli"]
---

The command line at the start of the meetup tools. Give it a Meetup event link or a saved page, and it writes `event.json` (version 1): the agenda with times, the talks and speakers, sponsors, notices and links. Sessionize can fill gaps, and hand-written overrides win over both.

{{< junior >}}
- One commit today. Node 24 runs the TypeScript directly, so there is no build step.
- It reads two things from the page and nothing else: the JSON-LD `Event` and the description markdown. The agenda comes from lines like `18:10 - 18:50: "Title"`.
- A field the page does not have stays absent. Nothing is invented, which matters when the output ends up on a projector.
- Talks are matched to Sessionize by title and speakers by name, ignoring accents and case, and every miss is a warning.
- Only one runtime dependency: `zod` for the schema.
{{< /junior >}}

{{< senior >}}
One commit on 19 October 2026 with a broad test suite: agenda, archive, merge, people, Sessionize, text and a fixture test against a saved real Meetup page. That fixture is the right call: parsing someone else's HTML breaks when they change it, and a saved page makes the break visible. No CI and no licence.
{{< /senior >}}

**Learned:** A scraper is only as good as the saved page it is tested against, so refresh the fixture now and then.
