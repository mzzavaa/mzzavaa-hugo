---
title: "Why I Built an AI Video Content Engine"
date: 2025-04-25
draft: false
description: "Building a content pipeline to turn ideas into outputs — with a little help from AI."
tags: ["ai", "aws", "video", "creativity", "workflow"]
categories: ["projects", "tech"]
author: "Linda Mohamed"
image: "images/stepfunctions_graph.png"
---

# Why I Built an AI Video Content Engine

I love creating things.  
Videos. Talks. Articles. Workshops.  
But you know what I *don't* love?

Spending hours tweaking subtitles, writing captions, drafting LinkedIn posts, and wondering if I already summarized that video better two months ago.

At some point, the admin work of creativity starts eating the **joy** of creativity.

That’s when I realized: **I needed a second brain.**

---

## 🧠 Not Just Automation — Amplification

I didn’t want to automate creativity away.  
I wanted to **amplify it**.

That's when I started experimenting:  
- What if I could upload a transcription and get back not just text, but a blog post, a quiz, and a LinkedIn post?
- What if I could run a video through a workflow and have the *first draft* of everything waiting for me?
- What if AI could help me **start** faster, so I could focus on polishing, connecting, creating?

The answer?  
A modular, scalable, AI-powered content engine.

---

## ⚙️ How It Works (In a Nutshell)

I designed a system that looks like this:

- Upload a video (or use a recording)
- Trigger a Step Functions workflow
- Auto-transcribe the audio
- Auto-detect key scenes with Rekognition
- Invoke Bedrock (Claude model) to generate:
  - ✍️ A blog post
  - ✨ A LinkedIn-style post
  - ❓ A short quiz
  - 📝 A concise summary
- Save everything into S3 for easy reuse

Simple on paper.  
Magical when it works.

---

![Workflow Overview](/images/stepfunctions_graph.png)

---

## 🚀 Why It Matters

Building this wasn't about automating my job away.  
It was about giving myself breathing room to **stay creative longer**.

Instead of staring at a blank screen, I now get to iterate.  
Instead of worrying about transcription errors, I get to refine stories.

I started this project because I needed it.  
But the more I used it, the more I realized:

> **Every creator deserves a crew.**

Even if that crew is made of pixels and prompts.

---

➡️ In the next post, I'll show you exactly how I designed the architecture — and why choosing modular pieces (like AWS Transcribe, Bedrock, and Rekognition) made all the difference.

Thanks for being here 💛

📬 Questions? Ideas? Let's talk: hello@lindamohamed.com
