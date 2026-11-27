"""Exact-build client DB2 evidence, separate from SimC's filtered tables.

No server-side hotfix or equip/learn state is inferred from a CSV export.
The capture is explicitly build-pinned, hashed, and replayable offline.
"""
from __future__ import annotations

import csv
from collections import defaultdict
import hashlib
import io
import json
import math
from pathlib import Path
import re
import urllib.request

TABLES = ("SpellLabel", "SpellCategories", "SpellCooldowns", "SpellEffect",
          "SpellName", "Spell", "PvpTalent", "ItemSetSpell", "ChrSpecialization")
SCALING = ("Coefficient", "EffectBonusCoefficient", "BonusCoefficientFromAP",
           "ResourceCoefficient", "EffectRealPointsPerLevel", "ScalingClass",
           "Variance")
GROUP_FACTOR = "GroupSizeBasePointsCoefficient"


def table_url(table, build):
    if table not in TABLES or not re.fullmatch(r"\d+\.\d+\.\d+\.\d+", build):
        raise ValueError("Invalid exact DB2 table/build")
    return f"https://wago.tools/db2/{table}/csv?build={build}"


def capture(directory, build):
    """Download public client exports, never fall back to latest/PTR."""
    directory = Path(directory)
    directory.mkdir(parents=True, exist_ok=True)
    manifest = {"build": build, "tables": {}}
    for table in TABLES:
        url = table_url(table, build)
        req = urllib.request.Request(url, headers={"User-Agent": "wow-pvp-talent-lab/0.1"})
        with urllib.request.urlopen(req, timeout=120) as response:
            expected = f"{table}.{build}.csv"
            if response.headers.get_filename() != expected or response.headers.get_content_type() != "text/csv":
                raise ValueError(f"DB2 export identity mismatch: {table}")
            data = response.read()
        if not data or not data.startswith((b"ID,", b"Name_", b"Description_")):
            raise ValueError(f"Invalid DB2 CSV: {table}")
        path = directory / (table + ".csv")
        temporary = path.with_suffix(".tmp")
        temporary.write_bytes(data)
        temporary.replace(path)
        manifest["tables"][table] = {"url": url, "sha256": hashlib.sha256(data).hexdigest(),
                                     "bytes": len(data)}
    temp = directory / "manifest.tmp"
    temp.write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    temp.replace(directory / "manifest.json")
    return manifest


class ClientSnapshot:
    def __init__(self, directory, *, build):
        self.directory = Path(directory)
        self.manifest = json.loads((self.directory / "manifest.json").read_text(encoding="utf-8"))
        if self.manifest.get("build") != build:
            raise ValueError("Client DB2 build differs from SimC source build")
        self.build = build

    def rows(self, table, required):
        evidence = self.manifest["tables"][table]
        if evidence.get("url") != table_url(table, self.build):
            raise ValueError("Unpinned DB2 table source")
        data = (self.directory / (table + ".csv")).read_bytes()
        if (len(data) != evidence.get("bytes") or
                hashlib.sha256(data).hexdigest() != evidence.get("sha256")):
            raise ValueError(f"DB2 snapshot integrity mismatch: {table}")
        reader = csv.DictReader(io.TextIOWrapper(io.BytesIO(data), encoding="utf-8-sig", newline=""))
        if not set(required).issubset(reader.fieldnames or ()):
            raise ValueError(f"DB2 schema mismatch: {table}")
        for row in reader:
            if None in row or any(row[name] is None for name in required):
                raise ValueError(f"Malformed DB2 row: {table}")
            yield row


def _int(row, field):
    return int(row[field])


def _float(row, field):
    value = float(row[field])
    if not math.isfinite(value):
        raise ValueError("Non-finite client spell value")
    return value


def _unique(index, key, row):
    if key in index:
        raise ValueError(f"Ambiguous DB2 identity: {key}")
    index[key] = row


def scalar_projection(target, delta):
    """Do not silently apply a flat adjustment to a scaled coefficient."""
    if (_float(target, "PvpMultiplier") != 1 or
            _float(target, GROUP_FACTOR) != 1 or
            any(_float(target, field) != 0 for field in SCALING)):
        return None
    return _float(target, "EffectBasePointsF") + delta


def resolve_unsupported(report, snapshot):
    """Resolve missing aura targets from full client DB2 relations.

    Rows are evidence, not universal abilities. PvP talents retain spec and
    PlayerConditionID; equipment effects retain item-set identity; unknown
    aliases and shared cooldown triggers are never automatically learned.
    """
    if report.get("build") != snapshot.build:
        raise ValueError("Client and aura report build mismatch")
    specs = {(_int(r,"ClassID"), r["Name_lang"]): _int(r,"ID")
             for r in snapshot.rows("ChrSpecialization", ("ID","ClassID","Name_lang"))}
    # The audit has names; identify each against the same active 40 client specs.
    spec_ids = {(s["class_name"],s["spec_name"]):specs[(s["class_id"],s["spec_name"])]
                for s in report["specializations"]}
    if len(spec_ids)!=report["spec_count"] or any(
            spec_ids[(s["class_name"],s["spec_name"])]!=s["spec_id"] for s in report["specializations"]):
        raise ValueError("Client specialization identity mismatch")

    unsupported = [(s,e) for s in report["specializations"] for e in s["effects"]
                   if e["status"]=="UNSUPPORTED_AURA_OPERATION"]
    labels_needed = {e["label_id"] for _,e in unsupported if "label_id" in e}
    categories_needed = {e["category_id"] for _,e in unsupported if "category_id" in e}
    labels, categories = defaultdict(set), defaultdict(set)
    for r in snapshot.rows("SpellLabel",("ID","LabelID","SpellID")):
        if _int(r,"LabelID") in labels_needed:
            labels[_int(r,"LabelID")].add(_int(r,"SpellID"))
    for r in snapshot.rows("SpellCategories",("ID","DifficultyID","Category","SpellID")):
        if _int(r,"DifficultyID")==0 and _int(r,"Category") in categories_needed:
            categories[_int(r,"Category")].add(_int(r,"SpellID"))
    targets = set().union(*labels.values(),*categories.values())
    aura_ids = {e["game_effect_id"] for _,e in unsupported}
    pvp_talents, item_sets = defaultdict(list), defaultdict(list)
    all_pvp = []
    pvp_fields = ("ID","SpecID","SpellID","OverridesSpellID","ActionBarSpellID",
                  "PlayerConditionID","PvpTalentCategoryID","LevelRequired","Flags")
    for r in snapshot.rows("PvpTalent",pvp_fields):
        row = {key:_int(r,key) for key in pvp_fields}
        if row["SpecID"] in spec_ids.values():
            all_pvp.append(row)
            pvp_talents[row["SpellID"]].append(row)
    for r in snapshot.rows("ItemSetSpell",("ID","ChrSpecID","SpellID","ItemSetID","Threshold","TraitSubTreeID")):
        if _int(r,"SpellID") in targets:
            item_sets[_int(r,"SpellID")].append({k:int(v) for k,v in r.items()})
    # Inventory PvP-only talents independently of ordinary talent-tree roots.
    all_spell_ids=targets | set(pvp_talents)
    names, descriptions, effects, source_effects, cooldowns = {}, {}, {}, {}, {}
    for r in snapshot.rows("SpellName",("ID","Name_lang")):
        if _int(r,"ID") in all_spell_ids:
            _unique(names,_int(r,"ID"),r["Name_lang"])
    for r in snapshot.rows("Spell",("ID","Description_lang","AuraDescription_lang")):
        if _int(r,"ID") in all_spell_ids:
            _unique(descriptions,_int(r,"ID"),r["Description_lang"])
    fields = ("ID","SpellID","DifficultyID","EffectIndex","Effect","EffectAura",
              "EffectBasePointsF","PvpMultiplier","EffectMiscValue_0","EffectMiscValue_1",*SCALING,GROUP_FACTOR)
    for r in snapshot.rows("SpellEffect",fields):
        if _int(r,"DifficultyID")!=0:
            continue
        sid,eid,index = _int(r,"SpellID"),_int(r,"ID"),_int(r,"EffectIndex")+1
        if sid in all_spell_ids:
            _unique(effects,(sid,index),{key:r[key] for key in fields})
        if eid in aura_ids:
            _unique(source_effects,eid,{key:r[key] for key in fields})
    for r in snapshot.rows("SpellCooldowns",("ID","SpellID","DifficultyID","CategoryRecoveryTime","RecoveryTime","AuraSpellID")):
        if _int(r,"SpellID") in targets and _int(r,"DifficultyID")==0 and _int(r,"AuraSpellID")==0:
            _unique(cooldowns,_int(r,"SpellID"),r)
    resolved=[]
    for s,e in unsupported:
        spec_id=spec_ids[s["class_name"],s["spec_name"]]
        src=source_effects.get(e["game_effect_id"])
        if not src or _int(src,"SpellID")!=e["aura_spell_id"] or _int(src,"EffectIndex")+1!=e["effect_index"]:
            raise ValueError(f"Exact DB2 aura identity mismatch: {e['game_effect_id']}")
        delta=_float(src,"EffectBasePointsF")
        if abs(delta-e["raw_value"])>1e-6:
            raise ValueError(f"Exact DB2 aura value disagrees with SimC: {e['game_effect_id']}")
        if any(_float(src,field)!=0 for field in SCALING) or _float(src,GROUP_FACTOR)!=1:
            raise ValueError("Unsupported scaled DB2 aura source")
        row={"class_name":s["class_name"],"spec_name":s["spec_name"],"spec_id":spec_id,
             "aura_spell_id":e["aura_spell_id"],"game_effect_id":e["game_effect_id"],
             "aura_type":_int(src,"EffectAura"),"raw_delta":delta,
             "aura_pvp_multiplier":_float(src,"PvpMultiplier"),"targets":[]}
        if "label_id" in e:
            label=e["label_id"]
            if row["aura_type"]!=219 or _int(src,"EffectMiscValue_1")!=label:
                raise ValueError("Unexpected DB2 label aura operation")
            slot={3:1,12:2,23:3,24:4,25:5}.get(_int(src,"EffectMiscValue_0"))
            row.update(label_id=label,status="EXACT_CLIENT_LABEL_RESOLVED" if labels[label] else "LABEL_STILL_ABSENT")
            for sid in sorted(labels[label]):
                talent=[t for t in pvp_talents.get(sid,[]) if t["SpecID"]==spec_id]
                sets=[t for t in item_sets.get(sid,[]) if t["ChrSpecID"] in (0,spec_id)]
                ownership="PVP_TALENT" if talent else "ITEM_SET" if sets else "CONDITIONAL_OWNERSHIP_UNRESOLVED"
                target=effects.get((sid,slot))
                entry=dict(spell_id=sid,name=names.get(sid),description=descriptions.get(sid),
                    ownership=ownership,pvp_talents=talent,item_sets=sets,effect_index=slot)
                if target:
                    adjusted=scalar_projection(target,delta*row["aura_pvp_multiplier"])
                    entry.update(game_effect_id=_int(target,"ID"),base_value=_float(target,"EffectBasePointsF"),
                                 adjusted_raw_value=adjusted,status="EXACT_RAW_SCALAR" if adjusted is not None else "SCALING_UNPROVED")
                else:
                    entry["status"]="TARGET_EFFECT_ABSENT"
                row["targets"].append(entry)
        elif "category_id" in e:
            category=e["category_id"]
            if row["aura_type"]!=341 or _int(src,"EffectMiscValue_0")!=category:
                raise ValueError("Unexpected DB2 cooldown category operation")
            row.update(category_id=category,status="EXACT_CATEGORY_TARGETS_RESOLVED")
            for sid in sorted(categories[category]):
                cd=cooldowns.get(sid)
                base=_int(cd,"CategoryRecoveryTime") if cd else None
                adjusted=base+delta*row["aura_pvp_multiplier"] if base is not None else None
                row["targets"].append(dict(spell_id=sid,name=names.get(sid),description=descriptions.get(sid),
                    ownership="CONDITIONAL_COOLDOWN_OWNERSHIP",base_category_ms=base,
                    adjusted_category_ms=adjusted if adjusted is not None and adjusted>=0 else None,
                    status="EXACT_CATEGORY_RAW_PROJECTION" if adjusted is not None and adjusted>=0 else "UNPROVED_COOLDOWN"))
        elif row["aura_type"] in (429,531):
            row.update(status="EXACT_PET_GUARDIAN_AURA_VALUE",
                affected_unit_type="pet" if row["aura_type"]==429 else "guardian",
                effective_pvp_percent=delta*row["aura_pvp_multiplier"],
                ownership="INDIVIDUAL_SUMMON_OWNERSHIP_UNRESOLVED")
        else:
            row["status"]="UNSUPPORTED_OPERATION"
        resolved.append(row)
    pvp_spells=[]
    for sid in sorted(pvp_talents):
        pvp_spells.append(dict(spell_id=sid,name=names.get(sid),description=descriptions.get(sid),
            effects=[row for (spell_id,index),row in sorted(effects.items()) if spell_id==sid],
            ownership_status="EXACT_PVP_TALENT_TABLE",availability_conditions=pvp_talents[sid],
            source_status="RAW_CLIENT_NOT_RENDERED"))
    if {r["spell_id"] for r in pvp_spells}!={r["SpellID"] for r in all_pvp}:
        raise ValueError("PvP talent inventory changed during target ownership resolution")
    if len(resolved)!=len(unsupported):
        raise ValueError("Incomplete client DB2 audit")
    return {"build":snapshot.build,
            "limitations":["Raw client scalar/category projections are not live equipped/learned state.",
                           "PvP-only talents do not have a comparable usable PvE baseline.",
                           "Server hotfixes beyond the pinned client export need independent reconciliation.",
                           "Do not apply pet/guardian modifiers to owner or individual summon spells without ownership proof."],
            "source_tables":{t:snapshot.manifest["tables"][t] for t in TABLES},
            "pvp_talent_entries":len(all_pvp),"pvp_talent_unique_spells":len({r["SpellID"] for r in all_pvp}),
            "pvp_talent_inventory":all_pvp,"pvp_talent_spells":pvp_spells,"resolved_aura_operations":resolved}
