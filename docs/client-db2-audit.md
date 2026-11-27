# Full client DB2 evidence audit

The normal 40-spec build uses the filtered SimulationCraft corpus and Raidbots
ordinary talent tree. It does not claim to include PvP-only talents, PvP item
sets, all racials or every pet. The independent client audit recovers evidence
that is absent from SimC without confusing raw DB2 fields with the final
in-game description or equipping/learning every conditional effect.

## Reproduce

Install the package (`python -m pip install -e '.[dev]'`). Use a sealed
`source-plan` and `raidbots-snapshot` artifact from the same successful build.

```sh
python scripts/audit_exact_pvp_auras.py --snapshot source-plan --raidbots raidbots-snapshot.json --client-db2 client-db2 --capture-client-db2 --output exact-aura-audit.json
```

The optional capture flag downloads nine public Wago.tools CSV exports pinned
to the exact same client build. Each file's response filename, schema, size
and SHA-256 are validated. Remove the capture flag to replay locally without
network access. Keep the raw directory with its manifest and the report.
No downloaded DB2 CSV is checked into Git.

## Interpretation

- The `PvpTalent` table records spell/spec ownership, overrides, unlock levels
  and player conditions; a PvP-only spell is not a normal selectable talent
  or a usable PvE baseline.
- Label resolution uses full `SpellLabel` data, not the filtered SimC label
  list. Each aura source must match SimC by spell/effect identity and raw value.
- Item set ownership uses `ItemSetSpell`; an alias with the same name and label
  is not sufficient to prove it is equipped.
- Category recovery time is a raw projection for each spell in that category,
  not a promise that all shared triggers, racial abilities and items are active.
- Pet/guardian aura coefficients are reported separately; they cannot be
  applied to every owner spell or summoned creature without an ownership proof.
- Server-side hotfixes beyond the pinned client export still require independent
  reconciliation. Raw PvP talent descriptions retain their unresolved client
  expressions and must not be used as fully rendered player-facing tooltips.

The client audit is intentionally separate from the verified main-site release
until the remaining operation ordering, availability and renderer coverage
are established.
