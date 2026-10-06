# WoW PvP Talent Lab

[Open the calculator](https://silverlightwow.github.io/wow-pvp-talent-lab/)

A World of Warcraft talent calculator with player-facing PvE and PvP tooltips for all 40 current specializations across 13 classes. The catalog is discovered from live talent data, including Devourer, rather than maintained as a fixed list.

- **Talent Tree:** class, hero, and specialization trees, source-defined point gates, choice talents, and description-only PvE/PvP tooltips. Ranked talents show the maximum rank when unlearned, the current and next ranks while partially learned, and the current rank when complete. On touch screens, tap a talent to inspect its tooltip and add or remove ranks.
- **PvE vs PvP:** complete PvE and PvP descriptions side by side, with changed values highlighted and a mobile card layout.
- **PvP mechanics:** spell modifiers, specialization PvP Aura rules, referenced effects, and expandable source evidence with spell/aura IDs, separate source builds, source links, and the multiplication behind each value. Mobile details appear beneath the selected entry.
- **Direction markers:** green for buffs, red for nerfs, and neutral purple for mixed or unclassified changes. Comparisons, choice menus, and tree tooltips use the same classification.
- **[Documentation](https://silverlightwow.github.io/wow-pvp-talent-lab/docs.html):** aura scope, worked examples, source provenance, pipeline architecture, and verification limits, linked from the “Made by SilverLight” footer.

## Data and verification

Raidbots supplies talent topology. SimulationCraft supplies exact-build spell descriptions and dependencies. Wowhead and Drustvar supply effect-level evidence and PvP coefficients. The engine reconciles concrete effects before rendering player-facing values; it does not apply a spell-wide multiplier to every number in a tooltip.

Baseline class/spec abilities are also discovered from SimulationCraft's exact-build class and specialization spellbook tables, using current Raidbots class/spec identities and specialization replacement IDs. They enter the same dependency, effect, Aura, source-reconciliation and tooltip pipeline as talent roots. Verified PvP differences appear in comparison/mechanics views as non-tree abilities. Official non-tree hotfix resolution remains an additional discovery path; there are no maintained per-spell inclusion lists.

Each dataset records the available baseline roots, exposed PvP roots and spellbook entries absent from the class dump. Missing utility spells and system auras are retained in that inventory; an absent ability with a known current Drustvar/Aura or exact generated PvP modifier blocks publication. This covers available class/spec ability evidence, not an exhaustive claim about dedicated PvP talents, every pet family, racial abilities or all spells in the game.

`VERIFIED` means the pipeline's source and rendering checks passed. It is not a claim that every interaction has been tested inside the game. Each dataset records its build, verification counts, and source evidence.

Rank values come from the exact-build TraitDefinition overrides, including set, multiply, and add operations. Only the expressions tied to those effects change; unrelated durations and percentages are preserved. PvP modifiers are then applied to the ranked effects. Missing or ambiguous rank descriptions block publication.

Multiline spell descriptions retain all paragraphs and effect references. An older Drustvar effect can be classified as superseded only when its game effect identity matches the current SimulationCraft effect and current Wowhead agrees on the effect and multiplier. The old observation remains visible in provenance; ambiguous cases block publication.

## Automatic updates

`.github/workflows/all-data-pages.yml` runs on relevant pushes, manual dispatch, and every six hours. It:

1. runs the Python regression tests and discovers the complete specialization list;
2. plans source requests once, pins SimulationCraft to a commit, and captures disjoint spell requests on four runners; it verifies partition completeness, matching input plans, and response hashes before sharing one common snapshot across the specialization matrix;
3. builds each specialization twice without network access and compares tooltips, all ranks, and numeric mechanics;
4. requires matching source builds and talent content hashes, complete tooltips, and zero unresolved or review-required records;
5. merges exactly the discovered list without damaging the previous snapshot on failure;
6. runs Chromium checks for every specialization and hero tree at 2560, 1440, 1024, 390, and 320 pixels, including tooltips, touch controls, point allocation, rank transitions, connection alignment, complete comparison text, and PvP mechanics;
7. commits the verified data and publishes the site only after all checks pass.

After every deployment (including UI-only and recovered snapshots), an additional job checks every published file against the exact artifact's SHA-256 inventory. It retries only files that have not propagated yet. `site-health.yml` checks the frontend and manifest after successful publication or on manual dispatch, and fails if data is older than 12 hours. There is no hourly health-check schedule; the separate hourly ChatGPT monitor is paused. A one-time audit on 7 October reviews update activity and reliability.

Known audit effects must all survive catalog generation. Published datasets include a complete numeric coverage inventory. With the same parser, tree, official notes, Drustvar, and exact SimulationCraft evidence, disappearance or numeric drift of independently known effects blocks publication. Changed authoritative evidence permits real hotfixes within the same client build. Source failures remain visible; they are not erased to make logs appear clean.

Raw source snapshots and specialization diagnostics are retained as Actions artifacts for 14 days. A snapshot older than six hours cannot be used for a new verified publication. The next scheduled cycle collects fresh responses, including new server hotfixes; it never falls back to a persistent cache keyed only by client build. Actions are pinned to audited release commits; Dependabot proposes action updates weekly and Python/npm updates monthly for review and CI.

If any stage fails, the previous GitHub Pages deployment remains available. Generated JSON and JavaScript snapshots are checked for equality. The app loads datasets on demand and refreshes their cache keys even for updates within the same game build.

Official Blizzard PvP notes are an additional source. The parser can verify supported numeric percentages and durations against the current spell data; it retains previously published directives while they remain in the same rolling Blizzard article. If the latest numeric PvP notes contain an unfamiliar format, or the article's date headings change, the refresh stops before publishing. A failed refresh leaves the previous successful dataset online, so the site's build date must be checked separately from the Actions schedule.

This is not an unconditional parser for future patches. Qualitative fixes, new kinds of numerical changes, PvP talents absent from the exact-build class/spec dump, changes to Blizzard's article ID, and lag or outages in the other sources may require review. The current official article ID is configured in `pvpcalc/sources/blizzard_hotfixes.py`. Specialization discovery, hotfix scoping, and rank-condition ordering use Raidbots data; a few legacy icon aliases in `web/app.js` are explicit asset corrections, not PvP value overrides.

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
