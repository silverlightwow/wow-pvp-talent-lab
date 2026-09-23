
(() => {

    "use strict";


    // ========================================================
    // Dataset
    // ========================================================

    let data = window.WOW_PVP_DATA;

    const manifest =
        window.WOW_PVP_MANIFEST
        || null;


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


    let talents = data.talents || [];


    const state = {

        pvpMode: true,
        suspendUrl: true,

        heroTree:
            null,

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


    function iconName(talent) {

        let icon =
            talent?.tree_data?.icon;

        if (!icon) {
            return "";
        }

        if (icon === "inv_10_specialreagentfoozles_tuskclaw_ice") {
            icon = "inv_10_specialreagentfoozles_tuskclaw-ice";
        }

        return (
            ICON_NAME_OVERRIDES[icon]
            || icon
        );
    }


    function iconUrl(talent) {

        const icon = iconName(talent);

        if (!icon) {
            return "app-icon.svg";
        }

        return (
            "https://wow.zamimg.com/"
            + "images/wow/icons/large/"
            + encodeURIComponent(icon)
            + ".jpg"
        );
    }


    function recoverTalentIcon(image) {

        const current =
            image.currentSrc
            || image.src
            || "";

        const stage = Number(
            image.dataset.iconFallbackStage
            || 0
        );

        let next = "";

        if (
            stage === 0
            && current.includes(
                "/images/wow/icons/large/"
            )
        ) {
            next = current.replace(
                "/images/wow/icons/large/",
                "/images/wow/icons/medium/"
            );
        }
        else if (
            stage <= 1
            && current.includes(
                "/images/wow/icons/medium/"
            )
        ) {
            next = current.replace(
                "/images/wow/icons/medium/",
                "/images/wow/icons/small/"
            );
        }
        else if (stage <= 2) {

            const visuals =
                window.ClassVisuals;

            const specIcon =
                visuals?.specs?.[
                    Number(data.spec_id)
                ];

            if (
                specIcon
                && typeof visuals.url
                === "function"
            ) {
                next = visuals.url(
                    specIcon
                );
            }
        }

        if (
            !next
            && stage <= 3
            && !current.endsWith(
                "/app-icon.svg"
            )
            && !current.endsWith(
                "app-icon.svg"
            )
        ) {
            next = "app-icon.svg";
            image.classList.add(
                "icon-fallback-local"
            );
        }

        if (
            next
            && next !== current
        ) {
            image.dataset.iconFallbackStage =
                String(stage + 1);

            image.src = next;

            return;
        }

        image.style.display =
            "none";

        const sibling =
            image.nextElementSibling;

        if (
            sibling
            && (
                sibling.classList.contains(
                    "node-fallback"
                )
                || sibling.classList.contains(
                    "choice-segment-fallback"
                )
                || sibling.classList.contains(
                    "choice-option-fallback"
                )
            )
        ) {
            sibling.style.display =
                "grid";
        }
    }


    window.WowTalentIconError =
        recoverTalentIcon;


    function singleNodeVisual(talent) {

        const src = iconUrl(talent);

        if (src) {
            return `
                <img
                    class="node-main-icon"
                    src="${src}"
                    alt="${escapeHtml(talent.talent_name)}"
                    onerror="window.WowTalentIconError(this)"
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
                                        onerror="window.WowTalentIconError(this)"
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
            return (
                data.class_name
                || "Class"
            );
        }

        if (
            talent.tree_type
            === "spec"
        ) {
            return (
                data.spec_name
                || "Specialization"
            );
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
                                class="change-chip direction-${PvpDirection.direction(talent, change)}" title="${PvpDirection.labels[PvpDirection.direction(talent, change)]}"
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



    function descriptionText(text) {
        const metadata = /^(?:[\d.,]+%? (?:of base mana|Mana|Energy|Focus|Rage|Runic Power|Insanity|Fury|Pain|Essence|Chi|Holy Power|Soul Shards?|Runes?|Maelstrom|Astral Power)(?:\s*(?:\/|,|per) .*)?|[\d.,]+(?: - [\d.,]+)? (?:yd|yard|yards) range|(?:[\d.,]+ (?:sec|min) (?:cast|cooldown|recharge))|\d+ Charges?|Instant(?: cast)?|Channeled(?: \(.*\))?|Melee Range|Unlimited Range|Passive|Talent|Requires .*)$/i;
        return String(text || "").split("\n").map(line => line.trim())
            .filter(line => line && !metadata.test(line)
                && !/^\(?[\d.,]+\s*(?:ms|s|sec|min)\s*(?:cooldown|recharge|cast)\)?$/i.test(line)).join("\n");
    }

    function comparisonTextHtml(talent, mode) {
        // Renderer offsets identify exact changes, including repeated numbers.
        const original = String(talent.pve_tooltip || "");
        const changes = [...(talent.changes || [])].sort((a, b) => a.start - b.start);
        let cursor = 0;
        let html = "";
        for (const change of changes) {
            if (change.start < cursor || original.slice(change.start, change.end) !== change.old_token) continue;
            html += escapeHtml(original.slice(cursor, change.start));
            html += `<mark class="value-${mode} ${mode === "pvp" ? "direction-" + PvpDirection.direction(talent, change) : ""}">${escapeHtml(mode === "pvp" ? change.new_token : change.old_token)}</mark>`;
            cursor = change.end;
        }
        return html + escapeHtml(original.slice(cursor));
    }


    // ========================================================
    // Dataset switching
    // ========================================================

    let datasetLoadToken = 0;


    function manifestClass(
        className
    ) {

        return (
            manifest?.classes
            || []
        ).find(
            item =>
                item.name
                === className
        ) || null;
    }


    function manifestSpec(
        className,
        specName
    ) {

        return (
            manifestClass(
                className
            )
            ?.specs
            || []
        ).find(
            item =>
                item.name
                === specName
        ) || null;
    }


    function rebuildSpecSelect(
        className,
        preferredSpec=null
    ) {

        const select =
            $("#specSelect");

        const specs =
            manifestClass(
                className
            )
            ?.specs
            || [];


        select.innerHTML =
            specs.map(
                spec => `
                    <option
                        value="${escapeHtml(
                            spec.name
                        )}"
                    >
                        ${escapeHtml(
                            spec.name
                        )}${
                            spec.verification_status
                            === "PARTIAL"
                            ? " ⚠"
                            : ""
                        }
                    </option>
                `
            ).join("");


        const selected =
            specs.some(
                spec =>
                    spec.name
                    === preferredSpec
            )
            ? preferredSpec
            : (
                specs[0]
                ?.name
                || ""
            );


        select.value =
            selected;

        return selected;
    }


    function setupDatasetSelectors() {

        const classSelect =
            $("#classSelect");

        const specSelect =
            $("#specSelect");


        if (
            !manifest
            || !Array.isArray(
                manifest.classes
            )
            || !manifest.classes.length
        ) {

            classSelect.innerHTML =
                `<option>${
                    escapeHtml(
                        data.class_name
                        || "Class"
                    )
                }</option>`;

            specSelect.innerHTML =
                `<option>${
                    escapeHtml(
                        data.spec_name
                        || "Specialization"
                    )
                }</option>`;

            classSelect.disabled = true;
            specSelect.disabled = true;

            return;
        }


        classSelect.disabled = false;
        specSelect.disabled = false;


        classSelect.innerHTML =
            manifest.classes.map(
                item => `
                    <option
                        value="${escapeHtml(
                            item.name
                        )}"
                    >
                        ${escapeHtml(
                            item.name
                        )}
                    </option>
                `
            ).join("");


        const initialClass =
            manifestClass(
                data.class_name
            )
            ? data.class_name
            : (
                manifest.classes[0]
                ?.name
                || ""
            );


        classSelect.value =
            initialClass;


        rebuildSpecSelect(
            initialClass,
            data.spec_name
        );


        classSelect.onchange =
            () => {

                const specName =
                    rebuildSpecSelect(
                        classSelect.value
                    );

                if (specName) {
                    loadDatasetFor(
                        classSelect.value,
                        specName
                    );
                }
            };


        specSelect.onchange =
            () => {

                loadDatasetFor(
                    classSelect.value,
                    specSelect.value
                );
            };
    }


    function applyDataset(
        nextData
    ) {

        if (
            !nextData
            || !Array.isArray(
                nextData.talents
            )
        ) {
            throw new Error(
                "Invalid specialization dataset"
            );
        }


        data =
            nextData;

        talents =
            data.talents
            || [];


        state.heroTree =
            null;

        state.selected.clear();

        state.compendiumSpellId =
            null;


        closeChoicePicker();

        hideTooltip();


        const compareSearch =
            $("#compareSearch");

        const compendiumSearch =
            $("#compendiumSearch");

        if (compareSearch) {
            compareSearch.value = "";
        }

        if (compendiumSearch) {
            compendiumSearch.value = "";
        }


        $("#compareTreeFilter").value =
            "all";


        $("#classSelect").value =
            data.class_name
            || "";

        rebuildSpecSelect(
            data.class_name,
            data.spec_name
        );


        setupHeroSelector();

        ensureFreeSelections();

        renderHeader();

        renderTrees();

        renderComparison();

        renderCompendiumList();
    }


    function loadDatasetFor(
        className,
        specName
    ) {
        document.body.classList.remove("welcome-active");
        const spec =
            manifestSpec(
                className,
                specName
            );


        if (!spec) {
            return;
        }


        const currentSlug =
            data.slug
            || (
                `${
                    String(
                        data.class_name
                        || ""
                    )
                    .toLowerCase()
                    .replaceAll(
                        " ",
                        "-"
                    )
                }-${
                    String(
                        data.spec_name
                        || ""
                    )
                    .toLowerCase()
                    .replaceAll(
                        " ",
                        "-"
                    )
                }`
            );


        if (
            currentSlug
            === spec.slug
        ) {
            updateDocumentTitle();
            renderTrees();
            return;
        }


        const token =
            ++datasetLoadToken;


        $("#classSelect").disabled =
            true;

        $("#specSelect").disabled =
            true;


        const previous =
            document.querySelector(
                "script[data-dataset-loader]"
            );

        if (previous) {
            previous.remove();
        }


        const script =
            document.createElement(
                "script"
            );

        script.dataset.datasetLoader =
            spec.slug;

        script.src =
            `data/${encodeURIComponent(
                spec.slug
            )}.js?v=${
                encodeURIComponent(
                    manifest?.generated_at
                    || manifest?.tree_build
                    || ""
                )
            }`;


        script.onload =
            () => {

                if (
                    token
                    !== datasetLoadToken
                ) {
                    return;
                }


                try {

                    const nextData =
                        window.WOW_PVP_DATA;


                    if (
                        nextData?.class_name
                        !== className
                        || nextData?.spec_name
                        !== specName
                    ) {

                        throw new Error(
                            "Loaded dataset identity mismatch"
                        );
                    }


                    applyDataset(
                        nextData
                    );

                }
                catch (error) {

                    console.error(
                        error
                    );

                    $("#treeMessage")
                        .textContent =
                        "Could not load this specialization. Please try again.";
                    $("#classSelect").value = data.class_name;
                    rebuildSpecSelect(data.class_name, data.spec_name);
                }
                finally {

                    $("#classSelect").disabled =
                        false;

                    $("#specSelect").disabled =
                        false;
                }
            };


        script.onerror =
            () => {

                if (
                    token
                    !== datasetLoadToken
                ) {
                    return;
                }


                $("#classSelect").disabled =
                    false;

                $("#specSelect").disabled =
                    false;

                $("#treeMessage")
                    .textContent =
                    "Could not load this specialization. Please try again.";
                $("#classSelect").value = data.class_name;
                rebuildSpecSelect(data.class_name, data.spec_name);
            };


        document.body.appendChild(
            script
        );
    }


    // ========================================================
    // Header
    // ========================================================

    function updateDocumentTitle() {

        if (document.body.classList.contains("welcome-active")) {
            document.title = "WoW PvP Talent Lab";
            return;
        }

        const className = data.class_name || "Class";
        const specName = data.spec_name || "Specialization";
        document.title = `${specName} ${className} · WoW PvP Talent Lab`;
    }


    function renderHeader() {

        const className =
            data.class_name
            || "Class";

        const specName =
            data.spec_name
            || "Specialization";


        $("#treeTitle").textContent =
            `${specName} ${className}`;

        $("#classTreeTitle").textContent =
            className;

        $("#specTreeTitle").textContent =
            specName;

        $("#compareSpecOption").textContent =
            specName;

        $("#compendiumTabLabel").textContent =
            `PvP mechanics`;

        $("#compendiumTitle").textContent =
            `PvP mechanics`;

        updateDocumentTitle();


        const verificationStatus =
            data.validation
            ?.verification_status
            || "VERIFIED";

        const isVerified =
            verificationStatus
            === "VERIFIED";

        const statusLabel =
            $("#datasetStatusLabel");

        const statusDot =
            document.querySelector(
                ".status-dot"
            );

        if (statusLabel) {
            statusLabel.textContent =
                isVerified
                ? "Verified current dataset"
                : "Current dataset · partial coverage";
        }

        if (statusDot) {
            statusDot.classList.toggle(
                "partial",
                !isVerified
            );
        }


        const verifiedAt = (() => {

            if (!data.generated_at) {
                return null;
            }

            const date =
                new Date(
                    data.generated_at
                );

            if (
                Number.isNaN(
                    date.getTime()
                )
            ) {
                return null;
            }

            const two = value =>
                String(value)
                .padStart(2, "0");

            return (
                `${two(date.getDate())}.`
                + `${two(date.getMonth() + 1)}.`
                + `${date.getFullYear()}, `
                + `${two(date.getHours())}:`
                + two(date.getMinutes())
            );
        })();


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
                ? (
                    isVerified
                    ? ` · Verified ${verifiedAt}`
                    : ` · Built ${verifiedAt}`
                )
                : ""
            )
            + (
                !isVerified
                ? ` · Review ${data.validation?.review_required_count || 0}`
                    + ` · Source gaps ${data.validation?.unresolved_count || 0}`
                    + ` · Fetch gaps ${data.validation?.fetch_error_count || 0}`
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
                        if (button.dataset.tab === "tree") requestAnimationFrame(renderTrees);

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


        select.onchange =
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
            };
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
                            requiredPoints: Number(record.tree_data.required_points || 0),
                            treeType: record.tree_type,

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

                if (group.isTiered) group.entries = sourceTalents.filter(t => t.node_id === group.nodeId);
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


        if (group.requiredPoints > 0) {
            let qualifyingPoints = 0;
            localGroups.forEach(other => {
                if (!other.free && other.requiredPoints < group.requiredPoints) {
                    qualifyingPoints += state.selected.get(other.nodeId)?.rank || 0;
                }
            });
            if (qualifyingPoints < group.requiredPoints) return false;
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
                "Select a connected prerequisite and spend the required points in earlier rows first.";

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
                                        ? `<span class=\"choice-option-pvp direction-${PvpDirection.talentDirection(entry)}\" title=\"${PvpDirection.labels[PvpDirection.talentDirection(entry)]}\"></span>`
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
                    "Select a connected prerequisite and spend the required points in earlier rows first.";

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


                const localGroups = groupNodes(recordsForTree(group.treeType, state.heroTree));
                const valid = canSelect(group, localGroups);

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

        // Client layouts can contain tiny editor offsets (e.g. 4790 vs 4800).
        // Snap only coordinates close to the 300-unit grid; preserve true half-steps.
        const align = value => Math.abs(value - Math.round(value / 300) * 300) <= 30
            ? Math.round(value / 300) * 300 : value;
        const values = [...groups.values()].map(group => ({...group, x:align(group.x), y:align(group.y)}));


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

        const sourceRows = new Map();
        for (const group of values) {
            if (!sourceRows.has(group.y)) sourceRows.set(group.y, []);
            sourceRows.get(group.y).push(group.x);
        }
        let minSourceGap = Infinity;
        for (const row of sourceRows.values()) {
            row.sort((a,b) => a-b);
            for (let i=1;i<row.length;i++) if(row[i]>row[i-1]) minSourceGap=Math.min(minSourceGap,row[i]-row[i-1]);
        }
        // Dense half-column rows need more room, not smaller icons everywhere.
        let coordinateScale = Math.max(normalColumnGap / 600, (nodeSize + 8) / minSourceGap);

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
        active,
        fromId,
        toId
    ) {

        return `
            <line data-from="${fromId}" data-to="${toId}"
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


        const selectedRank = state.selected.get(group.nodeId)?.rank || 0;
        const shownRank = selectedRank || group.maxRanks;
        const rankData = talent.rank_tooltips?.find(item => item.rank === shownRank);
        const nextRankData = selectedRank > 0 && selectedRank < group.maxRanks
            ? talent.rank_tooltips?.find(item => item.rank === selectedRank + 1) : null;
        const activeTalent = rankData || talent;
        const text = descriptionText(state.pvpMode ? activeTalent.pvp_tooltip : activeTalent.pve_tooltip);
        const rankLabel = "";
        const nextRankHtml = "";
        const allRanksHtml = talent.rank_tooltips?.length && !group.isTiered
            ? talent.rank_tooltips.map(rank => `<section class="tooltip-rank-section ${selectedRank === rank.rank ? "current" : ""}">
                <div class="tooltip-rank-label">Rank ${rank.rank}/${group.maxRanks}${selectedRank === rank.rank ? " · Current" : ""}</div>
                <pre class="tooltip-text">${escapeHtml(descriptionText(state.pvpMode ? rank.pvp_tooltip : rank.pve_tooltip))}</pre>
                ${state.pvpMode && rank.tooltip_changed ? changeHtml({...talent, ...rank}) : ""}
              </section>`).join("") : "";


        const modeBadge =
            state.pvpMode
            && activeTalent.tooltip_changed
            ? `
                <span class="tooltip-badge direction-${PvpDirection.talentDirection(talent)}">
                    ${PvpDirection.labels[PvpDirection.talentDirection(talent)]}
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

                const stages = group.entries.flatMap(entry => entry.rank_tooltips?.length ? entry.rank_tooltips.map(r => ({...entry, ...r})) : [entry]);
                const labels = stages.map((_, i) => `Rank ${i + 1}`);
                return `
                    <div class="apex-breakdown">
                        <div class="apex-heading">
                            Apex Talent · ${rank}/${group.maxRanks}
                        </div>

                        ${
                            stages
                            .map(
                                (entry, index) => `
                                    <div class="apex-stage">
                                        <div class="apex-stage-label">
                                            ${escapeHtml(labels[index])}
                                        </div>
                                        <div class="apex-stage-text">${escapeHtml(
                                                descriptionText(state.pvpMode ? entry.pvp_tooltip : entry.pve_tooltip)
                                            )}</div>
                                        ${state.pvpMode && entry.tooltip_changed ? changeHtml(entry) : ""}
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
                            onerror="window.WowTalentIconError(this)"
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

            ${group.isTiered ? "" : allRanksHtml || `<pre class="tooltip-text">${escapeHtml(text)}</pre>`}

            ${
                state.pvpMode
                && talent.tooltip_changed
                && !rankData
                && !group.isTiered
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


        moveTooltip(event);
        if (tooltip.scrollHeight > tooltip.clientHeight + 1) {
            const hint = document.createElement("div");
            hint.className = "tooltip-scroll-hint";
            hint.textContent = "Scroll while hovering to read all ranks";
            tooltip.querySelector(".tooltip-header").after(hint);
        }
    }


    function openTouchTalent(event, group, localGroups, entryIndex=null) {
        closeChoicePicker();
        const index = entryIndex ?? state.selected.get(group.nodeId)?.entryIndex ?? 0;
        const talent = group.entries[index];
        showTooltip(event, group, talent);
        tooltip.classList.add("touch-tooltip");
        tooltip.setAttribute("role", "dialog");
        tooltip.setAttribute("aria-label", talent.talent_name);
        const selection = state.selected.get(group.nodeId);
        const canAdd = canSelect(group, localGroups) && !group.free
            && ((group.isChoice && selection) || canSpendAnotherPoint(group))
            && (group.isChoice || !selection || selection.rank < group.maxRanks);
        tooltip.insertAdjacentHTML("beforeend", `
            ${group.isChoice ? `<div class="touch-choices">${group.entries.map((entry, i) =>
                `<button type="button" data-touch-choice="${i}" aria-pressed="${i === index}">${escapeHtml(entry.talent_name)}</button>`
            ).join("")}</div>` : ""}
            <div class="touch-talent-actions">
                <button type="button" data-touch-add ${canAdd ? "" : "disabled"}>${group.isChoice ? "Choose talent" : "Add rank"}</button>
                <button type="button" data-touch-remove ${selection && !group.free ? "" : "disabled"}>Remove rank</button>
                <button type="button" data-touch-close>Close</button>
            </div>`);
        tooltip.querySelectorAll("[data-touch-choice]").forEach(button => {
            button.onclick = e => { e.stopPropagation(); openTouchTalent(event, group, localGroups, Number(button.dataset.touchChoice)); };
        });
        tooltip.querySelector("[data-touch-close]").onclick = hideTooltip;
        tooltip.querySelector("[data-touch-remove]").onclick = e => {
            e.stopPropagation(); removeRank(group); openTouchTalent(event, group, localGroups, index);
        };
        tooltip.querySelector("[data-touch-add]").onclick = e => {
            e.stopPropagation();
            if (group.isChoice && canAdd) {
                state.selected.set(group.nodeId, {entryIndex:index, rank:selection?.rank || 1});
                pruneInvalidSelections(); renderTrees();
            } else selectGroup(group, localGroups);
            openTouchTalent(event, group, localGroups, index);
        };
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


        const width = tooltip.offsetWidth;

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


        left = Math.max(margin, Math.min(left, window.innerWidth - width - margin));
        tooltip.style.left =
            `${left}px`;

        tooltip.style.top =
            `${top}px`;
    }


    function hideTooltip() {
        tooltip.classList.remove("touch-tooltip");
        tooltip.removeAttribute("role");
        tooltip.removeAttribute("aria-label");
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
                container.clientWidth
                    || container.parentElement?.clientWidth,
                220
            );


        container.style.removeProperty("--node");
        let nodeSize =
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


        const rows = new Map();
        for (const pos of positions.values()) {
            if (!rows.has(pos.y)) rows.set(pos.y, []);
            rows.get(pos.y).push(pos.x);
        }
        let minGap = Infinity;
        for (const xs of rows.values()) {
            xs.sort((a, b) => a - b);
            for (let i = 1; i < xs.length; i++) minGap = Math.min(minGap, xs[i] - xs[i - 1]);
        }
        nodeSize = Math.min(nodeSize, Math.max(16, minGap - 6));
        container.style.setProperty("--node", `${nodeSize}px`);

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
                                active,
                                group.nodeId,
                                targetId
                            );
                    }
                );

            }
        );


        container.innerHTML = `
            <svg
                class="tree-lines"
                viewBox="0 0 ${viewportWidth} ${height}"
                width="${viewportWidth}" height="${height}"
                style="width:${viewportWidth}px;height:${height}px"
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


                button.dataset.nodeId = String(group.nodeId);
                button.setAttribute("aria-label", group.entries.map(entry => entry.talent_name).join(" / "));
                button.setAttribute("aria-pressed", String(Boolean(selected)));

                const currentRank =
                    selected
                    ? selected.rank
                    : 0;


                const anyChanged =
                    group.entries.some(
                        entry =>
                            entry.tooltip_changed
                    );


                const nodeDirection = PvpDirection.combine(group.entries.filter(entry => entry.tooltip_changed).map(PvpDirection.talentDirection));

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
                                class="pvp-dot direction-${nodeDirection}" title="${PvpDirection.labels[nodeDirection]}"
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

                        if (event.pointerType === "touch" || window.matchMedia("(hover: none)").matches) {
                            openTouchTalent(event, group, groups);
                            return;
                        }
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

                        // Mobile browsers may synthesize mouse events before a tap.
                        // Let the click handler open the touch dialog instead of
                        // placing a hover tooltip over the node first.
                        if (window.matchMedia("(hover: none)").matches) return;

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

                        if (window.matchMedia("(hover: none)").matches) return;

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


                button.addEventListener("wheel", event => {
                    if (tooltip.style.display === "block" && tooltip.scrollHeight > tooltip.clientHeight + 1) {
                        event.preventDefault();
                        tooltip.scrollTop += event.deltaY;
                    }
                }, {passive: false});

                button.addEventListener(
                    "mouseleave",
                    () => {
                        delete button.dataset.hoveredSpellId;
                        if (!tooltip.classList.contains("touch-tooltip")) hideTooltip();
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
        syncBuildUrl();
        if (!$("#treePanel").classList.contains("active") || document.body.classList.contains("welcome-active")) return;

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


        $("#compareBody").innerHTML = rows.map(talent => `
            <tr data-spell-id="${talent.spell_id}">
                <td>
                    <div class="talent-cell">
                        <img class="small-icon" src="${iconUrl(talent)}" alt="" onerror="window.WowTalentIconError(this)">
                        <div><strong>${escapeHtml(talent.talent_name)}</strong>
                            <div class="spell-id">${escapeHtml(treeDisplayName(talent))}</div>
                        </div>
                    </div>
                    ${changeHtml(talent)}
                </td>
                <td><pre class="tooltip-text comparison-pve">${comparisonTextHtml(talent, "pve")}</pre></td>
                <td><pre class="tooltip-text comparison-pvp">${comparisonTextHtml(talent, "pvp")}</pre></td>
            </tr>`).join("");
    }


    // ========================================================
    // Compendium
    // ========================================================

    function mechanicEvidence(mechanic) {
        const classSlug = String(data.class_name || "").toLowerCase().replaceAll(" ", "-");
        const spellId = Number(mechanic.source_spell_id);
        const rules = mechanic.aura_rules || [];
        const link = (url, title) => `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(title)} ↗</a>`;
        const auraRows = rules.map(rule => `<li>
            ${link(`https://www.wowhead.com/spell=${Number(rule.aura_spell_id)}`, `Aura ${rule.aura_spell_id}`)}
            · game effect ${escapeHtml(rule.game_effect_id ?? "not supplied")}
            · ${Number(rule.value_pct) >= 0 ? "+" : ""}${formatNumber(rule.value_pct)}% ${escapeHtml(rule.amount_kind)}
            → ×${formatNumber(rule.factor)}.<br>
            ${rule.label_id != null ? `Rule targets spell label ${Number(rule.label_id)}` : `Source spell ${spellId} is in this rule's affected-spell list`}.
            Aura source build: <strong>${escapeHtml(rule.build || "not supplied")}</strong>.
        </li>`).join("");
        return `<details class="mechanic-evidence"><summary>Why this modifier? · Sources &amp; calculation</summary>
            <p><strong>×${formatNumber(mechanic.spell_pvp_multiplier)} × ${formatNumber(mechanic.aura_factor)} = ×${formatNumber(mechanic.final_pvp_multiplier)}</strong><br>
            Spell PvP coefficient × applicable specialization PvP aura factors. This applies to effect #${Number(mechanic.effect_index)} of spell ${spellId}.</p>
            ${rules.length ? `<ul>${auraRows}</ul>` : '<p>No applicable specialization PvP aura rule: ×1.</p>'}
            <p>Spell data build: <strong>${escapeHtml(data.tree_build)}</strong>. Aura and spell sources can report different builds; their versions are shown separately.</p>
            <div class="evidence-links">
                ${link(`https://www.wowhead.com/spell=${spellId}#effects`, `Spell ${spellId} effects`)}
                ${link(`https://drustvar.com/api/v1/pvp-auras/${classSlug}`, 'Drustvar aura records')}
                ${link(`https://drustvar.com/api/v1/pvp-spells/${classSlug}`, 'Drustvar spell records')}
                ${link('https://github.com/simulationcraft/simc/tree/midnight/SpellDataDump', 'SimulationCraft spell dumps')}
                <a href="docs.html#spec-aura">How aura matching works →</a>
            </div>
            <p class="source-caveat">Datamined third-party sources, not a Blizzard patch-note citation. Links show the providers’ latest data; the values above belong to this site's snapshot.</p>
        </details>`;
    }

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
                            <a href="docs.html#spec-aura">Spec PvP Aura ↗</a>
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


                ${mechanicEvidence(mechanic)}

                ${(mechanic.source_notes || []).map(note => `
                    <div class="path-row">
                        Drustvar ${escapeHtml(note.source_build)} reports ×${formatNumber(note.multiplier)}.
                        Current build ${escapeHtml(note.current_build)} uses ×${formatNumber(note.current_multiplier)},
                        confirmed by Wowhead and SimC for effect ${escapeHtml(note.game_effect_id)}.
                    </div>`).join("")}

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
                                onerror="window.WowTalentIconError(this)"
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
                    onerror="window.WowTalentIconError(this)"
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

            <section class="mechanic-description" aria-label="Talent description in PvP">
                <h3>Talent description <span>In PvP</span></h3>
                ${group.entries.flatMap(entry => entry.rank_tooltips?.length ? entry.rank_tooltips : [entry]).map((rank, index, all) => `
                    <div class="mechanic-description-rank">
                        ${all.length > 1 ? `<h4>Rank ${index + 1}/${all.length}</h4>` : ""}
                        <p class="mechanic-description-text">${escapeHtml(descriptionText(rank.pvp_tooltip))}</p>
                    </div>`).join("")}
            </section>
            <p class="mechanics-explanation">Modifiers below apply to the listed effects, including spells triggered by this talent. Open a source panel to see the calculation.</p>
            <div class="mechanics-grid">
                ${group.mechanics.map(mechanic => mechanicCard(mechanic)).join("")}
            </div>
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
        const existing = $(".mobile-compendium-inline");
        const source = $("#compendiumDetail");
        const selected = $("#compendiumList .compendium-item.active");
        if (window.matchMedia("(max-width: 700px)").matches && existing
            && existing._sourceHtml === source?.innerHTML
            && existing.dataset.key === selected?.dataset.compendiumKey) return;

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

        inline.className = "mobile-compendium-inline";
        inline._sourceHtml = detail.innerHTML;
        inline.dataset.key = active.dataset.compendiumKey;

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

        $("#homeBrand")
            .addEventListener(
                "click",
                showHome
            );


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
                    if (!event.target.closest(".floating-tooltip")) hideTooltip();
                }
            }
        );


        document.addEventListener(
            "keydown",
            event => {
                if (event.key === "Escape") {
                    closeChoicePicker();
                    hideTooltip();
                }
            }
        );


        // Keep the fixed choice picker open through browser focus/scroll
        // events. Outside clicks, Escape, and a completed choice dismiss it.


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


    function syncBuildUrl() {
        if (state.suspendUrl || document.body.classList.contains("welcome-active") || !data.serialization) return;
        const params = new URLSearchParams({build: WowLoadout.encode(data, state.selected, state.heroTree), mode: state.pvpMode ? "pvp" : "pve"});
        history.replaceState(null, "", location.pathname + location.search + "#" + params.toString());
    }

    function showHome() {

        state.suspendUrl =
            true;

        try {
            closeChoicePicker();
            hideTooltip();

            document.body.classList.add(
                "welcome-active"
            );

            history.replaceState(
                null,
                "",
                location.pathname
                + location.search
            );

            updateDocumentTitle();

            window.scrollTo(
                0,
                0
            );
        }
        finally {
            state.suspendUrl =
                false;
        }
    }


    async function activateSpec(className, specName) {
        loadDatasetFor(className, specName);
        const deadline = Date.now() + 30000;
        await new Promise((resolve, reject) => {
            const check = () => {
                if (data.class_name === className && data.spec_name === specName && !$("#specSelect").disabled) return resolve();
                if (Date.now() > deadline) return reject(new Error("Could not load this specialization. Try again."));
                setTimeout(check, 50);
            };
            check();
        });
    }

    async function importBuild(raw) {
        let code = raw.trim();
        if (/^https?:/.test(code)) code = new URLSearchParams(new URL(code).hash.slice(1)).get("build") || "";
        const header = WowLoadout.header(code);
        const cls = manifest.classes.find(c => c.specs.some(s => Number(s.spec_id) === header.specId));
        const spec = cls?.specs.find(s => Number(s.spec_id) === header.specId);
        if (!spec) throw new Error("This string's specialization is not available in the current snapshot.");
        const beforeImport={data,selected:new Map(state.selected),hero:state.heroTree,welcome:document.body.classList.contains("welcome-active")};
        state.suspendUrl = true;
        try {
            await activateSpec(cls.name, spec.name);
            const imported = WowLoadout.decode(code, data);
            const previous = {selected:state.selected, hero:state.heroTree};
            state.selected = imported.selected;
            if (imported.hero) state.heroTree = imported.hero;
            try {
                for (const [id] of state.selected) {
                    const group = displayedGroups().get(id);
                    if (!group || !canSelect(group, groupNodes(recordsForTree(group.treeType, state.heroTree)))) throw new Error("This build has missing prerequisites or outdated point gates.");
                }
            } catch(error) {state.selected=previous.selected;state.heroTree=previous.hero;throw error;}
            $("#heroSelect").value = state.heroTree;
            ensureFreeSelections();
            $(".tab[data-tab=tree]").click();
            renderTrees();
        } catch(error) {
            applyDataset(beforeImport.data);state.selected=beforeImport.selected;state.heroTree=beforeImport.hero;
            $("#heroSelect").value=state.heroTree;
            document.body.classList.toggle("welcome-active",beforeImport.welcome);updateDocumentTitle();renderTrees();throw error;
        } finally {state.suspendUrl=false;syncBuildUrl();}
    }

    function setupBuildControls() {
        const dialog = $("#buildDialog");
        const open = exporting => {
            $("#buildDialogTitle").textContent = exporting ? "Export & share your build" : "Import build";
            $("#buildDialogHelp").textContent = exporting ? "Copy the talent string into WoW, or share a link that opens this exact build." : "Paste a talent string exported from the game or a link from this calculator.";
            $("#buildDialogError").textContent="";
            $("#buildString").value = exporting ? WowLoadout.encode(data,state.selected,state.heroTree) : "";
            $("#buildString").readOnly=exporting;
            $("#importBuildApply").hidden=exporting;
            $("#copyBuildString").hidden=!exporting;
            $("#copyBuildLink").hidden=!exporting;
            dialog.showModal();$("#buildString").focus();
            if(exporting)$("#buildString").select();
        };
        $$('[data-open-import]').forEach(b=>b.addEventListener('click',()=>open(false)));
        $("#exportBuild").addEventListener("click",()=>open(true));
        $("#importBuildApply").addEventListener("click",async()=>{
            const button=$("#importBuildApply");button.disabled=true;
            try {await importBuild($("#buildString").value);dialog.close();}
            catch(error){$("#buildDialogError").textContent=error.message;}
            finally{button.disabled=false;}
        });
        const copy = async value => {
            try {await navigator.clipboard.writeText(value);$("#buildDialogError").textContent="Copied.";}
            catch {$("#buildString").value=value;$("#buildString").select();$("#buildDialogError").textContent="Select and copy the text above.";}
        };
        $("#copyBuildString").addEventListener("click",()=>copy(WowLoadout.encode(data,state.selected,state.heroTree)));
        $("#copyBuildLink").addEventListener("click",()=>{syncBuildUrl();copy(location.href);});
        $$('[data-close-dialog]').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));
        document.addEventListener("click",event=>{
            const link=event.target.closest('a[href^="docs.html"]');if(!link)return;
            event.preventDefault();hideTooltip();
            $("#docsFrame").src=link.getAttribute('href').replace('docs.html','docs.html?embedded=1');
            $("#docsDialog").showModal();
        });
        window.addEventListener('message',event=>{
            if(event.source===$("#docsFrame").contentWindow&&event.data==='close-documentation')$("#docsDialog").close();
        });
        $("#welcomeClasses").innerHTML = manifest.classes.map(c => {
            const visuals = ClassVisuals.classes[c.class_id];
            return `<section class="welcome-class" style="--class-color:${visuals.color}">
                <h2><img src="${ClassVisuals.url(visuals.icon)}" width="46" height="46" alt="">${escapeHtml(c.name)}</h2>
                <div>${c.specs.map(s => `<button class="welcome-spec" data-class="${escapeHtml(c.name)}" data-spec="${escapeHtml(s.name)}">
                    <img src="${ClassVisuals.url(ClassVisuals.specs[s.spec_id])}" width="28" height="28" alt="">
                    <span>${escapeHtml(s.name)}</span><span class="spec-arrow" aria-hidden="true">→</span>
                </button>`).join('')}</div>
            </section>`;
        }).join('');
        $$('.welcome-spec').forEach(b=>b.addEventListener('click',()=>activateSpec(b.dataset.class,b.dataset.spec).catch(error=>{ $("#treeMessage").textContent=error.message; })));
        window.addEventListener('hashchange',()=>{
            const code=new URLSearchParams(location.hash.slice(1)).get('build');
            if(code)importBuild(code).catch(error=>{$("#treeMessage").textContent=error.message;});
        });
    }

    // ========================================================
    // Init
    // ========================================================

    registerServiceWorker();

    setupDatasetSelectors();

    renderHeader();

    setupTabs();

    setupHeroSelector();

    setupEvents();

    setupBuildControls();

    ensureFreeSelections();

    renderTrees();

    renderComparison();

    renderCompendiumList();
    const initialParams = new URLSearchParams(location.hash.slice(1));
    state.suspendUrl = false;
    if (initialParams.get("build")) {
        state.pvpMode = initialParams.get("mode") !== "pve";
        $("#pvpToggle").checked=state.pvpMode;
        importBuild(initialParams.get("build")).catch(error=>{$("#treeMessage").textContent=error.message;});
    } else if (initialParams.get("spec")) {
        const wanted=manifest.classes.flatMap(c=>c.specs.map(s=>({...s,cls:c.name}))).find(s=>s.slug===initialParams.get("spec"));
        if(wanted)activateSpec(wanted.cls,wanted.name);
    }

})();
