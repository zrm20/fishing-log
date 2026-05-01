# ADR-0000: Record architecture decisions

## Status

Accepted

## Context

Fishing Log is built iteratively, including with AI agents. Without a written record, tooling and pattern choices are easy to forget or contradict across sessions.

## Decision

We will record significant technical and architectural decisions as markdown files in `docs/decisions/`, following the conventions in [README.md](README.md) in this folder.

Not every small choice needs an ADR—use judgment for anything that would confuse a future contributor or agent if undocumented.

## Consequences

- New decisions should get a new numbered file and a row in the decisions README index.
- Product and high-level system shape remain summarized in [../architecture.md](../architecture.md) and [../product.md](../product.md), with ADRs linked where helpful.
