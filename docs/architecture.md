# Architecture

## High level

- **React Native app** — owns **all user-visible features**: logging, history, patterns, **pre-trip briefings**, and any insight UI. Logic runs **against local data** so nothing essential requires a round trip while offline. Implementation details (SQLite, embeddings, rules engine on device—TBD) stay on the client or shared packages unless an ADR says otherwise.
- **API / backend** — **priority one: durable cloud storage** that permits **seamless multi-device continuity** for the same authenticated user (upload/download or sync reconciliation). **Authentication** aligns with that: identity and tenancy for whose blobs belong to whom. The backend is **not** the primary place features “live”; avoid designing the product around server-side-only computation for core workflows.

## Agreed constraints

- **Offline first for every feature** — if a feature ships, users must be able to use it without network assuming local data supports it (for example briefing after trips have synced to this device earlier).
- **Authenticated multi-tenant use** — accounts from early delivery; data is partitioned per user. Session/token behavior offline (refresh, revocation, duration) is TBD.
- **Sync for continuity** — same user, multiple devices: changes eventually converge via the API or a sync layer; conflict resolution strategy TBD.

## Open questions

- Monorepo tool (npm workspaces, pnpm, Turborepo, Nx, etc.).
- Auth provider and token model (OAuth, magic link, etc.); how sessions behave when offline for extended periods.
- Sync protocol (event log vs CRUD, last-write-wins vs merge rules, soft delete and tombstones).
- Optional later: server-assisted analytics, ML, or cross-user insights—explicitly secondary to client-side feature parity and must not replace offline-first core behavior without a product and ADR change.

## Related decisions

See [decisions/](decisions/README.md). Link new ADRs here when they affect this overview.
