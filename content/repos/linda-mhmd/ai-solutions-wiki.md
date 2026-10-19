---
title: "ai-solutions-wiki"
date: 2026-10-19T18:11:00+02:00
draft: false
description: "Source of ai-solutions.wiki, a knowledge base for building and running production AI systems, organised in five layers."
repo: "linda-mhmd/ai-solutions-wiki"
voices: ["junior", "senior"]
status: "active"
started: "2026-03-24"
last_commit: "2026-10-09"
commits: 206
built_by: "Linda, with Claude"
tags: ["ai", "wiki", "hugo", "knowledge-base"]
---

The source of ai-solutions.wiki, a knowledge base for taking AI systems to production and keeping them running. It is written for two readers: vibe coders who want to know why things break, and experienced engineers who want patterns and trade-offs in one place.

{{< junior >}}
- The organising idea came first: AI systems are software systems, so the wiki is built around a five-layer model, starting with models and orchestration.
- Most of the 206 commits are mine. 51 are by Claude, which I use for news passes and verification sweeps.
- The decision I like most: the weekly update runs as a GitHub Actions workflow that opens a pull request and never merges. I review the preview and click.
- I skipped making the agent merge on its own. That one is on purpose.
{{< /junior >}}

{{< senior >}}
This is the active one: last commit 9 October 2026, with weekly news and freshness updates landing through pull requests. It has a README, a dual licence in `LICENSE.md`, a contributing guide and a citation file. CI covers deploy, PR checks, PR previews and the weekly update, and there are gitleaks and zizmor configs, which shows someone thought about secrets and workflow safety. The honest risk is the size of the content: a wiki this broad goes stale page by page, so the freshness sweep has to keep running.
{{< /senior >}}

**Learned:** An agent that opens a pull request and waits is easier to trust than one that commits.
