# Fishing Log

A monorepo for a fishing log application. Users record trips—location, conditions, tactics, and results—and over time use that history for **pre-trip briefings** grounded in their own data.

## Confirmed stack

- **API** — backend and data model (details TBD; see [docs](docs/README.md)).
- **React Native** — mobile client (details TBD).

Other tooling (monorepo layout, CI, auth, storage, sync) will be chosen and recorded as we go.

## Repository layout

This repository is intended as a **monorepo**. Package and app folders (for example `apps/` and `packages/`) will appear once structure is decided; until then, treat **`docs/` as the single source of truth** for intent, architecture, and decisions.

## Documentation

| Path | Purpose |
|------|---------|
| [docs/README.md](docs/README.md) | Documentation index |
| [docs/product.md](docs/product.md) | Product scope and user journeys (stub) |
| [docs/architecture.md](docs/architecture.md) | System overview (stub) |
| [docs/decisions/](docs/decisions/README.md) | Architecture and technology decision records |

## Development approach

Development is expected to rely heavily on **AI coding agents**. Keeping decisions and direction in `docs/` reduces drift and gives agents consistent context.

## License

TBD.
