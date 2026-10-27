---
title: "Self-hosted Matrix with Ansible"
description: "Infrastructure-as-code for a private Matrix/Synapse homeserver. Still in progress."
date: "2026-10-23"
---

I want a private Matrix homeserver, and I want to never configure it by hand. Every package, user, firewall rule and config file on the box comes from an Ansible playbook in git. It's also my excuse to practice infrastructure-as-code, CI/CD and Linux hardening on something I'll actually use.

The tooling is pinned end to end:

- Ansible and its Python dependencies are locked with uv, and the collections are pinned in `requirements.yml`
- Secrets live in Ansible Vault
- pre-commit runs yamllint, ansible-lint and a private-key check before anything gets committed

Every change goes in on its own branch and pull request, even though I'm the only reviewer.

## Where it's at

- **Bootstrap:** a one-time playbook logs into a fresh VPS as root, creates a key-only automation user with sudo, and patches the system. Every later run uses that user.
- **Baseline role:** applied to every host. It covers system settings, users, SSH hardening (no root login, no passwords), a ufw firewall and fail2ban.
- **Hardening check:** Lynis scores the baseline at 70, a number I plan to push higher.
- **Next up:** deploying Synapse itself.

The repo stays private until it's done, since it's full of details about live servers.
