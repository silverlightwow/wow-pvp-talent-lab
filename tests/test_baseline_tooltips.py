import pytest
from pvpcalc import baseline_tooltips, tooltip_renderer
from pvpcalc.pipeline import SpecAuditResult
from pvpcalc.sources import simc


def dump(body):
    return simc.parse_dump('SimulationCraft for World of Warcraft 12.1.0.12345 Live\n' + body,
                           class_slug='example', source_ref='exact')


def test_statless_absorb_uses_exact_coefficient_and_duration_once():
    data=dump('Name             : Shield (id=100)\nDuration         : 15 seconds\n'
              '#1 (id=1001) : Apply Aura (6) | Absorb Damage (69)\n'
              'Base Value: 0 | SP Coefficient: 4.638\n'
              'Description      : Shields an ally for $d, absorbing $s1 damage.\n'
              'Tooltip          : Absorbs $w1 damage.\n')
    result=baseline_tooltips.coefficient_description(data,100)
    assert result['text'] == 'Shields an ally for 15 sec, absorbing (463.8% of Spell Power) damage.'
    rendered=tooltip_renderer.render_pvp_tooltip(tooltip=result['text'],spec_name='Example',
        effect_rows=[dict(effect_index=1,effect_text='Absorb Damage',simc_sp_coefficient=4.638,
                          final_pvp_multiplier=1.15)])
    assert '(533.37% of Spell Power)' in rendered['pvp_tooltip']
    assert '15 sec' in rendered['pvp_tooltip']


def test_periodic_total_value_multiplier_and_foreign_duration_are_exact():
    data=dump('Name             : Periodic Spell (id=100)\nDuration         : 21 seconds\n'
              '#2 (id=1002) : Apply Aura (6) | Periodic Health Leech (53): every 3 seconds\n'
              'Base Value: 0 | Value Multiplier: 0.3 | SP Coefficient: 0.6667\n'
              'Description      : Causes $100o2 damage over $100d and heals for ${$e2*100}%. Fear lasts $200d.\n'
              'Name             : Fear (id=200)\nDuration         : 3 seconds\nDescription : Fear.\n')
    text=baseline_tooltips.coefficient_description(data,100)['text']
    assert text == 'Causes (466.69% of Spell Power) damage over 21 sec and heals for 30%. Fear lasts 3 sec.'


@pytest.mark.parametrize('description', ['Absorbs $s1 damage with $unknown.', 'Absorbs $?s200[$s1][0] damage.'])
def test_unknown_conditions_do_not_invent_a_fallback(description):
    data=dump('Name             : Shield (id=100)\n#1 (id=1001) : Absorb Damage\n'
              'Base Value: 0 | SP Coefficient: 4.638\nDescription      : '+description+'\n')
    assert baseline_tooltips.coefficient_description(data,100) is None


@pytest.mark.parametrize('text,changed', [('Deals (266.073% of Spell Power) over 14 sec.',True),
                                         ('Deals (260% of Spell Power) over 14 sec.',False)])
def test_periodic_total_accepts_printed_rounding_but_not_unrelated_amount(text,changed):
    result=tooltip_renderer.render_pvp_tooltip(tooltip=text,spec_name='Example',effect_rows=[
        dict(effect_index=1,effect_text='Apply Aura: Periodic Damage',simc_sp_coefficient=.380105,
             final_pvp_multiplier=.869565)])
    assert result['changed'] is changed
    assert '14 sec' in result['pvp_tooltip']


def test_level_scaled_amount_is_preserved_separately_from_literal_zero():
    data=dump('Name             : Resource Ability (id=100)\n'
              '#1 (id=1001) : Apply Aura (6) | Restore Power (85)\n'
              'Base Value: 0 | Scaled Value: 68.98976 (coefficient=0.526316) | PvP Coefficient: 1.75\n'
              'Description      : Grants $s1 mana per 5 sec.\n')
    exact=simc.effect_for_spell(data,100,1)
    assert exact.base_value == 0
    assert exact.scaled_value == 68.98976
    result=tooltip_renderer.render_pvp_tooltip(tooltip='Grants 69 mana per 5 sec.',spec_name='Example',
        effect_rows=[dict(effect_index=1,effect_text='Restore Power',base_value=0,
                         final_pvp_value=0,final_pvp_multiplier=1.75,
                         scaled_base_value=exact.scaled_value,scaled_final_pvp_value=exact.scaled_value*1.75)])
    assert result['pvp_tooltip'] == 'Grants 120.7321 mana per 5 sec.'
    row=dict(spell_id=100,effect_index=1,effect_origin='DIRECT',is_final_pvp_modified=True,
             base_value=0,final_pvp_value=0,scaled_base_value=exact.scaled_value,
             scaled_final_pvp_value=exact.scaled_value*1.75)
    audit=SpecAuditResult(class_name='Example',spec_name='Example',metadata={},drustvar_builds=[],
        talents=[],spell_ids=[],wowhead_by_spell={},drustvar_by_spell={},wowhead_candidate_ids=set(),
        drustvar_candidate_ids=set(),candidate_ids=set(),effect_rows=[row])
    assert audit.render_effect_rows == [row]


def test_known_talent_percent_alternatives_receive_the_same_concrete_effect_tuning():
    data=dump('Name             : Resource Shield (id=100)\n'
              'Description      : Restores $?s200[${($200s5/100+1)*$300s1}][$300s1]% mana.\n'
              'Name             : Resource Talent (id=200)\n'
              '#5 (id=2005) : Modifier\nBase Value: 50\nDescription : Talent.\n'
              'Name             : Resource Effect (id=300)\n'
              '#1 (id=3001) : Give % of Total Power\nBase Value: 2 | PvP Coefficient: 0.2\nDescription : Effect.\n')
    row=dict(spell_id=300,source_spell_id=300,talent_spell_id=100,effect_index=1,base_value=2,final_pvp_value=.4)
    formulas=baseline_tooltips.conditional_percent_formulas(data,row)
    text,changes=baseline_tooltips.render_conditional_percent('Restores [Resource Talent: 3 / 2]% mana.',formulas)
    assert text == 'Restores [Resource Talent: 0.6 / 0.4]% mana.'
    assert changes[0]['old_token'] == '[Resource Talent: 3 / 2]%'
    assert 'Restores [Resource Talent: 3 / 2]% mana.'[changes[0]['start']:changes[0]['end']] == changes[0]['old_token']
    assert baseline_tooltips.render_conditional_percent('Restores [Resource Talent: 4 / 2]% mana.',formulas)[1] == []
