# Contributing

For **people** contributing to Fishing Log—not a second copy of agent policy.

## Where truth lives

- **`docs/`** — product intent, architecture, and how the software should behave. Update these when behavior or scope changes; see [README.md](README.md) for the index.
- **`docs/decisions/`** — ADRs for meaningful technical choices (**including new dependencies**), indexed in **[decisions/README.md](decisions/README.md)**.

**Coding habits** (documentation workflow, SOLID/comments, testing pyramid, PR size): live in repo **[`.cursor/rules/`](../.cursor/rules/)**. Those rules are enforced for Cursor agents here; humans should skim the same files so reviews stay aligned—**do not expect this page to duplicate their text**, or it will fall out of date.

Routing index for automation (priorities and links): root **[AGENTS.md](../AGENTS.md)**.

## Before you ship a behavioral change

- Confirm or update **`docs/product.md`** and **`docs/architecture.md`** (or another focused doc under `docs/`) so intent matches the diff.
- If you add or swap a **dependency** or **workspace package**, add/update an ADR under `docs/decisions/` and obtain **maintainer approval** before landing the change—not “approval” inferred from a chat transcript alone.

If code and `docs/` disagree, **`docs/` wins** until it is consciously revised.

## Optional agent workflows

Skills under **[`.agents/skills/`](../.agents/skills/)** help with tasks like stress-testing plans or authoring PRDs; they never override `docs/` or ADRs.

## Contributing doc scope

Add **human-oriented** conventions here once they exist—for example repo layout, branch strategy, CI, licensing—rather than transcribing Cursor rule bodies into prose.

## Workspace layout

- **Install:** from the repo root, run `pnpm install` (use **pnpm** with **Corepack**: `corepack enable`; the root `packageManager` field pins the pnpm version).
- **Packages:** runnable apps live under **`apps/`** (`@fishing-log/mobile`, `@fishing-log/api`); libraries under **`packages/`** (`@fishing-log/shared` for cross-boundary Zod contracts).
- **Checks:** `pnpm run build` compiles shared + API stubs; `pnpm run typecheck` runs TypeScript across workspaces (shared is built first so `.d.ts` consumers resolve).
