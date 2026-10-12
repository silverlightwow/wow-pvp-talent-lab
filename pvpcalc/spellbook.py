"""Current class/spec spellbook roots from exact-build client tables."""
from __future__ import annotations

import asyncio
import re

from .sources import simc


TABLES = ('class_spells.inc', 'specialization_spells.inc', 'racial_spells.inc')


def parse_table(text: str, *, expected_build: str, require_passive: bool = False) -> list[dict]:
    build = re.search(r'\bwow build (\d+\.\d+\.\d+\.\d+)\b', text)
    arrays = list(re.finditer(r'std::array<(active_class_spell_t|passive_class_spell_t|specialization_spell_entry_t|active_pet_spell_t|racial_spell_entry_t), (\d+)>', text))
    types = {array[1] for array in arrays}
    if (not build or build[1] != expected_build
            or not types.intersection({'active_class_spell_t', 'specialization_spell_entry_t', 'racial_spell_entry_t'})
            or (require_passive and 'passive_class_spell_t' not in types)):
        raise ValueError('Unrecognized or mismatched exact-build spellbook table')
    rows = []
    for array in arrays:
        table_rows = []
        passive = array[1] == 'passive_class_spell_t'
        pet = array[1] == 'active_pet_spell_t'
        racial = array[1] == 'racial_spell_entry_t'
        for line in text[array.end():].splitlines()[1:]:
            if line.lstrip().startswith('} };'):
                break
            if not re.match(r'\s*\{\s*(?:0x[0-9a-fA-F]+|\d+),', line):
                continue
            fields = simc._split_cpp_initializer(line)
            if len(fields) not in ((4,) if racial else (3,) if passive or pet else (5, 6)):
                raise ValueError('Unexpected spellbook row schema')
            if racial:
                table_rows.append(dict(class_id=None, spec_id=0, spell_id=int(fields[2]),
                    replaced_spell_id=0, name=simc._decode_cpp_string_literal(fields[3]),
                    passive=False, scope='race', race_mask=int(fields[0], 0), class_mask=int(fields[1], 0)))
            else:
                row = dict(class_id=int(fields[0]), spec_id=0 if passive or pet else int(fields[1]),
                    spell_id=int(fields[1] if passive or pet else fields[2]),
                    replaced_spell_id=0 if passive or pet else int(fields[3]),
                    name=simc._decode_cpp_string_literal(fields[2] if passive or pet else fields[4]),
                    passive=passive)
                if pet:
                    row['scope'] = 'pet'
                table_rows.append(row)
        if len(table_rows) != int(array[2]):
            raise ValueError('Incomplete spellbook table')
        rows.extend(table_rows)
    if not rows:
        raise ValueError('Incomplete spellbook table')
    return rows


async def fetch_tables(client, dump) -> list[dict]:
    if not dump.source_ref or not dump.build:
        raise ValueError('Spellbook discovery requires a pinned exact-build SimC revision')
    texts = await asyncio.gather(*[client.get_text(
        f'https://raw.githubusercontent.com/{simc.SIMC_REPO}/{dump.source_ref}/engine/dbc/generated/{name}'
    ) for name in TABLES])
    return [row for name, text in zip(TABLES, texts)
            for row in parse_table(text, expected_build=dump.build, require_passive=name == 'class_spells.inc')]


def ability_roots(tables, dump, *, class_id, spec_id, talent_spell_ids, unavailable=None,
                  class_name=None, spec_name=None):
    """Respect specialization replacements and exclude internal hidden auras.

    The IDs are supplied by live Raidbots discovery, never a maintained class
    registry. Class/spec spellbook tables decide availability; the dump's name
    or Spell Level alone cannot establish it (old abilities remain in dumps).
    """
    selected = {row['spell_id']: row for row in tables
                if not row.get('scope') and row['class_id'] == class_id and row['spec_id'] in (0, spec_id)}
    replaced = {row['replaced_spell_id'] for row in selected.values() if row['replaced_spell_id']}
    roots = []
    for sid, row in sorted(selected.items()):
        if sid in replaced or sid in talent_spell_ids:
            continue
        if class_name and spec_name and row['name'].casefold() == f'{spec_name} {class_name}'.casefold():
            # Specialization auras are processed by the aura pipeline rather
            # than exposed as independently castable player abilities.
            continue
        spell = dump.spells.get(sid)
        if spell is None:
            # Dumps omit some utility abilities and hidden system auras.
            # Keep explicit inventory; the auditor checks missing IDs against
            # current PvP sources and exact generated effect data before use.
            if unavailable is not None:
                unavailable.append(dict(spell_id=sid, name=row['name'],
                    reason='NOT_IN_EXACT_BUILD_CLASS_DUMP'))
            continue
        if not simc._player_text_sections(spell.raw):
            if unavailable is not None:
                unavailable.append(dict(spell_id=sid, name=row['name'], reason='NO_PLAYER_TEXT_OR_HIDDEN'))
            continue
        roots.append(dict(spell_id=sid, talent_name=row['name'], tree_type='ability',
                          entry_type='ability', passive=row.get('passive', False), class_id=class_id, spec_id=spec_id,
                          source='simc_exact_build_spellbook', wow_build=dump.build))
    return roots


def scoped_table_rows(tables, *, class_id, spec_id):
    """Include conditional candidates without claiming unknown pet ownership."""
    return [row for row in tables if (
        row.get('scope') == 'race' and row['class_mask'] & (1 << (class_id - 1))
        or row.get('scope') != 'race' and row['class_id'] == class_id and row['spec_id'] in (0, spec_id))]


def candidate_inventory(tables, dump, *, class_id, spec_id, class_name, spec_name,
                        talent_spell_ids, ability_spell_ids, generated_effects, dependencies,
                        published_rows, drustvar_ids=(), aura_ids=()):
    """An independent source universe, including explicit reasons for omissions.

    Conditional pet/racial candidates are reported separately until exact
    family/race ownership can be established. They are never declared
    universally available to a specialization.
    """
    selected = scoped_table_rows(tables, class_id=class_id, spec_id=spec_id)
    replaced = {row['replaced_spell_id'] for row in selected if row['replaced_spell_id']}
    published = {(int(row.get('talent_spell_id') or row['spell_id']),
                  int(row.get('source_spell_id') or row['spell_id']), row.get('effect_index'))
                 for row in published_rows}
    by_root = {}
    for dep in dependencies:
        by_root.setdefault(dep.root_spell_id, []).append(dep)
    entries = []
    blockers = []
    for row in sorted(selected, key=lambda r: (r.get('scope', ''), r['spell_id'], r.get('race_mask', 0))):
        sid = row['spell_id']
        scope = row.get('scope', 'class_spec')
        classification = ('CONDITIONAL_OWNERSHIP_UNRESOLVED' if scope != 'class_spec' else
            'REPLACED' if sid in replaced else 'TALENT_TREE' if sid in talent_spell_ids else
            'SPECIALIZATION_AURA' if row['name'].casefold() == f'{spec_name} {class_name}'.casefold() else
            'BASE_ABILITY' if sid in ability_spell_ids else
            'NOT_IN_CLASS_DUMP' if sid not in dump.spells else 'NO_PLAYER_TEXT_OR_HIDDEN')
        targets = [(sid, None)] + [(dep.target_spell_id, dep) for dep in by_root.get(sid, [])]
        effects = []
        for target, dep in targets:
            for index, exact in sorted(generated_effects.get(target, {}).items()):
                human = simc.effect_for_spell(dump, target, index)
                current_multiplier = exact.pvp_coefficient
                if (human and human.pvp_hotfix_previous is not None
                        and human.pvp_coefficient is not None
                        and abs(human.pvp_hotfix_previous - (exact.pvp_coefficient or 0)) < 1e-6):
                    current_multiplier = human.pvp_coefficient
                modified = current_multiplier is not None and abs(current_multiplier - 1) > 1e-9
                # Include effect-level aura evidence even when the DBC multiplier is neutral.
                exposed = (sid, target, index) in published
                if not modified and not exposed:
                    continue
                effects.append(dict(source_spell_id=target, effect_index=index,
                    game_effect_id=exact.game_effect_id, base_value=exact.base_value,
                    pvp_coefficient=exact.pvp_coefficient, current_pvp_coefficient=current_multiplier,
                    sp_coefficient=exact.sp_coefficient,
                    ap_coefficient=exact.ap_coefficient, published=exposed,
                    dependency_path=list(dep.path_spell_ids) if dep else [sid],
                    player_text=list(exact.reference_contexts)))
                if (modified and not exposed and scope == 'class_spec'
                        and classification not in {'REPLACED', 'TALENT_TREE', 'SPECIALIZATION_AURA'}):
                    blockers.append(dict(root_spell_id=sid, source_spell_id=target,
                        effect_index=index, reason='UNEXPLAINED_BASE_EFFECT_OMISSION'))
        entries.append(dict(**row, classification=classification, effects=effects,
            drustvar_candidate=sid in drustvar_ids, aura_candidate=sid in aura_ids))
    if blockers:
        raise ValueError('Incomplete exact-build baseline effect coverage: ' + str(blockers))
    return dict(schema=1, entries=entries,
        class_spec_complete=True, conditional_ownership_complete=False,
        conditional_modified_count=sum(bool(e['effects']) for e in entries if e.get('scope')),
        limitations=['Pet-family/spec and race-specific ownership is not established by class/spec tables.'])
