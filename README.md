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

Active and passive baseline class/spec abilities are also discovered from SimulationCraft's exact-build class and specialization spellbook tables, using current Raidbots class/spec identities and specialization replacement IDs. They enter the same dependency, effect, Aura, source-reconciliation and tooltip pipeline as talent roots. Verified PvP differences appear in comparison/mechanics views as non-tree abilities. Official non-tree hotfix resolution remains an additional discovery path; there are no maintained per-spell inclusion lists. Exact scalar client formulas also connect per-tick database amounts to visible totals without modifying duration or cooldown numbers.

Each dataset records the available baseline roots, exposed PvP roots and spellbook entries absent from the class dump. Missing utility spells and system auras are retained in that inventory; an absent ability with a known current Drustvar/Aura or exact generated PvP modifier blocks publication. This covers available class/spec ability evidence, not an exhaustive claim about dedicated PvP talents, every pet family, racial abilities or all spells in the game.

Baseline-to-talent references are audited in addition to talent-to-baseline references. When a statless tooltip service emits an unusable character amount, a fully resolved exact client description can display SP/AP coefficients instead. Level-scaled amounts remain separate from literal database base values, and exact scalar talent conditions preserve their PvP differences in both displayed alternatives. Periodic totals allow only the rounding precision actually printed by the tooltip source.

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
6. runs Chromium checks for every specialization and hero tree at ten widths from 320 to 2560 pixels, including tooltips, touch controls, point allocation, rank transitions, connection alignment, complete comparison text, and PvP mechanics; the complete frontend regression suite also runs against the newly assembled data;
7. commits the verified data and publishes the site only after all checks pass.

After every actual deployment (including UI-only and recovered snapshots), the publisher checks every published file against the exact artifact's SHA-256 inventory and runs the full live Chromium suite. These checks use the exact packaged source revision. It retries only files that have not propagated yet. `site-health.yml` independently checks the frontend and manifest every three hours or on manual dispatch. It fails if either the publication or its original source capture is older than 12 hours; republishing old data cannot reset source freshness. The separate hourly ChatGPT monitor remains paused.

Mixed source/UI pushes wait for the successful data build. UI-only pushes can publish without rebuilding all sources when the checked-in catalog was built by the current parser. Skipped publication routes do not launch post-deployment monitors; the independent health/browser schedules remain active.

The calculator reports verification, source freshness and conditional ability coverage separately. An overdue source capture remains overdue after republishing; missing or future timestamps are unknown rather than verified current. Service-worker migration checks query the actual controlling worker's cache version and retain icon bytes and stale-cache isolation checks.

Data-code pull requests run the complete fresh-source, specialization and browser checks. Their dataset commits and Pages deployment are disabled; only a main-branch run can publish the verified result.

Known audit effects must all survive catalog generation. Published datasets include a complete numeric coverage inventory. With the same parser, tree, official notes, Drustvar, and exact SimulationCraft evidence, disappearance or numeric drift of independently known effects blocks publication. Changed authoritative evidence permits real hotfixes within the same client build. Source failures remain visible; they are not erased to make logs appear clean.

Raw source snapshots and specialization diagnostics are retained as Actions artifacts for 14 days. A snapshot older than six hours cannot be used for a new verified publication. The next scheduled cycle collects fresh responses, including new server hotfixes; it never falls back to a persistent cache keyed only by client build. Actions are pinned to audited release commits; Dependabot proposes action updates weekly and Python/npm updates monthly for review and CI.

If any stage fails, the previous GitHub Pages deployment remains available. Generated JSON and JavaScript snapshots are checked for equality. The app loads datasets on demand and refreshes their cache keys even for updates within the same game build.

Official Blizzard PvP notes are an additional source. The parser recognizes supported numeric percentages, cooldowns, durations, ranges, stack counts and target counts, including an explicitly inherited subject in nested bullets. Property changes are applied only to a uniquely identified matching field in the tooltip, with rank descriptions and change highlights preserved. Notes about spells outside the ordinary class/spec catalogue remain visible in the audit; recognizing their prose does not establish full PvP-talent coverage. Previously published directives are retained while they remain in the same rolling Blizzard article. If the latest numeric PvP notes contain an unfamiliar format, or the article's date headings change, the refresh stops before publishing.

When a same-build source temporarily lags a server hotfix, a mixed-field SimC hotfix line can establish its old-to-new PvP transition. Accepting that correction requires the same concrete effect identity, the source's old value, agreement with the pinned generated current value, and no explicit newer or conflicting source hotfix. Lone Wowhead modifiers are also checked against the exact generated effect; a contradiction blocks publication. Full-page Wowhead 403 retries are bounded, and the tooltip endpoint has a separate request queue.

Shared class tuning preserves unrelated PvP differences and updates only a matching announced old value in both descriptions. Small coefficient-rounding differences are canonicalized only when the same text structure and numeric position identify the affected field. Spec-wide changes support rounded relative gains as well as additive aura changes. Older confirmed tuning keeps an immutable git endpoint, rechecked against its pre-event values, so subsequent tuning does not invalidate the historical event or apply it again. The latest directive still requires current evidence.

For a uniquely mapped scalar effect, official rounding also updates the mechanic card through a separate correction factor while retaining the captured coefficient. Property hotfixes carry the same official-source fields as percentage hotfixes, and source-resolution notes name only the evidence actually used.

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

A worker update waits until documents using the old worker close; it does not take over an edited build or delete that document's offline cache. Data requests remain network-first while an update waits. On a first visit, offline caching of additional specializations starts after a subsequent navigation is controlled by the installed worker.

## Data rules

- Current values never silently inherit an older Drustvar build.
- Spell dependencies use explicit trigger, formula, and description references, not noisy reverse `Affected Spells` lists.
- PvP Aura applies only to proven output kinds such as direct, periodic, and absorb effects.
- Generic talent parameters do not inherit an output Aura merely because they reference the same spell.
- A zero base value does not override a real spell-power coefficient.
- Tiered Apex entries remain one progression; true choices follow the talent graph's choice-node type.
- Historical wiki evidence is audit context, not an automatic source for current values.

## Audit and publication boundaries (2026-10-12)

The data workflow and verified-artifact recovery commit checked snapshots; `Publish current web snapshot` is the single serialized Pages publisher. It packages current main, validates the snapshot and browser smoke suite, and verifies every deployed file hash and source freshness. Scheduled data production remains every six hours. The exhaustive browser suite checks every spec/hero tree at ten widths in independent jobs before the data commit.

`spellbook_inventory.candidate_universe` is an independent exact-build root/effect report, including replacements, hidden/passive roots, absent player text, raw/current coefficients, dependency paths, and conditional pet/racial candidates. Ordinary class/spec omissions block publication. Conditional pet-family/spec ownership and public racial coverage are not yet complete; issue #7 remains open. VERIFIED describes the published values and explicitly scoped class/spec checks, not complete coverage of all possible game abilities.

A scalar percentage aura can retain AP/SP metadata in client data. `coefficient_based` distinguishes its literal parameter from damage/healing outputs without deleting that raw provenance. This distinction is used both in numerical reconciliation and tooltip rendering.

For diagnostics only, `WOW_PVP_ARCHIVAL_REPLAY=1` permits integrity-checked replay of archived inputs with a new parser. Outputs are marked `ARCHIVAL_REPLAY`, rejected by normal publication validation, and cannot be written under web. It does not permit live fallback or uncaptured source requests.

Internal baseline auras with exact numeric effects but no source player description are represented as `MECHANICS_ONLY`, with empty tooltip fields and explicit `UNAVAILABLE_IN_EXACT_SOURCE` provenance. The mechanics view displays the absence notice and raw sourced parameters. This status requires exact SimC evidence for every published effect; it is not an escape for failed rendering of an available description.

Always-present baseline passives can add to neutral resource effects. A source-proved flat modifier, reciprocal effect identity, and literal client expression establish the resolved PvE/PvP values. Static tooltip zeroes are normalized only when the corresponding sourced fragment is uniquely present; optional proc/equipment conditions and unsupported scaling are not guessed. Raw target values, modifier values, and formula provenance remain in the mechanic.

Source-labelled arithmetic alternatives retain both named cases; the parser does not assume the player's equipment. Only a single AP/SP coefficient loses its presentational square brackets. Nonnumeric cooldown overrides are rejected unless reciprocal exact-build specialization effects prove a neutral-PvP, unscaled -100% cooldown modifier, in which case the cooldown line is absent. Unknown metadata does not become a guessed number. The strict source-text gate runs on newly assembled and packaged data; the older checked-in snapshot retains its separate compatibility smoke suite until replaced.

Full-page tooltip metadata is scoped to the main card's exact spell ID and title. Comments embedded in related-spell scripts or another same-named card cannot override the requested spell's cooldown or charges. When ownership cannot be established, the full-page parser rejects that metadata and the separately owned tooltip endpoint remains available as the existing source fallback. Python/npm package changes also trigger the complete data/browser checks on pull requests.
