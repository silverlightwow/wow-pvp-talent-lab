import pytest

from pvpcalc import display_formulas, tooltip_renderer
from pvpcalc.sources import simc


def source(formula='${$m1*5}', name='total'):
    text = ('SimulationCraft for World of Warcraft 12.1.0.12345 Live\n'
            'Name             : Periodic Ability (id=100)\n'
            '#1 (id=1001) : Apply Aura (6) | Periodic Heal% (20): every 2 seconds\n'
            'Base Value: 10 | PvP Coefficient: 2\n'
            f'Description      : Heals for $<{name}>% over $d.\n'
            'Tooltip          : Heals $w1% every $t1 seconds.\n'
            f'Variables        : ${name}={formula}\n')
    return simc.parse_dump(text, class_slug='example', source_ref='exact')


def effect(**changes):
    return dict(spell_id=100, effect_index=1, effect_origin='DIRECT', base_value=10,
                final_pvp_value=20, final_pvp_multiplier=2,
                effect_text='Apply Aura: Mod Total Health Regen %', **changes)


@pytest.mark.parametrize('text, expected', [
    ('10 sec cooldown. Heals for 50% over 10 seconds.', '10 sec cooldown. Heals for 100% over 10 seconds.'),
    ('Heals 10% every 2 seconds.', 'Heals 20% every 2 seconds.'),
])
def test_exact_named_total_and_per_tick_amount_keep_time_unchanged(text, expected):
    row = effect()
    row['display_formulas'] = display_formulas.effect_formulas(source(), row)
    rendered = tooltip_renderer.render_pvp_tooltip(tooltip=text, spec_name='Example', effect_rows=[row])
    assert rendered['pvp_tooltip'] == expected
    assert not any(d['status'] in {'AMBIGUOUS_TEXT_MATCH', 'NO_RENDERABLE_VALUE'} for d in rendered['diagnostics'])
    assert row['base_value'] == 10
    assert row['final_pvp_value'] == 20


@pytest.mark.parametrize('formula', ['${$m1*$200s1}', '${$m1*$SP}', '${unknown($m1)}', '${$m1/0}'])
def test_unknown_effect_character_scaling_or_invalid_expression_not_evaluated(formula):
    formulas = display_formulas.effect_formulas(source(formula), effect())
    assert not any(f['old'] == 50 for f in formulas)
    assert [f['old'] for f in formulas] == [10]  # Only proven per-tick reference.


def test_two_different_visible_formulas_require_review():
    row = effect()
    row['display_formulas'] = display_formulas.effect_formulas(source(), row)
    rendered = tooltip_renderer.render_pvp_tooltip(tooltip='Heals 10% and 50%.', spec_name='Example', effect_rows=[row])
    assert rendered['pvp_tooltip'] == 'Heals 10% and 50%.'
    assert any(d['status'] == 'NO_RENDERABLE_VALUE' for d in rendered['diagnostics'])


def test_direction_flip_keeps_signed_semantics():
    row = effect()
    row['final_pvp_value'] = -20
    assert display_formulas.effect_formulas(source(), row) == []
