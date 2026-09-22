const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const {pathToFileURL}=require('node:url');
const {chromium}=require('playwright');
const base=process.env.SITE_URL||pathToFileURL(path.resolve(__dirname,'../web/index.html')).href;
const sample='CAQAAAAAAAAAAAAAAAAAAAAAAADswMWGjZmZmxMbwMzYmZAAAAAAAAAAYmZ2mBjZGLzYmhlFTzEDmZAQAMLz2CYsZAAYMjZMYgZGYCG';
(async()=>{
 const launch={headless:true};if(process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE)launch.executablePath=process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE;
 if(process.env.SITE_URL&&process.env.HTTPS_PROXY)launch.proxy={server:process.env.HTTPS_PROXY};
 const browser=await chromium.launch(launch),errors=[];
 const shot=async(page,name)=>{if(process.env.QA_SCREENSHOTS){fs.mkdirSync(process.env.QA_SCREENSHOTS,{recursive:true});await page.screenshot({path:path.join(process.env.QA_SCREENSHOTS,name+'.png'),fullPage:true});}};
 try{for(const width of [1440,390,320]){
  const page=await browser.newPage({viewport:{width,height:1000},hasTouch:width<600,isMobile:width<600,ignoreHTTPSErrors:true});
  page.on('pageerror',e=>errors.push(e.message));
  if(!process.env.SITE_URL)await page.route('https://**/*',r=>r.abort());
  await page.goto(base,{waitUntil:'domcontentloaded'});
  assert.equal(await page.locator('#welcomePanel').isVisible(),true);
  assert.equal(await page.title(),'WoW PvP Talent Lab');
  assert.equal(await page.locator('.welcome-class').count(),13);
  assert.equal(await page.locator('#classSelect').isVisible(),false);
  await shot(page,`welcome-${width}`);
  await page.locator('#welcomePanel [data-open-import]').click();
  await page.locator('#buildString').fill(sample);
  await page.locator('#importBuildApply').click();
  await page.locator('#buildDialog').waitFor({state:'hidden'});
  assert.equal(await page.locator('#heroSelect').inputValue(),'Voidweaver');
  assert.equal(new URLSearchParams(new URL(page.url()).hash.slice(1)).get('build'),sample);
  assert.equal((await page.locator('#classPoints').textContent()).trim(),'34/34');
  assert.equal((await page.locator('#specPoints').textContent()).trim(),'34/34');
  await page.locator('#exportBuild').click();
  assert.equal(await page.locator('#buildString').inputValue(),sample);
  await shot(page,`export-${width}`);
  await page.locator('#buildDialog [data-close-dialog]').click();
  const before=page.url();
  await page.reload();
  await page.waitForFunction(()=>document.querySelector('#heroSelect').value==='Voidweaver');
  assert.equal(await page.title(),'Discipline Priest · WoW PvP Talent Lab');
  assert.equal(page.url(),before);
  await page.locator('.documentation-link').click();
  await page.frameLocator('#docsFrame').locator('#spec-aura').waitFor();
  await page.frameLocator('#docsFrame').locator('body').press('Escape');
  await page.locator('#docsDialog').waitFor({state:'hidden'});
  assert.equal(page.url(),before);
  await page.locator('[data-open-import]:visible').click();
  await page.locator('#buildString').fill(sample.slice(0,-3));
  await page.locator('#importBuildApply').click();
  await page.waitForFunction(()=>document.querySelector('#buildDialogError').textContent.length>0);
  assert.equal(page.url(),before,'Failed import must preserve build');
  await page.locator('#buildDialog [data-close-dialog]').click();
  await page.locator('[data-tab="compendium"]').click();
  await page.locator('#classSelect').selectOption('Druid');
  await page.waitForFunction(()=>!document.querySelector('#specSelect').disabled&&document.querySelector('#treeTitle').textContent.includes('Druid'));
  await page.locator('[data-tab="tree"]').click();
  await page.waitForFunction(()=>[...document.querySelectorAll('.tree-canvas')].every(el=>el.getBoundingClientRect().width>200));
  const geometry=await page.locator('.tree-canvas').evaluateAll(trees=>trees.map(tree=>{
   const rect=tree.getBoundingClientRect();return [...tree.querySelectorAll('.talent-node')].every(n=>{const r=n.getBoundingClientRect();return r.left>=rect.left-1&&r.right<=rect.right+1;});
  }));
  assert.ok(geometry.every(Boolean),'Hidden-tab class switch geometry');
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false);
  await shot(page,`class-switch-${width}`);
  await page.locator('#classSelect').selectOption('Demon Hunter');
  await page.waitForFunction(()=>!document.querySelector('#specSelect').disabled);
  await page.locator('#specSelect').selectOption('Havoc');
  await page.waitForFunction(()=>document.querySelector('#treeTitle').textContent==='Havoc Demon Hunter');
  for(const spell of [204909,428492]) {
   const nodeId=await page.evaluate(id=>window.WOW_PVP_DATA.talents.find(t=>t.spell_id===id).node_id,spell);
   const node=page.locator(`[data-node-id="${nodeId}"]`);
   if(width<600){
    // Real mobile browsers can emit a compatibility mouseenter before click.
    // It must not open a desktop tooltip that intercepts the tap.
    await node.dispatchEvent('mouseenter');
    assert.equal(await page.locator('#talentTooltip').evaluate(el=>el.style.display),'none');
    await node.tap();
    assert.ok(await page.locator('#talentTooltip.touch-tooltip').isVisible());
   }else await node.hover();
   const sections=page.locator('#talentTooltip .tooltip-rank-section');
   assert.equal(await sections.count(),2);
   for(let i=0;i<2;i++)assert.ok(await sections.nth(i).locator('.change-chip').count());
   if(spell===428492)assert.equal(await page.locator('#talentTooltip .tooltip-badge.direction-mixed').count(),1);
   await shot(page,`rank-${spell}-${width}`);
   if(width<600)await page.locator('[data-touch-close]').tap();else await page.mouse.move(0,0);
  }
  const apexId=await page.evaluate(()=>window.WOW_PVP_DATA.talents.find(t=>t.spell_id===1270898).node_id);
  if(width===1440)await page.setViewportSize({width,height:300});
  const apex=page.locator(`[data-node-id="${apexId}"]`);
  if(width<600)await apex.tap();else await apex.hover();
  assert.equal(await page.locator('#talentTooltip .apex-stage').count(),4);
  assert.deepEqual(await page.locator('#talentTooltip .apex-stage-label').allTextContents().then(xs=>xs.map(x=>x.trim())),['Rank 1','Rank 2','Rank 3','Rank 4']);
  if(width===1440){
   assert.ok(await page.locator('#talentTooltip').evaluate(el=>el.scrollHeight>el.clientHeight));
   await page.mouse.wheel(0,300);
   await page.waitForFunction(()=>document.querySelector('#talentTooltip').scrollTop>0);
  }
  await shot(page,`apex-${width}`);
  await page.close();console.log(`Build UI checks passed at ${width}px`);
 }assert.deepEqual(errors,[]);}finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
