import linkml_round_trips.modular_gd as mgd
# from linkml_runtime.linkml_model import SlotDefinition, Example, EnumDefinition
from linkml_runtime.dumpers import yaml_dumper

import click

import logging
import click_log

logger = logging.getLogger(__name__)
click_log.basic_config(logger)


# place in __main__ in root of package

@click.command()
@click_log.simple_verbosity_option()
@click.option('--sheet_id', default='1pSmxX6XGOxmoA7S7rKyj5OaEl3PmAl4jAOlROuNHrU0',
              help='id for Soil-NMDC-Template_CompiledGoogle Sheet.', show_default=True)
@click.option('--client_secret_json', default='local/client_secret.apps.googleusercontent.com.json', show_default=True,
              help='location of Google Sheets authentication file.', type=click.Path(exists=True))
@click.option('--constructed_schema_name', default='soil_biosample', show_default=True,
              help='what should the combined schema be called?')
@click.option('--constructed_schema_id', default='http://example.com/soil_biosample', show_default=True,
              help='URL "id" for combined schema?')
@click.option('--constructed_class_name', default='soil_biosample', show_default=True,
              help='name for combined class within combined schema?')
@click.option('--env_package', help='Which environmental package should this LinkML model reflect?', required=True)
@click.option('--inc_emsl/--no_emsl', default=False, show_default=True)
@click.option('--jgi', type=click.Choice(['metagenomics', 'metatranscriptomics', 'omit']), default='omit',
              show_default=True)
def combine_schemas(sheet_id, client_secret_json, constructed_schema_name, constructed_schema_id,
                    constructed_class_name, env_package, inc_emsl, jgi):
    additional_prefixes = {"prov": "http://www.w3.org/ns/prov#", "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
                           "schema": "http://schema.org/", "xsd": "http://www.w3.org/2001/XMLSchema#",
                           "UO": "http://purl.obolibrary.org/obo/UO_"}

    new_schema = mgd.construct_schema(constructed_schema_name, constructed_schema_id, constructed_class_name,
                                      additional_prefixes)
    # todo focus_class value should not be hardcoded
    # make the current value soil a parameter
    tasks = {"nmdc": {"yaml": "target/nmdc_generated_no_imports.yaml", "title": "nmdc_biosample_slots",
                      "focus_class": "biosample",
                      "query": """
                            SELECT
                                name as slot
                            FROM
                                gsheet_frame
                            where
                                from_schema != 'https://microbiomedata/schema/mixs'
                                and disposition != 'skip';
    """},
             "mixs": {"yaml": "target/mixs_generated_no_imports.yaml", "title": "mixs_packages_x_slots",
                      "focus_class": env_package,
                      "query": f"""
                            SELECT
                                slot as slot
                            FROM
                                gsheet_frame
                            where
                                package = '{env_package}'
                                and (
                                disposition = 'use as-is' or disposition = 'borrowed'
                                )
    """}, }

    for title, task in tasks.items():
        pysqldf_slot_list = mgd.subset_slots_from_sheet(client_secret_json, sheet_id, task['title'], task['query'])
        # # pysqldf_slot_list.sort()
        new_schema = mgd.wrapper(task['yaml'], title, task['focus_class'], pysqldf_slot_list, new_schema,
                                 constructed_class_name)

    # todo refactor?
    # enum_sheet = mgd.get_gsheet_frame(client_secret_json, sheet_id, 'enumerations')
    enums_long_sheet_all_envpacks = mgd.get_gsheet_frame(client_secret_json, sheet_id, 'enums_long')
    enum_sheet = enums_long_sheet_all_envpacks.loc[enums_long_sheet_all_envpacks['env_package'].eq(env_package)]

    # override for depth
    new_schema = mgd.inject_supplementary(client_secret_json, sheet_id, 'mixs_modified_slots', new_schema,
                                          "mixs_modified",
                                          constructed_class_name, enum_sheet, overwrite=True)
    # override for env_package
    new_schema = mgd.inject_supplementary(client_secret_json, sheet_id, 'biosample_identification_slots', new_schema,
                                          "samp_id",
                                          constructed_class_name, enum_sheet, overwrite=True)
    # haven't documented whether anything else comes along with those overrides yet

    if inc_emsl:
        logger.info("including EMSL terms")
        new_schema = mgd.inject_supplementary(client_secret_json, sheet_id, 'EMSL_sample_slots', new_schema, "emsl",
                                              constructed_class_name, enum_sheet)

    if jgi == "metagenomics":
        logger.info("including JGI metagenomics terms")
        new_schema = mgd.inject_supplementary(client_secret_json, sheet_id, 'JGI_sample_slots', new_schema, "jgi_gen",
                                              constructed_class_name, enum_sheet, rule_col="analyte type",
                                              rule_val="metagenomics")
    elif jgi == "metatranscriptomics":
        logger.info("including JGI metatranscriptomics terms")
        new_schema = mgd.inject_supplementary(client_secret_json, sheet_id, 'JGI_sample_slots', new_schema, "jgi_gen",
                                              constructed_class_name, enum_sheet, rule_col="analyte type",
                                              rule_val="metatranscriptomics")
    elif jgi == "omit":
        logger.info("would skip JGI terms")
    else:
        logger.info("unexpected JGI processing option")

    # gen-yaml raises these concerns
    #   1 WARNING:Namespaces:MIXS namespace is already mapped to https://w3id.org/gensc/ - Mapping to https://w3id.org/mixs/terms/ ignored
    # 276 WARNING:YAMLGenerator:File "<file>" Prefix case mismatch - supplied: MIXS expected: mixs
    #   1 WARNING:YAMLGenerator:Overlapping subset and class names: soil

    dumped = yaml_dumper.dumps(new_schema)

    print(dumped)


if __name__ == '__main__':
    combine_schemas()
