import pytest
from pvpcalc import pvp_aura, pipeline, ranks
from pvpcalc.sources import simc


@pytest.mark.parametrize("base,delta,expected", [(-25,10,-15),(-70,20,-50),(-20,-10,-30)])
@pytest.mark.parametrize("label", [False,True])
def test_exact_flat_scalar_is_additive_and_effect_scoped(base,delta,expected,label):
    mode = "by Label (648)" if label else "(646)"
    target = "Misc Value 2: 900 (Label)" if label else ""
    affected = "" if label else "Affected Spells: Target (200), Wrapper (201)"
    dump=simc.parse_dump(f"""SimulationCraft for World of Warcraft 12.1.5.70961 Live
Name             : Example Mage (id=100)
Effects          :
#1 (id=2001) : Apply Aura (6) | Modify Flat PVP Multiplier {mode}: Modify Effect 2 (6)
                   Base Value: {delta} | Scaled Value: {delta} | {target}
                   {affected}
Name             : Target (id=200)
Labels           : 900
Effects          :
#1 (id=3001) : Apply Aura (6) | Dummy (4)
                   Base Value: 30
#2 (id=3002) : Apply Aura (6) | Decrease Movement Speed% (33)
                   Base Value: {base}
Description      : Movement speed reduced by $s2%.
Name             : Wrapper (id=201)
Labels           : 900
Effects          :
#1 (id=3003) : Trigger Spell (64)
                   Base Value: 0
Description      : Movement speed reduced by $200s2%.
""",class_slug="mage")
    payload=dict(auras=[dict(id=100,name="Example Mage",spec="Example")])
    rules,report=pvp_aura.exact_flat_scalar_inventory([],payload,dump,spec_name="Example",class_name="Mage")
    assert len(rules)==1
    assert {r["status"] for r in report[0]["targets"]}=={"APPLIED_EXACT_FLAT_PERCENT","TARGET_EFFECT_ABSENT"}
    rows=[dict(spell_id=200,effect_index=2,base_value=base,pvp_multiplier=1,effect_text="slow"),
          dict(spell_id=200,effect_index=1,base_value=30,pvp_multiplier=1,effect_text="Dummy")]
    pipeline._annotate_final_pvp_layers(rows,rules,dump)
    assert rows[0]["final_pvp_value"]==pytest.approx(expected)
    assert rows[0]["aura_rules"][0]["flat_delta"]==delta
    assert rows[1]["final_pvp_value"]==30
    result=ranks.rows_at_rank(rows,[dict(effect_index=2,values=[base*2])],1,200)
    assert result[0]["final_pvp_value"]==base*2+delta
    rows[0]["base_value"]=base+1
    with pytest.raises(ValueError,match="Flat scalar projection"):
        pipeline._annotate_final_pvp_layers(rows,rules,dump)


def test_flat_scalar_never_guesses_units_or_order():
    text="""SimulationCraft for World of Warcraft 12.1.5.70961 Live
Name             : Example Mage (id=100)
Effects          :
#1 (id=2001) : Apply Aura (6) | Modify Flat PVP Multiplier by Label (648): Modify Effect 1 (5)
                   Base Value: 10 | Misc Value 2: 900 (Label)
Name             : Target (id=200)
Labels           : 900
Effects          :
#1 (id=3002) : Apply Aura (6) | Dummy (4)
                   Base Value: 25 | PvP Coefficient: 0.5
Description      : Value $s1%.
Name             : Time (id=201)
Labels           : 900
Effects          :
#1 (id=3003) : Apply Aura (6) | Dummy (4)
                   Base Value: 5000
Description      : Duration $s1 seconds.
"""
    dump=simc.parse_dump(text,class_slug="mage")
    rules,report=pvp_aura.exact_flat_scalar_inventory([],dict(auras=[dict(id=100,name="Example Mage",spec="Example")]),
        dump,spec_name="Example",class_name="Mage")
    assert rules==[]
    assert {r["status"] for r in report[0]["targets"]}=={
        "COMBINED_MODIFIER_ORDER_UNPROVED","UNPROVED_SCALAR_PERCENT_UNIT"}
