"""Build and validate supplemental evidence against a verified dataset."""
from __future__ import annotations

import math
import re

def visible_scalar_projection(description, index, base, adjusted):
    """Translate only unit-proved literal client tokens, not full tooltips.

    Raw negatives are displayed as magnitudes, explicitly labelled as such.
    No replacement in the text itself or assertion of equipped/learned state.
    """
    if not description or not isinstance(index,int) or base is None or adjusted is None:
        return None
    if not all(math.isfinite(v) for v in (base,adjusted)) or base*adjusted<0:
        return None
    token=rf"\$[smw]{index}(?!\d)"
    percent=re.compile(token+r"\s*%",re.I)
    seconds=re.compile(r"\$\{"+token+r"/(-?1000)\}(?:\.(\d+))?\s*sec(?:onds?)?\b",re.I)
    matches=[(m[0],"percent",1,4) for m in percent.finditer(description)]
    matches.extend((m[0],"seconds",abs(int(m[1])),min(int(m[2] or 4),8))
                   for m in seconds.finditer(description))
    if len(matches)!=1:
        return None
    expression,unit,divisor,precision=matches[0]
    return dict(expression=expression,unit=unit,old=round(abs(base)/divisor,precision),
                new=round(abs(adjusted)/divisor,precision),display="magnitude")


def build_report(aura_report, manifest, client=None, *, unavailable=None):
    specs = sorted((int(c["class_id"]),int(s["spec_id"]))
                   for c in manifest["classes"] for s in c["specs"])
    observed = sorted((int(s["class_id"]),int(s["spec_id"]))
                      for s in aura_report["specializations"])
    if (manifest["tree_build"] != aura_report["build"] or
            specs != observed or len(set(specs)) != len(specs)):
        raise ValueError("Supplemental client evidence differs from verified catalog")
    if (not manifest.get("source_snapshot_hash") or not manifest.get("content_hash")
            or aura_report["source_snapshot_hash"] != manifest["source_snapshot_hash"]):
        raise ValueError("Supplemental evidence requires the same sealed source snapshot")
    report = dict(schema=1, build=manifest["tree_build"], dataset_content_hash=manifest["content_hash"],
        dataset_source_snapshot_hash=manifest["source_snapshot_hash"],
        source_snapshot_hash=aura_report["source_snapshot_hash"], generated_at=manifest["generated_at"],
        status="AVAILABLE" if client is not None else "UNAVAILABLE",
        unavailable_reason=unavailable,
        specs=[dict(class_name=c["name"],class_id=c["class_id"],spec_name=s["name"],
                    spec_id=s["spec_id"],slug=s["slug"]) for c in manifest["classes"] for s in c["specs"]])
    pending=[]
    for spec in aura_report["specializations"]:
        for effect in spec["effects"]:
            for target in effect.get("targets",[]):
                if not target["status"].startswith("APPLIED_"):
                    pending.append(dict(spec_id=spec["spec_id"],aura_spell_id=effect["aura_spell_id"],
                        aura_game_effect_id=effect["game_effect_id"],raw_delta=effect["raw_value"],**target))
    report["unresolved_flat_targets"]=pending
    if (client is None) != bool(unavailable):
        raise ValueError("Supplemental status and availability must agree")
    if client is not None:
        if client["build"]!=report["build"]:
            raise ValueError("Client DB2 data build mismatch")
        known={s["spec_id"] for s in report["specs"]}
        if any(row["SpecID"] not in known for row in client["pvp_talent_inventory"]):
            raise ValueError("Unknown PvP talent specialization")
        if len(client["pvp_talent_spells"])!=client["pvp_talent_unique_spells"]:
            raise ValueError("Incomplete PvP talent catalog")
        # Keep raw fields and show separately proven display magnitudes only.
        import copy
        client=copy.deepcopy(client)
        for op in client.get("resolved_aura_operations",[]):
            for target in op["targets"]:
                if target["status"]=="EXACT_RAW_SCALAR":
                    projection=visible_scalar_projection(target.get("description"),
                        target.get("effect_index"),target.get("base_value"),target.get("adjusted_raw_value"))
                    if projection is not None:
                        target["display_projection"]=projection
        report["client"]=client
    return report
