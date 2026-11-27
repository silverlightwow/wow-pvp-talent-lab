"""Generate a versioned supplemental client evidence catalog for the site."""
from __future__ import annotations

import argparse
import json
from pathlib import Path
from urllib.error import URLError

from audit_exact_pvp_auras import audit
from pvpcalc.sources import client_db2


from pvpcalc.client_evidence import build_report


def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--snapshot",type=Path,required=True)
    parser.add_argument("--raidbots",type=Path,required=True)
    parser.add_argument("--data-dir",type=Path,required=True)
    parser.add_argument("--client-db2",type=Path,required=True)
    parser.add_argument("--capture",action="store_true")
    args=parser.parse_args()
    manifest=json.loads((args.data_dir/"manifest.json").read_text(encoding="utf-8"))
    aura_report=audit(args.snapshot,args.raidbots)
    reason=None
    client=None
    if args.capture:
        try:
            client_db2.capture(args.client_db2,aura_report["build"])
        except (URLError,TimeoutError,ConnectionError) as exc:
            # A network outage must not publish an old supplemental report
            # or prevent release of the independently verified main catalog.
            reason=f"Exact-build DB2 export unavailable: {type(exc).__name__}"
            print("::warning::"+reason)
    if reason is None:
        client=client_db2.resolve_unsupported(aura_report,
            client_db2.ClientSnapshot(args.client_db2,build=aura_report["build"]))
    result=build_report(aura_report,manifest,client,unavailable=reason)
    target=args.data_dir/"client-evidence"/"report.json"
    target.parent.mkdir(parents=True,exist_ok=True)
    temp=target.with_suffix(".tmp")
    temp.write_text(json.dumps(result,ensure_ascii=False,separators=(",",":"))+"\n",encoding="utf-8")
    temp.replace(target)
    print("Supplemental client evidence:",result["status"],
          len(client["pvp_talent_spells"]) if client else 0,"unique PvP talent spells")


if __name__=="__main__":
    main()
