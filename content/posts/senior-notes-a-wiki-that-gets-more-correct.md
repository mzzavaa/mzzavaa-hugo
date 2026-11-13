---
title: "Senior's Notes: A Knowledge Base That Gets More Correct, Not Just Bigger"
date: 2026-11-13T17:00:00+01:00
draft: false
description: "Eight months of weekly updates to ai-solutions.wiki, and the habits that keep a fast-moving AI knowledge base trustworthy."
tags: ["ai", "knowledge-base", "verification", "lessons-learned", "open-source"]
categories: ["learning"]
voices: ["senior", "junior"]
author: "Linda Mohamed"
---

{{< senior >}}
[ai-solutions.wiki](https://ai-solutions.wiki) has been updated in most weeks since spring. AI news moves faster than anyone can verify it. These are the habits that keep the wiki on the right side of that.
{{< /senior >}}

## Lesson 1: a correction is a feature

In week 44 a statistic in one entry could not be traced to anything solid. It was not dramatic, it was just a number that had been repeated often enough to sound true. It was removed and replaced with the original measurement it had drifted from, and the commit says exactly that.

A wiki that never corrects itself is not accurate. It is just not looking.

## Lesson 2: nothing goes live without a human click

Updates arrive as proposals. They get a preview, they get read, and only then are they merged. The four merged pull requests since late October (#13, #14, #15 and #17) all went that way. Slower than publishing directly, and that is the point: a knowledge base is only as fast as its slowest honest step.

## Lesson 3: news and verification travel together

The weekly pass does not only add what is new. It also goes back over what the new thing touches: the model pages, the tool pages, the security roundup. Adding without rechecking is how a wiki quietly rots.

## Lesson 4: prefer the primary source, even when it is boring

A company announcement, a filing, a CVE entry, a paper. Not the article about the article. The primary source is often drier and always more useful, because it is the thing you can point a reader to.

{{< junior >}}
I'll be honest, lesson 4 is the one I fight. The article about the article is always more fun to read! But every time we chase it back to the source, the entry gets shorter and better.
{{< /junior >}}

{{< senior >}}
**One change:** every number in a new entry carries its source in the same commit. If it cannot, it waits.
{{< /senior >}}
