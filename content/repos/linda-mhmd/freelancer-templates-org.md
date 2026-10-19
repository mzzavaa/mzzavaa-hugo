---
title: "freelancer-templates.org"
date: 2026-05-06T12:00:00+02:00
draft: false
description: "A library of Remotion video templates for freelancers, with a Hugo showcase site and an embeddable player."
repo: "linda-mhmd/freelancer-templates.org"
voices: ["junior", "senior"]
status: "quiet"
started: "2026-03-24"
last_commit: "2026-05-06"
commits: 134
built_by: "Linda"
tags: ["remotion", "video", "hugo", "templates"]
---

A library of video templates built with Remotion, for things freelancers make again and again: testimonials, proposals, case studies, social posts. A Hugo site shows every template with preview stills and hero videos.

{{< junior >}}
- I built the templates first and the site second. The README now counts 85 or more compositions and 50 or more themes.
- Each template has layout variants and takes a `theme` prop, so one composition covers a lot of looks.
- Rendering previews by hand got old fast, so there are Make targets for missing stills, hero videos and parallel renders.
- I stopped hand-listing the navigation and derived the library menu from a field in the content instead.
- The last thing I added was an icon library with an automated sync workflow.
{{< /junior >}}

{{< senior >}}
Last commit was 6 May 2026, so it has been quiet for about five months. The live site keeps working without commits, so quiet is acceptable here. What needs fixing: the repo has no licence file, which matters for a template library meant to be reused. It also has a committed `.playwright-mcp/` folder of browser console logs, a committed `render.log` and a `.kiro` folder. None of those belong in a public repo; they should be removed and added to `.gitignore`. On the plus side there are deploy, thumbnail and icon-sync workflows and a vitest setup.
{{< /senior >}}

**Learned:** Tool output folders end up in git unless you ignore them on day one.
