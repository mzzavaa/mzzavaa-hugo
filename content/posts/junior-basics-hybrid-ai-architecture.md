---
title: "Junior's Basics: Hybrid AI Architecture Without the Jargon"
date: 2026-10-19T09:00:00+02:00
draft: false
description: "Where does AI actually run, what does it cost, and how do you draw it? The basics I gave students at FH St. Pölten, written down for everyone who was not in the room."
tags: ["basics", "ai", "architecture", "cloud", "aws", "students"]
categories: ["learning"]
voices: ["junior"]
author: "Linda Mohamed"
---

{{< junior >}}
On 30 September 2026 I opened the evening for the AWS Student Builder Group at FH St. Pölten. The room was students, no cloud experience assumed, laptops out. I had 30 minutes for a talk called *Hybrid AI Architecture: The Basics*. This post is that talk, minus the slides, plus the bits I wanted to say and ran out of time for.
{{< /junior >}}

## 1. The model is the smallest decision you will make

Everyone wants to talk about which model is best. That is the fun question, and it is the least important one.

The bigger questions are: **where does it run, who looks after it, and who pays for it while nobody is using it?** You can swap a model in an afternoon. You cannot swap where your data lives in an afternoon.

## 2. Where AI runs: one job, four ways

Take a boring, real job: reading ten thousand invoices and pulling out the total, the date and the sender. You can solve it at four different depths:

1. **Use a finished product.** Someone else's app does it. You upload, you get results. Least work, least control.
2. **Call a managed model.** You write a little code that sends each invoice to a model through a cloud API. The provider runs the model, you run the glue.
3. **Run a model on rented machines.** You pick an open model and run it on cloud servers you rent. More control, more things to look after.
4. **Run it on your own hardware.** Your machines, your room, your electricity bill. Maximum control, and every problem is yours.

The tools people know by name, the chat assistants and coding assistants, mostly live at the top: finished products built on managed models.

{{< senior >}}
The trap at this layer is moving down because it sounds more serious. Every step down hands you more jobs: patching, scaling, monitoring, security, upgrades. Before you go a layer deeper, list who will do those jobs on a Sunday.
{{< /senior >}}

## 3. What it costs: a machine you bought is paid for every second it exists

This is the sentence I want every student to remember.

A managed service charges you **when you use it**. A machine you own or rent full-time costs you **whether you use it or not**. So the real question is not "which is cheaper", it is "how busy will it be?"

- Busy all day, every day, predictable load? Owning can win.
- Spiky, experimental, or mostly idle? Paying per use almost always wins.

The point where the two lines cross is called the **break-even**. Find out your real usage first. Most early projects are far more idle than their builders think.

## 4. How to draw an architecture: two boxes and a line

You do not need a fancy diagram tool. The simplest honest architecture drawing is:

```
[ where the data comes from ] ──────▶ [ where the AI does its work ]
```

Two boxes, one line, and a label on the line saying **what travels along it**. Then add only what you need to explain the next question someone asks. If you cannot draw your system as two boxes first, adding more boxes will not help.

My five steps for drawing yours:

1. Draw the input and the output.
2. Draw the one line between them and label it.
3. Ask "where does this run?" and write it under each box.
4. Ask "who looks after this?" and write that too.
5. Stop. Add detail only when someone asks a question the drawing cannot answer.

## 5. What "hybrid" actually means

Hybrid sounds complicated. It is not. It means **one system where some parts run in one place and other parts run somewhere else**, with a line between them.

The important part is not the line. It is the **reason the line is where it is**. Good reasons sound like:

- "This data is not allowed to leave the building."
- "This step needs an answer in milliseconds, so it runs next to the user."
- "This part runs all day at full load, so owning the hardware pays off."
- "This part is spiky, so it stays pay-per-use."

If you cannot say the reason out loud, you probably do not need hybrid yet.

## 6. Three systems, three different answers

In the talk I closed with three real systems I worked on this year: **a video pipeline, an event assistant and a geospatial platform.** Put side by side, they landed in three different places:

- one **stayed managed**,
- one **moved half a layer down**,
- and one **had no choice**, because its constraints drew the line before anyone could debate it.

Same builder, same skills, three different shapes. That is the whole point: there is no "best" architecture, only one that fits the reasons you can name.

{{< junior >}}
**Try this tonight:** pick an app you use every day and draw it as two boxes and a line. Then write under each box where you think it runs. You just did your first architecture review.

Want more? [ai-solutions.wiki](https://ai-solutions.wiki) is the open companion read I keep adding to.
{{< /junior >}}
