const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const D = require('../web/change-direction.js');

function check(text, old, next, expected, kind='percent_value') {
 const start=text.indexOf(old);
 assert.ok(start>=0, `Token ${old} not found in: ${text}`);
 const c={start,end:start+old.length,old_token:old,new_token:next,kind};
 assert.equal(D.direction({pve_tooltip:text,changes:[c]},c),expected,text);
}

check('Deals (40% of Attack Power) Fire damage for 10 sec.', '40','40.4','buff','attack_power_coefficient');
check('Reduces all damage taken by 20%.','20','40','buff');
check('Reduces the mana cost of healing spells by 50%.','50','25','nerf');
check('30 sec cooldown','30','45','nerf');
check('Reduces the cooldown of Flame Shock by 1.5 sec.','1.5','3.0','buff','duration_seconds');
check('Enemies have 50% reduced movement speed.','50','30','nerf');
check('Avenging Wrath has 40% reduced duration.','40','26.664','buff');
check('Damage exceeds 150% of their remaining health.','150','250','nerf');
check('Every 20 Rage you spend reduces the cooldown by 1 sec.','20','10','buff','ordinary_value');
check('Reduces all damage you take by 15% and all damage you deal by 10%.','10','15','nerf');
check('Unknown parameter 8.','8','10','neutral');
check('Casts 6 additional slashes.','6','3','nerf','ordinary_value');
check('Stacks up to 8 times.','8','6','nerf','ordinary_value');
check('Reforestation grants Tree of Life for 6 additional sec.','6','4','nerf','ordinary_value');
check('Every 3 sec siphon an amount equal to 4% of your health from an ally within 40 yds if they are higher health than you.','4','2','nerf');
check('Every 4 casts of Swiftmend grants you Incarnation: Tree of Life for 10 sec.','10','8','nerf','duration_seconds');
check('1 point : [(62.26% of Attack Power) * 2 / 6] over 1 sec','62.26','64.4447','buff','attack_power_coefficient');
check('1 point : [(62.26% of Attack Power) * 2 / 6] over 1 sec','62.26','52.4427','nerf','attack_power_coefficient');

assert.equal(D.combine(['buff','nerf']),'mixed');
assert.equal(D.combine(['buff','neutral']),'neutral');

const dataset = slug=>JSON.parse(fs.readFileSync(path.join(__dirname,`../web/data/${slug}.json`)));
const fixtures = [
 ['priest-discipline','Void Leech','nerf'],
 ['druid-restoration','Reforestation','nerf'],
 ['druid-restoration','Potent Enchantments','nerf'],
 ['druid-feral','Rip','nerf'],
 ['hunter-marksmanship','Aimed Shot','buff'],
 ['hunter-survival',1252943,'buff'],
 ['hunter-survival',1259003,'buff'],
];
for(const [slug,key,want] of fixtures) {
 const talent=dataset(slug).talents.find(t=>typeof key==='number'?t.spell_id===key:t.talent_name===key);
 assert.ok(talent,`${slug}: missing fixture ${key}`);
 assert.equal(D.talentDirection(talent),want,`${slug}: ${talent.talent_name}`);
}

const evoker=dataset('evoker-devastation').talents.find(t=>t.talent_name==='Strafing Run');
assert.equal(D.talentDirection(evoker),'nerf');
for(const c of evoker.changes)assert.equal(D.direction(evoker,c),'nerf');

const dataDir=path.join(__dirname,'../web/data');
const files=fs.readdirSync(dataDir).filter(name=>name.endsWith('.json')&&name!=='manifest.json');
let changedTalents=0, directionalTalents=0, neutralTalents=0;
for(const name of files){
 const data=JSON.parse(fs.readFileSync(path.join(dataDir,name)));
 for(const talent of data.talents||[]){
  if(!(talent.changes||[]).length)continue;
  changedTalents++;
  const result=D.talentDirection(talent);
  if(result==='neutral')neutralTalents++;else directionalTalents++;
  for(const change of talent.changes||[]){
   if(['attack_power_coefficient','spell_power_coefficient','weapon_damage_coefficient','duration_seconds'].includes(change.kind)){
    assert.notEqual(D.direction(talent,change),'neutral',
      `${name} / ${talent.talent_name}: renderer-known ${change.kind} became neutral`);
   }
   if(change.kind==='ordinary_value'&&/(?:additional|extra)\s+(?:sec|second|min|minute)/i.test(talent.pve_tooltip||'')){
    assert.notEqual(D.direction(talent,change),'neutral',
      `${name} / ${talent.talent_name}: explicit additional duration became neutral`);
   }
  }
 }
}
assert.ok(changedTalents>100,'Expected broad current PvP-change coverage');
assert.ok(directionalTalents>0);
const inspectOnly=[];
for(const name of files){
 const data=JSON.parse(fs.readFileSync(path.join(dataDir,name)));
 for(const talent of data.talents||[]){
  if((talent.changes||[]).length&&D.talentDirection(talent)==='neutral'){
   inspectOnly.push({
    spec:name.replace(/\.json$/,''),
    talent:talent.talent_name,
    spell_id:talent.spell_id,
    changes:(talent.changes||[]).map(c=>({kind:c.kind,old:c.old_token,new:c.new_token})),
    pve:talent.pve_tooltip,
    pvp:talent.pvp_tooltip,
   });
  }
 }
}
console.log(`Change direction checks passed across ${files.length} specs: ${changedTalents} changed talents, ${directionalTalents} directional, ${neutralTalents} intentionally inspect-only.`);
console.log('Inspect-only direction audit:',JSON.stringify(inspectOnly));
