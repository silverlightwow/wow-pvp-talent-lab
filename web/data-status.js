// Verification, source freshness and catalog coverage are separate facts.
(function (root, factory) {
    const status = factory();
    if (typeof module === 'object' && module.exports) module.exports = status;
    else root.WowPvpDataStatus = status;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
    return function dataStatus(data, now = Date.now()) {
        const verified = data.validation?.verification_status === 'VERIFIED';
        const complete = data.spellbook_inventory?.candidate_universe?.conditional_ownership_complete === true;
        const timestamps = [data.generated_at, data.source_snapshot?.captured_at];
        const ages = timestamps.map(value => value ? (now - Date.parse(value)) / 3600000 : NaN);
        const fresh = ages.every(age => Number.isFinite(age) && age >= -5 / 60 && age <= 12);
        const overdue = ages.some(age => Number.isFinite(age) && age > 12);
        const parts = [verified ? 'Verified values' : 'Partial verification'];
        if (overdue) parts.push('update overdue');
        else if (!fresh) parts.push('source freshness unknown');
        if (!complete) parts.push('Base Spells coverage incomplete');
        return {label: parts.join(' · '), partial: !verified || !fresh || !complete};
    };
});
