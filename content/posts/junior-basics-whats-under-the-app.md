---
title: "Junior's Basics: What Is Actually Under the App?"
date: 2026-10-19T10:00:00+02:00
draft: false
description: "Software, cloud and AI, each explained at the exact moment it shows up, using one real system I built: a pipeline that turns a raw video into something you can publish."
tags: ["basics", "cloud", "ai", "aws", "video", "beginners"]
categories: ["learning"]
voices: ["junior"]
author: "Linda Mohamed"
---

{{< junior >}}
People keep telling me they have "no idea" what software, cloud or AI really mean. I don't think definitions help much. So here's what I do instead: take one real, running system apart from the top down, and name each thing **at the moment it appears**.

The system is my AI video pipeline, the one I first wrote about in [Why I Built an AI Video Content Engine](/posts/video-content-automation-workflow/). It is small enough to see all of it, which is the only reason it is the example.
{{< /junior >}}

## Layer 0: what you see

You drop a video file somewhere. A little later, you get back a transcript, the interesting scenes, and a draft title, description and social posts.

That's the **surface**. Everything below it is what this post is about.

## Layer 1: a place to put things (storage)

The video lands in a **bucket**: storage in the cloud, a bit like a folder on a computer that lives in someone else's data centre and never runs out of space.

> **Cloud, the first time it appears:** using someone else's computers over the internet, paying for what you use, instead of buying and running your own.

## Layer 2: something notices (an event)

When the file arrives, the storage service sends out a small message: *"a new file is here."* Nobody is clicking a button. The arrival itself is the trigger.

This is called **event-driven**: things happen *because* something else happened.

## Layer 3: a list of steps (a workflow)

The message starts a **workflow**, a written-down list of steps with arrows between them: first do this, then that, and if this fails, try again. On AWS I use Step Functions for that. You can literally look at it as a picture.

> **Software, the first time it appears:** a precise list of instructions a computer follows, step by step, every time, without getting bored.

## Layer 4: the steps do one thing each

Each box in the workflow is one small job:

1. **Turn speech into text.** A transcription service listens to the audio and writes it down.
2. **Look at the pictures.** An image-analysis service finds scenes and what is in them.
3. **Write something new.** A language model reads the transcript and drafts titles, summaries and posts.
4. **Save everything** back into storage, so it can be reused.

> **AI, the first time it appears:** software that learned patterns from huge amounts of examples, so it can do things nobody wrote exact rules for, like recognising speech or writing a summary.

Notice where AI shows up: **in three boxes out of many**. Most of the system is plain, boring software moving files and keeping track of steps. That's normal, and it's good. The boring parts are what make the clever parts reliable.

## Layer 5: someone else's computers

Under all of those services are real machines in real buildings. I never see them, never patch them, never replace a broken disk. That is what I am paying for.

And because I only pay when a video goes through, an idle week costs me almost nothing. (Senior would want me to tell you that this is exactly the trade-off from [the hybrid basics post](/posts/junior-basics-hybrid-ai-architecture/).)

## You can see the pattern now

Almost every modern app you use is the same five moves:

1. Something arrives.
2. Something notices.
3. A list of steps starts.
4. Each step does one job, and a few of those jobs are "AI".
5. All of it runs on computers you never see.

{{< senior >}}
The honest counterweight, because every explainer needs one: building the pipeline was the easy part. Keeping it running, knowing when a step silently produced bad output, and deciding what to do with a wrong transcript is where the real work is. Junior's diagram is true. It is not the whole story.
{{< /senior >}}

{{< junior >}}
**Try this:** next time you upload a photo somewhere and it gets auto-tagged, say the five moves out loud. Arrives, noticed, steps start, one step is AI, runs somewhere you can't see. Congratulations, you just reverse-engineered an architecture.
{{< /junior >}}
