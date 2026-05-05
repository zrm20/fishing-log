# Architecture

## High level

Implementation uses **TypeScript end to end** in a **monorepo** managed with **pnpm workspaces**, with workspace packages for shared contracts and utilities so client and backend stay aligned. Cross-cutting **wire format and portable domain schemas** live in a **shared package** defined with **Zod** ([ADR-0006](decisions/0006-shared-package-zod-schemas.md)). See also [ADR-0001](decisions/0001-typescript-full-stack-monorepo.md) and [ADR-0002](decisions/0002-pnpm-workspaces.md). Task pipelines use **plain `package.json` scripts** for now; **Turborepo** remains optional via a future ADR if orchestration pain appears.

- **React Native app (Expo)** — owns **all user-visible features**: logging, history, patterns, **pre-trip briefings**, and any insight UI. Logic runs **against local data** so nothing essential requires a round trip while offline. Implementation details (SQLite, embeddings, rules engine on device—TBD) stay on the client or shared packages unless an ADR says otherwise. Delivery and toolchain: [ADR-0003](decisions/0003-expo-react-native.md); UI stack: [ADR-0004](decisions/0004-ui-nativewind-react-native-reusables.md); client state (TanStack Query for server state, React hooks for client UI state, global store deferred): [ADR-0005](decisions/0005-client-state-react-hooks.md).
- **API / backend** — **priority one: durable cloud storage** that permits **seamless multi-device continuity** for the same authenticated user (upload/download or sync reconciliation). **Authentication** aligns with that: identity and tenancy for whose blobs belong to whom. The backend is **not** the primary place features “live”; avoid designing the product around server-side-only computation for core workflows.

## Agreed constraints

- **Offline first for every feature** — if a feature ships, users must be able to use it without network assuming local data supports it (for example briefing after trips have synced to this device earlier).
- **Authenticated multi-tenant use** — accounts from early delivery; data is partitioned per user. Session/token behavior offline (refresh, revocation, duration) is TBD.
- **Sync for continuity** — same user, multiple devices: changes eventually converge via the API or a sync layer; conflict resolution strategy TBD.

## Open questions

- Auth provider and token model (OAuth, magic link, etc.); how sessions behave when offline for extended periods.
- Sync protocol (event log vs CRUD, last-write-wins vs merge rules, soft delete and tombstones).
- Optional later: server-assisted analytics, ML, or cross-user insights—explicitly secondary to client-side feature parity and must not replace offline-first core behavior without a product and ADR change.

### Implementation follow-ups (from ADRs)

These are tracked in Accepted ADRs as engineering work—not open “whether,” but **how / when**:

- **Expo app + monorepo layout** — Align **Metro** (`projectRoot`, `watchFolders`, symlink-aware resolution if needed) with **pnpm**’s symlinked `node_modules` when the mobile scaffold exists ([ADR-0001](decisions/0001-typescript-full-stack-monorepo.md), [ADR-0002](decisions/0002-pnpm-workspaces.md)).
- **API / sync contract versioning** — Define compatibility rules when shared **Zod** schemas evolve across client and server ([ADR-0006](decisions/0006-shared-package-zod-schemas.md)).

## Related decisions

See [decisions/](decisions/README.md).

- [ADR-0001 — TypeScript full stack in a monorepo](decisions/0001-typescript-full-stack-monorepo.md)
- [ADR-0002 — pnpm workspaces (no Turborepo yet)](decisions/0002-pnpm-workspaces.md)
- [ADR-0003 — Expo for the React Native client](decisions/0003-expo-react-native.md)
- [ADR-0004 — NativeWind and React Native Reusables for UI](decisions/0004-ui-nativewind-react-native-reusables.md)
- [ADR-0005 — TanStack Query for server state; React hooks for client UI; global store deferred](decisions/0005-client-state-react-hooks.md)
- [ADR-0006 — Shared workspace package for Zod schemas and types](decisions/0006-shared-package-zod-schemas.md)
