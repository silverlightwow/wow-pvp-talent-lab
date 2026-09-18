from __future__ import annotations
import argparse, asyncio, json
from pathlib import Path
from .pipeline import research_spell

def main():
    p = argparse.ArgumentParser()
    p.add_argument("--spell-id", type=int, required=True)
    p.add_argument("--name", required=True)
    p.add_argument("--class", dest="wow_class", required=True)
    p.add_argument("-o", "--output", default="-")
    a = p.parse_args()
    data = asyncio.run(research_spell(a.spell_id, a.name, a.wow_class))
    text = json.dumps(data, indent=2, ensure_ascii=False)
    if a.output == "-":
        print(text)
    else:
        Path(a.output).write_text(text, encoding="utf-8")

if __name__ == "__main__":
    main()
