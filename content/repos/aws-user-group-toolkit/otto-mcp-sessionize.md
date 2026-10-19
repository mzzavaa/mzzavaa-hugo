---
title: "otto-mcp-sessionize"
date: 2026-02-08T12:00:00+02:00
draft: false
description: "A small MCP server that lets AI agents search Sessionize sessions and speakers by month, packaged as a container."
repo: "aws-user-group-toolkit/otto-mcp-sessionize"
voices: ["junior", "senior"]
status: "quiet"
started: "2026-02-07"
last_commit: "2026-02-08"
commits: 8
built_by: "Philipp Bergsmann, with one AI-assisted pull request by GitHub Copilot"
tags: ["mcp", "sessionize", "python", "ai-agents"]
image: "images/Folie22.png"
---

A Model Context Protocol server with one tool, `search_sessionize`, which returns sessions and speaker names for a given month. It is a building block for [OTTO](/posts/building-otto/), the event-planning agent idea, so the agent can see which talks are lined up.

{{< junior >}}
Philipp Bergsmann wrote this over one weekend. What I liked reading it:

- One Python file, FastMCP, about 60 lines. You configure it with two environment variables, the Sessionize URL and the category that holds the month.
- The output is plain text blocks per session, title, description, speakers. Easy for a model to read.
- He switched it to stateless HTTP with JSON responses, which suits running it in a container behind a client.

A Copilot agent opened a pull request to move the port to 8080, and a later commit set the server and Dockerfile back to 8000.
{{< /junior >}}

{{< senior >}}
Two days of work in February 2026, quiet since. The README is clear and has client configs for VS Code, Claude Desktop and Cursor. A stranger would trip on the ports though: the README says 8080 everywhere, the code and Dockerfile now expose 8000. There is no licence file and no tests yet. It fetches the whole session list on every call, which is fine for one meetup and worth knowing for more.
{{< /senior >}}

**Learned:** A port change needs to land in the README in the same commit.
