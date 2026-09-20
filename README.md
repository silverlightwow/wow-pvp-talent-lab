# WoW PvP Talent Lab

[Open the calculator](https://silverlightwow.github.io/wow-pvp-talent-lab/)

A World of Warcraft talent calculator with player-facing PvE and PvP tooltips for all 40 current specializations across 13 classes. The catalog is discovered from live talent data, including Devourer, rather than maintained as a fixed list.

- **Talent Tree:** class, hero, and specialization trees, source-defined point gates, choice talents, and PvE/PvP tooltips. On touch screens, tap a talent to inspect its tooltip and add or remove ranks.
- **PvE vs PvP:** talents whose rendered values change in PvP, with a mobile card layout.
- **Compendium:** spell modifiers, specialization PvP Aura rules, referenced effects, and expandable source evidence. Mobile details appear beneath the selected entry.

## Data and verification

Raidbots supplies talent topology. SimulationCraft supplies exact-build spell descriptions and dependencies. Wowhead and Drustvar supply effect-level evidence and PvP coefficients. The engine reconciles concrete effects before rendering player-facing values; it does not apply a spell-wide multiplier to every number in a tooltip.

`VERIFIED` means the pipeline's source and rendering checks passed. It is not a claim that every interaction has been tested inside the game. Each dataset records its build, verification counts, and source evidence.

Multiline spell descriptions retain all paragraphs and effect references. An older Drustvar effect can be classified as superseded only when its game effect identity matches the current SimulationCraft effect and current Wowhead agrees on the effect and multiplier. The old observation remains visible in provenance; ambiguous cases block publication.

## Automatic updates

`.github/workflows/all-data-pages.yml` runs on relevant pushes, manual dispatch, and every six hours. It:

1. runs the Python regression tests and discovers the complete specialization list;
2. builds and validates each specialization independently;
3. requires matching source builds and talent content hashes, complete tooltips, and zero unresolved or review-required records;
4. merges exactly the discovered list without damaging the previous snapshot on failure;
5. runs Chromium checks for every specialization and hero tree at 1440, 390, and 320 pixels, including tooltips, touch controls, point allocation, comparison, and Compendium;
6. commits the verified data and publishes the site only after all checks pass.

If any stage fails, the previous GitHub Pages deployment remains available. Generated JSON and JavaScript snapshots are checked for equality. The app loads datasets on demand and refreshes their cache keys even for updates within the same game build.

## Run locally

Open `web/index.html` directly; a local server is optional.

```bash
python -m pip install -e '.[dev]'
pytest -q
npm ci
npx playwright install chromium
npm test
```

Rebuild the complete catalog (requires network access):

```bash
python scripts/build_all_site_data.py --output-dir web/data
python scripts/validate_site_data.py --data-dir web/data
```

For one specialization, use a separate output directory:

```bash
python scripts/build_all_site_data.py --class-name Priest --spec-name Discipline --output-dir spec-data
```

## PWA and offline use

The HTTPS site is installable. Its core interface and default dataset are cached, followed by other datasets as they are opened. Opening a specialization offline requires that dataset to have been loaded previously. Direct `file://` use reads the checked-in JavaScript datasets without a service worker.

## Data rules

- Current values never silently inherit an older Drustvar build.
- Spell dependencies use explicit trigger, formula, and description references, not noisy reverse `Affected Spells` lists.
- PvP Aura applies only to proven output kinds such as direct, periodic, and absorb effects.
- Generic talent parameters do not inherit an output Aura merely because they reference the same spell.
- A zero base value does not override a real spell-power coefficient.
- Tiered Apex entries remain one progression; true choices follow the talent graph's choice-node type.
- Historical wiki evidence is audit context, not an automatic source for current values.
