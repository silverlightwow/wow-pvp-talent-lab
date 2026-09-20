import json
from pathlib import Path
import pytest
from pvpcalc.sources import simc
from pvpcalc.ranks import rank_source,render_rank,rows_at_rank

SPELLS=json.loads((Path(__file__).parent/'fixtures/trait-rank-spells.json').read_text())
DUMP=simc.parse_dump('World of Warcraft 12.1.0.69875 Live\n'+'\n'.join(SPELLS.values()),class_slug='test')

def render(spell_id,text,rank,*,spec='Discipline',cls='Priest',tree='spec'):
    talent=dict(spell_id=spell_id,spec_name=spec,class_name=cls,tree_type=tree,max_ranks=2,node_type='single')
    source=rank_source(DUMP,talent)
    result,diagnostics=render_rank(text,source,rank,spec_name=spec,spec_names=[spec])
    assert diagnostics==[]
    return result

@pytest.mark.parametrize('rank,percent,seconds',[(1,15,2),(2,30,4)])
def test_pain_and_suffering_uses_trait_values_not_spell_base(rank,percent,seconds):
    assert render(390689,'Increases the damage of Shadow Word: Pain by 8% and increases its duration by 2 sec.',rank)==f'Increases the damage of Shadow Word: Pain by {percent}% and increases its duration by {seconds} sec.'

@pytest.mark.parametrize('rank,percent',[(1,5),(2,10)])
def test_abyssal_reverie(rank,percent):
    assert render(373054,'Atonement heals for 10% more when activated by Shadow spells.',rank)==f'Atonement heals for {percent}% more when activated by Shadow spells.'

def test_only_ranked_values_change():
    assert render(390832,'Mind Blast and Shadow Word: Death consume 1 sec of Shadow Word: Pain, dealing damage equal to 300% of the amount consumed.',2)=='Mind Blast and Shadow Word: Death consume 2 sec of Shadow Word: Pain, dealing damage equal to 300% of the amount consumed.'
    assert render(390691,'Casting Power Word: Shield increases your Haste by 5% for 4 sec.',2)=='Casting Power Word: Shield increases your Haste by 10% for 4 sec.'

def test_nonlinear_rounding_and_repeated_values():
    text='Increases the healing done by Holy Word: Serenity and Holy Word: Sanctify by 30%.\nIncreases the radius of Holy Word: Sanctify by 30%.'
    assert render(471668,text,1,spec='Holy')=='Increases the healing done by Holy Word: Serenity and Holy Word: Sanctify by 13%.\nIncreases the radius of Holy Word: Sanctify by 15%.'
    assert '25%' in render(471668,text,2,spec='Holy')

def test_independent_durations_with_same_surrounding_prose():
    text="Avenging Wrath's cooldown is reduced by 30 sec, but its duration is reduced by 5.0 sec.\nAvenging Crusader's cooldown is reduced by 30.0 sec, but its duration is reduced by 3.0 sec."
    result=render(1241511,text,1,spec='Holy',cls='Paladin')
    assert result=="Avenging Wrath's cooldown is reduced by 15 sec, but its duration is reduced by 4 sec.\nAvenging Crusader's cooldown is reduced by 7.5 sec, but its duration is reduced by 2.5 sec."

def test_fractional_and_formula_ranks():
    assert render(193539,'Haste increased by 1.5%.',2,spec='Outlaw',cls='Rogue',tree='class')=='Haste increased by 3%.'
    text='Melee auto-attacks with Flametongue Weapon active have a 5% chance to reduce the cooldown of Lava Lash by 25% and increase the damage of Lava Lash by 20% for 8 sec.'
    result=render(201900,text,2,spec='Enhancement',cls='Shaman')
    assert 'by 50%' in result and 'by 40%' in result and '5% chance' in result and '8 sec' in result

def test_qualitative_rank_switch():
    text="Your damaging abilities have a chance to invoke Niuzao, causing him to charge to your target's location and Stomp, dealing (10% of Attack Power) Physical damage to your target and reduced damage to secondary targets."
    assert 'have an increased chance' in render(387219,text,2,spec='Brewmaster',cls='Monk')

def test_pvp_effects_use_rank_base_and_keep_pvp_multiplier():
    rows=[dict(spell_id=390689,source_spell_id=390689,effect_index=1,base_value=8,final_pvp_multiplier=.5,final_pvp_value=4)]
    rules=[dict(effect_index=1,values=[15,30])]
    assert rows_at_rank(rows,rules,2,390689)[0]['final_pvp_value']==15
    assert rows[0]['base_value']==8
