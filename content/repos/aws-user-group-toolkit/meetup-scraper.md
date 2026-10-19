---
title: "meetup-scraper"
date: 2023-10-28T12:00:00+02:00
draft: false
description: "A small Python script in a container that reads the member count from a Meetup group page."
repo: "aws-user-group-toolkit/meetup-scraper"
voices: ["junior", "senior"]
status: "quiet"
started: "2023-10-28"
last_commit: "2023-10-28"
commits: 3
built_by: "Linda, on a scaffold by Philipp Bergsmann"
tags: ["python", "scraping", "meetup", "docker"]
---

A script that fetches the AWS User Group Vienna page on Meetup and prints its member count. Philipp Bergsmann set up the repo, Dockerfile and container workflow with empty source files, and I filled in the scraper the same day.

{{< junior >}}
Philipp handed me an empty `scrape.py` and a working container pipeline, which is a lovely way to start. I wrote the 22 lines in it: requests plus BeautifulSoup, one CSS selector for the member count, strip the commas, print the number. The Meetup URL is hardcoded. I skipped making it configurable and never came back to store the count anywhere, so it only ever printed to the console.
{{< /junior >}}

{{< senior >}}
Three commits on one day in October 2023, nothing since. Quiet, and also unfinished: the README is a single heading, the output goes nowhere, and the commit message has a typo. Scraping a page by CSS selector breaks whenever the site changes its markup, and three years on that selector is unlikely to still match. The base image is Python 3.9 on Debian buster, out of support. Either archive it or make the URL an environment variable and write down what the count was for.
{{< /senior >}}

**Learned:** A scraper with no place to store its result is a demo, not a tool.
