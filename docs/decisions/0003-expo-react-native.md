# ADR-0003: Expo for the React Native client

## Status

Accepted

## Context

The mobile client is a **React Native** app that owns all user-visible features and offline-first behavior ([architecture.md](../architecture.md)). We need a baseline that shortens **time to first run**, keeps **build and deploy** paths straightforward, and reduces native-tooling friction for day-to-day development—without abandoning the ability to reach native capabilities when the product requires them.

Alternatives include a **bare React Native** workflow (full control, more initial setup and maintenance) or other managed layers; those trade faster vendor lock-in on Expo’s toolchain for more manual native project ownership up front.

## Decision

The React Native application will be built with **Expo** on top of **React Native**, using Expo’s project shape, dev client / EAS-oriented deployment story, and documented upgrade path for the SDK versions we pin at implementation time.

Exact SDK version, dev-client vs Expo Go usage for local dev, and EAS configuration are **implementation details** chosen when the app scaffold lands; they should stay compatible with this ADR’s intent (fast startup, simpler environment, practical shipping).

## Consequences

- **Positive:** Faster onboarding, consistent dev entrypoints, streamlined builds and store delivery via Expo’s documented paths; access to the broader Expo module ecosystem when we add dependencies per policy.
- **Negative:** Coupling to Expo’s release cadence and tooling; some native or bleeding-edge integrations may require **custom dev clients** or config—acceptable when scoped to product needs.
- **Follow-up:** Align **Metro / monorepo layout** with [ADR-0002](0002-pnpm-workspaces.md) when `packages/*` and the app coexist; validate against the pinned Expo SDK docs.
