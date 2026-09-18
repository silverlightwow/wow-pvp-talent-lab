
(() => {

    "use strict";


    // ========================================================
    // Dataset
    // ========================================================

    const data = window.WOW_PVP_DATA;


    if (!data) {

        document.body.innerHTML = `
            <div style="
                padding:40px;
                color:white;
                font-family:system-ui
            ">
                Could not load
                web/data/priest-discipline.js
            </div>
        `;

        return;
    }


    const talents = data.talents || [];


    const state = {

        pvpMode: true,

        heroTree:
            talents.some(
                t =>
                    t.hero_tree ===
                    "Voidweaver"
            )
            ? "Voidweaver"
            : null,

        selected:
            new Map(),

        compendiumSpellId:
            null,
    };


    // Max-level (90) Midnight point budgets. Free starter nodes
    // do not consume these pools.
    const TALENT_POINT_CAPS = Object.freeze({
        class: 34,
        spec: 34,
        hero: 13,
    });


    // ========================================================
    // DOM
    // ========================================================

    const $ = selector =>
        document.querySelector(
            selector
        );


    const $$ = selector =>
        [
            ...document.querySelectorAll(
                selector
            )
        ];


    const tooltip = $(
        "#talentTooltip"
    );


    // ========================================================
    // Helpers
    // ========================================================

    function escapeHtml(value) {

        return String(
            value ?? ""
        )
        .replaceAll(
            "&",
            "&amp;"
        )
        .replaceAll(
            "<",
            "&lt;"
        )
        .replaceAll(
            ">",
            "&gt;"
        )
        .replaceAll(
            '"',
            "&quot;"
        )
        .replaceAll(
            "'",
            "&#039;"
        );
    }


    // Raidbots normally exposes Blizzard icon file names directly.
    // A small number of legacy icon names use punctuation that differs
    // from the normalized manifest value. Keep those corrections here
    // instead of hard-coding individual talents.
    const ICON_NAME_OVERRIDES = {
        "spell_priest_power_word":
            "spell_priest_power-word",

        // Raidbots currently normalizes this legacy icon with
        // an underscore, while the actual CDN asset keeps the hyphen.
        // Used by Dominate Mind (spell 205364).
        "spell_priest_void_flay":
            "spell_priest_void-flay",
    };


    function iconUrl(talent) {

        let icon =
            talent?.tree_data?.icon;

        if (!icon) {
            return "";
        }

        icon =
            ICON_NAME_OVERRIDES[icon]
            || icon;

        return (
            "https://wow.zamimg.com/"
            + "images/wow/icons/large/"
            + encodeURIComponent(
                icon
            )
            + ".jpg"
        );
    }


    function singleNodeVisual(talent) {

        const src = iconUrl(talent);

        if (src) {
            return `
                <img
                    class="node-main-icon"
                    src="${src}"
                    alt="${escapeHtml(talent.talent_name)}"
                    onerror="
                        this.style.display='none';
                        this.nextElementSibling.style.display='grid';
                    "
                >

                <span class="node-fallback">
                    ${escapeHtml(initials(talent.talent_name))}
                </span>
            `;
        }

        return `
            <span class="node-fallback visible">
                ${escapeHtml(initials(talent.talent_name))}
            </span>
        `;
    }


    function choiceNodeVisual(group) {

        const selection =
            state.selected.get(
                group.nodeId
            );

        const activeIndex =
            selection
            ? selection.entryIndex
            : -1;

        const count =
            group.entries.length;

        const segments =
            group.entries
            .map(
                (entry, index) => {

                    const src =
                        iconUrl(entry);

                    return `
                        <span
                            class="choice-segment ${
                                activeIndex === index
                                ? "active"
                                : ""
                            }"
                            style="
                                --choice-count:${count};
                                --choice-index:${index};
                                width:${100 / count}%;
                            "
                            title="${escapeHtml(entry.talent_name)}"
                        >
                            ${
                                src
                                ? `
                                    <img
                                        src="${src}"
                                        alt="${escapeHtml(entry.talent_name)}"
                                        onerror="
                                            this.style.display='none';
                                            this.nextElementSibling.style.display='grid';
                                        "
                                    >

                                    <span class="choice-segment-fallback">
                                        ${escapeHtml(initials(entry.talent_name))}
                                    </span>
                                `
                                : `
                                    <span class="choice-segment-fallback visible">
                                        ${escapeHtml(initials(entry.talent_name))}
                                    </span>
                                `
                            }
                        </span>
                    `;
                }
            )
            .join("");

        const chevrons =
            count === 2
            ? `
                <span class="choice-chevron choice-chevron-left"></span>
                <span class="choice-chevron choice-chevron-right"></span>
            `
            : "";

        return `
            <span
                class="choice-split"
                style="--choice-count:${count}"
            >
                ${segments}

                <span class="choice-dividers"></span>
            </span>

            ${chevrons}
        `;
    }


    function initials(name) {

        return String(
            name || "?"
        )
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map(
            part => part[0]
        )
        .join("")
        .toUpperCase();
    }


    function formatNumber(value) {

        if (
            value === null
            || value === undefined
            || Number.isNaN(
                Number(value)
            )
        ) {
            return "—";
        }

        const n = Number(value);

        if (
            Math.abs(
                n - Math.round(n)
            ) < 1e-10
        ) {
            return String(
                Math.round(n)
            );
        }

        return n
            .toFixed(6)
            .replace(
                /0+$/,
                ""
            )
            .replace(
                /\.$/,
                ""
            );
    }


    function treeDisplayName(talent) {

        if (
            talent.tree_type
            === "class"
        ) {
            return "Priest";
        }

        if (
            talent.tree_type
            === "spec"
        ) {
            return "Discipline";
        }

        return talent.hero_tree
            || "Hero";
    }


    function changeHtml(talent) {

        const changes =
            talent.changes || [];

        if (!changes.length) {
            return `
                <span class="tree-label">
                    Internal PvP mechanic
                </span>
            `;
        }

        return `
            <div class="change-chips">
                ${
                    changes.map(
                        change => `
                            <span
                                class="change-chip"
                            >
                                ${
                                    escapeHtml(
                                        change.old_token
                                    )
                                }

                                <span
                                    class="change-arrow"
                                >
                                    →
                                </span>

                                ${
                                    escapeHtml(
                                        change.new_token
                                    )
                                }
                            </span>
                        `
                    ).join("")
                }
            </div>
        `;
    }



    function changeContext(
        talent,
        change
    ) {

        const source = String(
            talent.pve_tooltip || ""
        ).replace(/\s+/g, " ").trim();

        const token = String(
            change.old_token ?? ""
        );

        if (!source || !token) {
            return "";
        }

        const index = source.indexOf(
            token
        );

        if (index < 0) {
            return "";
        }

        const start = Math.max(
            0,
            index - 42
        );

        const end = Math.min(
            source.length,
            index + token.length + 56
        );

        let snippet = source.slice(
            start,
            end
        ).trim();

        if (start > 0) {
            snippet = `…${snippet}`;
        }

        if (end < source.length) {
            snippet = `${snippet}…`;
        }

        return snippet;
    }


    function comparisonChangeHtml(
        talent
    ) {

        const changes =
            talent.changes || [];

        return `
            <div class="comparison-change-list">
                ${
                    changes.map(
                        change => `
                            <div class="comparison-change-item">
                                <span class="change-chip">
                                    ${escapeHtml(change.old_token)}
                                    <span class="change-arrow">→</span>
                                    ${escapeHtml(change.new_token)}
                                </span>

                                ${
                                    changeContext(
                                        talent,
                                        change
                                    )
                                    ? `
                                        <div class="change-context">
                                            ${
                                                escapeHtml(
                                                    changeContext(
                                                        talent,
                                                        change
                                                    )
                                                )
                                            }
                                        </div>
                                    `
                                    : ""
                                }
                            </div>
                        `
                    ).join("")
                }
            </div>
        `;
    }


    // ========================================================
    // Header
    // ========================================================

    function renderHeader() {

        const verifiedAt =
            data.generated_at
            ? new Date(
                data.generated_at
            ).toLocaleString(
                undefined,
                {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                }
            )
            : null;


        $("#buildInfo").textContent =
            `Raidbots ${data.tree_build}`
            + ` · SimC ${data.simc_build}`
            + ` · Drustvar ${
                (
                    data.drustvar_builds
                    || []
                ).join(", ")
            }`
            + (
                verifiedAt
                ? ` · Verified ${verifiedAt}`
                : ""
            );


        const changedCount =
            talents.filter(
                talent =>
                    talent.tooltip_changed
            ).length;


        const mechanicCount =
            compendiumGroups(
                talents.filter(
                    talent =>
                        talent.has_pvp_mechanics
                )
            ).length;


        $("#changedBadge").textContent =
            changedCount;


        $("#mechanicsBadge").textContent =
            mechanicCount;
    }


    // ========================================================
    // Tabs
    // ========================================================

    function setupTabs() {

        $$(".tab").forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        $$(".tab")
                            .forEach(
                                tab =>
                                    tab.classList
                                    .remove(
                                        "active"
                                    )
                            );


                        button.classList.add(
                            "active"
                        );


                        $$(".tab-panel")
                            .forEach(
                                panel =>
                                    panel.classList
                                    .remove(
                                        "active"
                                    )
                            );


                        $(
                            `#${
                                button.dataset.tab
                            }Panel`
                        )
                        .classList
                        .add(
                            "active"
                        );

                    }
                );

            }
        );
    }


    // ========================================================
    // Hero selector
    // ========================================================

    function setupHeroSelector() {

        const heroes = [
            ...new Set(
                talents
                .filter(
                    talent =>
                        talent.tree_type
                        === "hero"
                )
                .map(
                    talent =>
                        talent.hero_tree
                )
                .filter(Boolean)
            )
        ]
        .sort();


        const select =
            $("#heroSelect");


        select.innerHTML =
            heroes.map(
                hero => `
                    <option
                        value="${
                            escapeHtml(
                                hero
                            )
                        }"
                    >
                        ${
                            escapeHtml(
                                hero
                            )
                        }
                    </option>
                `
            ).join("");


        if (
            heroes.includes(
                state.heroTree
            )
        ) {
            select.value =
                state.heroTree;
        }
        else {
            state.heroTree =
                heroes[0] || null;

            select.value =
                state.heroTree || "";
        }


        select.addEventListener(
            "change",
            () => {

                const oldHero =
                    state.heroTree;


                state.heroTree =
                    select.value;


                // Remove selections from the old hero tree.
                talents
                    .filter(
                        talent =>
                            talent.tree_type
                            === "hero"
                            && talent.hero_tree
                            === oldHero
                    )
                    .forEach(
                        talent =>
                            state.selected.delete(
                                talent.node_id
                            )
                    );


                ensureFreeSelections();

                renderTrees();
            }
        );
    }


    // ========================================================
    // Node grouping
    // ========================================================

    function groupNodes(records) {

        const map =
            new Map();


        records.forEach(
            record => {

                const nodeId =
                    record.node_id;


                if (
                    !map.has(
                        nodeId
                    )
                ) {

                    map.set(
                        nodeId,
                        {
                            nodeId,
                            entries: [],
                            prev: new Set(),
                            next: new Set(),
                            x:
                                Number(
                                    record
                                    .tree_data
                                    .pos_x
                                ),
                            y:
                                Number(
                                    record
                                    .tree_data
                                    .pos_y
                                ),
                            maxRanks:
                                Number(
                                    record
                                    .tree_data
                                    .max_ranks
                                    || 1
                                ),
                            nodeType:
                                String(
                                    record
                                    .tree_data
                                    .node_type
                                    || "single"
                                ),
                            free:
                                Boolean(
                                    record
                                    .tree_data
                                    .free_node
                                ),
                        }
                    );
                }


                const group =
                    map.get(
                        nodeId
                    );


                group.entries.push(
                    record
                );


                (
                    record.tree_data.prev
                    || []
                )
                .forEach(
                    id =>
                        group.prev.add(
                            Number(id)
                        )
                );


                (
                    record.tree_data.next
                    || []
                )
                .forEach(
                    id =>
                        group.next.add(
                            Number(id)
                        )
                );

            }
        );


        map.forEach(
            group => {

                group.entries.sort(
                    (a, b) =>
                        Number(
                            a.tree_data
                            .entry_index
                            || 0
                        )
                        -
                        Number(
                            b.tree_data
                            .entry_index
                            || 0
                        )
                );

                group.prev = [
                    ...group.prev
                ];

                group.next = [
                    ...group.next
                ];

                // Multiple entries can mean two very different things:
                // a real choice node, or a Midnight tiered/Apex talent.
                // Trust Raidbots node_type/entry_type instead of guessing
                // from entry count.
                group.isChoice = (
                    group.nodeType === "choice"
                );

                group.isTiered = (
                    group.nodeType === "tiered"
                    || group.entries.every(
                        entry =>
                            entry.tree_data.entry_type
                            === "tierrank"
                    )
                );
            }
        );


        return map;
    }


    function recordsForTree(
        treeType,
        heroTree=null
    ) {

        return talents.filter(
            talent => {

                if (
                    talent.tree_type
                    !== treeType
                ) {
                    return false;
                }

                if (
                    treeType === "hero"
                ) {
                    return (
                        talent.hero_tree
                        === heroTree
                    );
                }

                return true;
            }
        );
    }


    function displayedGroups() {

        const groups =
            new Map();


        [
            ...groupNodes(
                recordsForTree(
                    "class"
                )
            ).values(),

            ...groupNodes(
                recordsForTree(
                    "spec"
                )
            ).values(),

            ...groupNodes(
                recordsForTree(
                    "hero",
                    state.heroTree
                )
            ).values(),
        ]
        .forEach(
            group =>
                groups.set(
                    group.nodeId,
                    group
                )
        );


        return groups;
    }


    // ========================================================
    // Talent build state
    // ========================================================

    function ensureFreeSelections() {

        displayedGroups()
            .forEach(
                group => {

                    if (
                        !group.free
                    ) {
                        return;
                    }

                    if (
                        !state.selected.has(
                            group.nodeId
                        )
                    ) {

                        state.selected.set(
                            group.nodeId,
                            {
                                entryIndex: 0,
                                rank:
                                    group.maxRanks,
                            }
                        );
                    }

                }
            );
    }


    function currentEntry(group) {

        const selection =
            state.selected.get(
                group.nodeId
            );


        // Only actual choice nodes select between entries. Tiered/Apex
        // nodes are several rank definitions for ONE visual talent.
        const index =
            group.isChoice && selection
            ? Math.min(
                selection.entryIndex,
                group.entries.length - 1
            )
            : 0;


        return group.entries[
            index
        ];
    }


    function effectivePrev(
        group,
        localGroups
    ) {

        return group.prev.filter(
            id =>
                localGroups.has(id)
        );
    }


    function canSelect(
        group,
        localGroups
    ) {

        if (group.free) {
            return true;
        }


        const prev =
            effectivePrev(
                group,
                localGroups
            );


        if (!prev.length) {
            return true;
        }


        return prev.some(
            nodeId => {

                const predecessor =
                    localGroups.get(
                        nodeId
                    );


                const selected =
                    state.selected.get(
                        nodeId
                    );


                return Boolean(
                    predecessor
                    && selected
                    && selected.rank
                    >= predecessor.maxRanks
                );
            }
        );
    }


    // ========================================================
    // Choice-node picker
    // ========================================================

    function closeChoicePicker() {

        const existing =
            document.querySelector(
                ".choice-picker"
            );

        if (existing) {
            existing.remove();
        }
    }


    function openChoicePicker(
        event,
        group,
        localGroups
    ) {

        closeChoicePicker();


        const currentSelection =
            state.selected.get(
                group.nodeId
            );


        if (
            !currentSelection
            && !canSelect(
                group,
                localGroups
            )
        ) {

            $("#treeMessage")
                .textContent =
                "A connected prerequisite must be selected first.";

            window.setTimeout(
                () => {

                    $("#treeMessage")
                        .textContent = "";

                },
                1800
            );

            return;
        }


        const picker =
            document.createElement(
                "div"
            );

        picker.className =
            "choice-picker";


        picker.innerHTML = `
            <div class="choice-picker-title">
                Choose a talent
            </div>

            <div class="choice-picker-options">
                ${
                    group.entries
                    .map(
                        (entry, index) => {

                            const active =
                                currentSelection
                                && currentSelection.entryIndex
                                === index;

                            const src =
                                iconUrl(entry);

                            return `
                                <button
                                    class=\"choice-option ${
                                        active
                                        ? "active"
                                        : ""
                                    }\"
                                    data-choice-index=\"${index}\"
                                >
                                    <span class=\"choice-option-icon\">
                                        ${
                                            src
                                            ? `
                                                <img
                                                    src=\"${src}\"
                                                    alt=\"\"
                                                    onerror=\"
                                                        this.style.display='none';
                                                        this.nextElementSibling.style.display='grid';
                                                    \"
                                                >
                                                <span class=\"choice-option-fallback\">
                                                    ${
                                                        escapeHtml(
                                                            initials(
                                                                entry.talent_name
                                                            )
                                                        )
                                                    }
                                                </span>
                                            `
                                            : `
                                                <span class=\"choice-option-fallback visible\">
                                                    ${
                                                        escapeHtml(
                                                            initials(
                                                                entry.talent_name
                                                            )
                                                        )
                                                    }
                                                </span>
                                            `
                                        }
                                    </span>

                                    <span class=\"choice-option-copy\">
                                        <strong>
                                            ${
                                                escapeHtml(
                                                    entry.talent_name
                                                )
                                            }
                                        </strong>

                                        <small>
                                            ${
                                                entry.tooltip_changed
                                                ? "PvP tooltip differs"
                                                : "Tooltip unchanged"
                                            }
                                        </small>
                                    </span>

                                    ${
                                        entry.tooltip_changed
                                        ? `<span class=\"choice-option-pvp\"></span>`
                                        : ""
                                    }
                                </button>
                            `;
                        }
                    )
                    .join("")
                }
            </div>
        `;


        document.body.appendChild(
            picker
        );


        const anchor =
            event.currentTarget
            .getBoundingClientRect();

        const pickerRect =
            picker.getBoundingClientRect();

        const margin = 12;

        let left =
            anchor.left
            + anchor.width / 2
            - pickerRect.width / 2;

        let top =
            anchor.bottom + 10;


        left = Math.max(
            margin,
            Math.min(
                left,
                window.innerWidth
                - pickerRect.width
                - margin
            )
        );


        if (
            top + pickerRect.height
            > window.innerHeight - margin
        ) {
            top =
                anchor.top
                - pickerRect.height
                - 10;
        }


        picker.style.left =
            `${left}px`;

        picker.style.top =
            `${Math.max(margin, top)}px`;


        picker
            .querySelectorAll(
                ".choice-option"
            )
            .forEach(
                button => {

                    const hoveredEntryIndex =
                        Number(
                            button.dataset
                            .choiceIndex
                        );

                    const hoveredEntry =
                        group.entries[
                            hoveredEntryIndex
                        ];


                    button.addEventListener(
                        "mouseenter",
                        hoverEvent => {
                            showTooltip(
                                hoverEvent,
                                group,
                                hoveredEntry
                            );
                        }
                    );


                    button.addEventListener(
                        "mousemove",
                        moveTooltip
                    );


                    button.addEventListener(
                        "mouseleave",
                        hideTooltip
                    );


                    button.addEventListener(
                        "click",
                        choiceEvent => {

                            choiceEvent.stopPropagation();

                            const entryIndex =
                                Number(
                                    button.dataset
                                    .choiceIndex
                                );

                            const previous =
                                state.selected.get(
                                    group.nodeId
                                );

                            if (
                                !previous
                                && !canSpendAnotherPoint(
                                    group
                                )
                            ) {
                                closeChoicePicker();

                                $("#treeMessage")
                                    .textContent =
                                    "No talent points remaining in this tree.";

                                window.setTimeout(
                                    () => {
                                        $("#treeMessage")
                                            .textContent = "";
                                    },
                                    1800
                                );

                                return;
                            }

                            state.selected.set(
                                group.nodeId,
                                {
                                    entryIndex,
                                    rank:
                                        previous
                                        ? Math.max(
                                            1,
                                            previous.rank
                                        )
                                        : 1,
                                }
                            );

                            closeChoicePicker();

                            pruneInvalidSelections();

                            renderTrees();
                        }
                    );

                }
            );
    }


    function pointCap(
        treeType
    ) {
        return TALENT_POINT_CAPS[
            treeType
        ] ?? 0;
    }


    function pointsForGroupTree(
        group
    ) {
        const entry =
            group.entries?.[0];

        const treeType =
            entry?.tree_type;

        const heroTree =
            treeType === "hero"
            ? entry?.hero_tree
            : null;

        return {
            treeType,
            heroTree,
            spent:
                pointCount(
                    treeType,
                    heroTree
                ),
            cap:
                pointCap(
                    treeType
                ),
        };
    }


    function canSpendAnotherPoint(
        group
    ) {
        if (group.free) {
            return true;
        }

        const budget =
            pointsForGroupTree(
                group
            );

        return (
            budget.spent
            < budget.cap
        );
    }


    function selectGroup(
        group,
        localGroups
    ) {

        let selection =
            state.selected.get(
                group.nodeId
            );


        if (!selection) {

            if (
                !canSelect(
                    group,
                    localGroups
                )
            ) {

                $("#treeMessage")
                    .textContent =
                    "A connected prerequisite must be selected first.";

                window.setTimeout(
                    () => {

                        $("#treeMessage")
                            .textContent = "";

                    },
                    1800
                );

                return;
            }


            if (
                !canSpendAnotherPoint(
                    group
                )
            ) {
                $("#treeMessage")
                    .textContent =
                    "No talent points remaining in this tree.";

                window.setTimeout(
                    () => {
                        $("#treeMessage")
                            .textContent = "";
                    },
                    1800
                );

                return;
            }


            selection = {
                entryIndex: 0,
                rank: 1,
            };


            state.selected.set(
                group.nodeId,
                selection
            );
        }
        else if (
            selection.rank
            < group.maxRanks
        ) {

            if (
                !canSpendAnotherPoint(
                    group
                )
            ) {
                $("#treeMessage")
                    .textContent =
                    "No talent points remaining in this tree.";

                window.setTimeout(
                    () => {
                        $("#treeMessage")
                            .textContent = "";
                    },
                    1800
                );

                return;
            }

            selection.rank += 1;
        }


        pruneInvalidSelections();

        renderTrees();
    }


    function removeRank(
        group
    ) {

        if (group.free) {
            return;
        }


        const selection =
            state.selected.get(
                group.nodeId
            );


        if (!selection) {
            return;
        }


        if (
            selection.rank > 1
        ) {
            selection.rank -= 1;
        }
        else {
            state.selected.delete(
                group.nodeId
            );
        }


        pruneInvalidSelections();

        renderTrees();
    }


    function pruneInvalidSelections() {

        const groups =
            displayedGroups();


        let changed = true;


        while (changed) {

            changed = false;


            for (
                const [
                    nodeId,
                    selection,
                ]
                of [
                    ...state.selected
                ]
            ) {

                const group =
                    groups.get(
                        nodeId
                    );


                if (!group) {
                    continue;
                }


                if (
                    group.free
                ) {
                    continue;
                }


                const prev =
                    effectivePrev(
                        group,
                        groups
                    );


                if (!prev.length) {
                    continue;
                }


                const valid =
                    prev.some(
                        prevId => {

                            const prevGroup =
                                groups.get(
                                    prevId
                                );


                            const prevSelected =
                                state.selected.get(
                                    prevId
                                );


                            return (
                                prevGroup
                                && prevSelected
                                && prevSelected.rank
                                >= prevGroup.maxRanks
                            );
                        }
                    );


                if (!valid) {

                    state.selected.delete(
                        nodeId
                    );

                    changed = true;
                }

            }
        }


        ensureFreeSelections();
    }


    // ========================================================
    // Tree geometry
    // ========================================================

    function treePositions(
        groups,
        viewportWidth,
        nodeSize
    ) {

        const values = [
            ...groups.values()
        ];


        const xs = [
            ...new Set(
                values.map(
                    group => group.x
                )
            )
        ].sort((a, b) => a - b);


        const ys = [
            ...new Set(
                values.map(
                    group => group.y
                )
            )
        ].sort((a, b) => a - b);


        /*
           Preserve the Raidbots/Blizzard coordinate scale. Previously
           each tree was stretched independently to the full card width,
           which made the 7-column spec tree look much wider than the
           9-column class tree and distorted the compact Hero tree.

           A normal horizontal step is 600 source units. Hero layouts
           also use 300-unit half-steps, which now remain half-steps.
        */
        const rawMinX = Math.min(...xs);
        const rawMaxX = Math.max(...xs);
        const rawSpan = Math.max(0, rawMaxX - rawMinX);

        const normalColumnGap =
            Math.max(
                nodeSize + 12,
                56
            );

        let coordinateScale =
            normalColumnGap / 600;

        const paddingX =
            Math.max(
                28,
                nodeSize * 0.72
            );

        const availableSpan =
            Math.max(
                0,
                viewportWidth
                - paddingX * 2
            );

        const desiredSpan =
            rawSpan * coordinateScale;

        // Emergency fit only. Responsive card sizing should normally keep
        // enough room, but this prevents clipping without scrollbars.
        if (
            desiredSpan > availableSpan
            && rawSpan > 0
        ) {
            coordinateScale =
                availableSpan / rawSpan;
        }

        const renderedSpan =
            rawSpan * coordinateScale;

        const offsetX =
            (
                viewportWidth
                - renderedSpan
            ) / 2;

        const rowGap =
            Math.max(
                72,
                nodeSize + 26
            );

        const top =
            Math.max(
                42,
                nodeSize
            );

        const positions =
            new Map();


        values.forEach(
            group => {

                positions.set(
                    group.nodeId,
                    {
                        x:
                            offsetX
                            + (
                                group.x
                                - rawMinX
                            )
                            * coordinateScale,

                        y:
                            top
                            + ys.indexOf(
                                group.y
                            )
                            * rowGap,
                    }
                );

            }
        );


        const height =
            Math.max(
                650,
                top
                + Math.max(
                    ys.length - 1,
                    0
                )
                * rowGap
                + nodeSize
                + 30
            );


        return {
            positions,
            height,
        };
    }


    function svgLine(
        from,
        to,
        active
    ) {

        return `
            <line
                x1="${from.x}"
                y1="${from.y}"
                x2="${to.x}"
                y2="${to.y}"
                class="tree-edge ${
                    active
                    ? "active"
                    : ""
                }"
            />
        `;
    }


    // ========================================================
    // Floating tooltip
    // ========================================================

    function choiceEntryFromPointer(
        event,
        group,
        nodeElement
    ) {

        if (
            !group.isChoice
            || !group.entries.length
        ) {
            return currentEntry(
                group
            );
        }


        const rect =
            nodeElement
            .getBoundingClientRect();


        const relativeX = Math.max(
            0,
            Math.min(
                rect.width - 0.0001,
                event.clientX - rect.left
            )
        );


        const index = Math.min(
            group.entries.length - 1,
            Math.floor(
                relativeX
                / rect.width
                * group.entries.length
            )
        );


        return group.entries[
            index
        ];
    }


    function showTooltip(
        event,
        group,
        talentOverride=null
    ) {

        const talent =
            talentOverride
            || currentEntry(
                group
            );


        const text =
            state.pvpMode
            ? talent.pvp_tooltip
            : talent.pve_tooltip;


        const modeBadge =
            state.pvpMode
            && talent.tooltip_changed
            ? `
                <span class="tooltip-badge">
                    PvP modified
                </span>
            `
            : "";


        const choiceText =
            group.isChoice
            ? `
                <div class="tooltip-choice">
                    Choice node:
                    ${
                        group.entries
                        .map(
                            entry =>
                                escapeHtml(
                                    entry.talent_name
                                )
                        )
                        .join(" · ")
                    }
                    <br>
                    Click the node to open the choice picker.
                </div>
            `
            : "";


        const tieredText =
            group.isTiered
            ? (() => {

                const selection =
                    state.selected.get(
                        group.nodeId
                    );

                const rank =
                    selection
                    ? selection.rank
                    : 0;

                const labels =
                    group.entries.length === 3
                    ? [
                        "Rank 1",
                        "Ranks 2–3",
                        "Rank 4",
                    ]
                    : group.entries.map(
                        (_, index) =>
                            `Stage ${index + 1}`
                    );

                return `
                    <div class="apex-breakdown">
                        <div class="apex-heading">
                            Apex Talent · ${rank}/${group.maxRanks}
                        </div>

                        ${
                            group.entries
                            .map(
                                (entry, index) => `
                                    <div class="apex-stage">
                                        <div class="apex-stage-label">
                                            ${escapeHtml(labels[index])}
                                        </div>
                                        <div class="apex-stage-text">
                                            ${escapeHtml(
                                                state.pvpMode
                                                ? entry.pvp_tooltip
                                                : entry.pve_tooltip
                                            )}
                                        </div>
                                    </div>
                                `
                            )
                            .join("")
                        }
                    </div>
                `;
            })()
            : "";


        tooltip.innerHTML = `
            <div class="tooltip-header">

                ${
                    iconUrl(talent)
                    ? `
                        <img
                            class="tooltip-icon"
                            src="${
                                iconUrl(
                                    talent
                                )
                            }"
                        >
                    `
                    : ""
                }

                <div>
                    <div class="tooltip-name">
                        ${
                            escapeHtml(
                                talent.talent_name
                            )
                        }
                    </div>

                    <div class="tooltip-meta">
                        ${
                            escapeHtml(
                                treeDisplayName(
                                    talent
                                )
                            )
                        }
                        · Spell ${
                            talent.spell_id
                        }
                    </div>

                    ${modeBadge}
                </div>

            </div>

            <pre class="tooltip-text">${
                escapeHtml(
                    text
                )
            }</pre>

            ${
                state.pvpMode
                && talent.tooltip_changed
                ? `
                    <div
                        style="margin-top:10px"
                    >
                        ${
                            changeHtml(
                                talent
                            )
                        }
                    </div>
                `
                : ""
            }

            ${choiceText}
            ${tieredText}
        `;


        tooltip.style.display =
            "block";


        moveTooltip(
            event
        );
    }


    function moveTooltip(event) {

        if (
            tooltip.style.display
            !== "block"
        ) {
            return;
        }


        const margin = 14;

        let left =
            event.clientX + 16;

        let top =
            event.clientY + 16;


        const width =
            390;

        const height =
            tooltip.offsetHeight;


        if (
            left + width
            > window.innerWidth
            - margin
        ) {

            left =
                event.clientX
                - width
                - 16;
        }


        if (
            top + height
            > window.innerHeight
            - margin
        ) {

            top =
                Math.max(
                    margin,
                    window.innerHeight
                    - height
                    - margin
                );
        }


        tooltip.style.left =
            `${left}px`;

        tooltip.style.top =
            `${top}px`;
    }


    function hideTooltip() {

        tooltip.style.display =
            "none";
    }


    // ========================================================
    // Tree rendering
    // ========================================================

    function renderTree(
        container,
        records
    ) {

        const groups =
            groupNodes(
                records
            );


        const viewportWidth =
            Math.max(
                container.parentElement
                    ?.clientWidth
                    || container.clientWidth,
                220
            );


        const nodeSize =
            parseFloat(
                getComputedStyle(
                    container
                ).getPropertyValue(
                    "--node"
                )
            ) || 48;


        const {
            positions,
            height,
        } = treePositions(
            groups,
            viewportWidth,
            nodeSize
        );


        container.style.height =
            `${height}px`;

        container.style.width =
            "100%";

        container.style.maxWidth =
            "100%";


        let edgeHtml = "";


        const renderedEdges =
            new Set();


        groups.forEach(
            group => {

                const from =
                    positions.get(
                        group.nodeId
                    );


                group.next.forEach(
                    targetId => {

                        if (
                            !groups.has(
                                targetId
                            )
                        ) {
                            return;
                        }


                        const key =
                            `${group.nodeId}-${targetId}`;


                        if (
                            renderedEdges.has(
                                key
                            )
                        ) {
                            return;
                        }


                        renderedEdges.add(
                            key
                        );


                        const selected =
                            state.selected.get(
                                group.nodeId
                            );


                        const active =
                            Boolean(
                                selected
                                && selected.rank
                                >= group.maxRanks
                            );


                        edgeHtml +=
                            svgLine(
                                from,
                                positions.get(
                                    targetId
                                ),
                                active
                            );
                    }
                );

            }
        );


        container.innerHTML = `
            <svg
                class="tree-lines"
                viewBox="0 0 ${viewportWidth} ${height}"
                preserveAspectRatio="none"
            >
                ${edgeHtml}
            </svg>
        `;


        groups.forEach(
            group => {

                const position =
                    positions.get(
                        group.nodeId
                    );


                const selected =
                    state.selected.get(
                        group.nodeId
                    );


                const talent =
                    currentEntry(
                        group
                    );


                const prerequisiteBlocked =
                    !selected
                    && !canSelect(
                        group,
                        groups
                    );


                const pointCapLocked =
                    !selected
                    && !group.free
                    && !canSpendAnotherPoint(
                        group
                    );


                const blocked =
                    prerequisiteBlocked;


                const button =
                    document.createElement(
                        "button"
                    );


                button.className =
                    [
                        "talent-node",

                        selected
                            ? "selected"
                            : "",

                        blocked
                            ? "blocked"
                            : "",

                        pointCapLocked
                            ? "point-cap-locked"
                            : "",

                        group.free
                            ? "free"
                            : "",
                    ]
                    .filter(Boolean)
                    .join(" ");


                button.style.left =
                    `${
                        position.x - nodeSize / 2
                    }px`;

                button.style.top =
                    `${
                        position.y - nodeSize / 2
                    }px`;


                const currentRank =
                    selected
                    ? selected.rank
                    : 0;


                const anyChanged =
                    group.entries.some(
                        entry =>
                            entry.tooltip_changed
                    );


                const nodeVisual =
                    group.isChoice
                    ? choiceNodeVisual(
                        group
                    )
                    : singleNodeVisual(
                        group.isTiered
                        ? group.entries[0]
                        : talent
                    );


                if (group.isChoice) {
                    button.classList.add(
                        "choice-node"
                    );
                }


                if (group.isTiered) {
                    button.classList.add(
                        "tiered-node"
                    );
                }


                button.innerHTML = `
                    ${nodeVisual}

                    ${
                        anyChanged
                        ? `
                            <span
                                class="pvp-dot"
                            ></span>
                        `
                        : ""
                    }

                    <span class="rank-badge">
                        ${currentRank}/${
                            group.maxRanks
                        }
                    </span>
                `;

                button.addEventListener(
                    "click",
                    event => {

                        event.preventDefault();

                        hideTooltip();

                        if (
                            group.isChoice
                        ) {
                            openChoicePicker(
                                event,
                                group,
                                groups
                            );
                        }
                        else {
                            closeChoicePicker();

                            selectGroup(
                                group,
                                groups
                            );
                        }
                    }
                );


                button.addEventListener(
                    "contextmenu",
                    event => {

                        event.preventDefault();

                        hideTooltip();

                        removeRank(
                            group
                        );
                    }
                );


                button.addEventListener(
                    "mouseenter",
                    event => {

                        const hoveredTalent =
                            group.isChoice
                            ? choiceEntryFromPointer(
                                event,
                                group,
                                button
                            )
                            : currentEntry(
                                group
                            );


                        button.dataset.hoveredSpellId =
                            String(
                                hoveredTalent.spell_id
                            );


                        showTooltip(
                            event,
                            group,
                            hoveredTalent
                        );
                    }
                );


                button.addEventListener(
                    "mousemove",
                    event => {

                        if (group.isChoice) {

                            const hoveredTalent =
                                choiceEntryFromPointer(
                                    event,
                                    group,
                                    button
                                );

                            const spellId =
                                String(
                                    hoveredTalent.spell_id
                                );


                            if (
                                button.dataset.hoveredSpellId
                                !== spellId
                            ) {
                                button.dataset.hoveredSpellId =
                                    spellId;

                                showTooltip(
                                    event,
                                    group,
                                    hoveredTalent
                                );

                                return;
                            }
                        }

                        moveTooltip(
                            event
                        );
                    }
                );


                button.addEventListener(
                    "mouseleave",
                    () => {
                        delete button.dataset.hoveredSpellId;
                        hideTooltip();
                    }
                );


                container.appendChild(
                    button
                );
            }
        );

    }


    function pointCount(
        treeType,
        heroTree=null
    ) {

        const groups =
            groupNodes(
                recordsForTree(
                    treeType,
                    heroTree
                )
            );


        let total = 0;


        groups.forEach(
            group => {

                if (group.free) {
                    return;
                }


                const selected =
                    state.selected.get(
                        group.nodeId
                    );


                if (selected) {

                    total +=
                        selected.rank;
                }

            }
        );


        return total;
    }


    function renderTrees() {

        $("#heroTreeTitle")
            .textContent =
            state.heroTree || "Hero";


        renderTree(
            $("#classTree"),
            recordsForTree(
                "class"
            )
        );


        renderTree(
            $("#specTree"),
            recordsForTree(
                "spec"
            )
        );


        renderTree(
            $("#heroTree"),
            recordsForTree(
                "hero",
                state.heroTree
            )
        );


        const classSpent =
            pointCount(
                "class"
            );

        const specSpent =
            pointCount(
                "spec"
            );

        const heroSpent =
            pointCount(
                "hero",
                state.heroTree
            );


        $("#classPoints")
            .textContent =
            `${classSpent}/${TALENT_POINT_CAPS.class}`;

        $("#specPoints")
            .textContent =
            `${specSpent}/${TALENT_POINT_CAPS.spec}`;

        $("#heroPoints")
            .textContent =
            `${heroSpent}/${TALENT_POINT_CAPS.hero}`;


        $("#classPoints")
            .classList.toggle(
                "cap-reached",
                classSpent >= TALENT_POINT_CAPS.class
            );

        $("#specPoints")
            .classList.toggle(
                "cap-reached",
                specSpent >= TALENT_POINT_CAPS.spec
            );

        $("#heroPoints")
            .classList.toggle(
                "cap-reached",
                heroSpent >= TALENT_POINT_CAPS.hero
            );
    }


    // ========================================================
    // PvE / PvP comparison
    // ========================================================

    function renderComparison() {

        const search =
            $("#compareSearch")
            .value
            .trim()
            .toLowerCase();


        const treeFilter =
            $("#compareTreeFilter")
            .value;


        const rows =
            talents.filter(
                talent => {

                    if (
                        !talent.tooltip_changed
                    ) {
                        return false;
                    }


                    if (
                        treeFilter !== "all"
                        && talent.tree_type
                        !== treeFilter
                    ) {
                        return false;
                    }


                    if (
                        search
                        && !talent
                        .talent_name
                        .toLowerCase()
                        .includes(search)
                    ) {
                        return false;
                    }


                    return true;
                }
            )
            .sort(
                (a, b) => {

                    const typeOrder = {
                        class: 0,
                        spec: 1,
                        hero: 2,
                    };


                    return (
                        (
                            typeOrder[
                                a.tree_type
                            ] ?? 99
                        )
                        -
                        (
                            typeOrder[
                                b.tree_type
                            ] ?? 99
                        )
                        ||
                        String(
                            a.hero_tree || ""
                        )
                        .localeCompare(
                            String(
                                b.hero_tree || ""
                            )
                        )
                        ||
                        a.talent_name
                        .localeCompare(
                            b.talent_name
                        )
                    );
                }
            );


        $("#compareCount")
            .textContent =
            `${rows.length} modified talents`;


        $("#compareBody")
            .innerHTML =
            rows.map(
                talent => {

                    return `
                        <tr>

                            <td>
                                <div
                                    class="talent-cell"
                                >
                                    <img
                                        class="small-icon"
                                        src="${
                                            iconUrl(
                                                talent
                                            )
                                        }"
                                        alt=""
                                    >

                                    <div>
                                        <strong>
                                            ${
                                                escapeHtml(
                                                    talent
                                                    .talent_name
                                                )
                                            }
                                        </strong>

                                        <div
                                            class="spell-id"
                                        >
                                            Spell ${
                                                talent.spell_id
                                            }
                                        </div>
                                    </div>
                                </div>
                            </td>


                            <td>
                                <span
                                    class="tree-label"
                                >
                                    ${
                                        escapeHtml(
                                            treeDisplayName(
                                                talent
                                            )
                                        )
                                    }
                                </span>
                            </td>


                            <td>
                                ${
                                    comparisonChangeHtml(
                                        talent
                                    )
                                }
                            </td>


                            <td>
                                <details
                                    class="
                                        tooltip-comparison
                                    "
                                >
                                    <summary>
                                        View full tooltip
                                    </summary>

                                    <div
                                        class="
                                            tooltip-columns
                                        "
                                    >
                                        <div
                                            class="
                                                tooltip-column
                                            "
                                        >
                                            <h4>
                                                PvE
                                            </h4>

                                            <pre
                                                class="
                                                    tooltip-text
                                                "
                                            >${
                                                escapeHtml(
                                                    talent
                                                    .pve_tooltip
                                                )
                                            }</pre>
                                        </div>


                                        <div
                                            class="
                                                tooltip-column
                                            "
                                        >
                                            <h4>
                                                PvP
                                            </h4>

                                            <pre
                                                class="
                                                    tooltip-text
                                                "
                                            >${
                                                escapeHtml(
                                                    talent
                                                    .pvp_tooltip
                                                )
                                            }</pre>
                                        </div>
                                    </div>
                                </details>
                            </td>

                        </tr>
                    `;
                }
            ).join("");
    }


    // ========================================================
    // Compendium
    // ========================================================

    function mechanicCard(
        mechanic
    ) {

        const path =
            mechanic.dependency_path
            || [];


        const auraRules =
            mechanic.aura_rules
            || [];


        const auraDescription =
            auraRules.length
            ? auraRules.map(
                rule =>
                    `${formatNumber(
                        rule.value_pct
                    )}% ${rule.amount_kind}`
            ).join(" · ")
            : "None";


        return `
            <div class="mechanic-card">

                <div class="mechanic-top">

                    <span
                        class="mechanic-origin"
                    >
                        ${
                            escapeHtml(
                                mechanic.effect_origin
                                || "DIRECT"
                            )
                        }
                    </span>

                    <span
                        class="mechanic-kind"
                    >
                        ${
                            escapeHtml(
                                mechanic.dependency_kind
                                || mechanic.amount_kind
                                || "effect"
                            )
                        }
                    </span>

                </div>


                <div class="mechanic-effect">
                    ${
                        escapeHtml(
                            mechanic.effect_text
                            || "Effect"
                        )
                    }
                </div>


                <div class="factor-row">

                    <div class="factor">
                        <span
                            class="factor-label"
                        >
                            Spell PvP
                        </span>

                        <span
                            class="factor-value"
                        >
                            ×${
                                formatNumber(
                                    mechanic
                                    .spell_pvp_multiplier
                                )
                            }
                        </span>
                    </div>


                    <div class="factor">
                        <span
                            class="factor-label"
                        >
                            Spec Aura
                        </span>

                        <span
                            class="factor-value"
                        >
                            ×${
                                formatNumber(
                                    mechanic
                                    .aura_factor
                                )
                            }
                        </span>
                    </div>


                    <div class="factor">
                        <span
                            class="factor-label"
                        >
                            Final
                        </span>

                        <span
                            class="factor-value"
                        >
                            ×${
                                formatNumber(
                                    mechanic
                                    .final_pvp_multiplier
                                )
                            }
                        </span>
                    </div>

                </div>


                <div class="path-row">
                    Source spell:
                    ${
                        mechanic.source_spell_id
                        ?? "—"
                    }

                    · Effect #${
                        mechanic.effect_index
                        ?? "—"
                    }

                    ${
                        mechanic.final_pvp_value
                        !== null
                        && mechanic.final_pvp_value
                        !== undefined
                        ? (
                            " · Final value: "
                            + formatNumber(
                                mechanic
                                .final_pvp_value
                            )
                        )
                        : ""
                    }
                </div>


                <div class="path-row">
                    PvP Aura:
                    ${
                        escapeHtml(
                            auraDescription
                        )
                    }
                </div>


                ${
                    path.length > 1
                    ? `
                        <div class="path-row">
                            Dependency:
                            ${
                                escapeHtml(
                                    path.join(
                                        " → "
                                    )
                                )
                            }
                        </div>
                    `
                    : ""
                }

            </div>
        `;
    }


    function compendiumRecords() {

        const search =
            $("#compendiumSearch")
            ?.value
            ?.trim()
            ?.toLowerCase()
            || "";


        return talents
            .filter(
                talent =>
                    talent.has_pvp_mechanics
            )
            .filter(
                talent =>
                    !search
                    || talent
                    .talent_name
                    .toLowerCase()
                    .includes(search)
            )
            .sort(
                (a, b) =>
                    a.talent_name
                    .localeCompare(
                        b.talent_name
                    )
            );
    }


    function renderCompendiumList() {

        const records =
            compendiumRecords();


        if (
            !state.compendiumSpellId
            || !records.some(
                talent =>
                    talent.spell_id
                    === state.compendiumSpellId
            )
        ) {

            const preferred =
                records.find(
                    talent =>
                        talent.spell_id
                        === 62618
                )
                || records[0];


            state.compendiumSpellId =
                preferred
                ? preferred.spell_id
                : null;
        }


        $("#compendiumList")
            .innerHTML =
            records.map(
                talent => `
                    <button
                        class="
                            compendium-item
                            ${
                                talent.spell_id
                                === state
                                .compendiumSpellId
                                ? "active"
                                : ""
                            }
                        "
                        data-spell-id="${
                            talent.spell_id
                        }"
                    >

                        <img
                            src="${
                                iconUrl(
                                    talent
                                )
                            }"
                            alt=""
                        >

                        <div>
                            <div
                                class="
                                    compendium-item-title
                                "
                            >
                                ${
                                    escapeHtml(
                                        talent.talent_name
                                    )
                                }
                            </div>

                            <div
                                class="
                                    compendium-item-meta
                                "
                            >
                                ${
                                    talent.mechanics.length
                                }
                                PvP effect${
                                    talent.mechanics.length
                                    === 1
                                    ? ""
                                    : "s"
                                }

                                ${
                                    talent.tooltip_changed
                                    ? " · tooltip changed"
                                    : " · hidden/internal"
                                }
                            </div>
                        </div>

                    </button>
                `
            ).join("");


        $$(".compendium-item")
            .forEach(
                button => {

                    button.addEventListener(
                        "click",
                        () => {

                            state.compendiumSpellId =
                                Number(
                                    button.dataset
                                    .spellId
                                );


                            renderCompendiumList();
                        }
                    );

                }
            );


        renderCompendiumDetail();
    }


    function renderCompendiumDetail() {

        const talent =
            talents.find(
                record =>
                    record.spell_id
                    === state.compendiumSpellId
            );


        const container =
            $("#compendiumDetail");


        if (!talent) {

            container.innerHTML = `
                <div class="empty-state">
                    Select a talent.
                </div>
            `;

            return;
        }


        container.innerHTML = `

            <div class="detail-title-row">

                <img
                    src="${
                        iconUrl(
                            talent
                        )
                    }"
                    alt=""
                >

                <div>
                    <h2>
                        ${
                            escapeHtml(
                                talent.talent_name
                            )
                        }
                    </h2>

                    <div class="detail-meta">
                        ${
                            escapeHtml(
                                treeDisplayName(
                                    talent
                                )
                            )
                        }

                        · Spell ${
                            talent.spell_id
                        }

                        · ${
                            talent.mechanics.length
                        } PvP mechanic${
                            talent.mechanics.length
                            === 1
                            ? ""
                            : "s"
                        }
                    </div>
                </div>

            </div>


            ${
                talent.tooltip_changed
                ? `
                    <div
                        style="margin-bottom:13px"
                    >
                        ${
                            changeHtml(
                                talent
                            )
                        }
                    </div>
                `
                : `
                    <div
                        style="margin-bottom:13px"
                    >
                        <span class="tree-label">
                            Main tooltip unchanged —
                            PvP mechanic preserved below
                        </span>
                    </div>
                `
            }


            <div class="detail-grid">

                <div class="detail-box">

                    <h3>
                        PvE tooltip
                    </h3>

                    <pre
                        class="tooltip-text"
                    >${
                        escapeHtml(
                            talent.pve_tooltip
                        )
                    }</pre>

                </div>


                <div class="detail-box">

                    <h3>
                        PvP tooltip
                    </h3>

                    <pre
                        class="tooltip-text"
                    >${
                        escapeHtml(
                            talent.pvp_tooltip
                        )
                    }</pre>

                </div>

            </div>


            <h3 class="mechanics-heading">
                Datamined PvP mechanics
            </h3>


            <div class="mechanics-grid">

                ${
                    talent.mechanics
                    .map(
                        mechanic =>
                            mechanicCard(
                                mechanic
                            )
                    )
                    .join("")
                }

            </div>
        `;
    }



    // ========================================================
    // Player-facing Compendium v2
    //
    // Tiered Apex entries are one talent, not multiple talents.
    // True choice entries remain separate spells.
    // ========================================================

    function compendiumGroups(
        sourceTalents
    ) {

        const grouped = new Map();

        sourceTalents
            .filter(
                talent =>
                    talent.has_pvp_mechanics
            )
            .forEach(
                talent => {

                    const isTiered =
                        talent.tree_data
                        ?.node_type === "tiered";

                    const key = isTiered
                        ? `tiered:${talent.node_id}`
                        : `spell:${talent.spell_id}`;

                    if (!grouped.has(key)) {
                        grouped.set(
                            key,
                            {
                                key,
                                isTiered,
                                nodeId:
                                    talent.node_id,
                                entries: [],
                            }
                        );
                    }

                    grouped.get(key)
                        .entries.push(talent);
                }
            );


        return [
            ...grouped.values()
        ].map(
            group => {

                group.entries.sort(
                    (a, b) =>
                        Number(
                            a.tree_data
                            ?.entry_index || 0
                        )
                        -
                        Number(
                            b.tree_data
                            ?.entry_index || 0
                        )
                );

                group.primary =
                    group.entries[0];

                group.tooltipChanged =
                    group.entries.some(
                        entry =>
                            entry.tooltip_changed
                    );

                const mechanicMap =
                    new Map();

                group.entries.forEach(
                    entry => {
                        (entry.mechanics || [])
                            .forEach(
                                mechanic => {
                                    const mechanicKey = [
                                        mechanic.source_spell_id,
                                        mechanic.effect_index,
                                        mechanic.effect_text,
                                        mechanic.final_pvp_multiplier,
                                        mechanic.dependency_kind,
                                    ].join("|");

                                    if (
                                        !mechanicMap.has(
                                            mechanicKey
                                        )
                                    ) {
                                        mechanicMap.set(
                                            mechanicKey,
                                            mechanic
                                        );
                                    }
                                }
                            );
                    }
                );

                group.mechanics = [
                    ...mechanicMap.values()
                ];

                return group;
            }
        );
    }


    function compendiumRecords() {

        const search =
            $("#compendiumSearch")
            ?.value
            ?.trim()
            ?.toLowerCase()
            || "";

        return compendiumGroups(
            talents
        )
        .filter(
            group => {
                if (!search) {
                    return true;
                }

                return group.entries.some(
                    entry =>
                        entry.talent_name
                        .toLowerCase()
                        .includes(search)
                        || String(
                            entry.pve_tooltip || ""
                        )
                        .toLowerCase()
                        .includes(search)
                );
            }
        )
        .sort(
            (a, b) =>
                a.primary.talent_name
                .localeCompare(
                    b.primary.talent_name
                )
        );
    }


    function compendiumSummary(
        group
    ) {

        const changedEntries =
            group.entries.filter(
                entry =>
                    entry.tooltip_changed
            );

        if (changedEntries.length) {

            const changeCount =
                changedEntries.reduce(
                    (total, entry) =>
                        total
                        + (
                            entry.changes
                            || []
                        ).length,
                    0
                );

            return `
                <div class="player-summary changed-summary">
                    <div class="player-summary-label">
                        What changes in PvP
                    </div>

                    <div class="player-summary-text">
                        ${
                            changeCount === 1
                            ? "This talent has one player-facing value changed in PvP."
                            : `This talent has ${changeCount} player-facing values changed in PvP.`
                        }
                    </div>

                    <div class="player-summary-changes">
                        ${
                            changedEntries
                            .map(
                                entry =>
                                    changeHtml(entry)
                            )
                            .join("")
                        }
                    </div>
                </div>
            `;
        }

        return `
            <div class="player-summary internal-summary">
                <div class="player-summary-label">
                    PvP mechanics
                </div>

                <div class="player-summary-text">
                    The player-facing tooltip is unchanged, but
                    ${group.mechanics.length}
                    datamined PvP mechanic${
                        group.mechanics.length === 1
                        ? " is"
                        : "s are"
                    }
                    attached to this talent or its referenced output spells.
                </div>
            </div>
        `;
    }


    function apexRankLabel(
        group,
        index
    ) {

        const maxRanks = Number(
            group.primary.tree_data
            ?.max_ranks || 1
        );

        if (
            maxRanks === 4
            && group.entries.length === 3
        ) {
            return [
                "Rank 1",
                "Ranks 2–3",
                "Rank 4",
            ][index];
        }

        return `Stage ${index + 1}`;
    }


    function apexProgressionHtml(
        group
    ) {

        return `
            <div class="apex-section">
                <div class="apex-heading-row">
                    <h3 class="mechanics-heading">
                        Apex progression
                    </h3>

                    <span class="apex-badge">
                        ${
                            group.primary.tree_data
                            ?.max_ranks || 1
                        } ranks
                    </span>
                </div>

                <div class="apex-ranks">
                    ${
                        group.entries.map(
                            (entry, index) => `
                                <div class="apex-rank-card">
                                    <div class="apex-rank-label">
                                        ${
                                            escapeHtml(
                                                apexRankLabel(
                                                    group,
                                                    index
                                                )
                                            )
                                        }
                                    </div>

                                    <div class="apex-rank-text">
                                        ${
                                            escapeHtml(
                                                entry.pve_tooltip
                                                || "No player-facing text."
                                            )
                                        }
                                    </div>

                                    ${
                                        entry.tooltip_changed
                                        ? `
                                            <div class="apex-rank-change">
                                                ${changeHtml(entry)}
                                            </div>
                                        `
                                        : ""
                                    }
                                </div>
                            `
                        ).join("")
                    }
                </div>
            </div>
        `;
    }


    function renderCompendiumList() {

        const records =
            compendiumRecords();

        if (
            !state.compendiumSpellId
            || !records.some(
                group =>
                    group.key
                    === state.compendiumSpellId
            )
        ) {

            const preferred =
                records.find(
                    group =>
                        group.entries.some(
                            entry =>
                                entry.spell_id === 62618
                        )
                )
                || records[0];

            state.compendiumSpellId =
                preferred
                ? preferred.key
                : null;
        }


        $("#compendiumList")
            .innerHTML =
            records.map(
                group => {

                    const talent =
                        group.primary;

                    return `
                        <button
                            class="compendium-item ${
                                group.key
                                === state.compendiumSpellId
                                ? "active"
                                : ""
                            }"
                            data-compendium-key="${
                                escapeHtml(group.key)
                            }"
                        >

                            <img
                                src="${iconUrl(talent)}"
                                alt=""
                            >

                            <div>
                                <div class="compendium-item-title">
                                    ${escapeHtml(talent.talent_name)}

                                    ${
                                        group.isTiered
                                        ? `<span class="apex-list-badge">APEX</span>`
                                        : ""
                                    }
                                </div>

                                <div class="compendium-item-meta">
                                    ${group.mechanics.length}
                                    PvP mechanic${
                                        group.mechanics.length === 1
                                        ? ""
                                        : "s"
                                    }

                                    ${
                                        group.tooltipChanged
                                        ? " · tooltip changed"
                                        : " · hidden/internal"
                                    }
                                </div>
                            </div>

                        </button>
                    `;
                }
            ).join("");


        $$(".compendium-item")
            .forEach(
                button => {
                    button.addEventListener(
                        "click",
                        () => {
                            state.compendiumSpellId =
                                button.dataset
                                .compendiumKey;

                            renderCompendiumList();
                        }
                    );
                }
            );


        renderCompendiumDetail();

        renderMobileCompendiumInline();
    }


    function renderCompendiumDetail() {

        const group =
            compendiumRecords()
            .find(
                item =>
                    item.key
                    === state.compendiumSpellId
            );

        const container =
            $("#compendiumDetail");

        if (!group) {
            container.innerHTML = `
                <div class="empty-state">
                    Select a talent.
                </div>
            `;
            return;
        }

        const talent =
            group.primary;

        const mechanicsWord =
            group.mechanics.length === 1
            ? "mechanic"
            : "mechanics";

        container.innerHTML = `

            <div class="detail-title-row">
                <img
                    src="${iconUrl(talent)}"
                    alt=""
                >

                <div>
                    <h2>
                        ${escapeHtml(talent.talent_name)}
                    </h2>

                    <div class="detail-meta">
                        ${escapeHtml(treeDisplayName(talent))}

                        ${
                            group.isTiered
                            ? ` · Apex talent · ${talent.tree_data?.max_ranks || 1} ranks`
                            : ` · Spell ${talent.spell_id}`
                        }

                        · ${group.mechanics.length} PvP ${mechanicsWord}
                    </div>
                </div>
            </div>

            ${compendiumSummary(group)}

            ${
                group.isTiered
                ? apexProgressionHtml(group)
                : `
                    <div class="detail-grid">
                        <div class="detail-box">
                            <h3>PvE tooltip</h3>
                            <pre class="tooltip-text">${
                                escapeHtml(
                                    talent.pve_tooltip
                                )
                            }</pre>
                        </div>

                        <div class="detail-box">
                            <h3>PvP tooltip</h3>
                            <pre class="tooltip-text">${
                                escapeHtml(
                                    talent.pvp_tooltip
                                )
                            }</pre>
                        </div>
                    </div>
                `
            }

            <details class="technical-details">
                <summary>
                    Technical datamining details
                    <span>${group.mechanics.length} ${mechanicsWord}</span>
                </summary>

                <div class="technical-details-body">
                    <div class="mechanics-grid">
                        ${
                            group.mechanics
                            .map(
                                mechanic =>
                                    mechanicCard(mechanic)
                            )
                            .join("")
                        }
                    </div>
                </div>
            </details>
        `;
    }


    // ========================================================
    // Mobile Compendium
    //
    // Desktop keeps the persistent detail panel. On phones we copy
    // that already-rendered content directly below the active item,
    // producing an accordion-like reading flow without duplicating
    // any PvP rendering logic.
    // ========================================================

    function renderMobileCompendiumInline() {

        $$(".mobile-compendium-inline")
            .forEach(
                element =>
                    element.remove()
            );

        if (
            !window.matchMedia(
                "(max-width: 700px)"
            ).matches
        ) {
            return;
        }

        const active =
            $("#compendiumList .compendium-item.active");

        const detail =
            $("#compendiumDetail");

        if (
            !active
            || !detail
            || !detail.innerHTML.trim()
        ) {
            return;
        }

        const inline =
            document.createElement(
                "div"
            );

        inline.className =
            "mobile-compendium-inline";

        inline.innerHTML =
            detail.innerHTML;

        active.insertAdjacentElement(
            "afterend",
            inline
        );
    }


    // ========================================================
    // Global events
    // ========================================================

    function setupEvents() {

        document.addEventListener(
            "click",
            event => {

                if (
                    !event.target.closest(
                        ".choice-picker"
                    )
                    && !event.target.closest(
                        ".talent-node"
                    )
                ) {
                    closeChoicePicker();
                }
            }
        );


        document.addEventListener(
            "keydown",
            event => {
                if (event.key === "Escape") {
                    closeChoicePicker();
                }
            }
        );


        window.addEventListener(
            "scroll",
            closeChoicePicker,
            true
        );


        $("#pvpToggle")
            .addEventListener(
                "change",
                event => {

                    state.pvpMode =
                        event.target.checked;

                    hideTooltip();

                    renderTrees();
                }
            );


        $("#resetTree")
            .addEventListener(
                "click",
                () => {

                    state.selected.clear();

                    ensureFreeSelections();

                    renderTrees();
                }
            );


        $("#compareSearch")
            .addEventListener(
                "input",
                renderComparison
            );


        $("#compareTreeFilter")
            .addEventListener(
                "change",
                renderComparison
            );


        $("#compendiumSearch")
            .addEventListener(
                "input",
                () => {

                    state.compendiumSpellId =
                        null;

                    renderCompendiumList();
                }
            );


        window.addEventListener(
            "resize",
            () => {

                if (
                    $("#treePanel")
                    .classList
                    .contains(
                        "active"
                    )
                ) {
                    renderTrees();
                }

                renderMobileCompendiumInline();

            }
        );
    }



    function registerServiceWorker() {
        if (
            "serviceWorker" in navigator
            && (
                location.protocol === "https:"
                || location.hostname === "localhost"
            )
        ) {
            navigator.serviceWorker
                .register("./service-worker.js")
                .catch(
                    error =>
                        console.warn(
                            "Service worker registration failed:",
                            error
                        )
                );
        }
    }


    // ========================================================
    // Init
    // ========================================================

    registerServiceWorker();

    renderHeader();

    setupTabs();

    setupHeroSelector();

    setupEvents();

    ensureFreeSelections();

    renderTrees();

    renderComparison();

    renderCompendiumList();

})();
