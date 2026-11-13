---
title: "Senior's Notes: The Week Node.js and PHP Both Shipped Security Fixes"
date: 2026-11-13T19:00:00+01:00
draft: false
description: "On 21 October 2026 Node.js and PHP both released urgent security fixes. What we had to upgrade, why PHP2Shell could not reach us, and what the week taught us about boring infrastructure."
tags: ["security", "nodejs", "php", "dependencies", "lessons-learned", "github-actions"]
categories: ["learning"]
voices: ["senior", "junior"]
author: "Linda Mohamed"
---

{{< senior >}}
21 October 2026 was a busy day for anyone who runs websites. Node.js and PHP both shipped security releases the same day. We had to act on one and could ignore the other. Here is why, and what we changed. The full technical write-ups are on [ai-solutions.wiki](https://ai-solutions.wiki), with every source linked. This post is only about what it meant for us.
{{< /senior >}}

## What happened

**Node.js** released 22.23.4, 24.22.1 and 26.12.1, fixing ten CVEs, four of them rated High. Most are about how Node checks a TLS certificate against an IP address. One is a bug in the Brotli decompression library that Node bundles, and that same code also ships in Bun, Envoy, Istio, Python packages and .NET. The release also updated bundled libraries, including undici, the HTTP client behind Node's built-in `fetch()`. Details: [Node.js October 2026 security release](https://ai-solutions.wiki/news/nodejs-october-2026-security-release-brotli/).

**PHP** released 8.5.12, 8.4.27, 8.3.36 and 8.2.35 to fix **PHP2Shell**: two flaws in the PHP engine itself that allow unauthenticated remote code execution. Exploitation attempts showed up before the release. A few days later CISA added both to its list of known exploited vulnerabilities. Details: [PHP2Shell](https://ai-solutions.wiki/news/php2shell-php-core-rce/).

## Node.js: what we had to do

Almost everything we build uses Node somewhere: the community website, the meetup data sync, the room screen, the juggling site. Not one of them runs Node on a public server, though. Node runs while the site is being *built*, and what gets published is plain files. That shrinks the risk a lot. It doesn't make it zero, because the build fetches data from the internet and handles files it did not make.

So we went through it in three layers.

1. **The build machines in the cloud.** Our GitHub Actions workflows ask for a Node *line* (24 for the community website and the meetup data, 22 for the juggling site), not an exact version. Every build after the release picked up the patched version automatically. All we had to do was check that the builds really did.
2. **The dependencies.** On 25 October one sweep went through every repo we touch: Vite to 6.4.4 on the community website, zod 4 in the room screen and its web player, and on the juggling site the rolled-up Dependabot updates, which never sit around unread.
3. **The laptops.** The room screen and the slide deck are built on an organizer's laptop, not in the cloud. Nothing updates a laptop by itself. That is the layer that needs a human, so it belongs on the checklist before every meetup.

{{< junior >}}
And in the same sweep I added ignore rules for local secrets, keys and caches to every one of those repos. Not strictly Node, but when you have every repo open anyway, ten extra minutes buys a lot of calm.
{{< /junior >}}

## PHP2Shell: why we were not affected

None of our sites run PHP. Not one of the repos in our notebook contains a single PHP file. The sites are static builds (Hugo, Astro, Vite) served as plain files from GitHub Pages. There is no PHP engine to reach, so the flaw had nothing to attack.

That was not luck. We chose static sites on purpose, because they are cheap, fast and hard to break, and moved the last dynamic one over to Astro this year. Weeks like this are when that choice pays off. A fully patched WordPress on an unpatched PHP was still exposed, because PHP2Shell sits below the application. A folder of HTML is not.

{{< senior >}}
"Not affected" is a statement you have to be able to prove, not something you assume. We could prove it in one search across every repo. If that search had taken a day, it would have been a lesson of its own.
{{< /senior >}}

## Three lessons

1. **Ask for a version line, not an exact version, in CI.** A workflow that says "Node 24" gets security fixes on its next run. One pinned to 24.21.0 keeps building with the bug until someone remembers.
2. **Know which machines nothing updates by itself.** For us those are the laptops that build the room screen and the deck. Write them down. Patches land everywhere else without help.
3. **Boring infrastructure is a security feature.** Static files on a managed host gave PHP2Shell nothing to aim at. Every server you don't run is a security release you never have to read on a Wednesday afternoon.

**One change:** every repo that builds in CI states its Node line in one place, and the meetup checklist starts with "update Node on the build laptop".
