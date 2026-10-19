---
title: "event-system-backend"
date: 2026-10-19T18:01:00+02:00
draft: false
description: "Serverless AWS CDK backend for AWS Community DACH events: event and participant API, Cognito sign-in, SES emails and check-in."
repo: "aws-community-dach/event-system-backend"
voices: ["junior", "senior"]
status: "quiet"
started: "2023-01-27"
last_commit: "2024-09-13"
commits: 91
built_by: "Thorsten Hoeger, with timros1412, makellner and Eduard Schwarzkopf"
tags: ["aws-cdk", "serverless", "events", "community"]
---

The backend of the AWS Community DACH event system: a REST API for events and participants, Cognito authentication and email templates for registration, reminders and check-in. Thorsten Hoeger wrote most of it, with timros1412, makellner and Eduard Schwarzkopf. I did not write this one.

{{< junior >}}
What I noticed reading it:
- The API starts from an OpenAPI file and a data model in `src/definitions`, and the handlers and constructs are generated from them with cdk-serverless. That is a neat way to keep the API and the code in step.
- Every endpoint is its own small Lambda, from `createEvent` to `checkinEventParticipant`.
- timros1412 wrote the delete and update handlers in mid 2023.
- In September 2024 Thorsten added check-in, reminder emails and a short delay between email sends, which reads like a lesson learned on a real event day.
{{< /junior >}}

{{< senior >}}
Last commit was 13 September 2024, so the repo has been quiet for about two years. Seasonal is fine for an event backend. Ageing dependencies are not: it pins aws-cdk-lib 2.152.0 and projen 0.86.7, and Lambda runtimes get retired on their own schedule. There is CI with a dev and prod pipeline and an integration test draft, but the unit test is a commented-out snapshot and the README still says "replace this". A stranger could not deploy it from the repo alone. The Apache 2.0 licence is there.
{{< /senior >}}

**Learned:** Generating handlers from an API definition keeps a volunteer codebase consistent even when several people touch it.
