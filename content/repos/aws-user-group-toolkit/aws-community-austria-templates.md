---
title: "aws-community-austria-templates"
date: 2026-10-19T17:01:00+02:00
draft: false
description: "Remotion components, slide compositions and a design system for AWS Community Austria meetups, with Sessionize integration."
repo: "aws-user-group-toolkit/aws-community-austria-templates"
voices: ["junior", "senior"]
status: "quiet"
started: "2026-04-04"
last_commit: "2026-04-04"
commits: 5
built_by: "Linda, restructured by Philipp Bergsmann"
tags: ["remotion", "react", "slides", "design-system"]
---

A design system and set of Remotion compositions for the AWS User Group Vienna, the AWS Women's User Group Vienna and the AWS User Group Linz: title, agenda, speaker, team, sponsor and thank-you slides, LinkedIn announcement and recap videos, a meetup thumbnail and a venue background loop.

{{< junior >}}
I pushed the first version in one big commit: Remotion root, slide compositions, a Sessionize fetcher for speakers and sessions, group and sponsor config, headshots and logos. The same day Philipp Bergsmann restructured it. He moved the config out, turned it into a package that exports components and types, deleted the old images and HTML previews, and added announcement intro and outro panels. His version is cleaner. Keeping per-event data out of the template repo was the right call, and I skipped it.
{{< /junior >}}

{{< senior >}}
Five commits, all on 4 April 2026, nothing since. Quiet. The code is fine, the README is not: it still describes `config/` files, PPTX and prep guide generators and `npm run generate` scripts that no longer exist after the refactor. A stranger following the Quick Start would hit missing scripts on the first command. The test script calls vitest, but there are no tests. Licence is CC BY-NC-SA 4.0, unusual for code, so say why if it is on purpose. The removed config and headshots are still in git history.
{{< /senior >}}

**Learned:** When someone refactors your repo, the README is the first thing to update together.
