"""Current class/spec spellbook roots from exact-build client tables."""
from __future__ import annotations

import asyncio
import re

from .sources import simc


TABLES = ('class_spells.inc', 'specialization_spells.inc')


def parse_table(text: str, *, expected_build: str) -> list[dict]:
    build = re.search(r'\bwow build (\d+\.\d+\.\d+\.\d+)\b', text)
    count = re.search(r'std::array<(?:active_class_spell_t|specialization_spell_entry_t), (\d+)>', text)
    if not build or build[1] != expected_build or not count:
        raise ValueError('Unrecognized or mismatched exact-build spellbook table')
    rows = []
    for line in text[count.end():].splitlines()[1:]:
        if line.lstrip().startswith('} };'):
            break
        if not re.match(r'\s*\{\s*\d+,', line):
            continue
        fields = simc._split_cpp_initializer(line)
        if len(fields) not in (5, 6):
            raise ValueError('Unexpected spellbook row schema')
        rows.append(dict(class_id=int(fields[0]), spec_id=int(fields[1]),
                         spell_id=int(fields[2]), replaced_spell_id=int(fields[3]),
                         name=simc._decode_cpp_string_literal(fields[4])))
    if len(rows) != int(count[1]) or not rows:
        raise ValueError('Incomplete spellbook table')
    return rows


async def fetch_tables(client, dump) -> list[dict]:
    if not dump.source_ref or not dump.build:
        raise ValueError('Spellbook discovery requires a pinned exact-build SimC revision')
    texts = await asyncio.gather(*[client.get_text(
        f'https://raw.githubusercontent.com/{simc.SIMC_REPO}/{dump.source_ref}/engine/dbc/generated/{name}'
    ) for name in TABLES])
    return [row for text in texts for row in parse_table(text, expected_build=dump.build)]


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
                          entry_type='ability', class_id=class_id, spec_id=spec_id,
                          source='simc_exact_build_spellbook', wow_build=dump.build))
    return roots
