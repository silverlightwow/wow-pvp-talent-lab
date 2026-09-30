"""One dependency discovery rule for both source collection and auditing."""
from . import pvp_aura
from .sources import simc


def plan_spec_sources(*, dump, class_name, spec_name, spec_names, talent_spell_ids,
                      drustvar_effects, aura_payload):
    dump = simc.scope_dump_to_specialization(dump, class_name=class_name,
                                            spec_name=spec_name, spec_names=spec_names)
    rules = pvp_aura.normalize_current_spec_aura(aura_payload, spec_name=spec_name,
                                                class_name=class_name)
    drustvar_ids = {int(effect.spell_id) for effect in drustvar_effects}
    aura_ids = {int(spell_id) for rule in rules for spell_id, _ in rule.affected_spells}
    for rule in rules:
        if rule.label_id is not None:
            aura_ids.update(simc.spell_ids_for_label(dump, rule.label_id))
    simc_ids = simc.pvp_modified_spell_ids(dump)
    dependencies = simc.pvp_dependencies(
        dump, talent_spell_ids=talent_spell_ids,
        pvp_spell_ids=drustvar_ids | aura_ids | simc_ids, max_depth=4,
        class_name=class_name, spec_name=spec_name, spec_names=spec_names,
    )
    return dump, rules, drustvar_ids, aura_ids, simc_ids, dependencies
