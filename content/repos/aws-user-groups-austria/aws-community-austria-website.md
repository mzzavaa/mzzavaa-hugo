---
title: "aws-community-austria-website"
date: 2026-11-11T12:00:00+01:00
draft: false
description: "The source of awscommunity.at: the Austrian AWS user groups, a page per meetup, the speaker prep guide and the room screen."
repo: "aws-user-groups-austria/aws-community-austria-website"
project: "awscommunity-at"
voices: ["junior", "senior"]
status: "active"
started: "2026-03-24"
last_commit: "2026-11-11"
commits: 236
built_by: "Linda"
tags: ["website", "react", "vite", "github-pages"]
---

The website at awscommunity.at, the home of all AWS user groups in Austria. A Vite, React and TypeScript site on GitHub Pages with group pages, a page for every past and coming meetup, a prep guide for hosts, and the room screen served under `/present/`.

{{< junior >}}
- I started it on 24 March with the logo and a fix for a white border, then a burst of pages on 5 April: team, prep guide, community days, cloud clubs.
- Today it got the meetup pages, the live header and the published slide decks, merged as five pull requests.
- The meetup descriptions are rendered by a tiny markdown reader that builds React elements, never HTML strings, and keeps only http(s) and mailto links. I liked that one.
- The README opens with "fork and deploy in 5 steps", so other user groups can reuse it.
- Update, November: the meetup loop can go fullscreen, images in the dialogs load at once and are smaller, contact moved to a team mailbox with community addresses, and the home page already has a save-the-date card for the next Vienna meetup, the week before re:Invent.
- Event cards got an optional date label, so a meetup can be announced before the exact day is fixed.
{{< /junior >}}

{{< senior >}}
236 commits, and about 200 of them are the meetup bot. That is the site working, not people working, and it is good to know the difference. The human work since 19 October came in as small, named pull requests: fullscreen loop, reliable images, team mailbox, scheduled updates, the next meetup. Each one does one thing and says so in its title. Three workflows: deploy, a daily event fetch, and a Monday and Friday rebuild of the meetup pages. Local secret and cache files are now ignored by default. Still open: a licence file, since the README invites forks.
{{< /senior >}}

**Learned:** Count the bot commits separately, or a busy log hides how often humans touch the site.
