---
title: "jugglinglab"
date: 2026-07-23T12:00:00+02:00
draft: false
description: "My fork of Juggling Lab, Jack Boyce's juggling animator, where I added selectable juggler avatars including a female juggler."
repo: "mzzavaa/jugglinglab"
voices: ["junior", "senior"]
status: "finished"
started: "2026-07-22"
last_commit: "2026-07-23"
commits: 6
built_by: "Jack Boyce and contributors; Linda's six commits are on the female-avatar branch"
tags: ["juggling", "open-source", "contribution"]
---

[Juggling Lab](https://jugglinglab.org) is the juggling pattern animator that Jack Boyce has built since 2011. This is my fork. My contribution is six commits on the `female-avatar` branch; everything else is Jack's and the other contributors' work.

{{< junior >}}
Juggling Lab had one juggler figure, and it was male. Over two days in July I:
- refactored how a juggler is drawn into a small hierarchy of avatars you can switch,
- added a selectable female juggler,
- fixed the arms disappearing behind the dress when they cross,
- let every juggler in a passing pattern have their own avatar,
- renamed the old "male" avatar to "default", because it is the default,
- and made avatars hide each other by their real outline instead of a box.
{{< /junior >}}

{{< senior >}}
Six commits over 22 and 23 July 2026, on a branch in the fork, not merged into Jack's project. That is a complete piece of work, so I call it finished. The fair next step is to offer it upstream, so the change reaches the people who use Juggling Lab and not only my blog images.
{{< /senior >}}

**Learned:** Contributing to a 15-year-old codebase starts with reading how it draws one thing before changing how it draws anything.
