---
title: "ai-solutions-wiki"
date: 2026-11-13T12:00:00+01:00
draft: false
description: "Source of ai-solutions.wiki, a knowledge base for building and running production AI systems, organised in five layers."
repo: "linda-mhmd/ai-solutions-wiki"
voices: ["junior", "senior"]
status: "active"
started: "2026-03-24"
last_commit: "2026-11-13"
commits: 222
built_by: "Linda, with Claude"
tags: ["ai", "wiki", "hugo", "knowledge-base"]
---

The source of ai-solutions.wiki, a knowledge base for taking AI systems to production and keeping them running. It is written for two readers: vibe coders who want to know why things break, and experienced engineers who want patterns and trade-offs in one place.

{{< junior >}}
- The organising idea came first: AI systems are software systems, so the wiki is built around a five-layer model, starting with models and orchestration.
- Most of the commits are mine. About 50 are by Claude, which I use for news passes and verification sweeps.
- The decision I like most: the weekly update runs as a GitHub Actions workflow that opens a pull request and never merges. I review the preview and click.
- I skipped making the agent merge on its own. That one is on purpose.
- Update, 13 November: two more weekly passes (weeks 43 and 44), tool pages for CloudFront, Auth0, Azure Front Door and Cloudflare with five new identity icons, an agent security roundup, and a same-day news entry that got its closing number added the next morning.
- My favourite fix this month: a statistic we could not trace got replaced with the primary measurement it came from.
{{< /junior >}}

{{< senior >}}
Still the most active one: 222 commits, the latest on 13 November 2026, and every news change since late October arrived as a reviewed pull request (#13, #14, #15 and #17). What I like most is the direction of the corrections. Week 44 removed a claim that could not be verified and put the original source in its place, and the verification passes now run in the same pull request as the news. That is what a knowledge base needs: it gets more correct as it gets bigger. It has a README, a dual licence in `LICENSE.md`, a contributing guide and a citation file, and CI covers deploy, PR checks, previews and the weekly update.
{{< /senior >}}

**Learned:** When a number cannot be traced, replace it with the source you can trace, and say so in the commit.
