const assert = require('node:assert/strict');
module.exports = async function checkRanks(page, data, touch) {
 await page.locator('[data-tab="tree"]').click();
 await page.locator('#resetTree').click();
 const node = id => page.locator(`#specTree [data-node-id="${id}"]`);
 async function add(id) {
  if(touch) {await node(id).tap();await page.locator('[data-touch-add]').tap();await page.locator('[data-touch-close]').tap();}
  else {await node(id).click();if(await page.locator('.choice-option').count())await page.locator('.choice-option').first().click();}
 }
 async function inspect(talent, rank, expected, next) {
  const n=node(talent.node_id);if(touch)await n.tap();else await n.hover();
  const tip=page.locator('#talentTooltip');
  assert.ok((await tip.locator('> .tooltip-rank-label').textContent()).includes(`${rank||2}/2`));
  assert.equal((await tip.locator('> .tooltip-text').textContent()).trim(),expected);
  assert.equal(await tip.locator('.tooltip-next-rank').count(),next?1:0);
  if(next)assert.equal((await tip.locator('.tooltip-next-rank .tooltip-text').textContent()).trim(),next);
  if(touch)await page.locator('[data-touch-close]').tap();else await page.mouse.move(0,0);
 }
 for(const spellId of [390689,373054]) {
  const talent=data.talents.find(t=>t.spell_id===spellId);
  const [first,second]=talent.rank_tooltips;
  for(const mode of ['pve','pvp']) {
   const enabled=await page.locator('#pvpToggle').isChecked();
   if(enabled!==(mode==='pvp'))await page.locator('label:has(#pvpToggle)').click();
   await inspect(talent,0,second[`${mode}_tooltip`]);
  }
  // Unlock the target through normal UI allocation, respecting prerequisites.
  for(let n=0;(await node(talent.node_id).getAttribute('class')).includes('blocked');n++) {
   assert.ok(n<30,'Could not reach ranked talent');
   const id=await page.locator('#specTree .talent-node:not(.blocked):not(.free)').evaluateAll((nodes,target)=>{
    const next=nodes.find(n=>Number(n.dataset.nodeId)!==target&&(()=>{const [r,m]=n.querySelector('.rank-badge').textContent.trim().split('/').map(Number);return r<m})());return next?.dataset.nodeId;
   },talent.node_id);
   assert.ok(id);await add(id);
  }
  await add(talent.node_id);
  await inspect(talent,1,first.pvp_tooltip,second.pvp_tooltip);
  await add(talent.node_id);
  await inspect(talent,2,second.pvp_tooltip);
 }
 await page.locator('#resetTree').click();
};
