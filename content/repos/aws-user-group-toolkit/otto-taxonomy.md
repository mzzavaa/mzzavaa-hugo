---
title: "otto-taxonomy"
date: 2025-05-06T12:00:00+02:00
draft: false
description: "An InstructLab taxonomy of Q&A pairs and context documents about AWS User Groups in Austria and how meetups are organised, made for OTTO."
repo: "aws-user-group-toolkit/otto-taxonomy"
voices: ["junior", "senior"]
status: "quiet"
started: "2024-06-30"
last_commit: "2025-05-06"
commits: 62
built_by: "Linda, with Philipp Bergsmann"
tags: ["instructlab", "ai-agents", "knowledge-base", "otto"]
image: "images/Folie70.png"
---

The knowledge base behind [OTTO](/posts/building-otto/), the event-planning agent idea. It is an InstructLab taxonomy: markdown documents plus `qna.yaml` seed files about the AWS community programmes, the Vienna, Vienna Women's and Linz user groups, personas like first-timer, speaker and host, meetup formats from Stammtisch to GameDay, and event planning.

{{< junior >}}
This one is mostly mine. We started it on one day in June 2024, me writing Q&A files and Philipp Bergsmann fixing line lengths and trailing spaces so the InstructLab checks would pass. In February 2025 I came back and added much more detail, because the model was filling gaps by making things up. Then I split the user groups into Vienna, Vienna Women's and Linz. One commit message says "potentially super buggy, sorry for pushing already". Honest, at least.
{{< /junior >}}

{{< senior >}}
62 commits, last one May 2025, quiet since. The README explains InstructLab well, but its directory overview lists folders like `personas/` and `logistics/` that do not match the real tree any more. The seed files still say `created_by: your_github_username`. There is no licence, which matters for a dataset people might train on. The bigger risk: several documents contain personal contact details of the organisers. A training dataset is the worst place for those, because they end up in model answers. Remove them and point to a public contact page instead.
{{< /senior >}}

**Learned:** Anything in a training set can come back out of the model, so keep it to facts you would print on a flyer.
