/* Shared by the UI and regression checks. Unknown semantics stay neutral. */
(function (root) {
    const labels = {buff: 'PvP buff', nerf: 'PvP nerf', mixed: 'Mixed PvP changes', neutral: 'PvP change · inspect details'};
    function direction(talent, change) {
        const text = String(talent.pve_tooltip || '');
        const before = text.slice(0, change.start);
        const after = text.slice(change.end);
        const prefix = before.split(/(?:[.!?](?=\s|$)|\n)/).pop();
        const suffix = after.split(/(?:[.!?](?=\s|$)|\n)/)[0];
        const clause = (prefix.split(/\b(?:and|but)\b/i).pop() + ' ' + suffix.split(/\b(?:and|but)\b/i)[0]).toLowerCase();
        if (change.kind === 'direction_word') {
            if (/damage|healing/.test(clause) && !/taken|take\b/.test(clause)) return /reduc/.test(change.new_token) ? 'nerf' : 'buff';
            return 'neutral';
        }
        if (change.kind === 'percent_direction_flip') {
            const word = (talent.changes || []).find(c => c.kind === 'direction_word');
            return word ? direction(talent, word) : 'neutral';
        }
        const oldValue = Number(String(change.old_token).replaceAll(',', ''));
        const newValue = Number(String(change.new_token).replaceAll(',', ''));
        if (!Number.isFinite(oldValue) || !Number.isFinite(newValue) || oldValue === newValue) return 'neutral';
        let polarity = 0;
        if (/exceeds\s*$/.test(prefix) || /every\s*$/.test(prefix.toLowerCase())) polarity = -1;
        else if (/\b(?:costs?|cooldown|recharge|cast time|casting time)\b/.test(clause)) {
            if (/reduc|shorten/.test(clause)) polarity = 1;
            else if (/enemies|enemy|target/.test(clause) && /casting time/.test(clause)) polarity = 1;
            else polarity = -1;
        } else if (/reduced duration/.test(clause) && !/harmful|movement impairing/.test(clause)) polarity = -1;
        else if (/each additional target reduces this bonus/.test(clause)) polarity = -1;
        else if (/(?:damage|healing)(?: that)? you (?:deal|do)|your (?:damage|healing)/.test(clause) && /reduc|less/.test((prefix + suffix).toLowerCase())) polarity = -1;
        else if (/sacrifice|siphon.*from an ally|damage (?:to yourself|you suffer)|health cost/.test(prefix + suffix)) polarity = 0;
        else if (/damage|heal|absorb|shield|armor|stamina|strength|agility|intellect|haste|versatility|critical|chance|effectiveness|effective|slow|snare|silence|stun|duration|movement speed|regenerat|stacks?|slashes|times|primary stat|rage|energy|mana|focus|health|leech/.test((prefix + suffix).toLowerCase())) polarity = 1;
        if (!polarity) return 'neutral';
        return (newValue - oldValue) * polarity > 0 ? 'buff' : 'nerf';
    }
    function combine(directions) {
        const values = new Set(directions);
        if (values.has('mixed') || (values.has('buff') && values.has('nerf'))) return 'mixed';
        if (values.has('neutral')) return 'neutral';
        return values.has('buff') ? 'buff' : values.has('nerf') ? 'nerf' : 'neutral';
    }
    function talentDirection(talent) {
        // A sign flip has a separate word replacement that carries its meaning.
        return combine((talent.changes || []).filter(c => c.kind !== 'percent_direction_flip').map(c => direction(talent, c)));
    }
    const api = {direction, combine, talentDirection, labels};
    if (typeof module !== 'undefined') module.exports = api;
    else root.PvpDirection = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
