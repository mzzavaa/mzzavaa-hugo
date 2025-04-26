---
title: "Terminal Magic: Essentials for Website Builders (macOS Focus)"
date: 2025-04-26
draft: false
description: "A practical cheat sheet of CLI commands that made building MzZavaa (and other projects) way smoother"
tags: ["cli", "website", "productivity", "macos", "hugo"]
categories: ["productivity"]
author: "Linda Mohamed"
image: "images/Bildschirmfoto-2025-04-26-2.png"
---

# Terminal Magic: Essentials for Website Builders (macOS Focus)

When you start building your own website — especially something lightweight like **MzZavaa** — you realize quickly:

**The Terminal is your silent co-pilot.**

It’s not about being a Linux wizard. It’s about small, repeatable tricks that save your focus and your sanity.

Here’s my personal, battle-tested CLI starter kit — clean, simple, and macOS-friendly.

---

# Table of Contents

- Image Optimization
- Text Replacement
- File Management & Cleanup
- Local Development Helpers
- Deployment Essentials
- Searching Through Code
- Backup & Archiving
- Bonus Shortcuts

---

# 🗾 Image Optimization: Shrink Images Fast

Large images kill website speed. Resize them before upload.

### Bulk resize PNGs:

```bash
mogrify -resize 800x *.png
```

📌 This resizes every `.png` in the current directory to a max width of 800px, maintaining aspect ratio.

### Convert images to optimized JPEGs:

```bash
mogrify -format jpg -quality 85 *.png
```

📌 Good if you want to shrink file size even further for static blogs.

**Note:** Install ImageMagick if you don't have `mogrify` yet:

```bash
brew install imagemagick
```

---

# Text Replacement Across Many Files

When you need to update something across 100+ files, `sed` is a lifesaver.

### Find and replace text in .html files:

```bash
sed -i '' 's/old-link/new-link/g' *.html
```

On macOS, the empty `''` after `-i` is required for in-place editing.

---

# File Management & Cleanup

Project folders get messy fast.

### Find and delete all `.tmp` or unwanted backup files:

```bash
find . -name "*.tmp" -type f -delete
```

### Find big files (>10MB):

```bash
find . -type f -size +10M
```

---

# Local Development Helpers

Sometimes you want to test your static site locally without setting up Nginx or Apache.

### Start a simple local web server:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

📌 Great for quickly previewing your Hugo `public/` folder.

---

# Deployment Essentials

Upload your static site easily with `rsync` — faster and safer than FTP.

### Sync your build folder to a remote server:

```bash
rsync -avz --delete public/ user@yourserver:/var/www/html/
```

- `-a` means archive mode (keep permissions, etc.)
- `-v` means verbose (see what's happening)
- `-z` means compress data during transfer
- `--delete` removes files on the server that no longer exist locally (**be careful!**)

---

# Searching Through Code and Projects

Find broken links, missed TODOs, old API calls — quickly.

### Search recursively for a string in all files:

```bash
grep -rnw 'searchTerm' .
```

- `-r` means recursive
- `-n` shows line numbers
- `-w` matches whole words only

---

# Backup & Archiving

Back up your project folders before big updates!

### Create a compressed archive:

```bash
tar -czvf mybackup.tar.gz myproject-folder/
```

📌 Good habit before deploying changes you might regret.

---

# Bonus Shortcuts

Some quick helpers you’ll thank yourself for learning:

### Show folder sizes in human-readable format:

```bash
du -sh *
```

### Show only top-level disk usage (for large projects):

```bash
du -h --max-depth=1
```

### List the 20 most recently modified files:

```bash
ls -lt | head -n 20
```

---

# Final Thoughts

You don’t need to memorize 500 CLI commands to be productive.

You just need a handful you actually use.

This list evolved while building:

- **MzZavaa** (this blog)
- **Meet the AWS Community** site
- **The Juggling Company** project

And all the little experiments in between.

Use the terminal like a paintbrush — not a punishment.

---

If you want a "Terminal Essentials Vol. 2" covering more git tricks, AWS CLI shortcuts, or advanced workflows, let me know! 🚀
