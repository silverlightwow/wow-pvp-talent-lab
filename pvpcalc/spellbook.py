"""Current class/spec spellbook roots from exact-build client tables."""
from __future__ import annotations

import asyncio
import re

from .sources import simc


TABLES = ('class_spells.inc', 'specialization_spells.inc')


def parse_table(text: str, *, expected_build: str, require_passive: bool = False) -> list[dict]:
    build = re.search(r'\bwow build (\d+\.\d+\.\d+\.\d+)\b', text)
    arrays = list(re.finditer(r'std::array<(active_class_spell_t|passive_class_spell_t|specialization_spell_entry_t), (\d+)>', text))
    types = {array[1] for array in arrays}
    if (not build or build[1] != expected_build
            or not types.intersection({'active_class_spell_t', 'specialization_spell_entry_t'})
            or (require_passive and 'passive_class_spell_t' not in types)):
        raise ValueError('Unrecognized or mismatched exact-build spellbook table')
    rows = []
    for array in arrays:
        table_rows = []
        passive = array[1] == 'passive_class_spell_t'
        for line in text[array.end():].splitlines()[1:]:
            if line.lstrip().startswith('} };'):
                break
            if not re.match(r'\s*\{\s*\d+,', line):
                continue
            fields = simc._split_cpp_initializer(line)
            if len(fields) not in ((3,) if passive else (5, 6)):
                raise ValueError('Unexpected spellbook row schema')
            table_rows.append(dict(class_id=int(fields[0]), spec_id=0 if passive else int(fields[1]),
                spell_id=int(fields[1] if passive else fields[2]),
                replaced_spell_id=0 if passive else int(fields[3]),
                name=simc._decode_cpp_string_literal(fields[2] if passive else fields[4]),
                passive=passive))
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
                if row['class_id'] == class_id and row['spec_id'] in (0, spec_id)}
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
        if 'Hidden' in spell.raw.splitlines()[0] or not simc._player_text_sections(spell.raw):
            continue
        roots.append(dict(spell_id=sid, talent_name=row['name'], tree_type='ability',
                          entry_type='ability', passive=row.get('passive', False), class_id=class_id, spec_id=spec_id,
                          source='simc_exact_build_spellbook', wow_build=dump.build))
    return roots
