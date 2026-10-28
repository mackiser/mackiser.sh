---
title: "Watchtower"
description: "A security posture dashboard that blends Qualys and Huntress data into one grade per client."
date: "2026-07-01"
demoURL: "https://watchtower-public-mackiser.vercel.app"
repoURL: "https://github.com/mackiser/watchtower-public"
---

Watchtower answers one question for a managed service provider: how is each client doing on security, and is it getting better or worse? It combines two data sources that don't talk to each other:

- **Qualys** vulnerability scans
- **Huntress ISPM** control compliance

From those, it gives each client one letter grade, charts that grade over time, and gives every client a kanban board for the hardening work.

![Overview: clients ranked worst-first with grade, Qualys health and ISPM health](./overview.png)

The [live demo](https://watchtower-public-mackiser.vercel.app) is read-only and full of fictional clients. The sign-in page fills in the demo login for you.

## What it does

- **Triage at a glance.** A "needs attention" digest (failing syncs, stale scans, locked accounts), then every client ranked worst-first.
- **One score per client.** Vulnerabilities per asset against a target, blended with the trend, plus severity-weighted ISPM compliance. Targets can be set per client.
- **Client detail.** Severity breakdowns, detections fixed by age, top vulnerabilities by affected assets, the ISPM control list, and a plain-language "since engagement start" summary.
- **Hardening board.** Tasks per client, each linkable to the ISPM control it fixes.
- **Data in and out.** A Weekly Update form, an optional daily Qualys API sync, and CSV exports of everything.
- **Admin.** User management, a persisted audit log, and mandatory TOTP with recovery codes.

![Client page: grade, engagement narrative and posture trend](./client.png)

## How it's built

It started life as a single HTML file with no backend, built for a locked-down work laptop that couldn't install anything. That version did the job until more than one person needed to use it, so I rebuilt it as a hosted, multi-user app:

- An npm-workspaces monorepo. It holds an Express and TypeScript API using Prisma and Postgres, and a React, Vite and Tailwind frontend.
- The scoring rules live in one shared, unit-tested package that the API and the browser both use, so a grade can never disagree with its chart.
- In production it's a single container: the API also serves the built frontend, and tracked Prisma migrations are applied on boot.
- On the security side, it uses server-side sessions with idle and absolute timeouts, bcrypt, rate limits and account lockout, a CSRF header check on every write, and a strict CSP.

The public demo runs the same Express app as one Vercel serverless function, backed by a free Neon Postgres. Demo mode refuses every write except signing in and out. It adds a fresh scan each day so the charts keep moving. It also keeps visitor IPs and typed emails out of the audit log, since the shared demo account can read it.
