const assert = require('node:assert/strict');
const status = require('../web/data-status.js');
const now = Date.parse('2026-10-20T12:00:00Z');
const sample = {
    validation: {verification_status:'VERIFIED'}, generated_at:'2026-10-20T12:00:00Z',
    source_snapshot: {captured_at:'2026-10-20T00:00:00Z'},
    spellbook_inventory: {candidate_universe:{conditional_ownership_complete:true}},
};
assert.deepEqual(status(sample, now), {label:'Verified values', partial:false});
// Republishing an old source capture must not make the source current.
assert.match(status({...sample, source_snapshot:{captured_at:'2026-10-19T23:59:59Z'}}, now).label, /update overdue/);
assert.match(status({...sample, source_snapshot:undefined}, now).label, /freshness unknown/);
assert.match(status({...sample, source_snapshot:{captured_at:'2026-10-21T12:00:00Z'}}, now).label, /freshness unknown/);
assert.match(status({...sample, validation:{}}, now).label, /Partial verification/);
assert.match(status({...sample, spellbook_inventory:{}}, now).label, /coverage incomplete/);
assert.equal(status({...sample, spellbook_inventory:{}}, now).partial, true);
console.log('Dataset status: source/publication ages, unknown verification and conditional coverage passed.');
