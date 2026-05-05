# Fishing Log

A monorepo for a fishing log application. Users record trips—location, conditions, tactics, and results—and over time use that history for **pre-trip briefings** grounded in their own data. The app is **offline first**; the backend’s main job is **authenticated cloud storage** so the same user’s data stays in sync across devices.

## Getting started

Follow these steps after cloning the repository.

### Prerequisites

- **Node.js 22+** — The repo pins **22** in [`.nvmrc`](.nvmrc). With **nvm**, **fnm**, or **asdf**, run `nvm use` / `fnm use` / `asdf install` from the repo root so your shell matches that file.
- **pnpm** — Enable **Corepack** (bundled with Node) so the correct pnpm version is used automatically:

  ```bash
  corepack enable
  ```

  The exact version is declared in the root [`package.json`](package.json) `packageManager` field.

- **Expo / React Native** — To run the app on simulators or devices you will need platform tooling as usual (for example **Xcode** on macOS for iOS, **Android Studio** for Android, or the **Expo Go** app on a physical device). See the [Expo docs](https://docs.expo.dev/get-started/set-up-your-environment/) for environment setup.

### Install and build

From the **repository root**:

```bash
pnpm install
pnpm run build
```

`pnpm run build` compiles **`@fishing-log/shared`** into `packages/shared/dist/`. The mobile app imports that package; Metro needs those built files (or run `pnpm run typecheck`, which builds shared first).

### Run the mobile app (Expo)

```bash
cd apps/mobile
pnpm start
```

Use the Expo CLI prompts to open **iOS** (`i`), **Android** (`a`), or **web** (`w`), or scan the QR code with **Expo Go**.

### Optional checks

From the repo root:

```bash
pnpm run typecheck
```

### API workspace

**`apps/api`** is currently a **TypeScript stub** wired to shared types—there is **no HTTP server** to start locally until an API framework is chosen and implemented.

## Confirmed stack

- **API** — authentication and **durable storage / sync** for multi-device continuity (details TBD; see [docs](docs/README.md)).
- **React Native** — primary place product behavior and data-on-device live (details TBD).

Other tooling (monorepo layout, CI, auth, storage, sync) will be chosen and recorded as we go.

## Repository layout

This repository is a **pnpm workspace** monorepo:

| Path | Package |
|------|---------|
| [`apps/mobile`](apps/mobile) | `@fishing-log/mobile` — Expo (React Native) client |
| [`apps/api`](apps/api) | `@fishing-log/api` — API placeholder until a framework ADR lands |
| [`packages/shared`](packages/shared) | `@fishing-log/shared` — shared Zod schemas and types ([ADR-0006](docs/decisions/0006-shared-package-zod-schemas.md)) |

Local setup (Node, pnpm, Expo) is covered in **[Getting started](#getting-started)** above. Treat **`docs/` as the single source of truth** for intent, architecture, and decisions.

## Documentation

| Path | Purpose |
|------|---------|
| [docs/contributing.md](docs/contributing.md) | Contributing (humans)—docs, decisions, link to Cursor rules via `AGENTS.md` |
| [docs/README.md](docs/README.md) | Documentation index |
| [docs/product.md](docs/product.md) | Product scope, principles, and journeys |
| [docs/architecture.md](docs/architecture.md) | System overview and backend vs client roles |
| [docs/decisions/](docs/decisions/README.md) | Architecture and technology decision records |

## Development approach

Development is expected to rely heavily on **AI coding agents**. Keeping decisions and direction in `docs/` reduces drift and gives agents consistent context. See **[AGENTS.md](AGENTS.md)** for how agents should route to `docs/`, ADRs, and `.cursor/rules/`.

## License

TBD.
