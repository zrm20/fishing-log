# Product

## Vision

Fishing Log helps anglers record trips and outcomes, then use **historical data** to prepare for future outings—**pre-trip briefings** informed by where they fished, conditions, tactics, and results.

## Audience and tenancy

The first real user may be the maintainer (**dogfood**), but the product is **multi-tenant**: any angler gets their **own isolated account**. The experience and documentation should not assume single-user hacks (for example embedded fixed user IDs).

## Principles (agreed)

- **Authentication upfront** — auth is included from early delivery; delaying it is avoided because retrofitting tenancy and sessions is disproportionately painful.
- **Offline first everywhere** — not only logging: **every product feature**, including **pre-trip briefings** and reviewing history, must be usable **without network** whenever the relevant data is already on the device. The server exists to unify data across devices—not to gate routine use behind connectivity.
- **Online sync for continuity** — signed-in users need **consistent history across devices**, via background or explicit sync—not “this phone only.” The backend’s primary responsibility is enabling that continuity (see architecture). Conflict handling and scheduling belong in architecture and ADRs.

## Core entities (draft)

- **Trip** — when and where; optional notes tying conditions and tactics to results.
- **Location** — body of water or spot-level detail (precision TBD).
- **Conditions** — weather, water, seasonality, etc. (fields TBD).
- **Tactics** — gear, techniques, targets (fields TBD).
- **Results** — catches, effort, qualitative outcomes (fields TBD).

## User journeys (to define)

- Sign in (or register) before using product features that persist data or span devices.
- Log a trip quickly on mobile **while offline**; sync when connectivity returns.
- Review history and patterns from local data; updates propagate across devices after sync.
- Generate or view a **pre-trip briefing** from **local** past trips under similar constraints, fully usable offline once trips are present locally.

## Non-goals (TBD)

List what this product explicitly will not do in v1.
