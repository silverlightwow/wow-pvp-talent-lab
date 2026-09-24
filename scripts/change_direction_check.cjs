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
check('When you suffer a damaging effect equal to 25% of your maximum health, you instantly cast Death Pact at 50% effectiveness.','25','15','buff');
check('Reduces all damage you take by 15% and all damage you deal by 10%.','10','15','nerf');
check('Unknown parameter 8.','8','10','neutral');
check('Casts 6 additional slashes.','6','3','nerf','ordinary_value');
check('Stacks up to 8 times.','8','6','nerf','ordinary_value');
check('Reforestation grants Tree of Life for 6 additional sec.','6','4','nerf','ordinary_value');
check('Every 3 sec siphon an amount equal to 4% of your health from an ally within 40 yds if they are higher health than you.','4','2','nerf');
check('Every 4 casts of Swiftmend grants you Incarnation: Tree of Life for 10 sec.','10','8','nerf','duration_seconds');
check('1 point : [(62.26% of Attack Power) * 2 / 6] over 1 sec','62.26','64.4447','buff','attack_power_coefficient');
check('1 point : [(62.26% of Attack Power) * 2 / 6] over 1 sec','62.26','52.4427','nerf','attack_power_coefficient');

check('While Combustion is active, Fire Blast recharges 50% faster.','50','30','nerf');
check("Thunder Focus Tea increases the cooldown recovery rate of Renewing Mist by 75% for 8 sec.",'75','30','nerf');
check("Your next Bloodthirsts have no cooldown, deal 35% increased damage, and generate Rage.",'35','15','nerf');
check('Fear duration on you reduced by 20%. This effect is increased to 60% during Avenging Wrath.','20','5','nerf');
{
 const text='Fear duration on you reduced by 20%. This effect is increased to 60% during Avenging Wrath.';
 const start=text.lastIndexOf('60');
 const c={start,end:start+2,old_token:'60',new_token:'15',kind:'percent_value'};
 assert.equal(D.direction({pve_tooltip:text,changes:[c]},c),'nerf',text);
}
check('Pick Pocket and Sap have 10 yd increased range.','10','5','nerf','distance_yards');
check('Howl of Terror cooldown is reduced by 10 sec and range is increased by 5 yds.','5','2','nerf','distance_yards');

assert.equal(D.combine(['buff','nerf']),'mixed');
assert.equal(D.combine(['buff','neutral']),'neutral');

const dataset = slug=>JSON.parse(fs.readFileSync(path.join(__dirname,`../web/data/${slug}.json`)));
const fixtures = [
 ['priest-discipline','Void Leech','nerf'],
 ['druid-restoration','Reforestation','nerf'],
 ['druid-restoration','Potent Enchantments','nerf'],
 ['hunter-marksmanship','Aimed Shot','buff'],
 ['hunter-survival',1252943,'buff'],
 ['hunter-survival',1259003,'buff'],
 ['death-knight-blood','Pact of the Deathbringer','buff'],
 ['monk-mistweaver','Heart of the Jade Serpent','nerf'],
 ['warrior-fury','Burst of Power','nerf'],
 ['demon-hunter-havoc','Demon Muzzle','nerf'],
 ['demon-hunter-havoc','Chaotic Disposition','mixed'],
];
for(const [slug,key,want] of fixtures) {
 const talent=dataset(slug).talents.find(t=>typeof key==='number'?t.spell_id===key:t.talent_name===key);
 assert.ok(talent,`${slug}: missing fixture ${key}`);
 assert.equal(D.talentDirection(talent),want,`${slug}: ${talent.talent_name}`);
}

// Rip is a direct attack-power coefficient. Its direction must follow the
// current verified dataset rather than a stale hard-coded snapshot value.
{
 const rip=dataset('druid-feral').talents.find(t=>t.talent_name==='Rip');
 assert.ok(rip,'druid-feral: missing Rip');
 const coefficientChanges=(rip.changes||[]).filter(c=>c.kind==='attack_power_coefficient');
 assert.ok(coefficientChanges.length>0,'Rip must expose its PvP attack-power coefficient change');
 const directions=new Set(coefficientChanges.map(c=>{
  const oldValue=Number(c.old_token),newValue=Number(c.new_token);
  assert.ok(Number.isFinite(oldValue)&&Number.isFinite(newValue)&&oldValue!==newValue,'Rip coefficient must be numeric and changed');
  return newValue>oldValue?'buff':'nerf';
 }));
 assert.equal(directions.size,1,'Rip coefficient changes must agree on direction');
 assert.equal(D.talentDirection(rip),[...directions][0],
   'druid-feral: Rip direction must match current coefficient '+coefficientChanges[0].old_token+' -> '+coefficientChanges[0].new_token);
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
assert.equal(neutralTalents,0,'Every current player-facing PvP change must have a reviewed buff/nerf direction');
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
