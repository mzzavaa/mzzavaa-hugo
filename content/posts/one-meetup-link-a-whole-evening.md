---
title: "One Meetup Link, a Whole Evening: How Our Community Automated the Boring Parts"
date: 2026-11-13T18:00:00+01:00
draft: false
description: "A room screen that follows the clock, meetup pages with a clickable agenda, a live header, slide decks that fill themselves in and pages that update twice a week. What changed for the AWS community in Austria this autumn, and what we learned."
tags: ["community", "aws", "meetups", "automation", "open-source", "retrospectives"]
categories: ["community"]
voices: ["junior", "senior"]
author: "Linda Mohamed"
image: "images/community/room-screen-preshow.jpg"
---

{{< senior >}}
Some background first. The AWS User Group Vienna has met for more than seven years, run by volunteers. For most of that time every evening was put together by hand: the slide deck, the screen in the room, the event page, the reminders. This autumn most of that changed in one go. Junior tells you what she built. Then I go through what it changed, and what is still open.
{{< /senior >}}

## Part 1: Junior's tour of the evening

{{< junior >}}
Picture a meetup night. Doors open at five, people trickle in, someone looks for the toilets and someone else looks for the vegan food. Every piece below exists for one of those moments.
{{< /junior >}}

### It all starts with one link

Every meetup now begins as a single Meetup event link. That link becomes a folder in our [meetup data repo](/repos/aws-user-groups-austria/meetup-event-vienna/). From there the evening fills itself in: the talks and abstracts from Sessionize, and the date, venue and host from Meetup. Anything those two get wrong, like a missing photo or an outdated logo, gets fixed in a small override file. The override always wins, so nobody has to edit generated files by hand.

Every Monday and Friday morning a scheduled job pulls the latest from both sources and rebuilds everything downstream. The first time it ran on its own, nobody had to do anything. That was a good morning.

### The room screen follows the clock

![The room screen before the talks: date, meetup number, host, venue and a countdown to the first talk](/images/community/room-screen-preshow.jpg)

This is my favourite part. The screen at the venue is no longer a slide someone has to remember to click. It is a [player that runs the whole evening by the clock](/repos/aws-user-groups-austria/meetup-stream-templates/):

- **While doors are open** it loops: the evening at a glance, the agenda, who we are, a thank-you to the sponsor, our member badges, the next community day, and a QR code to the event page.
- **At the welcome** it shows the photo collage, then the team, our user groups, the badges and the code of conduct, one minute each.
- **For every talk** it does the handover: who is speaking next and what about. Once the talk has started it switches to a calm "now speaking" screen.
- **In the break** a big countdown tells everyone when the next talk starts.
- **At the end** it thanks the host and keeps "open until 22:00" on screen for the people who stay.

The top right corner always tells the room what it is waiting for: "Talks start in", "Break in", "Talk 2 in". Along the bottom, a chapter bar shows where the evening is right now.

The host can still take over. A normal presentation clicker steps forward and back. One key says "we are running a minute late" and moves the rest of the evening with it, and another puts it back. Step ahead of the clock and the screen waits until the clock catches up, then carries on by itself.

{{< junior >}}
And it has a rehearsal mode! You can play the evening at any time of day, even at ten times speed, to check how the end of talk one hands over to the break. I may have watched our break countdown about forty times.
{{< /junior >}}

It works without a server too. The whole player is a folder of files, so it runs from the website or from a USB stick. And because room wifi should never be trusted, it tries again by itself when it loses the connection.

### Every meetup gets its own page, with a clickable agenda

On [awscommunity.at](https://awscommunity.at) every meetup, past and coming, now has its own page: date and time, the venue with a map link, the host's logo, the talks with speaker photos and abstracts, the slide deck as a PDF afterwards, and the agenda.

![The agenda on a meetup page: every line has a time and opens a details dialog](/images/community/clickable-agenda.jpg)

Every line on the agenda opens. That is where the small, human things live, the ones that usually only get said at the door:

- **Doors open** tells you to get a drink and say hi, and explains how to join a group (more on that below). It also has the code of conduct in plain words: *"But, it's just a joke!": if you have to say it, it probably wasn't.*
- **The welcome** shows a card for each user group leader with their role, our user groups across Austria, and what the badges mean, so a first-timer knows who to ask.
- **The break** says there is food for everyone, with meat or fish, vegetarian and vegan, and that you can ask any leader if you cannot find something you can eat.
- **Networking at the end** thanks the host for the room, the food and the drinks, asks for feedback, and invites you to speak or host next time.

![Stand like Pac-Man: leave a gap in your circle so anyone can join the conversation](/images/community/pac-man-rule.jpg)

{{< junior >}}
The Pac-Man rule is my favourite sentence on the whole site. When you stand in a group, leave a gap, like Pac-Man's open mouth, so anyone can walk in. On your own? Look for a gap. You are welcome. It's an old community trick, and now every first-timer reads it before they arrive.
{{< /junior >}}

### The live header: the room screen, on the web

At the top of each meetup page sits a small live version of the room screen. Before the evening it tours the screens: the event card, the agenda, the sponsor, the talks, our coming community days and the hosts who have had us. During the evening it switches to "Live now" and follows the clock exactly like the screen in the room. A Fullscreen button turns any laptop into a room screen. On a phone that cannot show part of a page fullscreen, it opens the loop in its own tab instead.

So whether you are in the room, on the way there, or deciding whether to come, you see the same evening.

### The slide deck fills itself in

Organizers still present from the group's own slide deck, the one we have kept improving for years. A [small tool](/repos/aws-user-groups-austria/meetup-deck/) now fills it in for each meetup from the same data: the meetup number, the agenda, one slide per talk, the sponsor slides, and a feedback QR code at the end. It finds slides by what they say, not by where they sit, so the template can keep changing. The last step, exporting the PDF, still happens on an organizer's laptop. That is on purpose.

### The small things

- **Faster pictures.** Some images were far bigger than they needed to be, like a 700 KB photo shown as a 52 px circle, or a logo 6400 px wide. Every picture is now about twice its size on screen, and the dialogs load theirs as soon as they open.
- **A team mailbox.** Contact goes to the community's shared address now, not to one person's inbox.
- **The prep guide for hosts and speakers** was rebuilt with examples and a fresh PDF.
- **33 automated checks** walk through the site in a headless browser, one command before a release.
- **A save-the-date** for the next Vienna meetup is already up, the week before re:Invent, before the exact day is fixed.

{{< junior >}}
Meetup #53 on 20 October was the first evening where the page, the deck and the room screen all came from the same event file. Phew!
{{< /junior >}}

## Part 2: Senior's review

{{< senior >}}
Same format as always: three things that went well, three to watch, one change.
{{< /senior >}}

### Three things that went well

1. **One source of truth.** The page, the screen, the live header and the deck all read the same event file. If a talk title changes, it changes everywhere. Before this, the same fact lived in four places and was out of date in at least one of them. That is the real win, more than any single screen.
2. **The automation serves people, not the other way round.** The parts that took the most care are not technical at all: the Pac-Man rule, the food note, the code of conduct in plain words, a thank-you to the host. A first-timer reads them before they walk in. Tooling that makes a community *kinder* at the door is worth more than tooling that only makes it faster.
3. **Honest about manual steps.** The deck's PDF is made on a laptop, the template stays private, and the README says both. Nothing pretends to be more automatic than it is. That honesty is what makes the automated parts trustworthy.

### Three things to watch

1. **Bot commits are not human work.** About 200 of the website's commits come from the scheduled job. That is the site working, and it is good, but the people behind it should not disappear in the log. Count them separately, or a busy history hides how often humans touch the site.
2. **Licences and CI.** The tools invite other user groups to reuse them, and most still have no licence file. The room screen has a real test suite and a check that runs it at simulated times of the evening, but no CI runs those tests yet, and the same goes for the 33 website checks.
3. **Consent first, always.** Speaker photos, member photos and company logos are part of every screen. The rule that they are only added with the owner's consent matters more than any line of code here. It has to stay a rule, not become a habit someone forgets.

### The one change

**Before the next meetup, every tool that says "reuse this" gets a licence, and the room screen's tests run on every change.** Then this stops being our setup and becomes something the next user group can safely pick up.

{{< junior >}}
And if you run a user group somewhere and want this for your evenings, come and talk to us at the next meetup. Look for the gap in the circle!
{{< /junior >}}
