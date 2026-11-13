---
title: "meetup-stream-templates"
date: 2026-10-25T12:00:00+02:00
draft: false
description: "The meetup room screen: Remotion scenes for every part of the evening and a web player that runs them by the clock."
repo: "aws-user-groups-austria/meetup-stream-templates"
voices: ["junior", "senior"]
status: "active"
started: "2026-10-19"
last_commit: "2026-10-25"
commits: 3
built_by: "Linda"
tags: ["remotion", "react", "meetups", "typescript"]
---

The screen that runs in the room during an AWS User Group Vienna meetup. Remotion scenes cover the pre-show loop, welcome, sponsor and speaker handovers, the break countdown and the closing, and `web-player/` plays them by the clock. The same player is the live header on each meetup page of awscommunity.at.

{{< junior >}}
- First commit today. Every scene reads one `event.json`, so the screen knows nothing about Meetup itself.
- Decision: one theme file. `src/theme.ts` holds every font size, colour and spacing, and a test fails if a scene uses a literal value instead. Strict, but it kept the screens consistent.
- The player follows the clock on its own, and the host can step with a clicker or nudge the rest of the evening a minute.
- I added a stress sample with made-up people and very long names, only for checking layouts.
- Second commit: the player retries the event file after a network error. Room wifi is not to be trusted.
- Update, 25 October: moved the scenes and the web player to zod 4, the schema library that checks every `event.json`, and ignored local secret and cache files.
{{< /junior >}}

{{< senior >}}
Three commits, the last on 25 October 2026, and already a real test suite next to the code: clock, countdown, theme, model and more. A major dependency upgrade a week after the first commit, with tests already in place to catch what it might break, is the cheap time to do it. `make player-check` runs the built player in headless Chrome at simulated times, the right test for something that must work unattended at 18:00. Next steps: run those tests in CI, and add a licence.
{{< /senior >}}

**Learned:** For a screen that runs by the clock, test it at simulated times, not just at the time you happen to be coding.
