/* Shared by the UI and regression checks. Unknown semantics stay neutral. */
(function (root) {
    const labels = {
        buff: 'PvP buff',
        nerf: 'PvP nerf',
        mixed: 'Mixed PvP changes',
        neutral: 'PvP change · inspect details'
    };

    const OUTPUT_KINDS = new Set([
        'attack_power_coefficient',
        'spell_power_coefficient',
        'weapon_damage_coefficient'
    ]);

    function numericValue(token) {
        const value = Number(String(token).replaceAll(',', ''));
        return Number.isFinite(value) ? value : null;
    }

    function localContext(talent, change) {
        const text = String(talent.pve_tooltip || '');
        const before = text.slice(0, change.start);
        const after = text.slice(change.end);
        const prefix = before.split(/(?:[.!?](?=\s|$)|\n)/).pop() || '';
        const suffix = after.split(/(?:[.!?](?=\s|$)|\n)/)[0] || '';
        const left = prefix.split(/\b(?:and|but)\b/i).pop() || '';
        const right = suffix.split(/\b(?:and|but)\b/i)[0] || '';
        return {
            prefix,
            suffix,
            clause: (left + ' ' + right).toLowerCase(),
            nearby: (prefix + ' ' + suffix).toLowerCase(),
            full: text.toLowerCase(),
        };
    }

    function direction(talent, change) {
        const context = localContext(talent, change);
        const {prefix, clause, nearby, full} = context;

        if (change.kind === 'direction_word') {
            if (/damage|healing/.test(clause) && !/taken|take\b/.test(clause)) {
                return /reduc/.test(String(change.new_token).toLowerCase()) ? 'nerf' : 'buff';
            }
            return 'neutral';
        }

        if (change.kind === 'percent_direction_flip') {
            const word = (talent.changes || []).find(c => c.kind === 'direction_word');
            return word ? direction(talent, word) : 'neutral';
        }

        const oldValue = numericValue(change.old_token);
        const newValue = numericValue(change.new_token);
        if (oldValue === null || newValue === null || oldValue === newValue) return 'neutral';

        let polarity = 0; // +1 means a larger number is better for the player.

        // Thresholds / frequencies: needing less resource or a lower threshold is better.
        if (/exceeds\s*$/i.test(prefix) || /every\s*$/i.test(prefix)) {
            polarity = -1;
        }
        // A larger "recharges X% faster" scalar improves availability.
        else if (/recharges?\s+faster/.test(nearby)) {
            polarity = 1;
        }
        // Reducing harmful crowd-control duration on the player is beneficial.
        // Keep "This effect is increased to ..." tied to the preceding CC reduction.
        else if (
            /\b(?:fear|stun|silence|root|incapacitat|disorient)\b[^.]*duration on you reduced/.test(full)
            && (
                /duration on you reduced/.test(nearby)
                || /this effect is increased to/.test(nearby)
            )
        ) {
            polarity = 1;
        }
        // Explicit costs and time-to-use values.
        else if (/\b(?:costs?|cooldown|recharges?|cast time|casting time)\b/.test(clause)) {
            if (/reduc|shorten/.test(clause)) polarity = 1;
            else if (/enemies|enemy|target/.test(clause) && /casting time/.test(clause)) polarity = 1;
            else polarity = -1;
        }
        // "X% reduced duration" is an amount of reduction, not the duration itself.
        else if (/reduced duration/.test(clause) && !/harmful|movement impairing/.test(clause)) {
            polarity = -1;
        }
        else if (/each additional target reduces this bonus/.test(clause)) {
            polarity = -1;
        }
        else if (/(?:damage|healing)(?: that)? you (?:deal|do)|your (?:damage|healing)/.test(clause)
                 && /reduc|less/.test(nearby)) {
            polarity = -1;
        }
        // Player-paid penalties: less self-damage / health cost is better.
        else if (/damage (?:to yourself|you suffer)|health cost|sacrifice(?:s|d)? .*health/.test(nearby)) {
            polarity = -1;
        }
        // A transfer/siphon magnitude is the talent's throughput. This is intentionally
        // directional even when the source happens to be an ally.
        else if (/siphon/.test(nearby)) {
            polarity = 1;
        }
        // Renderer-known output coefficients are direct throughput values. Do not require
        // the word "damage" to occur on the same wrapped line (Rip is the canonical case).
        else if (OUTPUT_KINDS.has(change.kind)) {
            polarity = 1;
        }
        // Explicit increases to the player's ability range are beneficial.
        else if (
            change.kind === 'distance_yards'
            && /(?:increased range|range is increased)/.test(nearby)
        ) {
            polarity = 1;
        }
        // A rendered duration is normally the duration of the beneficial talent effect.
        // Explicit cooldown/reduction/harmful cases have already been handled above.
        else if (change.kind === 'duration_seconds') {
            if (/\byou (?:are|remain|become)\b.*\b(?:stun|silenc|root|fear|incapacitat)/.test(nearby)) {
                polarity = -1;
            } else {
                polarity = 1;
            }
        }
        // Some source effects expose duration as an ordinary scalar even though the
        // player-facing text makes the unit unambiguous (e.g. "6 additional sec").
        else if (change.kind === 'ordinary_value'
                 && /(?:additional|extra)\s+(?:sec|second|min|minute)|\bfor\s*$/.test(nearby)) {
            polarity = 1;
        }
        else if (/damage|heal|absorb|shield|armor|stamina|strength|agility|intellect|haste|versatility|critical|chance|effectiveness|effective|slow|snare|silence|stun|duration|movement speed|regenerat|stacks?|slashes|times|primary stat|rage|energy|mana|focus|health|leech/.test(nearby)) {
            polarity = 1;
        }

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
        return combine(
            (talent.changes || [])
                .filter(c => c.kind !== 'percent_direction_flip')
                .map(c => direction(talent, c))
        );
    }

    const api = {direction, combine, talentDirection, labels};
    if (typeof module !== 'undefined') module.exports = api;
    else root.PvpDirection = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
