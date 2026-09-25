const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const codec=require('../web/loadout-codec.js');
const dir=path.resolve(__dirname,'../web/data');
const sample='CAQAAAAAAAAAAAAAAAAAAAAAAADswMWGjZmZmxMbwMzYmZAAAAAAAAAAYmZ2mBjZGLzYmhlFTzEDmZAQAMLz2CYsZAAYMjZMYgZGYCG';
const priest=JSON.parse(fs.readFileSync(path.join(dir,'priest-discipline.json')));
const parsed=codec.decode(sample,priest);
assert.equal(parsed.hero,'Voidweaver');
assert.equal(codec.encode(priest,parsed.selected,parsed.hero),sample);
assert.throws(()=>codec.decode(sample.slice(0,-3),priest),/incomplete/);
assert.throws(()=>codec.decode(sample+'A',priest),/extra nodes/);
assert.throws(()=>codec.header('not-a-code'),/Invalid/);
for(const filename of fs.readdirSync(dir).filter(f=>f.endsWith('.json')&&f!=='manifest.json')){
 const data=JSON.parse(fs.readFileSync(path.join(dir,filename)));
 const schema=codec.schema(data);
 for(const hero of new Set(data.talents.map(t=>t.hero_tree).filter(Boolean))){
  const encoded=codec.encode(data,new Map(),hero),decoded=codec.decode(encoded,data);
  assert.equal(decoded.hero,hero);assert.equal(codec.encode(data,decoded.selected,hero),encoded);
 }
 for(const node of schema.values()){
  if(node.type==='subtree'||node.free)continue;
  for(let index=0;index<(node.type==='choice'?node.entries.length:1);index++){
   for(let rank=1;rank<=node.max;rank++){
    const hero=node.hero||data.talents.find(t=>t.hero_tree)?.hero_tree;
    const selected=new Map([[node.id,{entryIndex:index,rank}]]);
    const encoded=codec.encode(data,selected,hero);
    const decoded=codec.decode(encoded,data);
    assert.deepEqual(decoded.selected.get(node.id),selected.get(node.id),`${filename} ${node.id} ${rank}`);
   }
  }
 }
}
console.log('Loadout codec: exact in-game fixture, all specs, hero choices, partial ranks, Apex, malformed strings passed.');
const data=slug=>JSON.parse(fs.readFileSync(path.join(dir,slug+'.json')));
const dh=data('demon-hunter-havoc');
const talent=id=>dh.talents.find(t=>t.spell_id===id);
const fury=talent(442718);
assert.ok(fury.pvp_tooltip.includes('3 additional glaive slashes'));
assert.ok(fury.pvp_tooltip.includes('6 slashes instead'));
assert.ok(!fury.mechanics.some(m=>m.source_spell_id===1236360));
assert.ok(talent(1272153).pvp_tooltip.includes('12'));
assert.ok(talent(1266329).pvp_tooltip.includes('5%'));
assert.equal(talent(1266329).tooltip_changed,true);
const chaos=talent(428492);
for(const r of chaos.rank_tooltips){assert.ok(r.pvp_tooltip.includes('33.33%'));assert.ok(r.pvp_tooltip.includes('4%'));assert.equal(r.changes.length,2);}
assert.equal(require('../web/change-direction.js').talentDirection(chaos),'mixed');
const middle=talent(1270900);assert.equal(middle.rank_tooltips.length,2);assert.notEqual(middle.rank_tooltips[0].pve_tooltip,middle.rank_tooltips[1].pve_tooltip);
for(const t of data('monk-brewmaster').talents.filter(t=>t.talent_name==='Knowledge of the Broken Temple'))for(const c of t.changes)assert.equal(require('../web/change-direction.js').direction(t,c),'nerf');
// Raidbots now emits the normalized underscore form. app.js maps it to
// the legacy CDN asset name with a hyphen before rendering.
assert.equal(data('hunter-survival').talents.find(t=>t.spell_id===1253846).tree_data.icon,'inv_10_specialreagentfoozles_tuskclaw_ice');
for(const filename of fs.readdirSync(dir).filter(f=>f.endsWith('.json')&&f!=='manifest.json'))for(const t of JSON.parse(fs.readFileSync(path.join(dir,filename))).talents){
 for(const text of [t.pve_tooltip,t.pvp_tooltip,...t.rank_tooltips.flatMap(r=>[r.pve_tooltip,r.pvp_tooltip])]){
  assert.ok(
   !/Modifies Effect #|\(\d+(?:\.\d+)?\)\)/.test(text),
   `${t.talent_name}: technical or malformed tooltip`
  );
 }
}
console.log('Source regressions: Fury, Bladecraft, Demon Muzzle, Chaotic Disposition, Knowledge, Apex, icons and tooltip prose passed.');

for(const [slug,first,second] of [
 ['paladin-holy','88.5007%','177.0014%'],
 ['paladin-protection','135.0011%','270.0022%'],
 ['paladin-retribution','150.0012%','300.0024%'],
]){
 const t=data(slug).talents.find(t=>t.spell_id===469411);
 assert.equal(t.rank_tooltips.length,2);
 assert.ok(t.rank_tooltips[0].pvp_tooltip.includes(first),`${slug}: A Just Reward rank 1`);
 assert.ok(t.rank_tooltips[1].pvp_tooltip.includes(second),`${slug}: A Just Reward rank 2`);
 assert.ok(t.rank_tooltips.every(r=>r.tooltip_changed),`${slug}: every A Just Reward rank must be modified`);
}
const vengeance=data('paladin-protection').talents.find(t=>t.spell_id===1241958);
assert.ok(vengeance.rank_tooltips[0].pvp_tooltip.includes('10%'));
assert.ok(vengeance.rank_tooltips[1].pvp_tooltip.includes('20%'));
assert.ok(vengeance.rank_tooltips.every(r=>r.tooltip_changed));
const tyr=data('paladin-protection').talents.find(t=>t.spell_id===378285);
// Tyr's Enforcer is rank-scaled and also inherits the current Protection
// Paladin PvP aura. The aura coefficient legitimately changes between WoW
// builds, so validate the transformation rather than pinning yesterday's
// exact coefficient into a pre-refresh frontend regression.
const tyrFactor=tyr.mechanics.find(m=>m.source_spell_id===378286)?.aura_factor;
assert.ok(Number.isFinite(tyrFactor)&&tyrFactor>0&&tyrFactor<=1,'Tyr\'s Enforcer: missing current PvP aura factor');
for(const rank of tyr.rank_tooltips){
 const pve=Number(rank.pve_tooltip.match(/deal \(([0-9.]+)% of Attack Power\)/)?.[1]);
 const pvp=Number(rank.pvp_tooltip.match(/deal \(([0-9.]+)% of Attack Power\)/)?.[1]);
 assert.ok(Number.isFinite(pve)&&Number.isFinite(pvp),'Tyr\'s Enforcer: AP coefficient missing');
 assert.ok(Math.abs(pvp-pve*tyrFactor)<1e-6,`Tyr's Enforcer rank ${rank.rank}: PvP coefficient must follow the current aura`);
 assert.equal(rank.tooltip_changed,true);
}
const infernal=data('demon-hunter-havoc').talents.find(t=>t.spell_id===320331);
assert.ok(infernal.rank_tooltips[0].pvp_tooltip.includes('5.76%'));
assert.ok(infernal.rank_tooltips[1].pvp_tooltip.includes('11.52%'));
assert.ok(infernal.rank_tooltips.every(r=>r.tooltip_changed));
for(const slug of ['mage-arcane','mage-fire','mage-frost']){
 const t=data(slug).talents.find(t=>t.spell_id===382424);
 assert.ok(t.rank_tooltips[0].pvp_tooltip.includes('15 sec'));
 assert.ok(t.rank_tooltips[1].pvp_tooltip.includes('30 sec'));
 assert.ok(t.rank_tooltips.every(r=>r.tooltip_changed),`${slug}: every Winter's Protection rank must be modified`);
}
console.log('Ranked PvP regressions: referenced spells, direct modifiers and rounded durations passed.');

for(const slug of ['shaman-enhancement','shaman-restoration']){
 const t=data(slug).talents.find(t=>t.spell_id===455630);
 assert.ok(t.pve_tooltip.includes('Summons a totem'));
 assert.ok(t.diagnostics.some(d=>d.status==='EXPLICIT_DISPLAY_OVERRIDE'));
}
