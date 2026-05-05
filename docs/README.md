# Documentation

This folder is the **single source of truth** for product intent, architecture, and technical choices for Fishing Log.

## Contents

| Document | Status |
|----------|--------|
| [contributing.md](contributing.md) | Active — humans: pointers to docs, decisions, Cursor rules (`AGENTS.md`) |
| [product.md](product.md) | In progress — vision, tenancy, offline-first/sync principles captured |
| [architecture.md](architecture.md) | In progress — client owns features offline-first; backend for auth + continuity; sync protocol TBD |
| [decisions/](decisions/README.md) | Active — record ADRs as choices are made |

**Baseline implementation stack** (accepted to date): **ADR-0001**–**ADR-0006** (TypeScript monorepo, pnpm, Expo/React Native UI and state tooling, shared Zod package)—summarized with links under [architecture.md](architecture.md).

## How to use this with agents

Repo root **[AGENTS.md](../AGENTS.md)** summarizes where policies live (`docs/`, `docs/decisions/`, `.cursor/rules/`) so any tool—not only Cursor—can be aimed at the same sources.

When starting or continuing work, point agents at the relevant doc(s) so assumptions stay aligned with recorded decisions. When something material changes, update the doc or add a decision record before building on it.
