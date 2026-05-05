# ADR-0001: TypeScript full stack in a monorepo

## Status

Accepted

## Context

Fishing Log has a React Native client and a backend/API for durability, authentication, and multi-device continuity. Duplicated validation and contract shapes across client and server invite drift bugs and rework. Separate languages per tier would split tooling, types, and contributor mental models.

We want:

- One primary language across the stack for consistency and onboarding.
- A **monorepo** so frontend and backend can import shared modules (schemas, branded IDs, enums, constants) instead of copying definitions.

Choosing workspace **package tooling** is recorded separately; see [ADR-0002: pnpm workspaces](0002-pnpm-workspaces.md). Optional orchestration layers (for example Turborepo) remain open until justified by another ADR.

## Decision

We will implement the **full stack in TypeScript**: the React Native application, backend services, and **shared packages** published only within this repository (not necessarily to npm).

Shared code—for example typed schemas/contracts, validators, and other DRY primitives—will live in **workspace packages** consumable by both client and server. **Adding new runtime dependencies** (including schema libraries) still requires a documented decision and maintainer approval per repository policy.

## Consequences

- **Positive:** End-to-end type alignment, single toolchain for most application code, clearer refactors across boundaries, natural place for shared domain types.
- **Negative:** Tie-in to the JavaScript/TypeScript ecosystem; performance-critical native work may still need targeted native modules outside TS.
- **Follow-up:** [ADR-0002](0002-pnpm-workspaces.md) records **pnpm workspaces**; [ADR-0006](0006-shared-package-zod-schemas.md) records the **shared Zod schema package**; Metro/RN layout and symlink strategy are still to align when the mobile app scaffold exists.
