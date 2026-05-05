# ADR format (skill helper)

In **Fishing Log**, ADRs live in **`docs/decisions/`** and are indexed in **[`docs/decisions/README.md`](../../../docs/decisions/README.md)**. Use sequential numbering and kebab-case slugs: `0001-short-title.md`, `0002-other-title.md`, etc.

The folder already exists in this repo; in a greenfield repo, create **`docs/decisions/`** when the first ADR is needed.

**Canonical structure** for new ADRs here: **Status**, **Context**, **Decision**, **Consequences** — see the index README and existing files (for example [ADR-0000](../../../docs/decisions/0000-record-architecture-decisions.md)).

## Minimal template (when a one-paragraph record is enough)

```md
# ADR-NNNN: {Short title}

## Status

Accepted

## Context

{What forced the choice.}

## Decision

{What we decided and why.}

## Consequences

{Tradeoffs and follow-ups, or "none yet."}
```

Shorter prose-only ADRs may still appear in other ecosystems; this repo prefers the sections above.

## Optional extras

Include only when they add genuine value:

- **Considered options** — when rejected alternatives matter later
- **Superseded by ADR-NNNN** — in Status when replaced

## Numbering

Scan **`docs/decisions/`** for the highest existing `NNNN` and increment by one. Update **`docs/decisions/README.md`** with a new index row whenever you add an ADR.

## When to offer an ADR

All three of these must be true:

1. **Hard to reverse** — the cost of changing your mind later is meaningful
2. **Surprising without context** — a future reader will look at the code and wonder "why on earth did they do it this way?"
3. **The result of a real trade-off** — there were genuine alternatives and you picked one for specific reasons

If a decision is easy to reverse, skip it — you'll just reverse it. If it's not surprising, nobody will wonder why. If there was no real alternative, there's nothing to record beyond "we did the obvious thing."

### What qualifies

- **Architectural shape.** "We're using a monorepo." "The write model is event-sourced, the read model is projected into Postgres."
- **Integration patterns between contexts.** "Ordering and Billing communicate via domain events, not synchronous HTTP."
- **Technology choices that carry lock-in.** Database, message bus, auth provider, deployment target. Not every library — just the ones that would take a quarter to swap out.
- **Boundary and scope decisions.** "Customer data is owned by the Customer context; other contexts reference it by ID only." The explicit no-s are as valuable as the yes-s.
- **Deliberate deviations from the obvious path.** "We're using manual SQL instead of an ORM because X." Anything where a reasonable reader would assume the opposite. These stop the next engineer from "fixing" something that was deliberate.
- **Constraints not visible in the code.** "We can't use AWS because of compliance requirements." "Response times must be under 200ms because of the partner API contract."
- **Rejected alternatives when the rejection is non-obvious.** If you considered GraphQL and picked REST for subtle reasons, record it — otherwise someone will suggest GraphQL again in six months.
