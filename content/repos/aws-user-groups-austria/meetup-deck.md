---
title: "meetup-deck"
date: 2026-10-19T12:00:00+02:00
draft: false
description: "A Python tool that fills in the group's own slide deck for one meetup from its event.json, as .pptx and PDF."
repo: "aws-user-groups-austria/meetup-deck"
voices: ["junior", "senior"]
status: "active"
started: "2026-10-19"
last_commit: "2026-10-19"
commits: 2
built_by: "Linda"
tags: ["python", "python-pptx", "slides", "meetups"]
---

A small Python package that takes the deck the organizers already present from, exported from Google Slides as `.pptx`, and fills it in for one meetup: the meetup number, the header image, the sponsor slides, a new agenda, one slide per talk and the closing with a feedback QR code.

{{< junior >}}
- First commit today, using `python-pptx`, `pillow` and `segno` for the QR codes, run with `uv`.
- The decision I like most: slides are found by what they say, not by their position. The template can keep changing and the tool still finds the welcome or the shoutout slide.
- New slides are built in the deck's own design, so they stay editable in Google Slides. Only the talks are pictures.
- The second commit made every agenda row the same height and shortened sponsor names.
- Skipped: the template itself. It holds organizer contacts and is never committed.
{{< /junior >}}

{{< senior >}}
Two commits on 19 October 2026, pytest tests in `tests/`, a `uv.lock`, and a README that explains each slide it touches. Because the template is private, a stranger cannot run this end to end, and the README says so honestly. No licence and no CI. The deck is still made on an organizer's laptop, and the PDF comes from PowerPoint, so this step stays manual by design.
{{< /senior >}}

**Learned:** Find slides by their content, not their index, when the template belongs to someone else.
