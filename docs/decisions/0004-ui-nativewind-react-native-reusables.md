# ADR-0004: NativeWind and React Native Reusables for UI

## Status

Accepted

## Context

We need a **component and styling** approach for the Expo React Native client ([ADR-0003](0003-expo-react-native.md)) that stays maintainable as screens grow. Options include ad hoc `StyleSheet` APIs, other design systems, or Tailwind-style utility styling plus a structured component kit.

The maintainers intentionally want to **standardize on widely used, composable UI stacks** they have under-practiced in the past—accepting a learning curve in exchange for skill growth and community alignment.

## Decision

1. **Styling:** Use **[NativeWind](https://www.nativewind.dev/)** (Tailwind-style utility classes for React Native) as the primary styling layer for new UI, integrated with the Expo TypeScript toolchain we adopt at scaffold time.

2. **Components:** Use **[React Native Reusables](https://reactnativereusables.com/)** as the default source of **patterns and primitives** (copy-in or generated components in our repo per that project’s model), composed with NativeWind as documented by those projects.

**Adding or swapping UI libraries** (for example a second design system) still requires maintainer visibility; prefer extending this stack or superseding this ADR rather than mixing unbounded parallel systems.

## Consequences

- **Positive:** Consistent utility-first styling, accessible-oriented building blocks where the libraries provide them, and alignment with common ecosystem examples and hiring familiarity.
- **Negative:** Build-time and config surface (Tailwind / NativeWind pipeline, Reusables’ setup) must be kept in sync with Expo SDK upgrades; abstractions can obscure performance tuning until the team knows the stack well.
- **Follow-up:** Document any project-specific **theme tokens** or **component wrappers** in code or a short internal note when the app exists; revisit this ADR if we outgrow the stack or hit blocking gaps.
