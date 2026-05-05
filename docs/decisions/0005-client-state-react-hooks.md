# ADR-0005: TanStack Query for server state; React hooks for client UI; global store deferred

## Status

Accepted

## Context

The Expo client ([ADR-0003](0003-expo-react-native.md)) needs predictable **state and data flow** as features grow. It helps to separate:

- **Server state** — data fetched from or written through the API, with caching, background refresh, retries, and request de-duplication concerns.
- **Client UI state** — local-only concerns: form drafts, modal visibility, navigation params, ephemeral UI flags.
- **Global client state** — cross-cutting in-memory models shared across unrelated subtrees without prop drilling—often Redux, Zustand, Jotai, MobX, or similar.

We want **minimal unbounded global state**, while acknowledging that **TanStack Query** (React Query) is the de facto baseline for async server/cache concerns in React and matches our TypeScript-first stack ([ADR-0001](0001-typescript-full-stack-monorepo.md)).

Offline-first behavior ([architecture](../architecture.md)) means server cache and mutations must eventually align with **local persistence and sync**; those integrations are broader than this ADR and may need follow-up conventions or ADRs as the sync story firms up.

## Decision

1. **Server state:** Use **[TanStack Query](https://tanstack.com/query/latest)** (`@tanstack/react-query`) for fetching, caching, and updating **remote/server-backed** data in the Expo client unless a narrower primitive is clearly sufficient for a trivial one-off.

2. **Client UI state (non-server):** Continue to use **React’s built-in APIs**—`useState`, `useReducer`, `useContext`, and related hooks—for **local** UI and feature state **that is not modeled as TanStack Query cache**.

3. **Global client state libraries** (Redux, Zustand, Jotai, MobX, etc.): **Not adopted as a baseline.** If prop drilling or scattered context becomes unacceptable, propose a **separate ADR** naming the library and the boundaries it owns before it spreads through the codebase.

TanStack Query is the **explicit exception** to “defer third-party global/state libraries”: it is mandated for server-state concerns, not for replacing local UI state or arbitrary app-wide stores.

## Consequences

- **Positive:** Consistent patterns for API reads/writes and cache lifecycle; avoids bespoke `useEffect`/fetch duplication; aligns with widespread React ecosystem practice.
- **Negative:** TanStack Query is an additional dependency and mental model (keys, staleness, devtools); interplay with strict offline workflows must be designed deliberately as sync and persistence land.
- **Follow-up:** When adding a global client-state tool, record **why** hooks and Query boundaries were insufficient and what each layer owns.
