// Exercise the actual file:// app, including every shipped spec and hero tree.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {pathToFileURL} = require('node:url');
const {chromium} = require('playwright');
const root = path.resolve(__dirname, '..');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'web/data/manifest.json')));
const specs = manifest.classes.flatMap(c => c.specs.map(s => ({...s, className:c.name})));
const errors = [];
const report = [];
const launch = {headless:true};
if (process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE) launch.executablePath = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE;
function assertDescription(shown, original) {
 const text=shown.trim(); assert.ok(text.length>0);
 assert.ok(!/base mana|^.*(?:yd range|sec cast|sec cooldown|sec recharge|\d+ Charges?)$/mi.test(text), 'Spell header leaked into tree');
 for(const line of text.split('\n'))assert.ok(original.includes(line),`Description changed: ${line}`);
}
(async () => {
 const browser = await chromium.launch(launch);
 try {
  for (const width of [2560, 1440, 1024, 390, 320]) {
   const page = await browser.newPage({viewport:{width,height:1000}, hasTouch:width<600, isMobile:width<600});
   page.on('pageerror', e => errors.push(e.message));
   // Network availability of an icon CDN must not govern app logic checks.
   await page.route('https://**/*', r => r.abort());
   await page.goto(pathToFileURL(path.join(root, 'web/index.html')).href+'#spec=priest-discipline');
   for (const spec of specs) {
    console.log(`Checking ${spec.slug} at ${width}px`);
    await page.locator('[data-tab="tree"]').click();
    if (await page.locator('#classSelect').inputValue() !== spec.className) {
     await page.locator('#classSelect').selectOption(spec.className);
     await page.waitForFunction(() => !document.querySelector('#classSelect').disabled);
    }
    await page.locator('#specSelect').selectOption(spec.name);
    await page.waitForFunction(({name,cls}) => !document.querySelector('#specSelect').disabled && document.querySelector('#treeTitle').textContent === `${name} ${cls}`, {name:spec.name,cls:spec.className});
    const data = JSON.parse(fs.readFileSync(path.join(root,`web/data/${spec.slug}.json`)));
    assert.equal(Number(await page.locator('#changedBadge').textContent()),data.talents.filter(t=>t.tooltip_changed).length);
    const heroTrees = await page.locator('#heroSelect option').evaluateAll(xs=>xs.map(x=>x.value));
    for (const hero of heroTrees) {
     await page.locator('#heroSelect').selectOption(hero);
     for (const tree of ['class','hero','spec']) {
      const expected = new Set(data.talents.filter(t=>t.tree_type===tree && (tree!=='hero'||t.hero_tree===hero)).map(t=>t.node_id)).size;
      assert.equal(await page.locator(`#${tree}Tree .talent-node`).count(),expected,`${spec.slug} ${hero} ${tree}`);
     }
     const geometry = await page.locator('.tree-canvas').evaluateAll(trees => trees.map(t => {
      const tr=t.getBoundingClientRect();const nodes=[...t.querySelectorAll('.talent-node')].map(n=>n.getBoundingClientRect());
      const endpoints = [...t.querySelectorAll('.tree-edge')].flatMap(edge => {
       const matrix = edge.ownerSVGElement.getScreenCTM();
       return [['from','x1','y1'],['to','x2','y2']].map(([key,x,y]) => {
        const node=t.querySelector(`[data-node-id="${edge.dataset[key]}"]`); if(!node)return Infinity;
        const rect=node.getBoundingClientRect(); const point=new DOMPoint(Number(edge.getAttribute(x)),Number(edge.getAttribute(y))).matrixTransform(matrix);
        return Math.hypot(point.x-rect.x-rect.width/2,point.y-rect.y-rect.height/2);
       });
      });
      return {misaligned:endpoints.filter(distance=>distance>1).length, clipped:nodes.filter(n=>n.left<tr.left-1||n.right>tr.right+1).length, overlaps:nodes.flatMap((a,i)=>nodes.slice(i+1).filter(b=>Math.min(a.right,b.right)-Math.max(a.left,b.left)>2&&Math.min(a.bottom,b.bottom)-Math.max(a.top,b.top)>2)).length};
     }));
     if (geometry.some(x=>x.clipped||x.overlaps||x.misaligned)) report.push({spec:spec.slug,width,hero,geometry});
    }
    // Tooltip contents, touch rank controls, and pointer editing use real DOM events.
    const ordinary = page.locator('#classTree .talent-node:not(.blocked):not(.choice-node):not(.free)').first();
    if (await ordinary.count()) {
     const nodeId = Number(await ordinary.getAttribute('data-node-id'));
     const record = data.talents.find(t => t.node_id === nodeId);
     if (width < 600) {
      await ordinary.tap();
      assertDescription(await page.locator('#talentTooltip .tooltip-text').first().textContent(), record.rank_tooltips?.[0]?.pvp_tooltip || record.pvp_tooltip);
      assert.ok(await page.locator('.touch-tooltip').isVisible());
      const box = await page.locator('.touch-tooltip').boundingBox();
      assert.ok(box.x >= 0 && box.x + box.width <= width + 1, 'Touch tooltip overflow');
      await page.locator('[data-touch-add]').tap();
      assert.equal((await page.locator('#classPoints').textContent()).trim(), '1/34');
      await page.locator('[data-touch-remove]').tap();
      assert.equal((await page.locator('#classPoints').textContent()).trim(), '0/34');
      await page.locator('[data-touch-close]').tap();
     } else {
      await ordinary.hover();
      assertDescription(await page.locator('#talentTooltip .tooltip-text').first().textContent(), record.rank_tooltips?.[0]?.pvp_tooltip || record.pvp_tooltip);
      await page.locator('label:has(#pvpToggle)').click();
      await ordinary.hover();
      assertDescription(await page.locator('#talentTooltip .tooltip-text').first().textContent(), record.rank_tooltips?.[0]?.pve_tooltip || record.pve_tooltip);
      await page.locator('label:has(#pvpToggle)').click();
      for (const type of (width===1440 ? ['class', 'spec'] : [])) {
       const cap = 34;
       for (let n=0; n<cap; n++) {
        const candidate = await page.locator(`#${type}Tree .talent-node:not(.blocked):not(.free)`).evaluateAll(nodes => {
         const node = nodes.find(n => {const [rank,max] = n.querySelector('.rank-badge').textContent.trim().split('/').map(Number);return rank < max;});
         return node?.dataset.nodeId;
        });
        assert.ok(candidate, `${spec.slug}: no path to ${cap} ${type} points at ${n}`);
        const node = page.locator(`#${type}Tree [data-node-id="${candidate}"]`);
        const isChoice = (await node.getAttribute('class')).includes('choice-node');
        await node.click();
        if (isChoice) {
         // Scrolling to a low talent must not dismiss its newly opened picker.
         await page.evaluate(() => window.dispatchEvent(new Event('scroll')));
         assert.ok(await page.locator('.choice-option').first().isVisible());
         await page.locator('.choice-option').first().click();
        }
       }
       assert.equal((await page.locator(`#${type}Points`).textContent()).trim(), `${cap}/${cap}`);
      }
      await page.locator('#resetTree').click();
      assert.equal((await page.locator('#classPoints').textContent()).trim(), '0/34');
      assert.equal((await page.locator('#specPoints').textContent()).trim(), '0/34');
     }
    }
    if(spec.slug==='priest-discipline' && [1440,390].includes(width))await require('./rank_browser_check.cjs')(page,data,width<600);
    await page.locator('[data-tab="compare"]').click();
    assert.equal(await page.locator('#compareBody tr').count(),data.talents.filter(t=>t.tooltip_changed).length);
    const comparisonRows=await page.locator('#compareBody tr').evaluateAll(rows=>rows.map(row=>({id:Number(row.dataset.spellId),pve:row.querySelector('.comparison-pve').textContent,pvp:row.querySelector('.comparison-pvp').textContent})));
    for(const row of comparisonRows){const talent=data.talents.find(t=>t.spell_id===row.id&&t.pve_tooltip===row.pve);assert.ok(talent,`Full PvE text missing for ${row.id}`);assert.equal(row.pvp,talent.pvp_tooltip,`Full PvP text missing for ${row.id}`);}
    assert.equal(await page.locator('.change-context').count(),0);
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),`comparison overflow ${spec.slug} ${width}`);
    await page.locator('[data-tab="compendium"]').click();
    const items=page.locator('#compendiumList .compendium-item');
    if(await items.count()) {
     await items.last().click();
     assert.equal(await page.locator('#compendiumDetail .tooltip-text').count(),0);
     assert.ok(await page.locator('#compendiumDetail .mechanic-card').count()>0);
     if(width<=900) assert.equal(await page.locator('.compendium-item.active + .mobile-compendium-inline').count(),1);
    }
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),`compendium overflow ${spec.slug} ${width}`);
   }
   console.log(`Checked ${specs.length} specs at ${width}px`);
   await page.close();
  }
  assert.deepEqual(errors,[]);
  console.log(JSON.stringify({geometryProblems:report},null,2));
  if(report.length)process.exitCode=1;
 } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
