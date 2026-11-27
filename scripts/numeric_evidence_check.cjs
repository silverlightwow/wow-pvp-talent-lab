// Check current rendered values against current captured effect evidence.
// Tuning goldens belong in pinned parser fixtures, not mutable live data gates.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const direction = require('../web/change-direction.js');
const numbers = text => [...String(text).matchAll(/[+-]?\d+(?:\.\d+)?/g)].map(m=>Number(m[0]));

function validateChange(data, record, change) {
    if (['direction_word','percent_direction_flip'].includes(change.kind)) return;
    const old = numbers(change.old_token), next = numbers(change.new_token);
    assert.ok(old.length && old.length === next.length, 'Unpaired numeric replacement');
    const rows = (record.mechanics||[]).filter(row =>
        !(change.effect_indexes||[]).length || change.effect_indexes.includes(row.effect_index));
    if (change.kind === 'baseline_passive_resource') {
        const proof = rows.flatMap(row=>row.source_notes||[]).filter(note=>
            note.reason === 'EXACT_BASELINE_PASSIVE_PROJECTION' && note.effect_index === change.effect_index);
        assert.ok(proof.some(note=>(note.fragments||[]).some(([,pve,pvp])=>
            pve === change.old_token && pvp === change.new_token)), 'Resource clause has no exact client projection');
        return;
    }
    if (change.kind.startsWith('official_hotfix_')) {
        const notes = [...(data.official_hotfixes?.applied||[]), ...(data.official_hotfixes?.already_current||[])]
            .filter(note=>note.spell_id === record.spell_id && note.date && note.text);
        assert.equal(change.source, 'blizzard_hotfix', 'Official change lacks source provenance');
        if (change.kind === 'official_hotfix_removed') {
            assert.ok(notes.some(note=>note.evidence?.old_rendered_token === change.old_token &&
                note.evidence?.new_rendered_token === change.new_token), 'Removed modifier lacks exact source transition');
        } else if(change.kind === 'official_hotfix_relative') {
            assert.ok(notes.some(note=>note.evidence?.new_rendered_token === change.new_token),
                'Relative hotfix lacks its exact rendered source transition');
        } else {
            assert.ok(notes.some(note=>next.every(value=>numbers(note.text).includes(value))),
                'Official rendered value is absent from the scoped source note');
        }
        if(change.kind !== 'official_hotfix_relative') return;
    }
    // Exact affine client formulas can change 215% to 230% when the
    // underlying effect changes 15 to 30. Multiplying 215 by 2 is wrong.
    const flatFormula = (row, a, b) => {
        const flat = (row.aura_rules||[]).filter(rule=>rule.operation==='add_flat_value');
        if(flat.length!==1 || !Number.isFinite(flat[0].flat_delta)) return false;
        const base=row.base_value, final=row.final_pvp_value;
        if(!Number.isFinite(base)||!Number.isFinite(final)||Math.abs(final-base-flat[0].flat_delta)>1e-8) return false;
        const token = new RegExp('^([+-]?\\d+(?:\\.\\d+)?)\\s*([+-])\\s*\\$(?:'+row.source_spell_id+')?[sSmMwW]'+row.effect_index+'$');
        return (row.display_formulas||[]).some(f=>{
            if(f.source!=='simc_exact_build'||f.kind!==change.kind||!f.build) return false;
            const m=String(f.expression).match(token);
            if(!m) return false;
            const calc=v=>Math.abs(Number(m[1])+(m[2]==='+'?v:-v));
            return Math.abs(calc(base)-f.old)<1e-4 && Math.abs(calc(final)-f.new)<1e-4 &&
                Math.abs(a-f.old)<1e-4 && Math.abs(b-f.new)<1e-4;
        });
    };
    const factors = rows.map(row=>row.final_pvp_multiplier).filter(Number.isFinite);
    assert.ok(factors.length, 'Numeric change has no concrete effect multiplier');
    for (let i=0;i<old.length;i++) {
        if (old[i] === next[i]) continue;
        const affine = rows.filter(row=>(row.aura_rules||[]).some(rule=>rule.operation==='add_flat_value') &&
            (row.display_formulas||[]).some(f=>f.kind===change.kind && Math.abs(f.old-old[i])<1e-4 &&
                /^[+-]?\d+(?:\.\d+)?\s*[+-]\s*\$/.test(f.expression)));
        if(affine.length) {
            assert.ok(affine.some(row=>flatFormula(row,old[i],next[i])),
                'Rendered affine formula contradicts exact additive effect');
            continue;
        }
        assert.ok(factors.some(factor=>{
            let tolerance = 0.051; // The documented ordinary-value renderer's integer canonicalization.
            if (change.kind.includes('coefficient')) tolerance = 0.00005*(1+Math.abs(factor))+1e-7;
            if (change.kind === 'duration_seconds') {
                const decimals = String(change.old_token).match(/\.(\d+)/)?.[1].length;
                tolerance = (decimals ? 0.5*10**-decimals : 0.01) + Math.abs(factor)/1000 + 0.0001;
            }
            return Math.abs(next[i]-old[i]*factor) <= tolerance;
        }), `Rendered ${old[i]} → ${next[i]} contradicts current effect factors ${factors}`);
    }
}

function checkDirectory(directory, {strictSourceText = false} = {}) {
    // Prove the gate accepts legitimate retuning and rejects unsupported values.
    const record = {spell_id:10,mechanics:[{effect_index:1,final_pvp_multiplier:0.5}]};
    const change = {old_token:'10',new_token:'5',kind:'percent_value',effect_indexes:[1]};
    validateChange({},record,change);
    validateChange({}, {...record,mechanics:[{effect_index:1,final_pvp_multiplier:0.25}]}, {...change,new_token:'2.5'});
    assert.throws(()=>validateChange({},record,{...change,new_token:'6'}), /contradicts/);
    assert.throws(()=>validateChange({},record,{...change,kind:'official_hotfix_percent',source:'blizzard_hotfix'}), /source note/);
    const affine={spell_id:10,mechanics:[{source_spell_id:10,effect_index:1,base_value:15,final_pvp_value:30,
        final_pvp_multiplier:2,aura_rules:[{operation:'add_flat_value',flat_delta:15}],
        display_formulas:[{old:215,new:230,kind:'percent_value',source:'simc_exact_build',build:'test',expression:'200+$s1'}]}]};
    validateChange({},affine,{...change,old_token:'215',new_token:'230'});
    assert.throws(()=>validateChange({},affine,{...change,old_token:'215',new_token:'231'}),/contradicts/);
    assert.throws(()=>validateChange({},affine,{...change,old_token:'215',new_token:'430'}),/contradicts/);
    let views=0, changes=0;
    const files=fs.readdirSync(directory).filter(name=>name.endsWith('.json')&&name!=='manifest.json');
    for (const name of files) {
        const data=JSON.parse(fs.readFileSync(path.join(directory,name)));
        for (const record of [...(data.talents||[]),...(data.abilities||[])]) {
            const icons=record.tree_data?.icon_candidates||[];
            if(record.tree_type!=='ability') assert.ok(typeof record.tree_data?.icon==='string' && icons.includes(record.tree_data.icon),
                `${name} / ${record.talent_name}: primary icon is not a sourced candidate`);
            for(const view of [record,...(record.rank_tooltips||[])]) {
                views++;
                for(const text of [view.pve_tooltip,view.pvp_tooltip]) assert.ok(
                    !/Modifies Effect #|\(\d+(?:\.\d+)?\)\)/.test(text), `${record.talent_name}: malformed player text`);
                if(strictSourceText) for(const text of [view.pve_tooltip,view.pvp_tooltip]) assert.ok(
                    !/\[[^\[\]\n]+\]\s*\[[^\[\]\n]+\]\s*--\s*[\w-]+\s*,|\)\s*\([^\n]*--\s*[\w-]+\s*,/.test(text),
                    `${record.talent_name}: unlabelled arithmetic alternatives`);
                for(const change of direction.visibleChanges(view)) {
                    try { validateChange(data,record,change); }
                    catch(error) { throw new Error(`${name} / ${record.talent_name} / rank ${view.rank||'max'}: ${error.message}`); }
                    changes++;
                }
            }
        }
    }
    assert.ok(files.length && changes>0, 'Empty numeric evidence audit');
    console.log(`Current numeric evidence: ${files.length} specs, ${views} tooltip/rank views, ${changes} sourced replacements passed.`);
}
module.exports = {validateChange,checkDirectory};
if(require.main===module)checkDirectory(path.resolve(__dirname,'../web/data'),
    {strictSourceText:process.argv.includes('--strict-source-text')});
