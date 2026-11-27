import pytest

from pvpcalc.client_evidence import build_report, visible_scalar_projection


def inputs():
    manifest=dict(tree_build="12.1.5.70961",source_snapshot_hash="sealed",
        content_hash="catalog",generated_at="2026-11-27T00:00:00+00:00",
        classes=[dict(class_id=8,name="Mage",specs=[dict(spec_id=63,name="Fire",slug="mage-fire")])])
    report=dict(build=manifest["tree_build"],source_snapshot_hash="sealed",
        specializations=[dict(class_id=8,spec_id=63,effects=[
            dict(aura_spell_id=100,game_effect_id=101,raw_value=-35,targets=[
                dict(spell_id=200,game_effect_id=201,effect_index=1,
                     status="COMBINED_MODIFIER_ORDER_UNPROVED"),
                dict(spell_id=202,effect_index=1,status="APPLIED_EXACT_FLAT_PERCENT")])])])
    client=dict(build=report["build"],pvp_talent_inventory=[dict(SpecID=63,SpellID=500)],
        pvp_talent_spells=[dict(spell_id=500)],pvp_talent_unique_spells=1)
    return report,manifest,client


def test_preserve_exact_identity_and_unresolved_target():
    report,manifest,client=inputs()
    output=build_report(report,manifest,client)
    assert output["status"]=="AVAILABLE"
    assert output["source_snapshot_hash"]==manifest["source_snapshot_hash"]
    assert output["dataset_content_hash"]==manifest["content_hash"]
    assert output["unresolved_flat_targets"]==[dict(spec_id=63,aura_spell_id=100,
        aura_game_effect_id=101,raw_delta=-35,spell_id=200,game_effect_id=201,
        effect_index=1,status="COMBINED_MODIFIER_ORDER_UNPROVED")]


def test_unavailable_report_never_reuses_client_data():
    report,manifest,client=inputs()
    output=build_report(report,manifest,unavailable="network")
    assert output["status"]=="UNAVAILABLE"
    assert "client" not in output
    assert output["unresolved_flat_targets"]
    with pytest.raises(ValueError):
        build_report(report,manifest,client,unavailable="network")


@pytest.mark.parametrize("key,value",[("build","other"),("source_snapshot_hash","other")])
def test_reject_mixed_source_revisions(key,value):
    report,manifest,client=inputs()
    report[key]=value
    with pytest.raises(ValueError):
        build_report(report,manifest,client)


def test_reject_unknown_spec_or_incomplete_talent_inventory():
    report,manifest,client=inputs()
    client["pvp_talent_inventory"][0]["SpecID"]=999
    with pytest.raises(ValueError):
        build_report(report,manifest,client)
    client["pvp_talent_inventory"][0]["SpecID"]=63
    client["pvp_talent_unique_spells"]=2
    with pytest.raises(ValueError):
        build_report(report,manifest,client)

@pytest.mark.parametrize("description,index,base,adjusted,unit,old,new",[
    ("Reduces damage by $s1%.",1,-25,-15,"percent",25,15),
    ("Cooldown increases by ${$s2/1000} sec.",2,10000,20000,"seconds",10,20),
    ("Cooldown decreases by ${$s1/1000}.1 sec.",1,1000,2000,"seconds",1,2),
])
def test_visible_scalar_magnitude(description,index,base,adjusted,unit,old,new):
    result=visible_scalar_projection(description,index,base,adjusted)
    assert (result["unit"],result["old"],result["new"])==(unit,old,new)


@pytest.mark.parametrize("text,base,new",[
    ("$s1% and $s1%.",10,20),
    ("$s10%.",10,20),
    ("$s1.",10,20),
    ("$s1%.",-10,20),
    ("$s1%.",None,20),
])
def test_ambiguous_visible_scalar_does_not_get_rendered(text,base,new):
    assert visible_scalar_projection(text,1,base,new) is None

def test_regular_specialization_flat_baseline_requires_exact_reciprocal_scope():
    from pvpcalc.passive_modifiers import exact_spec_flat_baseline
    from pvpcalc.sources import simc
    text="""SimulationCraft for World of Warcraft 12.1.5.70961 Live
Name             : Example Paladin (id=100) [Passive, Hidden]
Effects          :
#1 (id=101) : Apply Aura (6) | Apply Flat Modifier w/ Label (219): Spell Effect 2 (12)
                   Base Value: -20 | Scaled Value: -20 | Misc Value 2: 900 (Label)
                   Affected Spells (Label): Target (200)
Name             : Target (id=200)
Labels           : 900
Effects          :
#2 (id=201) : Apply Aura (6) | Dummy (4)
                   Base Value: 100 | Scaled Value: 100 | PvP Coefficient: 0.75
                   Modified By: Example Paladin (100 effect#1)
Description      : Spell casts at $s2% effectiveness.
"""
    dump=simc.parse_dump(text,class_slug="paladin")
    result=exact_spec_flat_baseline(dump,200,2,spec_source_ids={100},pvp_source_ids=set())
    assert result["baseline_value"]==80
    assert result["modifiers"][0]["game_effect_id"]==101
    assert exact_spec_flat_baseline(dump,200,2,spec_source_ids=set(),pvp_source_ids=set()) is None
    assert exact_spec_flat_baseline(dump,200,2,spec_source_ids={100},pvp_source_ids={100}) is None
    other=simc.parse_dump(text.replace("Target (200)","Target (300)"),class_slug="paladin")
    assert exact_spec_flat_baseline(other,200,2,spec_source_ids={100},pvp_source_ids=set()) is None
