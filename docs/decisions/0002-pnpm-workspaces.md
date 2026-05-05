# ADR-0002: pnpm workspaces (no Turborepo yet)

## Status

Accepted

## Context

[Fishing Log uses TypeScript in a monorepo](0001-typescript-full-stack-monorepo.md) so client and backend can share packages. We need a **package manager and workspace linker** that supports multiple in-repo packages, reproducible installs, and reasonable discipline around declared dependencies.

Prior research contrasted npm workspaces (minimal hoisting familiarity) with pnpm (stricter graphs, symlink layout, efficiency). React Native Metro may require intentional `projectRoot` / `watchFolders` (and sometimes symlink-aware resolution); that stays a **Metro/RN convention** documented or decided separately, not duplicated here beyond acknowledging the symlink tradeoff.

We do **not** need a dedicated monorepo **task-runner / pipeline cache** tool on day one—root and package **`package.json` scripts** plus CI invoking `pnpm` are enough until fan-out or cache pain warrants another decision.

## Decision

1. **`pnpm`** is the package manager with **`pnpm workspaces`** for linking packages in this repository (`pnpm-workspace.yaml`, `pnpm-lock.yaml`).

2. **Task orchestration** is **plain scripts** (`package.json` at root and in packages) and CI commands (`pnpm install`, `pnpm -r …` as applicable). **`Turborepo` is intentionally not adopted** yet; adding it remains an option via a **future ADR** if we want task graphs, local/remote caching, or consistent pipeline ordering across many workspaces.

3. **`npm`, Yarn (Berry), and Turborepo as the mandatory orchestrator** are out of scope for the current baseline. Switching primary package managers would supersede this ADR.

## Consequences

- **Positive:** Fast, disk-efficient installs; clearer dependency declarations than naive hoisting; one lockfile discipline (`pnpm-lock.yaml`).
- **Negative:** Symlink-based `node_modules` can surprise Metro unless layout and config match our RN app setup—plan Metro monorepo settings when the app scaffold lands.
- **Follow-up:** When CI or local dev repeatedly duplicates “run X before Y across packages,” propose a separate ADR for **Turborepo** (or equivalent) rather than accumulating ad-hoc shell glue.
