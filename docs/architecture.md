# Architecture

> **Stub.** Update when monorepo layout, API shape, and client boundaries are chosen.

## High level

- **API** — owns persistence, business rules, and whatever powers pre-trip insights.
- **React Native app** — primary client for logging and consuming briefings.

## Open questions

- Monorepo tool (npm workspaces, pnpm, Turborepo, Nx, etc.).
- Auth model and offline/sync strategy.
- How “pre-trip briefing” is computed (rules, ML, retrieval over trips—TBD).

## Related decisions

See [decisions/](decisions/README.md). Link new ADRs here when they affect this overview.
