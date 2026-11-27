"""Offline inventory of exact-build specialization PvP aura coverage.

Reads a sealed source plan or snapshot, never makes HTTP requests and never
publishes data. Unsupported operations are explicit, not assumed neutral.
"""
from __future__ import annotations

import argparse
from collections import Counter
import json
from pathlib import Path
import re

from pvpcalc import pvp_aura, spellbook
from pvpcalc.snapshot import HttpSnapshot
from pvpcalc.sources import raidbots, simc


def audit_spec(dump, payload, *, class_name, spec_name, spec_names, generated_labels=None):
    scoped=simc.scope_dump_to_specialization(dump,class_name=class_name,
        spec_name=spec_name,spec_names=spec_names)
    rules=pvp_aura.normalize_current_spec_aura(payload,class_name=class_name,spec_name=spec_name)
    rules=pvp_aura.supplement_exact_percent_rules(rules,payload,scoped,
        class_name=class_name,spec_name=spec_name)
    flat,inventory=pvp_aura.exact_flat_scalar_inventory(rules,payload,scoped,
        class_name=class_name,spec_name=spec_name)
    known={r.game_effect_id:r for r in rules}
    flat_by_id={item["game_effect_id"]:item for item in inventory}
    selected=[a for a in payload["auras"] if str(a.get("spec","")).casefold()==spec_name.casefold()
              or str(a.get("name","")).casefold()==f"{spec_name} {class_name}".casefold()]
    effects=[]
    for aura in selected:
        spell=scoped.spells.get(int(aura["id"]))
        if not spell:
            raise ValueError(f"Missing PvP aura spell: {aura['id']}")
        headers=list(simc._SIMC_EFFECT_HEADER_RE.finditer(spell.raw))
        for n,header in enumerate(headers):
            effect=simc.effect_for_spell(scoped,spell.spell_id,int(header[1]))
            if not effect:
                raise ValueError("Unparsed exact aura effect")
            if effect.base_value in (None,0):
                continue
            block=spell.raw[header.start():headers[n+1].start() if n+1<len(headers) else len(spell.raw)]
            row=dict(aura_spell_id=spell.spell_id,effect_index=effect.effect_index,
                game_effect_id=effect.game_effect_id,raw_value=effect.base_value,
                effect_text=effect.effect_text,source_block=block.strip())
            eid=effect.game_effect_id
            if eid in known:
                rule=known[eid]
                row.update(status="REPRESENTED_PERCENT_RULE",source=rule.source,
                    factor=rule.factor,target_count=len(rule.affected_spells))
            elif eid in flat_by_id:
                proof=flat_by_id[eid]
                statuses=Counter(t["status"] for t in proof["targets"])
                row.update(status="FLAT_TARGET_INVENTORY",target_statuses=dict(statuses),targets=proof["targets"])
            else:
                row["status"]="UNSUPPORTED_AURA_OPERATION"
                label=re.search(r"Misc Value 2:\s*(\d+)\s*\(Label\)",block)
                category=re.search(r"Misc Value:\s*(\d+)\s*\(Category\)",block)
                if label:
                    label_id=int(label[1])
                    row.update(label_id=label_id,
                        class_dump_targets=sorted(simc.spell_ids_for_label(scoped,label_id)))
                    if generated_labels is not None:
                        row["generated_label_targets"]=sorted(generated_labels.get(label_id,set()))
                        row["target_evidence"]=("EXACT_GENERATED_LABEL_PRESENT" if row["generated_label_targets"]
                            else "LABEL_ABSENT_FROM_GENERATED_TABLE")
                elif category:
                    row["category_id"]=int(category[1])
                    match=re.search(r"Affected Spells \(Category\):\s*([^\r\n]+)",block)
                    row["declared_category_targets"]=sorted(set(map(int,re.findall(r"\((\d+)\)",match[1])))) if match else []
                    row["target_evidence"]="COOLDOWN_CATEGORY_REQUIRES_ITEM_OR_ABILITY_OWNERSHIP"
                elif re.search(r"Modify (?:Pet|Guardian) Damage Done%",effect.effect_text):
                    row["target_evidence"]="PET_OR_GUARDIAN_OWNERSHIP_REQUIRED"
            effects.append(row)
    return dict(class_name=class_name,spec_name=spec_name,effects=effects,
                applied_flat_targets=len(flat),build=scoped.build)


def audit(snapshot_dir,raidbots_file):
    snapshot=HttpSnapshot(snapshot_dir,archival_replay=True)
    context=snapshot.manifest["context"]
    data=json.loads(raidbots_file.read_text(encoding="utf-8"))
    specs=raidbots.discover_specs(data["talents"])
    result=[]
    labels_by_ref={}
    for class_name in sorted({s["class_name"] for s in specs}):
        cls=[s for s in specs if s["class_name"]==class_name]
        ref=context["classes"][class_name]["simc_ref"]
        url=f"https://raw.githubusercontent.com/{simc.SIMC_REPO}/{ref}/"
        if ref not in labels_by_ref:
            labels_by_ref[ref]=simc.parse_generated_labels(snapshot.read(url+"engine/dbc/generated/sc_spell_data.inc"),context["tree_build"])
        slug=class_name.casefold().replace(" ","")
        dump=simc.parse_dump(snapshot.read(url+f"SpellDataDump/{slug}.txt"),
            class_slug=slug,source_ref=ref)
        if dump.build!=context["tree_build"]:
            raise ValueError("Exact build mismatch")
        tables=[row for name in spellbook.TABLES for row in spellbook.parse_table(
            snapshot.read(url+f"engine/dbc/generated/{name}"),expected_build=dump.build,
            require_passive=name=="class_spells.inc")]
        spec_names=spellbook.specialization_order(tables,class_id=cls[0]["class_id"],
            spec_id_to_name={s["spec_id"]:s["spec_name"] for s in cls})
        payload=json.loads(snapshot.read("https://drustvar.com/api/v1/pvp-auras/"+class_name.casefold().replace(" ","-")))
        for item in cls:
            row=audit_spec(dump,payload,class_name=class_name,
                spec_name=item["spec_name"],spec_names=spec_names,generated_labels=labels_by_ref[ref])
            row.update(class_id=item["class_id"],spec_id=item["spec_id"])
            result.append(row)
    status=Counter(e["status"] for r in result for e in r["effects"])
    flat=Counter(t["status"] for r in result for e in r["effects"] for t in e.get("targets",[]))
    target_evidence=Counter(e["target_evidence"] for r in result for e in r["effects"] if "target_evidence" in e)
    return dict(schema=1,unsupported_target_evidence=dict(target_evidence),source_snapshot_hash=snapshot.manifest["snapshot_hash"],
        build=context["tree_build"],spec_count=len(result),effect_statuses=dict(status),
        flat_target_statuses=dict(flat),specializations=result)


def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--snapshot",type=Path,required=True)
    parser.add_argument("--raidbots",type=Path,required=True)
    parser.add_argument("--output",type=Path,required=True)
    parser.add_argument("--client-db2",type=Path,help="Exact-build sealed Wago DB2 snapshot")
    parser.add_argument("--capture-client-db2",action="store_true",help="Capture a fresh build-pinned DB2 snapshot")
    args=parser.parse_args()
    report=audit(args.snapshot,args.raidbots)
    if args.capture_client_db2 and not args.client_db2:
        parser.error("--capture-client-db2 requires --client-db2")
    if args.client_db2:
        from pvpcalc.sources import client_db2
        if args.capture_client_db2:
            client_db2.capture(args.client_db2,report["build"])
        report["client_db2"]=client_db2.resolve_unsupported(report,
            client_db2.ClientSnapshot(args.client_db2,build=report["build"]))
    args.output.write_text(json.dumps(report,indent=2,ensure_ascii=False)+"\n",encoding="utf-8")
    print(json.dumps({k:v for k,v in report.items() if k not in {"specializations","client_db2"}},indent=2))


if __name__=="__main__":
    main()
