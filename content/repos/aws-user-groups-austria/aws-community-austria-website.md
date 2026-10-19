---
title: "aws-community-austria-website"
date: 2026-10-19T12:00:00+02:00
draft: false
description: "The source of awscommunity.at: the Austrian AWS user groups, a page per meetup, the speaker prep guide and the room screen."
repo: "aws-user-groups-austria/aws-community-austria-website"
voices: ["junior", "senior"]
status: "active"
started: "2026-03-24"
last_commit: "2026-10-19"
commits: 226
built_by: "Linda"
tags: ["website", "react", "vite", "github-pages"]
---

The website at awscommunity.at, the home of all AWS user groups in Austria. A Vite, React and TypeScript site on GitHub Pages with group pages, a page for every past and coming meetup, a prep guide for hosts, and the room screen served under `/present/`.

{{< junior >}}
- I started it on 24 March with the logo and a fix for a white border, then a burst of pages on 5 April: team, prep guide, community days, cloud clubs.
- Today it got the meetup pages, the live header and the published slide decks, merged as five pull requests.
- The meetup descriptions are rendered by a tiny markdown reader that builds React elements, never HTML strings, and keeps only http(s) and mailto links. I liked that one.
- The README opens with "fork and deploy in 5 steps", so other user groups can reuse it.
{{< /junior >}}

{{< senior >}}
226 commits, but 197 of them are the daily "update meetup events" bot. That is the site working, not people working, and it is good to know the difference. Linda's own commits come in three bursts: March, April and 19 October. Three workflows: deploy, a daily event fetch, and a Monday and Friday rebuild of the meetup pages. The README is long and current. There is no licence file, yet the README invites forks.
{{< /senior >}}

**Learned:** Count the bot commits separately, or a busy log hides how often humans touch the site.
