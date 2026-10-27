---
title: "Watchtower"
description: "A security posture dashboard that blends Qualys and Huntress data into per-client grades."
date: "2026-07-01"
---

Watchtower answers one question: how is each client doing on security, and is it getting better or worse? It brings together two data sources that don't talk to each other:

- **Qualys** vulnerability scans
- **Huntress ISPM** control compliance

From those, it scores every client's security posture. It also tracks the Qualys numbers over time and gives each client a kanban board for the hardening work the scores turn up.

It started life as a single HTML file with no backend, built for a locked-down work laptop that couldn't install anything. That version did the job until more than one person needed to use it, so I rebuilt it as a hosted, multi-user app.

## Stack

- An npm-workspaces monorepo. It holds an Express and TypeScript API using Prisma and Postgres, and a React and Vite frontend.
- A shared scoring package that both the API and the UI use. Its unit tests pin the exact scoring rules from the original version.
- One Docker image. Prisma migrations are tracked and applied on boot, so schema changes never silently drop data.
- Session auth with opt-in TOTP MFA, plus a pass against the OWASP Top 10.

## Demo

There's a separate, brand-free demo build that seeds itself with fictional clients. A public link is coming soon.
