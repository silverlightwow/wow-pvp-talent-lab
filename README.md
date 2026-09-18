# WoW PvP Talent Lab

**Live app:** https://silverlightwow.github.io/wow-pvp-talent-lab/


A PvP-aware World of Warcraft talent calculator that reconstructs **player-facing PvP tooltip values** from current game data instead of showing only PvE/base talent values.

The current verified release covers **Discipline Priest**. Exact live build provenance is embedded in the generated dataset and shown in the UI. The same verified data is exposed through three views:

- **Talent Tree** — build Class / Hero / Specialization trees and switch between PvE and calculated PvP tooltips.
- **PvE vs PvP** — only talents whose player-facing values actually differ in PvP.
- **Discipline Compendium** — player-facing explanations plus expandable technical provenance for spell-specific PvP modifiers, specialization PvP Aura rules, and runtime/referenced spell dependencies.

## Why this exists

WoW PvP tuning is not represented by one simple multiplier. A talent may have multiple effects with different PvP coefficients; the visible talent may reference another runtime spell; and specialization PvP Aura rules can modify direct, periodic, or absorb output separately. Applying every modifier at the talent/spell level produces incorrect values.

This project keeps those layers separate and composes them only when effect semantics justify it.

```text
Raidbots current talent topology
            +
SimulationCraft exact-build dependencies
            +
Wowhead current Spell Details / player tooltip
            +
Drustvar current PvP spell coefficients + PvP Aura
            ↓
Effect-level reconciliation and validation
            ↓
Verified player-facing PvP tooltip catalog
            ↓
Talent Tree / PvE vs PvP / Compendium
```

## Current verified Discipline dataset

The checked-in snapshot contains 133 selectable talent entries. In the current snapshot, 23 entries have a changed player-facing PvP tooltip; additional talents have hidden/runtime PvP mechanics exposed in the Compendium.

The live website workflow **does not hard-code those counts**. Counts may legitimately change after tuning. A scheduled data rebuild validates the current sources and deploys only when the pipeline resolves cleanly.

## Automatic updates and last-known-good deployment

`.github/workflows/pages.yml` runs on pushes, manual dispatch, and every six hours.

Each run:

1. installs the Python data engine;
2. runs parser/reconciliation tests;
3. fetches the current talent tree and PvP sources;
4. requires Raidbots and SimulationCraft to agree on the live build;
5. fails on fetch errors, unresolved effects, missing tooltips, or unsafe render states;
6. generates `web/data/priest-discipline.json` and `.js` atomically;
7. syntax-checks the frontend;
8. deploys `web/` to GitHub Pages only after every validation passes.

If a source changes format or a new hotfix becomes ambiguous, the workflow fails and the previous GitHub Pages deployment remains the last known good version instead of publishing guessed values.

## Run locally

The checked-in site snapshot can be opened directly:

```text
web/index.html
```

No local server is required for that mode.

For Python development:

```bash
python -m pip install -e ".[dev]"
pytest -q
```

To rebuild the current live Discipline dataset:

```bash
python scripts/build_site_data.py --class-name Priest --spec-name Discipline
```

Network access is required for a live rebuild.

## PWA

When hosted through GitHub Pages (or another HTTPS host), the site registers `web/service-worker.js` and can be installed as a Progressive Web App. The current verified dataset and core frontend are cached for offline use. Direct `file://` use continues to work; service workers are simply skipped there.

## Important data rules

- Current operational values never carry forward an old Drustvar build silently.
- SimulationCraft structural relationships use explicit trigger/formula/description references, not noisy reverse `Affected Spells` relationships.
- PvP Aura is applied only to semantically proven output kinds (`direct`, `periodic`, `absorb`).
- Generic talent parameters are not multiplied by an output Aura merely because they mention the same underlying spell.
- A zero SimC Base Value is not promoted over a real SP coefficient; this distinction is required for spells such as Power Word: Radiance.
- Tiered Apex entries are one talent progression, not Choice Nodes. True choices come from the talent graph's `node_type="choice"`.
- Warcraft Wiki history is evidence/audit context, not a source for silently calculating current operational values.

## Project structure

```text
pvpcalc/
  pipeline.py              integrated current-state audit
  catalog.py               application-facing TalentRecord catalog
  tooltip_renderer.py      conservative spec-aware tooltip rendering
  pvp_aura.py              specialization PvP Aura normalization
  pvp_value.py             final coefficient composition
  sources/
    raidbots.py
    simc.py
    wowhead.py
    drustvar.py
    wiki.py
scripts/
  build_site_data.py       validated live dataset builder
web/
  index.html
  app.js
  styles.css
  manifest.json
  service-worker.js
  data/
.github/workflows/
  pages.yml                scheduled verification + Pages deployment
```

## Roadmap

The immediate roadmap is to publish the Discipline site, then generalize the data catalog from Discipline to every Priest specialization and finally other classes/specs. A WoW in-game companion addon can later consume generated data from the same verified engine without duplicating the datamining logic.
