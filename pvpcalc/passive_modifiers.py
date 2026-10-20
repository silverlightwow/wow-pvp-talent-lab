"""Source-proved scalar resource projections from always-present baseline passives.

Do not evaluate optional talent/proc/equipment auras or character scaling. A
flat modifier must name an exact target effect and that target must confirm
its source through Modified By. Player units come from the literal client
formula, never a class-specific conversion table.
"""
from __future__ import annotations

import re
from . import ranks, pvp_value
from .sources import simc


def _blocks(spell):
    headers = list(simc._SIMC_EFFECT_HEADER_RE.finditer(spell.raw))
    for n, header in enumerate(headers):
        end = headers[n + 1].start() if n + 1 < len(headers) else len(spell.raw)
        yield int(header[1]), spell.raw[header.start():end].split('\nDescription',1)[0]


def _known_conditions(text, learned, active):
    pattern = re.compile(r'\$\?([sa])(\d+)\[')
    while True:
        changed = False
        for match in reversed(list(pattern.finditer(text))):
            allowed = learned if match[1] == 's' else active
            if int(match[2]) not in allowed:
                continue
            left = match.end() - 1
            end = simc._matching_bracket_end(text,left)
            if end is None or text[end+1:end+2] != '[':
                continue
            last = simc._matching_bracket_end(text,end+1)
            if last is not None:
                text = text[:match.start()] + text[left+1:end] + text[last+1:]
                changed = True
        if not changed:
            break
    return text


def _format_client_amount(value, precision):
    rendered = f'{value:.{precision}f}'
    return rendered.rstrip('0').rstrip('.') if '.' in rendered else rendered


def _fragments(spell, index, values, learned, active):
    text = _known_conditions('\n'.join(simc._player_text_sections(spell.raw)), learned, active)
    text = re.sub(r'\|c[0-9a-fA-F]{8}|\|r', '', text)
    token = re.compile(r'\$(?:'+str(spell.spell_id)+r')?[sSmMwW]'+str(index)+r'(?!\d)')
    if not token.search(text):
        # A target can describe a separate passive's amount instead of its
        # own Energize effect. This projection owns only the exact target
        # token; unrelated conditional syntax cannot change that amount.
        return []
    # Availability in a talent tree does not prove that a talent was learned.
    # Remove unrelated conditional clauses; a resource formula inside an
    # unresolved clause is a blocker, not permission to choose either branch.
    conditional = re.compile(r'\$\?[sa]\d+\[')
    while match := conditional.search(text):
        left = match.end() - 1
        end = simc._matching_bracket_end(text, left)
        last = simc._matching_bracket_end(text, end + 1) if end is not None and text[end+1:end+2] == '[' else None
        if last is None:
            raise ValueError('Malformed conditional passive resource formula')
        if token.search(text[match.start():last+1]):
            raise ValueError('Passive resource formula requires unverified talent or aura state')
        text = text[:match.start()] + text[last+1:]
    if '$?' in text:
        raise ValueError('Unsupported conditional passive resource formula')
    result = []
    for chunk in re.split(r'[\[\]\n]|(?<!\d)\.(?!\d)',text):
        if not token.search(chunk):
            continue
        if re.search(r'\$\?(?:s|a)\d+',chunk):
            continue
        def resolve(value):
            rendered = token.sub(f'{value:g}',chunk)
            rendered = re.sub(r'\$\{([^{}]+)\}(?:\.(\d+))?',
                lambda m: _format_client_amount(ranks._arithmetic(m[1]), int(m[2] or 6)), rendered)
            if '$' in rendered:
                raise ValueError('Unresolved client expression')
            return ' '.join(rendered.split()).strip(' .')
        try:
            projected = [resolve(value) for value in values]
        except (ValueError,SyntaxError,ZeroDivisionError):
            continue
        if all(projected) and projected not in result:
            result.append(projected)
    return result


def resource_projections(dump, ability_records, public_ids, always_known_spell_ids=(), aura_rules=()):
    learned = {r['spell_id'] for r in ability_records} | set(always_known_spell_ids)
    active = {r['spell_id'] for r in ability_records if r.get('passive')
        and not re.search(r'^(?:Duration|Proc Chance|Proc Flags|Triggered By)\s*:',
                          dump.spells[r['spell_id']].raw,re.M)}
    grouped = {}
    for source in sorted(active):
        spell = dump.spells[source]
        for index, block in _blocks(spell):
            effect = simc.effect_for_spell(dump,source,index)
            operation = re.search(r'Add Flat Modifier \(107\): Spell Effect (\d+)', effect.effect_text)
            if not operation or effect.base_value is None or simc.effect_uses_coefficient(effect):
                continue
            if effect.scaled_value not in (None,effect.base_value):
                raise ValueError('Baseline resource modifier depends on unsupported level scaling')
            target_index = int(operation[1])
            targets = re.search(r'Affected Spells:\s*([^\n]+)',block)
            if not targets:
                continue
            for target in sorted(set(map(int,re.findall(r'\((\d+)\)',targets[1])))):
                if target not in public_ids or target not in dump.spells:
                    continue
                target_effect = simc.effect_for_spell(dump,target,target_index)
                if (not target_effect or 'Energize Power (30)' not in target_effect.effect_text
                        or target_effect.base_value is None or simc.effect_uses_coefficient(target_effect)
                        or target_effect.pvp_coefficient not in (None,1)):
                    continue
                if target_effect.scaled_value not in (None,target_effect.base_value):
                    raise ValueError('Resource target depends on unsupported level scaling')
                target_block = dict(_blocks(dump.spells[target])).get(target_index,'')
                if not re.search(r'Modified By:[^\n]*\('+str(source)+r' effect#'+str(index)+r'\)',target_block):
                    raise ValueError('Passive modifier target lacks reciprocal effect identity')
                grouped.setdefault((target,target_index),[]).append(dict(
                    source_spell_id=source, effect_index=index, game_effect_id=effect.game_effect_id,
                    operation='add_flat', pve_value=effect.base_value,
                    pvp_value=effect.base_value*(1 if effect.pvp_coefficient is None else effect.pvp_coefficient),
                    pvp_coefficient=effect.pvp_coefficient, source='simc_exact_build'))
    projections = []
    for (sid,index), modifiers in sorted(grouped.items()):
        effect = simc.effect_for_spell(dump,sid,index)
        raw = effect.base_value
        pve = raw + sum(m['pve_value'] for m in modifiers)
        factor, _ = pvp_value.combined_matching_aura_factor(aura_rules, spell_id=sid, amount_kind=None,
            effect_index=index, spell_label_ids=simc.spell_label_ids(dump,sid))
        pvp = (raw + sum(m['pvp_value'] for m in modifiers)) * factor
        if not pve and pvp:
            raise ValueError('Additive passive projection crosses zero; unsupported multiplier representation')
        fragments = _fragments(dump.spells[sid],index,[raw,pve,pvp],learned,active)
        if not fragments:
            continue  # No player-text amount is claimed without a literal client formula.
        projections.append(dict(spell_id=sid,effect_index=index,raw_value=raw,
            pve_value=pve,pvp_value=pvp,modifiers=modifiers,fragments=fragments,
            source='simc_exact_build_passive_modifier',build=dump.build))
    return projections


def normalize_text(text, projections, *, pvp=False):
    changes = []
    for projection in projections:
        for raw,pve,new in projection['fragments']:
            old = pve if pvp else raw
            target = new if pvp else pve
            if old == target:
                continue
            count = text.count(old)
            if count == 1:
                start = text.index(old)
                text = text[:start]+target+text[start+len(old):]
                changes.append(dict(old_token=old,new_token=target,start=start,end=start+len(old),
                    kind='baseline_passive_resource',source=projection['source'],
                    source_spell_id=projection['spell_id'],effect_index=projection['effect_index'],
                    modifiers=projection['modifiers']))
            elif count > 1:
                raise ValueError('Ambiguous passive resource projection in player text')
            elif target not in text:
                # A provider can omit this clause altogether; do not add a fabricated description.
                continue
    return text,changes
