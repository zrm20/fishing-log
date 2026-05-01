# Fishing Log

A monorepo for a fishing log application. Users record trips—location, conditions, tactics, and results—and over time use that history for **pre-trip briefings** grounded in their own data. The app is **offline first**; the backend’s main job is **authenticated cloud storage** so the same user’s data stays in sync across devices.

## Confirmed stack

- **API** — authentication and **durable storage / sync** for multi-device continuity (details TBD; see [docs](docs/README.md)).
- **React Native** — primary place product behavior and data-on-device live (details TBD).

Other tooling (monorepo layout, CI, auth, storage, sync) will be chosen and recorded as we go.

## Repository layout

This repository is intended as a **monorepo**. Package and app folders (for example `apps/` and `packages/`) will appear once structure is decided; until then, treat **`docs/` as the single source of truth** for intent, architecture, and decisions.

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
