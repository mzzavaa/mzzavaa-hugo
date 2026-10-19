---
title: "png2svg"
date: 2024-05-20T12:00:00+02:00
draft: false
description: "A containerised script that traces a PNG logo into dark and light SVG versions using ImageMagick and potrace."
repo: "aws-user-group-toolkit/png2svg"
voices: ["junior", "senior"]
status: "finished"
started: "2024-05-20"
last_commit: "2024-05-20"
commits: 3
built_by: "Philipp Bergsmann"
tags: ["svg", "imagemagick", "potrace", "docker"]
---

A small converter that turns a PNG into SVG files. It is useful for logos that only exist as PNG. Philipp Bergsmann wrote it in one day in May 2024.

{{< junior >}}
I read through Philipp's `convert.sh` to see how it works, and it is neat:

- It reduces the image to its four most common colours.
- For each colour it makes a black and white mask and traces it with potrace.
- It recolours each traced layer and stacks them into one SVG.
- Then it writes a `_dark` and a `_light` version by swapping the dark navy and the off-white.

That last step is very specific to the community's colour scheme, which makes sense for this toolkit.
{{< /junior >}}

{{< senior >}}
Three commits on one day, nothing since. For a single-purpose converter that is finished, not neglected. It runs on Alpine with a GitHub Actions workflow to build the image, and is MIT licensed. A stranger would be confused by the README, which calls it a Python script when it is a bash script, and whose examples use an old org name in the image path. It also always produces exactly four colour layers, so detailed or gradient images will come out flat.
{{< /senior >}}

**Learned:** Copying a README from a sibling project is fast, until the first sentence is wrong.
