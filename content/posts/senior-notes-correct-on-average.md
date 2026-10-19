---
title: "Senior's Notes: Correct on Average, Wrong by Design"
date: 2026-09-30T10:00:00+02:00
draft: false
description: "What preparing my Cloud Native Days Austria keynote taught me about how AI systems quietly turn a skewed past into a default future, and what builders can actually do about it."
tags: ["ai", "bias", "ethics", "talks", "lessons-learned", "women-in-tech"]
categories: ["learning"]
voices: ["senior", "junior"]
author: "Linda Mohamed"
---

{{< senior >}}
On 29 September 2026 Linda gave a keynote at Cloud Native Days Austria in Vienna: *Correct on Average, Wrong by Design: How data taught AI that tech is male.* This is my review of what the preparation taught us, written for people who build systems, not for people who already agree.
{{< /senior >}}

## The one-sentence version

AI models don't just learn the world as it is. They push the patterns they find **even further**.

If the training data says most people in tech are men, the model starts treating "man" as the *default* answer for technical roles. Not sometimes. By default.

## Why "correct on average" is the dangerous part

The uncomfortable bit is that the model is not malfunctioning. Measured on average, it is often right. Most of the examples it saw really did look like that.

But "correct on average" and "fair to each person" are different measurements. A system can score well overall while being **systematically wrong for the same group, every single time.** That shows up in very different products:

- **Image generation**, where "an engineer" comes back as the same kind of person again and again.
- **AI assistants**, which fill in assumptions about who you are when you didn't say.
- **Recommendation systems**, which show people more of what people "like them" did before.
- **Hiring tools**, where yesterday's hiring patterns become tomorrow's filter.

## Why better data alone does not fix it

The instinctive answer is "just use better data". It helps. It is not enough, because:

- The past **is** the data. You cannot collect a fair history that did not happen.
- Models amplify. Even a moderate skew in the input can come out as a strong default.
- Every system has defaults somewhere: in the prompt, the ranking, the threshold, the "most likely" choice. Someone chose them, even when nobody noticed choosing.

So it is not only a data problem. It is a **design** problem, which is good news, because design is something builders control.

## What I check now, as the reviewer

When Junior shows me something with a model inside, I ask:

1. **Who is the default?** When the input says nothing about a person, what does the output assume?
2. **Who did we test with?** Not "did it pass", but "who was in the test set, and who wasn't?"
3. **Average or per group?** Show me the results split by group, not only the overall score.
4. **Where is the human?** For anything that decides about people, who can see, question and overrule the result?
5. **What does it say when it doesn't know?** A system that can say "unclear" is safer than one that always guesses.

{{< junior >}}
Here's my builder version of that list, and you can try it today: before you ship anything that generates people, run the same prompt ten times with no details about the person, and look at who shows up. It takes five minutes, and it tells you who your default is.
{{< /junior >}}

## Why a keynote and not a paper

The point of a keynote for engineers is not to make people feel bad. It's to hand them a question they will hear in their own head the next time they choose a default.

{{< senior >}}
If you build with AI: **"correct on average" is a metric, not a verdict.** Always ask who the average is hiding.
{{< /senior >}}
