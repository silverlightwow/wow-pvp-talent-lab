from copy import deepcopy

import pytest

from pvpcalc.coverage import coverage_report, validate_coverage
from pvpcalc.pipeline import _fill_missing_base_values_from_simc
from pvpcalc.sources.simc import SimcDump, SimcSpell


def effect_row(value, text, sources):
    return dict(spell_id=100, source_spell_id=100, effect_index=1,
                base_value=value, effect_text=text, pvp_multiplier=0.7,
                sources=sources)


@pytest.mark.parametrize('time_text', [
    'Add Flat Modifier (107): Spell Cooldown (11)',
    'Modify Recharge Time (Category) (453)',
    'Modify Duration (10)',
])
def test_seconds_and_dbc_milliseconds_keep_identical_coverage(time_text):
    spell = SimcSpell(100, 'Example',
                      f'Name : Example (id=100)\n#1 (id=101) : {time_text}\n'
                      'Base Value: -15000 | PvP Coefficient: 0.7\n')
    dump = SimcDump('example', '12.1.0.12345', '', {100: spell}, {})
    rows = [effect_row(-15, 'Apply Aura: Modifies Cooldown', ['wowhead', 'drustvar'])]
    _fill_missing_base_values_from_simc(rows, dump)
    assert rows[0]['base_value'] == -15000
    assert rows[0]['pvp_value'] == -10500
    assert rows[0]['source_notes'][0]['reason'] == 'TIME_UNIT_NORMALIZED'
    data = dict(talents=[dict(entry_id=1, spell_id=100, mechanics=rows)],
                source_snapshot=dict(parser_hash='same', evidence_hash='same'))
    previous = deepcopy(data)
    previous['talents'][0]['mechanics'][0].update(sources=['simc', 'drustvar'])
    data['coverage'] = coverage_report(data)
    previous['coverage'] = coverage_report(previous)
    validate_coverage(data, previous)


@pytest.mark.parametrize('text,value', [
    ('Increase Damage% (79)', -15),
    ('Add Percent Modifier (108): Spell Cooldown (11)', -15),
    ('Add Flat Modifier (107): Spell Cooldown (11)', -14),
])
def test_unproven_unit_conversion_does_not_hide_actual_value_changes(text, value):
    spell = SimcSpell(100, 'Example', f'#1 (id=101) : {text}\nBase Value: -15000\n')
    dump = SimcDump('example', '12.1.0.12345', '', {100: spell}, {})
    rows = [effect_row(value, 'Apply Aura: Modifies Cooldown', ['wowhead'])]
    _fill_missing_base_values_from_simc(rows, dump)
    assert rows[0]['base_value'] == value
