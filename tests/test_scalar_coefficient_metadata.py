from copy import deepcopy

import pytest

from pvpcalc import pipeline, tooltip_renderer
from pvpcalc.coverage import coverage_report, validate_coverage
from pvpcalc.sources import simc


@pytest.mark.parametrize('coefficient', ['AP', 'SP'])
def test_scalar_percent_aura_uses_literal_value_despite_unused_coefficient(coefficient):
    dump = simc.parse_dump(
        'SimulationCraft for World of Warcraft 12.1.0.12345 Live\n'
        'Name             : Generic Slow (id=10)\n'
        '#2 (id=102) : Apply Aura (6) | Decrease Movement Speed% (33)\n'
        f'Base Value: -70 | {coefficient} Coefficient: 0.14742 | PvP Coefficient: 0.714286\n'
        'Description      : Movement speed reduced by $s2%.\n', class_slug='example')
    rows = pipeline._build_simc_modified_rows(spell_ids={10}, talent_by_spell={}, simc_dump=dump)
    assert rows[0]['base_value'] == -70
    pipeline._fill_missing_base_values_from_simc(rows, dump)
    assert rows[0]['pvp_value'] == pytest.approx(-50.00002)
    assert 'mod:' not in rows[0]['effect_text']
    # A missing Wowhead numeric value receives exactly the same scalar fallback.
    alternate = deepcopy(rows)
    alternate[0]['base_value'] = None
    pipeline._fill_missing_base_values_from_simc(alternate, dump)
    assert alternate[0]['base_value'] == -70
    for variant in (rows, alternate):
        rendered = tooltip_renderer.render_pvp_tooltip(
            tooltip='Movement speed reduced by 70%.', spec_name='Future',
            effect_rows=variant, context_rows=variant)
        assert rendered['pvp_tooltip'] == 'Movement speed reduced by 50%.'
        assert rendered['changed']


def test_coefficient_output_is_still_symbolic_and_scalar_drift_is_blocking():
    effect = simc.SimcEffect(1, 'School Damage (2)', 0, None, 0.5, ap_coefficient=2)
    assert simc.effect_uses_coefficient(effect)
    row = dict(source_spell_id=10, effect_index=2, sources=['simc'], base_value=-70,
               simc_ap_coefficient=0.14742, amount_kind=None, final_pvp_value=-50)
    previous = dict(abilities=[dict(spell_id=10, mechanics=[row])],
                    source_snapshot=dict(parser_hash='parser', evidence_hash='same'))
    previous['coverage'] = coverage_report(previous)
    current = deepcopy(previous)
    current['abilities'][0]['mechanics'][0]['base_value'] = None
    current['coverage'] = coverage_report(current)
    with pytest.raises(ValueError, match='identical authoritative inputs'):
        validate_coverage(current, previous)
