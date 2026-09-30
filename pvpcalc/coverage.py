"""Check published mechanics against audit evidence and prior identical inputs."""
from __future__ import annotations

from .snapshot import digest


NUMERIC_FIELDS = ('base_value', 'spell_pvp_multiplier', 'aura_factor',
                  'final_pvp_multiplier', 'final_pvp_value',
                  'simc_sp_coefficient', 'simc_ap_coefficient')


def mechanic_key(parent_spell_id, row):
    return (int(parent_spell_id), int(row.get('source_spell_id') or row.get('spell_id') or parent_spell_id),
            row.get('effect_index'))


def validate_audit_coverage(audit, catalog):
    expected = {mechanic_key(row.get('talent_spell_id') or row['spell_id'], row)
                for row in audit.final_modified_effect_rows}
    actual = {mechanic_key(t.spell_id, row) for t in catalog.talents for row in t.mechanics}
    if missing := expected - actual:
        raise ValueError(f'Known PvP effects missing from catalog: {sorted(missing, key=str)}')


def coverage_report(data: dict) -> dict:
    effects = []
    independently_known = []
    for kind in ('talents', 'abilities'):
        for record in data.get(kind, []):
            for row in record.get('mechanics', []):
                values = {field: row.get(field) for field in NUMERIC_FIELDS}
                # A coefficient-based output's literal base amount may be
                # absent or zero depending on its source representation.
                if any(values.get(f) for f in ('simc_sp_coefficient', 'simc_ap_coefficient')):
                    values['base_value'] = values['base_value'] or 0
                effect = dict(key=[kind, record.get('entry_id') or record['spell_id'],
                                   *mechanic_key(record['spell_id'], row)],
                              amount_kind=row.get('amount_kind'), values=values)
                effects.append(effect)
                if {'simc', 'drustvar'} & set(row.get('sources') or []):
                    independently_known.append(effect)
    effects.sort(key=lambda row: str(row['key']))
    independently_known.sort(key=lambda row: str(row['key']))
    return dict(schema=1, effect_count=len(effects), effects=effects,
                semantic_hash=digest(effects), independent_effects=independently_known,
                independent_hash=digest(independently_known))


def validate_coverage(data: dict, previous: dict | None = None):
    current = coverage_report(data)
    if data.get('coverage') != current:
        raise ValueError('Mechanics coverage inventory is incomplete or inconsistent')
    provenance = data.get('source_snapshot') or {}
    prior = (previous or {}).get('source_snapshot') or {}
    if (provenance and prior and provenance['parser_hash'] == prior['parser_hash']
            and provenance['evidence_hash'] == prior['evidence_hash']):
        old = previous.get('coverage', {}).get('independent_hash')
        if old != current['independent_hash']:
            raise ValueError('Known PvP effects/numbers changed with identical authoritative inputs and parser')
    return current


def replay_projection(data: dict) -> dict:
    return dict(coverage=coverage_report(data), records=sorted([
        dict(kind=kind, spell_id=r['spell_id'], entry_id=r.get('entry_id'),
             pve_tooltip=r['pve_tooltip'], pvp_tooltip=r['pvp_tooltip'],
             rank_tooltips=r.get('rank_tooltips', []))
        for kind in ('talents', 'abilities') for r in data.get(kind, [])
    ], key=lambda r: (r['kind'], r['entry_id'] or r['spell_id'])))
