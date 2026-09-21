const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const D = require('../web/change-direction.js');
function check(text, old, next, expected, kind='percent_value') {
 const start=text.indexOf(old); const c={start,end:start+old.length,old_token:old,new_token:next,kind};
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
assert.equal(D.combine(['buff','nerf']),'mixed');
assert.equal(D.combine(['buff','neutral']),'neutral');
const dataset = slug=>JSON.parse(fs.readFileSync(path.join(__dirname,`../web/data/${slug}.json`)));
for(const [slug,id,want] of [['hunter-survival',1252943,'buff'],['hunter-survival',1259003,'buff']]) {
 const talent=dataset(slug).talents.find(t=>t.spell_id===id); assert.equal(D.talentDirection(talent),want,talent.talent_name);
}
const evoker=dataset('evoker-devastation').talents.find(t=>t.talent_name==='Strafing Run');
assert.equal(D.talentDirection(evoker),'nerf');
for(const c of evoker.changes)assert.equal(D.direction(evoker,c),'nerf');
console.log('Change direction checks passed: buffs, nerfs, costs, reductions, thresholds, mixed changes, and live talent fixtures.');
