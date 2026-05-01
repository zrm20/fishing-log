# Guidance for coding agents

This file is a **routing index**. The full policies live in **`docs/`** and **`.cursor/rules/`**; do not treat this file as a duplicate source of truth. **Humans** contributing to the repo should read **[docs/contributing.md](docs/contributing.md)** for the same map from a collaborator’s perspective.

## Authoritative order

1. **`docs/`** — product intent, architecture, and how the system should behave.
2. **`docs/decisions/`** — recorded technical choices (ADRs). **Do not add dependencies** without a decision here and **maintainer approval** (not implied from chat).
3. **Code** — when code and `docs/` disagree, **`docs/` is correct** until someone deliberately updates the docs; do not “fix” drift by silently changing behavior to match old code.

Start from [docs/README.md](docs/README.md).

## Cursor rules (engineering habits)

These are **always-applied** in Cursor for this repo. Other tools should follow the same files if they can read them:

| File | Topic |
|------|--------|
| [`.cursor/rules/documentation-source-of-truth.mdc`](.cursor/rules/documentation-source-of-truth.mdc) | Docs before and with features |
| [`.cursor/rules/dependencies-and-adrs.mdc`](.cursor/rules/dependencies-and-adrs.mdc) | ADR + approval before new packages |
| [`.cursor/rules/small-focused-changes.mdc`](.cursor/rules/small-focused-changes.mdc) | Small, reviewable changes |
| [`.cursor/rules/testing-tdd-pyramid.mdc`](.cursor/rules/testing-tdd-pyramid.mdc) | Testing expectations |
| [`.cursor/rules/clean-code-solid-comments.mdc`](.cursor/rules/clean-code-solid-comments.mdc) | Clean code, SOLID, when to comment |

## Optional workflows

Under [`.agents/skills/`](.agents/skills/) are **optional** task skills (e.g. grilling a plan, PRD export). Use them when the task matches; they do not override `docs/` or ADRs.

## Repository context

If the codebase adds a root **`CONTEXT.md`** (domain vocabulary and boundaries), treat it as a **primary navigation aid** alongside `docs/` once it exists.
