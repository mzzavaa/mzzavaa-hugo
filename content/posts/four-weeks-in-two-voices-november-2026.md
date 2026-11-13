---
title: "Four Weeks in Two Voices: What Shipped Since October"
date: 2026-11-13T12:00:00+01:00
draft: false
description: "Junior lists what landed in the public repos between 19 October and 13 November 2026. Senior reviews it: what went well, what to watch, one change."
tags: ["retrospectives", "open-source", "community", "aws", "ai"]
categories: ["reflections"]
voices: ["junior", "senior"]
author: "Linda Mohamed"
---

{{< senior >}}
In the [year in review](/posts/a-year-in-two-voices/) I promised that every milestone ends with one public artifact here. This is the first follow-up. Same format: Junior lists, I review. Only public repos, and every number comes from the git history.
{{< /senior >}}

## Part 1: Junior's shipping list

{{< junior >}}
Okay! Four weeks, a lot of small things that add up. Here's what landed.
{{< /junior >}}

### ai-solutions.wiki

- **Two weekly news passes** (weeks 43 and 44) and a same-day entry on 12 November, each as a pull request I reviewed before it went live. Pull requests #13, #14, #15 and #17.
- **New tool pages** for Amazon CloudFront, Auth0, Azure Front Door and Cloudflare, with five new identity icons.
- **An agent security roundup** with new CVEs, plus glossary terms and verification passes on recent model launches.
- 222 commits now. [The repo note](/repos/linda-mhmd/ai-solutions-wiki/) has the details.

### awscommunity.at and the meetup tools

- **The meetup loop can go fullscreen**, so the same page works as the screen in the room.
- **Pictures load at once and are smaller**, in the website dialogs and in the [meetup data](/repos/aws-user-groups-austria/meetup-event-vienna/).
- **A team mailbox** for contact, with community addresses instead of personal ones.
- **The meetup pages rebuild themselves every Monday and Friday.** The bot has already done it on its own.
- **A save-the-date for the next Vienna meetup**, the week before re:Invent, and event cards that can say "save the date" before the day is fixed.
- **The room screen moved to zod 4**, a week after its first commit, with the tests already in place. [Room screen note](/repos/aws-user-groups-austria/meetup-stream-templates/).

### This site

- **One Writing page** with every post, a calmer phone header, View all buttons, SVG icons instead of arrow characters, and fingerprinted assets so you always see the current design.
- **An About page** that tells one clear story.
- **Repo notes** for [this site](/repos/mzzavaa/mzzavaa-hugo/) and for [incredible-consulting.com](/repos/mzzavaa/incredible-consulting-com/).

### Hygiene, everywhere

- On 25 October I added the same ignore rules for local secrets, keys and caches to every repo I touch, in one sweep, and removed unused media that carried embedded metadata.

{{< junior >}}
Not glamorous. But I really like that sweep. Ten minutes, and now nobody can accidentally commit a key in any of them.
{{< /junior >}}

### Security week

- On 21 October Node.js and PHP both shipped urgent security fixes. Our builds picked up the patched Node on their own, the dependencies were updated in the same sweep, and PHP2Shell had nothing to reach, because none of our sites run PHP. Senior wrote it up: [The Week Node.js and PHP Both Shipped Security Fixes](/posts/senior-notes-node-and-php-october-2026/).

### Videos from our own pipeline

- **A run of new YouTube videos**, all made with the AI video pipeline I explained in [What Is Actually Under the App](/posts/junior-basics-whats-under-the-app/). Each one is embedded in its post on the [blog at lindamohamed.com](https://www.lindamohamed.com/blog). Same pipeline, more output, a lot less editing by hand.
- **The garden is already growing.** The beginner video is still in the making, but the [Gardener Path](https://ai-solutions.wiki/learn/gardener/) and the [Garden Lens](https://ai-solutions.wiki/learn/garden-lens/) on the wiki are a free preview of it. More in [the teaser](/posts/teaser-a-garden-that-explains-the-cloud/).

### On stage and in the community

- **AWS Community Day Adria** in Ljubljana on 22 October, with a talk.
- **Platform Engineering Vienna**, the meetup I organise, met on 4 November.
- **Cloud Native Vienna** on 12 November: a shared session called *Your Agent Is the New Layer 8*. The [talk page](https://www.lindamohamed.com/cloud-native-meetup-vienna) is live.
- **The next AWS meetup in Vienna** is set for the week before re:Invent. The full story of how our meetup evenings run themselves now is in [One Meetup Link, a Whole Evening](/posts/one-meetup-link-a-whole-evening/), including what comes next: a live stream page and name tags printed by our own iOS and Mac app.

## Part 2: Senior's review

{{< senior >}}
Three things that went well, two to watch, one change. Short, because the period was short.
{{< /senior >}}

### Three things that went well

1. **Small pull requests with honest titles.** On the community website, every human change since 19 October is one pull request that does one thing: fullscreen loop, reliable images, team mailbox, next meetup. A reviewer can read the history like a changelog.
2. **The wiki got more correct, not just bigger.** Week 44 replaced a statistic that could not be traced with the primary measurement it came from. Verification passes now ride along with the news in the same pull request. That is the habit that keeps a knowledge base trustworthy.
3. **Security hygiene happened before it was needed.** Ignore rules for secrets in every repo, unused media with metadata removed, a pinned Hugo version checked against its checksum. None of it is visible to a visitor, which is the point.

### Two things to watch

1. **Licences.** Several of the meetup tools invite reuse in their README, and most still have no licence file. One afternoon fixes that for all of them.
2. **Tests that run only on a laptop.** The room screen has a real test suite and a headless browser check. CI does not run them yet. Tests nobody runs automatically are a promise, not a guarantee.

### The one change

**Every repo that says "reuse this" gets a licence and CI before the next meetup.** Junior can do the sweep. I will check it.

{{< junior >}}
Deal. Same sweep as the ignore files, I've got the list already. See you at the next meetup!
{{< /junior >}}
