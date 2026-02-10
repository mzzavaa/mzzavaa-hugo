---
title: "From ClickOps to Backstage and Beyond: Automating the AWS Platform Experience"
date: 2025-05-02T16:00:00+02:00
draft: false
tags: ["AWS", "DevOps", "IaC", "Backstage", "Platform Engineering"]
categories: ["Cloud Automation"]
image: "/images/blog/from-clickops-to-backstage.jpg"
----------------------------------------------------

# 🚀 From ClickOps to DevOps — and Beyond: How We Got Tired of Doing the Same Thing Over and Over Again

At some point last year, I realized I’d explained the **evolution from ClickOps to DevOps** in about a dozen conversations, workshops, and community meetups. Each time with the same drawing on a whiteboard, each time with the same questions from the audience.

So I turned it into a talk:
🦤 *From ClickOps to DevOps and Beyond – How IT Evolved.*

And spoiler alert: the “beyond” part got very real.

---

## 🤩 It all started with a dashboard. Or maybe a whiteboard.

You know the situation.

Someone in the team needs a new AWS account.
They open a ticket.
It lands in the backlog.
Another team approves it.
Someone in yet another team finally provisions it.
Maybe two weeks later, maybe not.

All that… just to get started.

Meanwhile, your platform engineers are deep in Terraform, the DevOps team is trying to keep up with governance, and developers are wondering why things feel so… slow.

This was the *exact* bottleneck we ran into. So together with [Philipp Bergsmann](https://www.linkedin.com/in/philippbergsmann/), we decided to change it.

---

## 🤖 But first, let’s rewind: what even is ClickOps?

In my “ClickOps to DevOps” talk, I walk through the history of how we manage infrastructure. The best part? I use actual stories from the 90s (no, I wasn’t in IT back then — but the Internet was!).

Here’s the short version:

* 💟️ **Stage 1: ClickOps**
  You click through the AWS Console to create resources. Works for one thing. Total chaos at scale.

* 📜 **Stage 2: Scripts & IaC**
  Terraform, CloudFormation, CDK – you name it. Infrastructure becomes code. Repeatable, versioned, auditable.

* 🚀 **Stage 3: Commit-to-Deploy Pipelines**
  You can’t deploy manually anymore. Every change is a PR. Everything is code. This is where it gets powerful.

But honestly? Most companies aren’t fully there yet. And even those who are… often *still* create AWS accounts manually. That’s where the next talk came in.

---

## 🎮 And then came the sequel: “Automating AWS Account Setup with Backstage”

Let me be honest — this talk started out of frustration.

We were tired of hearing ourselves say “it’s just one more account, we’ll do it manually” while preaching automation in every architecture review. So we built what we needed:

> A self-service AWS account provisioning system
> Powered by **Backstage**, **GitHub templates**, and **Terraform**
> Integrated into **AWS Organizations**

🌟 The idea?
Click a button in Backstage → fill out a form → and get a ready-to-use AWS account with the right structure, logging, tags, and guardrails.

No more tickets. No more bottlenecks.

---

## 🤯 The first time it worked, we just stared at the screen.

We had wired everything together:

* Backstage software template
* GitHub Actions to trigger Terraform
* Pre-configured Organizational Units
* Baseline policies and SCPs
* CloudTrail and budget alerts baked in

And it actually… worked.
The account was created, isolated, tagged, and ready.

I had this *Buzz Lightyear moment* —
“*To pipeline and beyond…!*”

---

## 💬 Why does this matter?

I talk to a lot of teams.
From enterprise cloud migrations to scrappy startups scaling fast — almost everyone hits the same wall at some point:

> “We want to move fast, but governance slows us down.”
> “We want self-service, but don’t want chaos.”
> “We know automation is better… but where do we start?”

This is exactly what I tackle in my **Cloud Adoption Framework workshops** —
We map out the maturity, define the operating model, and figure out what “platform” even means in *your* context.

And this project? It’s now part of those conversations.

---

## 🧠 Lessons learned from doing it (not just talking about it)

* IaC is only helpful if you *actually use it*.
  (Sounds obvious? You’d be surprised how many teams stop at exporting from the console.)

* Platforms without a user interface are like APIs without docs.
  That’s why Backstage is a game-changer.

* Buzz Lightyear was right.
  Sometimes you do have to aim for the stars, even if you're not sure how to get there.

---

## 🛠️ Want to see it?

📸 Here’s one of the slides that always gets heads nodding:

```yaml
name: provision-aws-account
on:
  push:
    paths:
      - 'terraform/**'
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Terraform Apply
        run: terraform apply -auto-approve
```

This is part of the GitHub workflow we use to create accounts through Backstage.
It’s simple. It’s powerful. And yes, it took many broken runs to get here.

---

## 🚣️ What’s next?

We’ve submitted this talk to **AWS Community Day Poland** — fingers crossed!
(And yes, the next version will have *even more automation*. Of course.)

I’m also updating my workshop format to include more **platform strategy**, **team enablement**, and **real automation demos**. Because talking about automation is great — but building something real together is better.

---

## 🤝 I can help if you’re…

* Starting your **cloud journey**
* Looking to **scale platform teams**
* Wanting to turn “platform” from buzzword to builder-enabler
* Or just tired of **ClickOps** and want something better

Let’s chat. I’m always happy to share what worked, what didn’t, and what we learned along the way.

📬 [linda@lindamohamed.com](mailto:linda@lindamohamed.com)
🌐 [lindamohamed.com](https://lindamohamed.com)
📣 [sessionize.com/linda-mohamed/](https://sessionize.com/linda-mohamed/)

Let’s go to Backstage — and beyond. 🤍
