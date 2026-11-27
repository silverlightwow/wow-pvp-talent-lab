import hashlib
import json

import pytest

from pvpcalc.sources import client_db2


def test_exact_snapshot_validates_build_source_hash_and_schema(tmp_path):
    data=b"ID,LabelID,SpellID\n1,9,200\n"
    (tmp_path/"SpellLabel.csv").write_bytes(data)
    manifest={"build":"12.1.5.70961","tables":{"SpellLabel":{
        "url":client_db2.table_url("SpellLabel","12.1.5.70961"),
        "sha256":hashlib.sha256(data).hexdigest(),"bytes":len(data)}}}
    (tmp_path/"manifest.json").write_text(json.dumps(manifest))
    reader=client_db2.ClientSnapshot(tmp_path,build="12.1.5.70961")
    assert list(reader.rows("SpellLabel",("ID","LabelID","SpellID")))==[
        {"ID":"1","LabelID":"9","SpellID":"200"}]
    with pytest.raises(ValueError,match="schema"):
        list(reader.rows("SpellLabel",("WrongColumn",)))
    with pytest.raises(ValueError,match="build"):
        client_db2.ClientSnapshot(tmp_path,build="12.1.5.70000")
    (tmp_path/"SpellLabel.csv").write_bytes(data.replace(b"200",b"300"))
    with pytest.raises(ValueError,match="integrity"):
        list(reader.rows("SpellLabel",("ID",)))
    reader.manifest["tables"]["SpellLabel"]["url"]="https://wago.tools/db2/SpellLabel/csv"
    with pytest.raises(ValueError,match="Unpinned"):
        list(reader.rows("SpellLabel",("ID",)))


@pytest.mark.parametrize("base,delta,expected",[(20,-15,5),(-25,10,-15),(-30,20,-10),(1000,1000,2000)])
def test_flat_db2_scalar(base,delta,expected):
    row={key:"0" for key in client_db2.SCALING}
    row.update(EffectBasePointsF=str(base),PvpMultiplier="1",GroupSizeBasePointsCoefficient="1")
    assert client_db2.scalar_projection(row,delta)==expected
    for key in client_db2.SCALING:
        assert client_db2.scalar_projection({**row,key:"1"},delta) is None
    assert client_db2.scalar_projection({**row,"PvpMultiplier":"0.6"},delta) is None
    assert client_db2.scalar_projection({**row,"GroupSizeBasePointsCoefficient":"2"},delta) is None


def test_invalid_table_or_unpinned_build_rejected():
    with pytest.raises(ValueError):
        client_db2.table_url("SpellEffect","latest")
    with pytest.raises(ValueError):
        client_db2.table_url("../other","12.1.5.70961")


def test_resolve_pvp_talent_and_cooldown_without_claiming_universal_ownership():
    build="12.1.5.70961"
    fields={key:"0" for key in client_db2.SCALING}
    fields[client_db2.GROUP_FACTOR]="1"
    def effect(sid,eid,index,kind,base,misc0=0,misc1=0,pvp=1):
        return {**fields,**{k:str(v) for k,v in dict(ID=eid,SpellID=sid,DifficultyID=0,
            EffectIndex=index,Effect=6,EffectAura=kind,EffectBasePointsF=base,
            PvpMultiplier=pvp,EffectMiscValue_0=misc0,EffectMiscValue_1=misc1).items()}}
    tables={
        "ChrSpecialization":[dict(ID="63",ClassID="8",Name_lang="Fire")],
        "SpellLabel":[dict(ID="1",LabelID="9",SpellID="200"),dict(ID="5",LabelID="9",SpellID="201")],
        "SpellCategories":[dict(ID="2",DifficultyID="0",Category="10",SpellID="300")],
        "PvpTalent":[dict(ID="3",SpecID="63",SpellID="200",OverridesSpellID="0",ActionBarSpellID="0",
            PlayerConditionID="7",PvpTalentCategoryID="2",LevelRequired="30",Flags="0")],
        "ItemSetSpell":[dict(ID="6",ChrSpecID="0",SpellID="201",ItemSetID="8",Threshold="2",TraitSubTreeID="0")],
        "SpellName":[dict(ID="200",Name_lang="PvP Talent"),dict(ID="300",Name_lang="Trinket")],
        "Spell":[dict(ID="200",Description_lang="Reduces damage by $s1%.",AuraDescription_lang="")],
        "SpellEffect":[effect(100,101,0,219,-15,3,9),effect(100,102,1,341,-30000,10),
            effect(100,103,2,429,-30,pvp=0),effect(200,201,0,87,25),effect(201,202,0,137,20)],
        "SpellCooldowns":[dict(ID="4",SpellID="300",DifficultyID="0",CategoryRecoveryTime="120000",
            RecoveryTime="0",AuraSpellID="0")],
    }
    class Snapshot:
        def __init__(self):
            self.build=build
            self.manifest={"tables":{t:{} for t in client_db2.TABLES}}
        def rows(self,table,required):
            return iter(tables[table])
    def aura(eid,index,base,**extra):
        return dict(status="UNSUPPORTED_AURA_OPERATION",aura_spell_id=100,game_effect_id=eid,
            effect_index=index,raw_value=base,**extra)
    report=dict(build=build,spec_count=1,specializations=[dict(class_name="Mage",spec_name="Fire",
        class_id=8,spec_id=63,effects=[aura(101,1,-15,label_id=9),aura(102,2,-30000,category_id=10),
        aura(103,3,-30)])])
    result=client_db2.resolve_unsupported(report,Snapshot())
    first,second,third=result["resolved_aura_operations"]
    target=first["targets"][0]
    assert target["adjusted_raw_value"]==10
    assert target["ownership"]=="PVP_TALENT"
    assert target["pvp_talents"][0]["PlayerConditionID"]==7
    assert second["targets"][0]["adjusted_category_ms"]==90000
    assert second["targets"][0]["ownership"]=="CONDITIONAL_COOLDOWN_OWNERSHIP"
    assert third["effective_pvp_percent"]==0
    assert third["ownership"]=="INDIVIDUAL_SUMMON_OWNERSHIP_UNRESOLVED"
    assert len(result["pvp_talent_spells"])==result["pvp_talent_unique_spells"]==1
    assert result["pvp_talent_spells"][0]["source_status"]=="RAW_CLIENT_NOT_RENDERED"
    assert first["targets"][1]["ownership"]=="ITEM_SET"
    tables["SpellEffect"][0]["EffectBasePointsF"]="-14"
    with pytest.raises(ValueError,match="disagrees"):
        client_db2.resolve_unsupported(report,Snapshot())
