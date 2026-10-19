---
title: "image-generator"
date: 2025-04-06T12:00:00+02:00
draft: false
description: "A Python and Pillow script, shipped as a container and a PyPI package, that generates header images for Meetup events."
repo: "aws-user-group-toolkit/image-generator"
voices: ["junior", "senior"]
status: "finished"
started: "2023-10-22"
last_commit: "2025-04-06"
commits: 22
built_by: "Philipp Bergsmann"
tags: ["python", "pillow", "docker", "meetup"]
---

A header image generator for Meetup events. You pass a title, date, location, background photo, photo opacity and logo as environment variables, and it writes a PNG into an output folder. Philipp Bergsmann wrote all 22 commits.

{{< junior >}}
Philipp built nearly all of this on one day in October 2023, through a string of small pull requests: defaults, a multi-arch container build, photo opacity, a better title layout. What I noticed using it:

- It is one function. Base image, grey photo at the chosen opacity, overlay, then text and logo on top.
- Long titles wrap, which is the part every meetup header tool gets wrong first.
- It is packaged for PyPI too, so you can call it from Python without the container.
{{< /junior >}}

{{< senior >}}
It did its job and stopped, with only small fixes to the output directory default in 2024 and 2025. Finished is fair. The README is good, with Docker and Podman examples, though the image paths still point at the old org name. Things a stranger should know: the default photo and logo are hotlinked from third-party websites, so the defaults break if those pages move. The base image is Python 3.9 on Debian buster, which is out of support. The font files are committed into the repo, so check their licence allows that.
{{< /senior >}}

**Learned:** Defaults that load from someone else's website are a dependency you never chose.
