# ADR-0006: Shared workspace package for Zod schemas and types

## Status

Accepted

## Context

The stack is TypeScript across **Expo** and **API** code paths in one monorepo ([ADR-0001](0001-typescript-full-stack-monorepo.md), [ADR-0002](0002-pnpm-workspaces.md)). Duplicated request/response payloads and domain literals between client and server drift quickly and undermine confidence in validation.

We want a **single source of truth** for wire formats and portable domain shapes: **schemas** plus **derived static types**, consumable by both the frontend and backend without copy-paste.

Adopting **`zod`** as the runtime schema implementation is recorded here as the approving decision for that dependency. Zod fits TypeScript well (including `z.infer<typeof Schema>`), composes cleanly for evolving contracts, and is widely documented.

Alternatives considered at a glance: handwritten TypeScript only (no runtime guard at boundaries); JSON Schema codegen; Yup, ArkType, Valibot—each workable, but **Zod** balances ecosystem familiarity and expressiveness for this project.

## Decision

1. Maintain one or more **pnpm workspace packages** (exact package name and folder layout chosen at scaffold time; start with a **single** package unless boundaries force a split) whose **published surface** is shared **Zod schemas** and **re-exported inferred types** (and small related constants or helpers that belong with those contracts).

2. Both the **Expo client** and **backend** must **depend on this package** for anything that represents a **cross-boundary contract** (HTTP bodies, query params, sync envelopes, etc.), rather than redefining parallel types in app-only modules.

3. **Zod** (`zod`) is the **mandated** library for defining those schemas in the shared package. Validation at runtime (`.parse` / `.safeParse`) is expected at **trust boundaries** appropriate to each tier (for example incoming API payloads on the server; responses and form normalization on the client—exact call sites evolve with features).

4. **Domain-only** types that never cross the wire and need no runtime schema may still live in app packages or the shared package without Zod if that stays clearer; the shared package is not required to Zod-model every local implementation detail.

## Consequences

- **Positive:** One definition drives both TypeScript types and runtime checks; refactors to contracts stay centralized; aligns with TanStack Query and typical API handler patterns.
- **Negative:** Bundle size and startup cost of Zod on the client must stay acceptable (monitor as schemas grow); breaking schema changes require coordinated client/server releases or explicit versioning rules—**versioning and compatibility** for sync/API remain follow-up policy as the product hardens.
- **Follow-up:** Document **package name** and **import path convention** in the repo when the workspace is created; consider splitting sub-packages only if the shared surface becomes hard to navigate or creates unwanted dependency edges.
