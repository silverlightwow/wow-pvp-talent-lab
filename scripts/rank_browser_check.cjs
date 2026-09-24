const assert = require('node:assert/strict');
module.exports = async function checkRanks(page, data, touch) {
 await page.locator('[data-tab="tree"]').click();
 await page.locator('#resetTree').click();
 const node = id => page.locator(`#specTree [data-node-id="${id}"]`);
 async function add(id) {
  if(touch) {await node(id).tap();await page.locator('[data-touch-add]').tap();await page.locator('[data-touch-close]').tap();}
  else {await node(id).click();if(await page.locator('.choice-option').count())await page.locator('.choice-option').first().click();}
 }
 async function inspect(talent, rank) {
  const n=node(talent.node_id);if(touch)await n.tap();else await n.hover();
  const tip=page.locator('#talentTooltip');
  const sections=tip.locator('.tooltip-rank-section');
  const mode=await page.locator('#pvpToggle').isChecked()?'pvp':'pve';
  const expectedRanks=talent.rank_tooltips.map(item=>item.rank);
  assert.equal(await sections.count(),expectedRanks.length);
  for(let i=0;i<expectedRanks.length;i++) {
   const expectedRank=expectedRanks[i];
   const source=talent.rank_tooltips.find(item=>item.rank===expectedRank);
   assert.equal((await sections.nth(i).locator('.tooltip-text').textContent()).trim(),source[`${mode}_tooltip`].trim());
   assert.equal(await sections.nth(i).evaluate(el=>el.classList.contains('current')),rank>0&&rank===expectedRank);
   assert.equal(await sections.nth(i).evaluate(el=>el.classList.contains('next')),expectedRank===rank+1);
   const label=(await sections.nth(i).locator('.tooltip-rank-label').textContent()).trim();
   if(rank===0)assert.match(label,/Rank 1\/2 · Next Rank$/);
   if(rank===1&&expectedRank===1)assert.match(label,/Rank 1\/2 · Current$/);
   if(rank===1&&expectedRank===2)assert.match(label,/Rank 2\/2 · Next Rank$/);
   if(rank===2)assert.match(label,/Rank 2\/2 · Current$/);
   if(mode==='pvp'&&source.tooltip_changed)assert.ok(await sections.nth(i).locator('.change-chip').count());
  }
  if(touch)await page.locator('[data-touch-close]').tap();else await page.mouse.move(0,0);
 }
 for(const spellId of [390689,373054]) {
  const talent=data.talents.find(t=>t.spell_id===spellId);
  const [first,second]=talent.rank_tooltips;
  for(const mode of ['pve','pvp']) {
   const enabled=await page.locator('#pvpToggle').isChecked();
   if(enabled!==(mode==='pvp'))await page.locator('label:has(#pvpToggle)').click();
   await inspect(talent,0);
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
  await inspect(talent,1);
  await add(talent.node_id);
  await inspect(talent,2);
 }
 await page.locator('#resetTree').click();
};
