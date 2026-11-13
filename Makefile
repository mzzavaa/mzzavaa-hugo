# mzzavaa.com: the Hugo site, Lee Za's checks and her count.
# Run `make help` for the list.
#
#   make dev            the site on http://localhost:1313 (or the next free port), drafts included, reloads on save
#   make stop           stop the dev server started by make dev
#   make build          the site into public/, the way the deploy builds it
#   make check          strict build into a temp folder: any warning fails; prints OK or FAIL
#   make clean          remove public/, resources/_gen and the build lock
#
#   make talks          Lee Za's talks check against the live sites; prints her report
#   make talks-offline  the same without web reads: only what data/talks.json already says
#   make scan           Lee Za's count of the Videos and talks folders on this machine; rewrites data/leeza.json
#   make desk           scan, then check: refresh her numbers and make sure the site still builds
#
#   make status         which branch, what is uncommitted, how far ahead of main
#
# Folders the scan reads (override on the command line, for example make scan VIDEOS=/Volumes/Disk/Videos):
#   VIDEOS    default ~/Videos             raw footage; Event Aftermovies, GRWM and Interviews hold the finished films
#   TALKS     default ~/code/talks         one folder per talk
#   PIPELINE  default ~/code/video-flow    the video pipeline's repository, for its commits per month

PORT     ?= 1313
VIDEOS   ?= $(HOME)/Videos
TALKS    ?= $(HOME)/code/talks
PIPELINE ?= $(HOME)/code/video-flow

.PHONY: help dev stop build check clean talks talks-offline scan desk status

help:
	@sed -n 's/^#   //p' Makefile

dev:
	@PORT=$(PORT); \
	while lsof -ti tcp:$$PORT >/dev/null 2>&1; do PORT=$$((PORT + 1)); done; \
	echo "-> http://localhost:$$PORT  (stop with Ctrl+C, or make stop from another terminal)"; \
	hugo server --buildDrafts --port $$PORT --disableFastRender & echo $$! > .hugo-dev.pid; wait

stop:
	@if [ -f .hugo-dev.pid ] && kill "$$(cat .hugo-dev.pid)" 2>/dev/null; then echo "dev server stopped"; else echo "no dev server from make dev is running"; fi
	@rm -f .hugo-dev.pid

# --panicOnWarning turns every Hugo warning into a failure, so a deprecation
# never reaches main unnoticed. Do not remove it to make a build pass.
build:
	hugo --gc --minify --panicOnWarning

check:
	@hugo --gc --minify --panicOnWarning --destination "$${TMPDIR:-/tmp}/hugo-check-$$(basename $$PWD)" >/dev/null \
	  && echo "OK   $$(basename $$PWD)" \
	  || { echo "FAIL $$(basename $$PWD)"; exit 1; }

clean:
	rm -rf public resources/_gen .hugo_build.lock .hugo-dev.pid

talks:
	node tools/check-talks.mjs

talks-offline:
	node tools/check-talks.mjs --offline

scan:
	VIDEOS="$(VIDEOS)" TALKS="$(TALKS)" PIPELINE="$(PIPELINE)" node tools/leeza-scan.mjs

desk: scan check

status:
	@git status -sb | head -1; git status --short; echo "$$(git rev-list --count origin/main..HEAD) commits ahead of main"
