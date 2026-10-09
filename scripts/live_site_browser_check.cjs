// Visit the deployed GitHub Pages app, not a local file:// snapshot.
// Detect HTTP, browser-runtime, navigation, and deployed-data regressions.
const assert = require('node:assert/strict');
const { chromium } = require('playwright');

const url = process.env.LIVE_SITE_URL ||
    'https://silverlightwow.github.io/wow-pvp-talent-lab/';
const widthList = (process.env.LIVE_SITE_WIDTHS || '1440,390')
    .split(',').map(Number);

async function check(browser, width) {
    const context = await browser.newContext({
        viewport: { width, height: 1000 },
        isMobile: width < 600,
        hasTouch: width < 600,
        serviceWorkers: 'allow',
    });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push('JS: ' + e.message));
    page.on('requestfailed', req => {
        const source = new URL(req.url());
        if (source.origin === new URL(url).origin &&
            /(?:\.js|\.css|\.html)(?:\?|$)/i.test(source.pathname))
            errors.push(req.url() + ': ' + (req.failure()?.errorText || 'failed'));
    });
    const waitForSpec = async (cls, spec) => {
        try {
            await page.waitForFunction(({cls,spec}) =>
                document.querySelector('#treeTitle')?.textContent?.trim() === spec + ' ' + cls &&
                !document.querySelector('#classSelect')?.disabled &&
                !document.body.classList.contains('welcome-active'),
            {cls,spec}, {timeout:45000});
        } catch (error) {
            const state = await page.evaluate(() => ({
                title: document.querySelector('#treeTitle')?.textContent?.trim(),
                classValue: document.querySelector('#classSelect')?.value,
                specValue: document.querySelector('#specSelect')?.value,
                classDisabled: document.querySelector('#classSelect')?.disabled,
                specDisabled: document.querySelector('#specSelect')?.disabled,
                statusText: document.querySelector('#treeMessage')?.textContent?.trim(),
                currentData: window.WOW_PVP_DATA?.slug,
                pendingScript: document.querySelector('script[data-dataset-loader]')?.src,
                home: document.body.classList.contains('welcome-active'),
            }));
            throw new Error(`Timeout loading ${spec} ${cls}: ${JSON.stringify({state, browserErrors:errors})}`, {cause:error});
        }
        assert.ok(await page.locator('.talent-node').count() > 25,
            `No talent tree nodes for ${spec} ${cls}`);
    };
    try {
        const response = await page.goto(url, {waitUntil:'domcontentloaded',timeout:45000});
        assert.equal(response.status(), 200, 'Landing page HTTP status');
        await page.locator('.welcome-spec').first().waitFor({timeout:20000});
        const classes = await page.locator('.welcome-class').count();
        const specs = await page.locator('.welcome-spec').count();
        assert.equal(classes, 13, 'Landing page should expose every class');
        assert.equal(specs, 40, 'Landing page should expose every specialization');
        const loaded = await page.evaluate(() => ({
            manifest: window.WOW_PVP_MANIFEST?.spec_count,
            talents: window.WOW_PVP_DATA?.talents?.length,
        }));
        assert.equal(loaded.manifest, 40, 'No complete live manifest');
        assert.ok(loaded.talents > 20, 'Missing live default dataset');
        await page.locator('.welcome-spec[data-class="Priest"][data-spec="Discipline"]').click();
        await waitForSpec('Priest', 'Discipline');
        await page.locator('[data-tab="compare"]').click();
        assert.ok(await page.locator('#compareBody tr').count() > 0, 'No PvE vs PvP comparison rows');
        const filter = page.locator('#compareTreeFilter');
        assert.equal((await filter.locator('option[value="ability"]').textContent()).trim(),
            'Base Spells', 'Published site does not contain the Base Spells filter');
        const baseSpellIds = await page.evaluate(() =>
            (window.WOW_PVP_DATA?.abilities || []).filter(row => row.tooltip_changed)
                .map(row => row.spell_id).sort((a,b)=>a-b));
        await filter.selectOption('ability');
        assert.deepEqual(
            await page.locator('#compareBody tr').evaluateAll(rows =>
                rows.map(row=>Number(row.dataset.spellId)).sort((a,b)=>a-b)),
            baseSpellIds,
            'Live Base Spells filter does not match the published abilities');
        await filter.selectOption('all');
        await page.locator('[data-tab="compendium"]').click();
        assert.ok(await page.locator('#compendiumList').isVisible(), 'Mechanics panel invisible');
        await page.locator('#classSelect').selectOption('Hunter');
        await waitForSpec('Hunter', 'Beast Mastery');
        await page.locator('#specSelect').selectOption('Marksmanship');
        await waitForSpec('Hunter', 'Marksmanship');
        await page.locator('#homeBrand').click();
        await page.locator('.welcome-spec[data-class="Priest"][data-spec="Discipline"]').click();
        await waitForSpec('Priest', 'Discipline');
        await page.reload({waitUntil:'domcontentloaded'});
        assert.ok(await page.locator('#treeTitle').count(), 'App missing after reload');
        assert.deepEqual(errors, [], 'Browser errors or failed deployed script requests');
        return {width, classes, specs, live: true, browserErrors:errors};
    } finally {
        await context.close();
    }
}
(async () => {
    const browser = await chromium.launch({headless:true});
    try {
        const rows = [];
        for (const width of widthList) {
            try {
                rows.push(await check(browser,width));
            } catch (firstError) {
                // A concurrent GitHub Pages deployment or transient CDN error
                // can interrupt one browser context. Never silently green a
                // persistent failure: run a complete second pass on a *fresh*
                // context, and keep evidence of the initial error in logs.
                console.warn(`First live browser attempt at ${width}px failed:`, firstError);
                await new Promise(resolve=>setTimeout(resolve,5000));
                try {
                    rows.push({...await check(browser,width), recoveredAfterRetry:true});
                } catch (secondError) {
                    throw new AggregateError([firstError,secondError],
                        `Live website failed twice at ${width}px`);
                }
            }
        }
        console.log(JSON.stringify({url, results:rows},null,2));
    } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
