"""Capture fresh, deduplicated inputs for every specialization before the matrix."""
from __future__ import annotations

import argparse
import asyncio
import json
import os
import shutil
from pathlib import Path

from pvpcalc.http import CachedClient
from pvpcalc.snapshot import HttpSnapshot, digest, parser_hash
from pvpcalc.source_plan import plan_spec_sources
from pvpcalc.sources import blizzard_hotfixes, drustvar, raidbots, simc, wowhead


async def collect(args):
    os.environ['WOW_PVP_RAIDBOTS_FILE'] = str(args.raidbots)
    official, hotfix_context = blizzard_hotfixes.read_hotfix_snapshot(args.hotfixes)
    snapshot = HttpSnapshot(args.output, recording=True)
    client = CachedClient(concurrency=4, snapshot=snapshot)
    try:
        metadata, talents = await raidbots.fetch_live_snapshot(client)
        specs = raidbots.discover_specs(talents)
        # A mutable branch must never resolve to different revisions for
        # class dumps and generated DBC during the same collection.
        revision = await client.get_json(f'https://api.github.com/repos/{simc.SIMC_REPO}/commits/{simc.SIMC_BRANCH}')
        os.environ['WOW_PVP_SIMC_REF'] = revision['sha']
        classes = {}
        ids: set[int] = set()
        nether_ids: set[int] = set()
        for class_name in sorted({s['class_name'] for s in specs}):
            slug = class_name.casefold().replace(' ', '-')
            dump, spells, auras = await asyncio.gather(
                simc.fetch_dump(client, class_name, target_build=metadata['wowBuild']),
                drustvar.fetch_spell_payload(client, slug),
                drustvar.fetch_aura_payload(client, slug),
            )
            if dump.build != metadata['wowBuild']:
                raise ValueError(f'{class_name}: no exact-build SimC dump')
            if not dump.spells:
                raise ValueError(f'{class_name}: SimC spell schema is unrecognized')
            nether_ids.update(spell.spell_id for spell in dump.spells.values()
                              if '$?a134735[' in spell.raw)
            drustvar.validate_payload(auras, 'auras')
            effects = drustvar.parse_spell_payload(spells, slug)
            class_specs = [s for s in specs if s['class_name'] == class_name]
            spec_names = [s['spec_name'] for s in sorted(class_specs, key=lambda s: s['spec_id'])]
            for item in class_specs:
                _, rows = await raidbots.fetch_spec_tree(client, class_name=class_name, spec_name=item['spec_name'])
                roots = {int(row['spell_id']) for row in rows if row.get('spell_id')}
                ids.update(roots)
                ids.update(int(row['visible_spell_id']) for row in rows if row.get('visible_spell_id'))
                scoped, _, _, _, _, dependencies = plan_spec_sources(
                    dump=dump, class_name=class_name, spec_name=item['spec_name'], spec_names=spec_names,
                    talent_spell_ids=roots, drustvar_effects=effects, aura_payload=auras,
                )
                ids.update(d.target_spell_id for d in dependencies)
                # A harmless superset of in-scope off-tree candidates allows
                # future official ability notes without per-spell exceptions.
                names = {blizzard_hotfixes._normalize_name(h.talent_name) for h in official
                         if not h.context_path or h.context_path[0].casefold() == class_name.casefold()}
                ids.update(s.spell_id for s in scoped.spells.values()
                           if blizzard_hotfixes._normalize_name(s.name) in names)
            classes[class_name] = dict(simc_ref=dump.source_ref, simc_hash=digest(
                {str(k): v.raw for k, v in dump.spells.items()}), drustvar_hash=digest([spells, auras]))
            print(f'Planned {class_name}: {len(class_specs)} specs; {len(ids)} unique spells so far.', flush=True)

        generated_hashes = {}
        for ref in sorted({c['simc_ref'] for c in classes.values()}):
            texts = await asyncio.gather(*[
                client.get_text(f'https://raw.githubusercontent.com/{simc.SIMC_REPO}/{ref}/engine/dbc/generated/{name}')
                for name in ('sc_spell_data.inc', 'spelltext_data.inc')])
            for text in texts:
                match = simc._GENERATED_BUILD_RE.search(text)
                if not match or match.group(1) != metadata['wowBuild']:
                    raise ValueError(f'Generated DBC build mismatch at {ref}')
            generated_hashes[ref] = digest(texts)

        for name, info in classes.items():
            info['evidence_hash'] = digest(dict(tree=metadata['contentHash'],
                hotfix=hotfix_context['snapshot_hash'], simc=info['simc_hash'],
                drustvar=info['drustvar_hash'], generated=generated_hashes[info['simc_ref']]))
        context = dict(tree_build=metadata['wowBuild'], content_hash=metadata['contentHash'],
            hotfix_snapshot_hash=hotfix_context['snapshot_hash'], simc_ref=revision['sha'],
            parser_hash=parser_hash(), classes=classes, spell_count=len(ids), spell_ids=sorted(ids),
            nether_spell_ids=sorted(ids & nether_ids))
        if args.phase == 'full':
            await capture_pages(client, context['spell_ids'], context['nether_spell_ids'])
        result = snapshot.seal(context)
        if args.github_output:
            with open(args.github_output, 'a') as handle:
                handle.write(f"simc_ref={revision['sha']}\nsnapshot_hash={result['snapshot_hash']}\n")
        print(json.dumps(dict(snapshot_hash=result['snapshot_hash'], requests=len(result['entries']),
                              source_failures=sum('sha256' not in e for e in result['entries'].values()))))
    finally:
        if 'snapshot_hash' not in snapshot.manifest:
            (snapshot.directory / 'partial-snapshot.json').write_text(json.dumps(snapshot.manifest, indent=2))
        await client.aclose()



async def capture_pages(client, spell_ids, nether_spell_ids=()):
    nether_spell_ids = set(nether_spell_ids)
    async def fetch_spell(spell_id):
        try:
            await wowhead.fetch_spell_page(client, spell_id)
        except Exception as exc:
            print(f'Source gap for {spell_id}: {type(exc).__name__}', flush=True)
        # Preserve independent PvP branch evidence even when the full page
        # succeeds and fetch_spell_page does not need its tooltip fallback.
        if spell_id in nether_spell_ids:
            try:
                await client.get_json(wowhead.NETHER_BASE.format(spell_id=spell_id))
            except Exception as exc:
                print(f'PvP branch source gap for {spell_id}: {type(exc).__name__}', flush=True)
    for offset in range(0, len(spell_ids), 100):
        await asyncio.gather(*(fetch_spell(i) for i in spell_ids[offset:offset + 100]))
        print(f'Captured spell pages: {min(offset + 100, len(spell_ids))}/{len(spell_ids)}', flush=True)


async def capture_partition(args):
    plan = HttpSnapshot(args.input_plan)
    if not 0 <= args.partition_index < args.partitions:
        raise ValueError('Invalid source partition index')
    snapshot = HttpSnapshot(args.output, recording=True)
    snapshot.manifest['captured_at'] = plan.manifest['captured_at']
    client = CachedClient(concurrency=4, snapshot=snapshot)
    try:
        ids = plan.manifest['context']['spell_ids'][args.partition_index::args.partitions]
        await capture_pages(client, ids, plan.manifest['context'].get('nether_spell_ids', []))
        result = snapshot.seal(dict(plan.manifest['context'],
            plan_hash=plan.manifest['snapshot_hash'], partition_index=args.partition_index,
            partition_count=args.partitions))
        print(json.dumps(dict(snapshot_hash=result['snapshot_hash'], spells=len(ids))))
    finally:
        if 'snapshot_hash' not in snapshot.manifest:
            (snapshot.directory / 'partial-snapshot.json').write_text(json.dumps(snapshot.manifest, indent=2))
        await client.aclose()


def merge_partitions(args):
    plan = HttpSnapshot(args.input_plan)
    partitions = [HttpSnapshot(p.parent) for p in sorted(args.parts_dir.glob('**/snapshot.json'))]
    indices = [p.manifest['context'].get('partition_index') for p in partitions]
    if (len(indices) != args.partitions or any(type(i) is not int for i in indices)
            or set(indices) != set(range(args.partitions))):
        raise ValueError('Missing or duplicate source partitions')
    output = HttpSnapshot(args.output, recording=True)
    output.manifest['captured_at'] = plan.manifest['captured_at']
    for partition in partitions:
        context = partition.manifest['context']
        if (context.get('plan_hash') != plan.manifest['snapshot_hash']
                or context.get('partition_count') != args.partitions
                or partition.manifest['captured_at'] != plan.manifest['captured_at']
                or {k: v for k, v in context.items() if k not in
                    {'plan_hash', 'partition_index', 'partition_count'}} != plan.manifest['context']):
            raise ValueError('Source partition belongs to a different input plan')
        actual = {key for key in partition.manifest['entries'] if key.startswith('https://www.wowhead.com/spell=')}
        expected = {wowhead.BASE.format(spell_id=i) for i in
                    plan.manifest['context']['spell_ids'][context['partition_index']::args.partitions]}
        if actual != expected:
            raise ValueError('Source partition has missing or unexpected spell requests')
    for source in [plan, *partitions]:
        for key, entry in source.manifest['entries'].items():
            if key in output.manifest['entries'] and output.manifest['entries'][key] != entry:
                raise ValueError(f'Conflicting captured source: {key}')
            if 'sha256' in entry:
                source.read(key)  # Validate bytes before copying them into the common snapshot.
                shutil.copy2(source.directory / 'responses' / entry['sha256'],
                             output.directory / 'responses' / entry['sha256'])
            output.manifest['entries'][key] = entry
    result = output.seal(plan.manifest['context'])
    print(json.dumps(dict(snapshot_hash=result['snapshot_hash'], requests=len(result['entries']))))
    return result


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--phase', choices=['full', 'plan', 'capture', 'merge'], default='full')
    parser.add_argument('--raidbots', type=Path)
    parser.add_argument('--hotfixes', type=Path)
    parser.add_argument('--input-plan', type=Path)
    parser.add_argument('--parts-dir', type=Path)
    parser.add_argument('--partition-index', type=int)
    parser.add_argument('--partitions', type=int, default=4)
    parser.add_argument('--output', type=Path, required=True)
    parser.add_argument('--github-output')
    args = parser.parse_args()
    if args.partitions < 1:
        parser.error('--partitions must be positive')
    if args.phase in {'full', 'plan'}:
        if not args.raidbots or not args.hotfixes:
            parser.error('--raidbots and --hotfixes are required')
        asyncio.run(collect(args))
    elif args.phase == 'capture':
        if args.input_plan is None or args.partition_index is None:
            parser.error('--input-plan and --partition-index are required')
        asyncio.run(capture_partition(args))
    else:
        if args.input_plan is None or args.parts_dir is None:
            parser.error('--input-plan and --parts-dir are required')
        merge_partitions(args)
