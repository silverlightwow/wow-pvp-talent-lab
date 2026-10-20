const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {pathToFileURL} = require('node:url');
const {chromium} = require('playwright');
const direction = require('../web/change-direction.js');
const number = value => String(Number(Number(value).toFixed(6)));
(async () => {
 const launch={headless:true};
 if(process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE)launch.executablePath=process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE;
 if(process.env.SITE_URL && process.env.HTTPS_PROXY)launch.proxy={server:process.env.HTTPS_PROXY};
 const base=process.env.SITE_URL || pathToFileURL(path.resolve(__dirname,'../web/index.html')).href;
 const browser=await chromium.launch(launch);const errors=[];
 const shot=async(page,name)=>{if(process.env.QA_SCREENSHOTS){fs.mkdirSync(process.env.QA_SCREENSHOTS,{recursive:true});await page.screenshot({path:path.join(process.env.QA_SCREENSHOTS,name+'.png'),fullPage:true});}};
 try {
  for(const width of [1440,390,320]) {
   const page=await browser.newPage({viewport:{width,height:1050},hasTouch:width<600,isMobile:width<600,ignoreHTTPSErrors:true});
   page.on('pageerror',e=>errors.push(e.message));
   if(!process.env.SITE_URL)await page.route('https://**/*',r=>r.abort());
   await page.goto(base+'#spec=priest-discipline',{waitUntil:'domcontentloaded'});
   await page.locator('#classSelect').selectOption('Hunter');
   await page.waitForFunction(()=>!document.querySelector('#specSelect').disabled);
   await page.locator('#specSelect').selectOption('Survival');
   await page.waitForFunction(()=>document.querySelector('#treeTitle').textContent==='Survival Hunter');
   for(const id of [1252943,1259003]){
    const record=await page.evaluate(id=>window.WOW_PVP_DATA.talents.find(t=>t.spell_id===id),id);
    const nodeId=record.node_id, expected=direction.talentDirection(record);
    const node=page.locator(`[data-node-id="${nodeId}"]`);
    assert.equal(await node.locator(`.pvp-dot.direction-${expected}`).count(),record.tooltip_changed?1:0,`Current direction dot for ${id}`);
    if(width<600)await node.tap();else await node.hover();
    assert.equal(await page.locator(`#talentTooltip .tooltip-badge.direction-${expected}`).count(),record.tooltip_changed?1:0);
    const apex=await page.locator('#talentTooltip .apex-stage-text').allTextContents();
    for(const text of apex)assert.equal(text,text.trim(),'Apex whitespace');
    if(process.env.QA_SCREENSHOTS)await page.locator('#talentTooltip').screenshot({path:path.join(process.env.QA_SCREENSHOTS,`tooltip-${id}-${width}.png`)});
    if(width<600)await page.locator('[data-touch-close]').tap();else await page.mouse.move(0,0);
   }
   await page.locator('[data-tab="compare"]').click();
   const current=await page.evaluate(()=>window.WOW_PVP_DATA.talents.filter(t=>t.tooltip_changed));
   const comparison=current.find(record=>['buff','nerf'].includes(direction.talentDirection(record)));
   assert.ok(comparison,'Current comparison requires a directional example');
   const expected=direction.talentDirection(comparison);
   const row=page.locator(`#compareBody tr[data-spell-id="${comparison.spell_id}"]`);
   assert.ok(await row.locator(`.change-chip.direction-${expected}`).count());
   assert.ok(await row.locator(`.value-pvp.direction-${expected}`).count());
   await page.locator('[data-tab="compendium"]').click();
   await page.locator('#compendiumSearch').fill('Wildfire Imbuement');
   await page.locator('.compendium-item').first().click();
   const card=page.locator('.mechanic-card:visible').first();
   await card.locator('summary').click();
   assert.equal(await card.locator('details').evaluate(el=>el.open),true);
   await page.evaluate(()=>window.dispatchEvent(new Event('resize')));
   assert.equal(await card.locator('details').evaluate(el=>el.open),true,'Evidence stays open on resize');
   const evidence=await card.locator('.mechanic-evidence').innerText();
   const mechanic=await page.evaluate(()=>window.WOW_PVP_DATA.talents.find(t=>t.talent_name==='Wildfire Imbuement').mechanics[0]);
   const extra=Number(mechanic.official_hotfix_factor??1);
   const formula=`×${number(mechanic.spell_pvp_multiplier)} × ${number(mechanic.aura_factor)}${extra!==1?` × ${number(extra)} (official hotfix)`:''} = ×${number(mechanic.final_pvp_multiplier)}`;
   assert.ok(evidence.includes(formula),'Evidence must show the current source multiplication');
   assert.ok(evidence.includes(String(mechanic.source_spell_id)));
   for(const rule of mechanic.aura_rules||[]){
    if(rule.game_effect_id!=null)assert.ok(evidence.includes(String(rule.game_effect_id)));
    assert.ok(await card.locator(`a[href="https://www.wowhead.com/spell=${rule.aura_spell_id}"]`).count());
   }
   await shot(page,`mechanics-${width}`);
   assert.ok((await page.locator('.site-footer').innerText()).includes('Made by SilverLight'));
   const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1);
   assert.equal(overflow,false,'Calculator horizontal overflow');
   const beforeDocs=page.url();
   await page.locator('.documentation-link').click();
   await page.locator('#docsDialog').waitFor({state:'visible'});
   const docs=page.frameLocator('#docsFrame');
   await docs.locator('#spec-aura').waitFor();
   assert.ok(await docs.locator('#examples').count());
   assert.equal(await docs.locator('a[href^="https://warcraft.wiki.gg/"]').count(),1,'Warcraft Wiki must be documented as a source');
   assert.equal(await docs.locator('body').evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false,'Docs horizontal overflow');
   await shot(page,`docs-${width}`);
   await docs.locator('.docs-nav a[href="#spec-aura"]').click();
   assert.equal(page.url(),beforeDocs,'Documentation preserves build URL');
   await page.locator('#docsDialog [data-close-dialog]').click();
   assert.equal(await page.locator('#docsDialog').isVisible(),false);
   await page.close();console.log(`Presentation checks passed at ${width}px`);
  }
  assert.deepEqual(errors,[]);
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
