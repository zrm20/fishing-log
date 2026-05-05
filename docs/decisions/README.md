# Architecture decision records (ADRs)

This folder holds **decisions** about technology and architecture: what we chose, why, and (when relevant) what we rejected.

## Naming

Use sequential numbers and a short slug:

`NNNN-short-title-in-kebab-case.md`

Examples: `0001-monorepo-tooling.md`, `0002-api-framework.md`.

## Suggested structure for each ADR

1. **Title** — same as the slug, human-readable.
2. **Status** — Proposed | Accepted | Superseded by ADR-XXXX | Deprecated
3. **Context** — problem or forces driving a decision.
4. **Decision** — what we decided.
5. **Consequences** — tradeoffs, follow-up work, risks.

## Index

| ADR | Title | Status |
|-----|-------|--------|
| [0000-record-architecture-decisions.md](0000-record-architecture-decisions.md) | Record architecture decisions | Accepted |
| [0001-typescript-full-stack-monorepo.md](0001-typescript-full-stack-monorepo.md) | TypeScript full stack in a monorepo | Accepted |
| [0002-pnpm-workspaces.md](0002-pnpm-workspaces.md) | pnpm workspaces (no Turborepo yet) | Accepted |
| [0003-expo-react-native.md](0003-expo-react-native.md) | Expo for the React Native client | Accepted |
| [0004-ui-nativewind-react-native-reusables.md](0004-ui-nativewind-react-native-reusables.md) | NativeWind and React Native Reusables for UI | Accepted |
| [0005-client-state-react-hooks.md](0005-client-state-react-hooks.md) | TanStack Query for server state; React hooks for client UI; global store deferred | Accepted |
| [0006-shared-package-zod-schemas.md](0006-shared-package-zod-schemas.md) | Shared workspace package for Zod schemas and types | Accepted |

Add a row to this table whenever you add a new ADR.
