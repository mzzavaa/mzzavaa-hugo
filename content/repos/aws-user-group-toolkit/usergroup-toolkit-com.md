---
title: "usergroup-toolkit.com"
date: 2025-01-14T12:00:00+02:00
draft: false
description: "The Jekyll website for the AWS User Group Toolkit, using the Minimal Mistakes theme and pulling blog posts from a Notion database."
repo: "aws-user-group-toolkit/usergroup-toolkit.com"
voices: ["junior", "senior"]
status: "quiet"
started: "2024-05-11"
last_commit: "2025-01-14"
commits: 20
built_by: "Philipp Bergsmann, with a Notion integration commit by Linda"
tags: ["jekyll", "website", "notion", "github-pages"]
---

The landing page for the toolkit itself. It lists the toolkit components, links to the image generator and the templates, and shows the latest blog posts, which come from a Notion database. Philipp Bergsmann wrote 19 of the 20 commits.

{{< junior >}}
This is Philipp's site; my one commit added the Notion integration with the jekyll-notion plugin. Things I noticed reading it again:

- The posts come straight from a Notion database, filtered to the ones with a Published checkbox ticked. Philipp added that filter later.
- The theme is Minimal Mistakes, pulled in as a remote theme, so the repo stays small apart from the fonts.
- The front page promises an "Asset Generator (coming soon)". Never shipped.
{{< /junior >}}

{{< senior >}}
Last commit January 2025, so quiet. The build runs on GitHub Actions and deploys to GitHub Pages with a Notion token from repository secrets, which is the right place for it. A stranger would find a README that is only a heading, with the project name misspelled. The `_config.yml` still has the Jekyll starter description, a placeholder email, `jekyllrb` as the Twitter handle, and the site URL spelled `htps://`. None of that breaks the build, but it is what shows up in feeds and search results. The risk is the Notion dependency: if that database or token goes away, the site builds with no posts.
{{< /senior >}}

**Learned:** A starter config left unedited is still published, just quietly.
