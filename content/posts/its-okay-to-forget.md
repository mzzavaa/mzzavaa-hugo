---
title: "It's Okay to Forget: Why You Don't Need to Remember Everything in Tech"
date: 2025-06-29
draft: false
description: "After more than a decade in tech and being an AWS Hero, I still Google git commands. Here's why that's perfectly fine and why cheat sheets are your friend, not your enemy."
tags: ["career", "learning", "productivity", "mindset", "community"]
categories: ["reflections"]
author: "Linda Mohamed"
image: "images/cheat-sheets.png"
---

# It's Okay to Forget: Why You Don't Need to Remember Everything in Tech

Let me start with a confession that might surprise you: I've been in tech for more than a decade, I'm an AWS Hero, I run the AWS User Group Vienna, and I *still* have to think about nearly every git command. I Google AWS policy syntax regularly. I keep a Linux cheat sheet bookmarked. And you know what? That's perfectly fine.

Just yesterday, while working on my AWS Community Dashboard, I found myself typing "git revert vs reset" into my search bar for probably the hundredth time in my career. And instead of feeling embarrassed, I felt... relieved. Because I've finally learned that this is normal, healthy, and actually makes me a better developer.

## The School Mindset vs. The Real World

Remember those computer science exams where you had to write code with pen and paper? Where forgetting a semicolon or mixing up syntax would cost you points? Where memorizing every detail was the difference between an A and a C?

**That's not how the real world works.**

In school, we were taught that memorization equals competence. That a "good" programmer should know every command, every syntax rule, every API method by heart. But this mindset is not just outdated—it's counterproductive.

When I started my career as a Java developer in Austria, I carried this academic baggage with me. I felt like I had to prove my worth by never looking anything up. I would spend precious mental energy trying to remember obscure method signatures instead of focusing on solving actual problems.

It took me years to realize that the senior developers I admired most were the ones who confidently said, "Let me check the documentation on that."

## The Complexity Reality Check

Let's be honest about what we're dealing with in 2025:

- **Git** has over 150 commands with countless flags and options
- **AWS** has 200+ services, each with their own APIs, policies, and configurations  
- **Linux** commands number in the thousands, with man pages that could fill libraries
- **Programming languages** evolve constantly, with new frameworks appearing monthly
- **Best practices** change as the industry learns and grows

The human brain simply wasn't designed to retain this level of detail across such a vast landscape. And that's okay.

When I'm working on community projects - whether it's updating the AWS Heroes data, configuring Hugo templates, or setting up CI/CD pipelines - I'm constantly switching between different technologies. Expecting myself to remember the exact syntax for every tool would be like expecting a chef to memorize every recipe in every cookbook ever written.

## What Actually Matters

Here's what I've learned separates good developers from great ones—it's not memory, it's:

### 1. Knowing What's Possible
Understanding that a solution exists is more valuable than remembering its exact implementation. When I know that git can rewrite history, I can look up `git rebase`. When I know AWS has a service for everything, I can research the right one for my community dashboard needs.

### 2. Knowing Where to Look
The skill isn't memorizing documentation—it's knowing which documentation to trust. Stack Overflow, official docs, GitHub repos, cheat sheets. Building a reliable toolkit of resources is infinitely more valuable than trying to memorize everything.

I have bookmarks organized by technology, a collection of trusted blogs, and yes, a folder full of cheat sheets. This isn't cheating—it's being professional.

### 3. Understanding Concepts Over Syntax
Grasping the underlying principles—how version control works, what cloud computing enables, why certain patterns exist—these concepts transfer across tools and technologies. Syntax is just the surface layer.

When I explain AWS to newcomers at our User Group meetings, I focus on concepts: "S3 is object storage," "Lambda runs code without servers," "CloudFormation manages infrastructure as code." The specific CLI commands and API calls? Those can be looked up.

## My Cheat Sheet Collection (And I'm Not Ashamed)

After 10+ years in tech and countless community projects, here are some of the cheat sheets I still use regularly:

- **Git commands** - Because who remembers the difference between `git reset --soft` and `git reset --hard`?
- **AWS CLI syntax** - Those parameter names are not intuitive, especially when you're switching between S3, EC2, and Lambda commands
- **Linux permissions** - Is it 755 or 644? Let me check... (It's usually 644 for files, 755 for directories, but I still look it up)
- **Docker commands** - Container management has too many flags to remember
- **Hugo templating** - The syntax for loops and conditionals in Go templates always trips me up
- **Regular expressions** - Even senior developers Google regex patterns

## The Efficiency Argument

Think about it this way: What's more efficient?

**Option A:** Spend hours memorizing every git command, only to forget half of them by next month, then spend more hours re-memorizing them.

**Option B:** Keep a git cheat sheet handy and spend those hours actually building something valuable for the AWS community.

I choose Option B every time. The hours I don't spend memorizing syntax are hours I can spend creating content, helping community members, or building tools that actually matter.

## When Memory Actually Helps

Don't get me wrong—there are things worth memorizing:

- **Core concepts** you use daily (basic git workflow, common Linux commands)
- **Fundamental principles** that apply broadly (SOLID principles, REST concepts, AWS Well-Architected Framework pillars)
- **Your team's specific workflows** and conventions
- **Security best practices** that prevent disasters

But even then, having a reference doesn't hurt. I know the AWS Well-Architected Framework pillars by heart (Security, Reliability, Performance Efficiency, Cost Optimization, Operational Excellence, Sustainability), but I still reference the detailed documentation when I'm doing architecture reviews.

## The Impostor Syndrome Trap

Here's the thing that nobody talks about: that voice in your head saying "real developers don't need cheat sheets" is impostor syndrome talking. 

I've worked with brilliant engineers who keep notes on everything. I've seen senior architects Google basic syntax during code reviews. I've watched CTOs look up AWS documentation during meetings. At AWS re:Invent, I've seen AWS employees themselves reference documentation during technical sessions.

**The best developers are the ones who optimize for results, not for appearing smart.**

When I'm giving a presentation at an AWS User Group meeting and someone asks a detailed question about a specific service, I don't pretend to know every parameter off the top of my head. I say, "That's a great question, let me pull up the documentation and we can look at it together." The audience appreciates the honesty, and we all learn something.

## Building Your Reference System

Instead of trying to memorize everything, build a system:

### 1. Curate Quality Resources
- Bookmark official documentation (AWS docs, Git documentation, language references)
- Save well-written Stack Overflow answers
- Keep a collection of reliable cheat sheets
- Follow trusted blogs and newsletters (I recommend AWS blogs, GitHub's blog, and community-driven resources)

### 2. Create Personal Notes
- Document solutions to problems you've solved (I keep a "Today I Learned" note in Obsidian)
- Keep snippets of code you use frequently
- Write down lessons learned from debugging sessions
- Maintain a personal wiki or note-taking system

For my community work, I have templates for common tasks: setting up new User Group events, deploying Hugo sites, updating community data. These aren't things I need to memorize—they're processes I can follow.

### 3. Practice the Fundamentals
- Use common commands regularly until they stick
- Understand the "why" behind the tools you use
- Focus on patterns rather than memorizing specifics

## My Real-World Example

Last month, while updating the AWS Community Dashboard, I needed to implement a complex filtering system for the interactive map. I knew I needed to:
1. Filter data based on multiple criteria
2. Update the map markers dynamically
3. Maintain good performance with thousands of data points

Did I remember the exact JavaScript syntax for array filtering? No. Did I remember the Leaflet.js API for marker management? Absolutely not. But I knew these things were possible, I knew where to find the documentation, and I had examples from previous projects.

The result? A working feature that helps thousands of people explore the AWS community worldwide. The value wasn't in what I had memorized—it was in what I could build.

## The Bottom Line

Technology moves too fast for anyone to remember everything. New frameworks emerge, APIs change, best practices evolve. The developers who thrive aren't the ones with perfect memory—they're the ones who adapt quickly and know how to find answers.

In the AWS community, we celebrate continuous learning. We share knowledge, we ask questions, we help each other grow. Nobody expects you to know everything, and the moment you pretend you do, you stop learning.

So the next time you reach for that cheat sheet, remember: you're not being lazy or incompetent. You're being efficient. You're focusing on what matters. You're doing exactly what experienced developers do.

**Your value isn't in what you've memorized—it's in what you can build.**

## A Challenge for You

Next time you're in a meeting or code review, pay attention. Notice how often even the most senior people say "let me look that up" or "I need to check the documentation." 

You'll realize that the best developers aren't the ones who never forget—they're the ones who aren't afraid to admit when they need to look something up.

And that's a skill worth developing.

At our AWS User Group Vienna meetings, some of the best discussions happen when someone says, "I'm not sure about that, let's look it up together." Those moments of shared learning are more valuable than any individual's perfect recall.

---

*What's in your cheat sheet collection? What do you still Google after years in tech? I'd love to hear your experiences in the comments—I guarantee you're not alone in this journey.*

**Remember: The AWS community is built on sharing knowledge, not hoarding it. Your willingness to admit what you don't know makes you a better community member, not a worse one.**
