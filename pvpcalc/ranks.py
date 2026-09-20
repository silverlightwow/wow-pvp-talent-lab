"""Exact-build TraitDefinition rank overrides, separate from PvP tuning."""
from __future__ import annotations

import re
from .sources import simc
from . import tooltip_renderer


def rank_effects(dump, talent):
    spell = dump.spells.get(talent['spell_id'])
    if not spell or talent.get('node_type') == 'tiered':
        return []
    active = False
    rules = {}
    for line in spell.raw.splitlines():
        entry = re.match(r'^Talent Entry\s*:\s*(.*?)\s*\[tree=([^,]+),.*max_rank=(\d+)', line)
        if entry:
            active = ((entry[1] == 'Generic' or talent['spec_name'] in [s.strip() for s in entry[1].split(',')])
                      and entry[2] == talent['tree_type']
                      and int(entry[3]) == int(talent.get('max_ranks') or 1))
            continue
        rule = re.match(r'^\s+: Effect#(\d+) \[op=(set|mul|add), values=\(([^)]+)\)\]', line)
        if active and rule:
            index = int(rule[1])
            values = tuple(float(v.strip()) for v in rule[3].split(','))
            if index in rules and rules[index] != (rule[2], values):
                raise ValueError(f'Conflicting rank rules: {spell.spell_id}, effect {index}')
            rules[index] = (rule[2], values)
        elif not line.startswith(' '):
            active = False
    result = []
    for index, (op, values) in rules.items():
        effect = simc.effect_for_spell(dump, spell.spell_id, index)
        if effect is None or effect.base_value is None:
            if not simc.effect_reference_contexts(dump, spell.spell_id, index):
                continue
            raise ValueError(f'Missing rank effect: {spell.spell_id}, {index}')
        base = effect.base_value
        result.append(dict(effect_index=index, effect_text=effect.effect_text,
                           base_value=base, values=[v if op == 'set' else base*v if op == 'mul' else base+v for v in values],
                           simc_reference_contexts=list(simc.effect_reference_contexts(dump, spell.spell_id, index)) + [line for line in simc._player_text_sections(spell.raw) if re.search(r'\$(?:' + str(spell.spell_id) + r')?[mMwW]' + str(index) + r'\b', line)],
                           source='simc_exact_build', build=dump.build, operation=op))
    return result


def rows_at_rank(rows, rules, rank, spell_id):
    values = {rule['effect_index']:rule['values'][rank-1] for rule in rules}
    result = []
    for original in rows:
        row = dict(original)
        if row.get('source_spell_id', row.get('spell_id', spell_id)) == spell_id and row.get('effect_index') in values:
            value = values[row['effect_index']]
            row['base_value'] = value
            multiplier = row.get('final_pvp_multiplier', row.get('pvp_multiplier', 1))
            row['final_pvp_value'] = value * (multiplier if multiplier is not None else 1)
        result.append(row)
    return result


def _arithmetic(expression):
    import ast
    import operator
    operations = {ast.Add:operator.add, ast.Sub:operator.sub, ast.Mult:operator.mul, ast.Div:operator.truediv}
    def visit(node):
        if isinstance(node, ast.Constant) and isinstance(node.value, (int,float)):
            return node.value
        if isinstance(node, ast.BinOp) and type(node.op) in operations:
            return operations[type(node.op)](visit(node.left),visit(node.right))
        if isinstance(node, ast.UnaryOp) and isinstance(node.op, (ast.USub,ast.UAdd)):
            return (-1 if isinstance(node.op,ast.USub) else 1)*visit(node.operand)
        if isinstance(node,ast.Call) and isinstance(node.func,ast.Name) and node.func.id=='abs' and len(node.args)==1:
            return abs(visit(node.args[0]))
        raise ValueError('Unsupported rank expression')
    return visit(ast.parse(expression,mode='eval').body)


def rank_expressions(dump, talent, rules):
    """Compute only expressions that actually reference a ranked effect."""
    spell=dump.spells[talent['spell_id']]
    text='\n'.join(simc._player_text_sections(spell.raw))
    spec_auras = {s.spell_id:s.name == f"{talent['spec_name']} {talent['class_name']}" for s in dump.spells.values()
                  if re.search(r"^Class\s*:\s*" + re.escape(s.name) + r"\s*$", s.raw, re.M)
                  and s.name.endswith(' '+talent['class_name'])}
    spec_order = {'Warrior':['Arms','Fury','Protection'], 'Paladin':['Holy','Protection','Retribution'],
                  'Monk':['Brewmaster','Mistweaver','Windwalker'], 'Druid':['Balance','Feral','Guardian','Restoration'],
                  'Priest':['Discipline','Holy','Shadow'], 'Rogue':['Assassination','Outlaw','Subtlety'],
                  'Demon Hunter':['Havoc','Vengeance','Devourer']}
    def condition(m):
        if m[1].lower()=='a' and int(m[2]) in spec_auras:
            return m[3] if spec_auras[int(m[2])] else m[4]
        if m[1].lower()=='c' and talent['class_name'] in spec_order:
            return m[3] if spec_order[talent['class_name']].index(talent['spec_name'])+1==int(m[2]) else m[4]
        return m[4] if m[1].lower()=='a' else m[0]
    for _ in range(5):
        updated=re.sub(r'\$\?([acAC])(\d+)\[([^\[\]]*)\]\[([^\[\]]*)\]',condition,text)
        if updated==text:break
        text=updated
    # Variable definitions may have blank lines in the current dump.
    variables = dict(re.findall(r'^\s*\$([A-Za-z_]\w*)=(.*)$', spell.raw.split('Variables',1)[-1],re.M))
    variables.update(simc._variable_definitions(spell.raw))
    for _ in range(5):
        updated=re.sub(r'\$<([^>]+)>',lambda m:variables.get(m[1],m[0]),text)
        if updated==text:break
        text=updated
    by_index={r['effect_index']:r for r in rules}
    token=re.compile(r'\$\{([^{}]+)\}(?:\.\d+)?|\$(\d*)[sSmMwW](\d+)')
    expressions=[]
    tokens=list(token.finditer(text))
    for position,match in enumerate(tokens):
        if text[max(0,match.start()-9):match.start()].endswith('@switch<'):
            continue
        formula=match[1] if match[1] is not None else match[0]
        references=list(re.finditer(r'\$(\d*)[sSmMwW](\d+)',formula))
        indexes={int(m[2]) for m in references if (not m[1] or int(m[1])==spell.spell_id) and int(m[2]) in by_index}
        if not indexes:continue
        # Some client formulas have a surplus closing parenthesis (Improved Fade).
        if formula.count(')')==formula.count('(')+1 and formula.endswith(')'):formula=formula[:-1]
        coefficient=False
        def evaluate(rank):
            nonlocal coefficient
            def resolve(m):
                sid=int(m[1]) if m[1] else spell.spell_id
                index=int(m[2]);effect=simc.effect_for_spell(dump,sid,index)
                if effect is None:raise ValueError('Missing referenced rank effect')
                if sid==spell.spell_id and index in by_index:
                    value=by_index[index]['base_value'] if rank==0 else by_index[index]['values'][rank-1]
                elif effect.sp_coefficient or effect.ap_coefficient:
                    coefficient=True;value=(effect.sp_coefficient or effect.ap_coefficient)*100
                else:value=effect.base_value
                if value is None:raise ValueError('Missing expression value')
                return f'({value})'
            value=re.sub(r'\$(\d*)[sSmMwW](\d+)',resolve,formula)
            return abs(_arithmetic(value.replace('$abs','abs')))
        try:
            old=evaluate(0);values=[evaluate(r) for r in range(1,int(talent['max_ranks'])+1)]
        except (ValueError,SyntaxError,ZeroDivisionError):continue
        index=min(indexes)
        # Preserve context but use one canonical effect token for the complete expression.
        context=text[:match.start()]+'$s'+str(index)+text[match.end():]
        before=re.split(r'[\[\]\n$<>]',text[tokens[position-1].end() if position else 0:match.start()])[-1][-70:]
        before=re.sub(r'^[a-zA-Z]+[0-9]*%?\s+', '', before) if '$' in text[tokens[position-1].end() if position else 0:match.start()] else before
        after=re.split(r'[\[\]\n$<>]',text[match.end():tokens[position+1].start() if position+1<len(tokens) else len(text)])[0][:70]
        expressions.append(dict(effect_index=index,base_value=old,values=values,context=context,
                                before=before,after=after,coefficient=coefficient,
                                references=sorted(indexes)))
    return expressions


def render_rank(text, source, rank, *, spec_name, spec_names):
    text=tooltip_renderer.tooltip_for_spec(text,spec_name,spec_names)
    replacements={};diagnostics=[]
    for expression in source['expressions']:
        old=expression['base_value'];new=expression['values'][rank-1]
        if old==new:continue
        def literal(s):return re.escape(s).replace(r'\ ',r'\s+')
        before=expression['before'];after=expression['after']
        # Anchor both sides to the exact source prose. Inline conditional branches
        # can remove one anchor, but at least two words must still identify it.
        pattern=literal(before)+r'\(?([+-]?\d+(?:\.\d+)?)'+(r'%\s+of\s+(?:Spell|Attack)\s+Power\)' if expression['coefficient'] else '')+literal(after)
        matches=list(re.finditer(pattern,text,re.I)) if len(re.findall(r'[A-Za-z]{3,}',before+after))>=2 else []
        if len(matches)>1:
            exact=[m for m in matches if abs(float(m[1])-old)<0.00001]
            if exact:matches=exact
        if not matches:
            candidates=list(re.finditer(r'(?<![\d.])([+-]?\d+(?:\.\d+)?)(?![\d.])',text))
            equal=[m for m in candidates if abs(float(m[1])-old)<1e-5]
            matches=tooltip_renderer._select_reference_context_matches(text,equal,reference_contexts=[expression['context']],effect_index=expression['effect_index'])
            if not matches and equal:
                chosen=tooltip_renderer._select_reference_context_match(text,equal,reference_contexts=[expression['context']],effect_index=expression['effect_index'])
                if chosen:matches=[chosen]
                elif len(equal)==1:matches=equal
        if not matches:
            diagnostics.append(dict(status='RANK_EXPRESSION_NOT_VISIBLE',effect_index=expression['effect_index'],old=old,new=new))
            continue
        for match in matches:
            actual=float(match[1])
            # Preserve a specialization's existing multiplicative adjustment.
            value=new if abs(actual-old)<0.00001 or (actual==round(old) and abs(actual-old)<0.5) else actual*new/old if old else new
            key=match.span(1)
            replacement=f'{value:.4f}'.rstrip('0').rstrip('.') if value%1 else str(int(value))
            if key in replacements and replacements[key]!=replacement:
                raise ValueError('Conflicting rank expression targets')
            replacements[key]=replacement
    for (start,end),value in sorted(replacements.items(),reverse=True):text=text[:start]+value+text[end:]
    # Qualitative client switches are rank dependent too (e.g. Walk with the Ox).
    for switch in source.get('switches',[]):
        old=switch['options'][int(switch['base'])-1];new=switch['options'][int(switch['values'][rank-1])-1]
        text=text.replace(switch['before']+old+switch['after'],switch['before']+new+switch['after'])
    return text,diagnostics


def rank_source(dump,talent):
    rules=rank_effects(dump,talent)
    if not rules:return None
    spell=dump.spells[talent['spell_id']]
    switches=[]
    for m in re.finditer(r'([^.$\n]{0,60})\$@switch<\$s(\d+)>((?:\[[^\[\]]*\])+)([^.$\n]{0,60})', '\n'.join(simc._player_text_sections(spell.raw))):
        rule=next((r for r in rules if r['effect_index']==int(m[2])),None)
        if rule:switches.append(dict(before=m[1],after=m[4],options=re.findall(r'\[([^\[\]]*)\]',m[3]),base=rule['base_value'],values=rule['values']))
    return dict(rules=rules,expressions=rank_expressions(dump,talent,rules),switches=switches,build=dump.build)
