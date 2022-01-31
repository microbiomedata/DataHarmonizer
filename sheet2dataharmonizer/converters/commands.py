import logging
from threading import currentThread

import click
import click_log
import pandas as pd

from linkml_runtime.linkml_model import (
    SlotDefinition,
    Example,
    EnumDefinition,
    PermissibleValue,
    Annotation
)
from linkml_runtime.utils.schemaview import SchemaView
from linkml_runtime.dumpers import yaml_dumper

from sheet2dataharmonizer.converters.linkml2dataharmonizer import LinkML2DataHarmonizer
from sheet2dataharmonizer.converters.sheet2linkml import Sheet2LinkML


logger = logging.getLogger(__name__)
click_log.basic_config(logger)


@click.command()
@click_log.simple_verbosity_option(logger)
@click.option("--model_file", type=click.Path(exists=True), required=True)
@click.option("--selected_class", required=True)
@click.option("--default_section", default="default", show_default=True)
@click.option("--default_source", default="", show_default=True)
@click.option("--default_capitalize", default="", show_default=True)
@click.option("--default_data_status", default="default", show_default=True)
@click.option(
    "--output_file", type=click.Path(), default="target/data.tsv", show_default=True
)
def linkml2dataharmonizer(
    model_file,
    selected_class,
    default_section,
    default_source,
    default_capitalize,
    default_data_status,
    output_file,
):

    lml_dh = LinkML2DataHarmonizer(linkml_model_path=model_file)

    section_list = lml_dh._get_section_list(selected_class, default_section)
    term_pv_dict = lml_dh._get_term_pv_list(
        selected_class,
        default_section,
        default_source,
        default_capitalize,
        default_data_status,
    )

    term_list = term_pv_dict["term"]
    pv_list = term_pv_dict["pv"]

    consolidated_list = lml_dh._combined_list(
        section_list, term_list, pv_list, selected_class, default_section
    )

    if output_file:
        consolidated_list.to_csv(output_file, sep="\t", index=False)
    else:
        click.echo(consolidated_list)


def _wrap_schema(
    client_secret_json, sheet_id, tasks, constructed_class_name, new_schema
):
    """TODO: Decide on more appropriate name and fill in docstring."""
    for title, task in tasks.items():
        pysqldf_slot_list = Sheet2LinkML.subset_slots_from_sheet(
            client_secret_json, sheet_id, task["title"], task["query"]
        )

        sheet2linkml = Sheet2LinkML(task["yaml"])
        new_schema = sheet2linkml.wrapper(
            title,
            task["focus_class"],
            pysqldf_slot_list,
            new_schema,
            constructed_class_name,
        )

    return new_schema


def _inject_supplementary(
    secret,
    supplementary_id,
    enum_sheet,
    supplementary_tab_title,
    schema,
    prefix,
    class_name,
    rule_col=None,
    rule_val=None,
    overwrite=False,
):
    """TODO: Decide on more appropriate name and fill in docstring."""
    enums_names = list(set(list(enum_sheet["enum"])))
    current_sheet = Sheet2LinkML.get_gsheet_frame(
        secret, supplementary_id, supplementary_tab_title
    )
    if (
        rule_col != ""
        and rule_col is not None
        and rule_val != ""
        and rule_val is not None
    ):
        logger.info(f"requiring {rule_col} to equal {rule_val}")
        current_sheet = current_sheet.loc[current_sheet[rule_col].eq(rule_val)]

    current_dict = current_sheet.to_dict(orient="records")

    for i in current_dict:
        i_s = i["slot"]
        if i_s in schema.slots and not overwrite:
            exit
        else:
            new_slot = SlotDefinition(
                name=i_s, slot_uri=prefix + ":" + i_s, title=i["name"]
            )
            
            ann_list = []   # list of section, column pair annotations
            if 'section' in i:
                tag_name = "dh:section_name"
                ghsheet_header = 'section'
                val_name = i[ghsheet_header]
                if not val_name:
                    logger.warning(f"The header {ghsheet_header} could not be found.")
                    val_name = "to_be_annotated"
                ann = Annotation(tag=tag_name, value=val_name)
                ann_list.append(ann)
            if 'column_order' in i:
                tag_name = "dh:column_number"
                ghsheet_header = 'column_order'
                val_name = i[ghsheet_header]
                if not val_name:
                    logger.warning(f"The header {ghsheet_header} could not be found.")
                    val_name = "to_be_annotated"
                ann = Annotation(tag=tag_name, value=val_name)
                ann_list.append(ann)
            
            # assign list of annotations to slot's annotations attribute
            new_slot.annotations = ann_list

            if i["requirement status"] == "required":
                new_slot.required = True
            if i["requirement status"] == "recommended":
                new_slot.recommended = True
            if i["example"] != "" and i["example"] is not None:
                temp_example = Example(i["example"])
                new_slot.examples.append(temp_example)
            if i["definition"] != "" and i["definition"] is not None:
                new_slot.description = i["definition"]
            if i["guidance"] != "" and i["guidance"] is not None:
                new_slot.comments.append(i["guidance"])
            if i["min"] != "" and i["min"] is not None:
                new_slot.minimum_value = i["min"]
            if i["max"] != "" and i["max"] is not None:
                new_slot.maximum_value = i["max"]
            # todo force these to be booleans
            if i["multivalued"] != "" and i["multivalued"] is not None:
                new_slot.multivalued = bool(i["multivalued"])
            if i["identifier"] != "" and i["identifier"] is not None:
                new_slot.identifier = bool(i["identifier"])
            if i["syntax"] != "" and i["syntax"] is not None:
                new_slot.string_serialization = i["syntax"]
                # try to standardize where "enumeration" is expressed... expected value comment/guidance?
                if i["syntax"] == "enumeration":
                    if i_s in enums_names:
                        suffixed_name = i_s + "_enum"
                        temp_enum = EnumDefinition(name=suffixed_name)
                        enum_subset = enum_sheet.loc[enum_sheet["enum"].eq(i_s)]
                        enum_subset.sort_values(by=["permissible_value"])
                        enum_subset = enum_subset.to_dict(orient="records")

                        for es_row in enum_subset:
                            # logger.info(f"{i_s} {es_row}")
                            temp_pv = PermissibleValue(text=es_row["permissible_value"])
                            if (
                                es_row["term_id"] != ""
                                and es_row["term_id"] is not None
                            ):
                                temp_pv.meaning = es_row["term_id"]
                            temp_enum.permissible_values[
                                es_row["permissible_value"]
                            ] = temp_pv

                        # logger.info("\n")
                        # logger.info(suffixed_name)
                        # logger.info(temp_enum)
                        new_slot.range = suffixed_name
                        schema.enums[suffixed_name] = temp_enum
                else:
                    new_slot.string_serialization = i["syntax"]
                    # try to standardize where "enumeration" is expressed... expected value comment/guidance?

            schema.slots[i_s] = new_slot
            schema.classes[class_name].slots.append(i_s)

    return schema


@click.command()
@click_log.simple_verbosity_option(logger)
@click.option(
    "--sheet_id",
    default="1pSmxX6XGOxmoA7S7rKyj5OaEl3PmAl4jAOlROuNHrU0",
    help="id for Soil-NMDC-Template_CompiledGoogle Sheet.",
    show_default=True,
)
@click.option(
    "--client_secret_json",
    default="local/client_secret.apps.googleusercontent.com.json",
    show_default=True,
    help="location of Google Sheets authentication file.",
    type=click.Path(exists=True),
)
@click.option(
    "--constructed_schema_name",
    default="soil_biosample",
    show_default=True,
    help="what should the combined schema be called?",
)
@click.option(
    "--constructed_schema_id",
    default="http://example.com/soil_biosample",
    show_default=True,
    help='URL "id" for combined schema?',
)
@click.option(
    "--constructed_class_name",
    default="soil_biosample",
    show_default=True,
    help="name for combined class within combined schema?",
)
@click.option(
    "--env_package",
    help="Which environmental package should this LinkML model reflect?",
    required=True,
)
@click.option("--inc_emsl/--no_emsl", default=False, show_default=True)
@click.option(
    "--jgi",
    type=click.Choice(["metagenomics", "metatranscriptomics", "omit"]),
    default="omit",
    show_default=True,
)
def sheet2linkml(
    constructed_schema_name,
    constructed_schema_id,
    constructed_class_name,
    client_secret_json,
    sheet_id,
    env_package,
    inc_emsl,
    jgi,
):
    additional_prefixes = {
        "prov": "http://www.w3.org/ns/prov#",
        "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
        "schema": "http://schema.org/",
        "xsd": "http://www.w3.org/2001/XMLSchema#",
        "UO": "http://purl.obolibrary.org/obo/UO_",
        "dh": "https://github.com/cidgoh/DataHarmonizer/wiki"
    }

    new_schema = Sheet2LinkML.construct_schema(
        constructed_schema_name,
        constructed_schema_id,
        constructed_class_name,
        additional_prefixes,
    )

    tasks = {
        "nmdc": {
            "yaml": "target/nmdc_generated_no_imports.yaml",
            "title": "nmdc_biosample_slots",
            "focus_class": "biosample",
            "query": """
                    SELECT
                        name as slot
                    FROM
                        gsheet_frame
                    where
                        from_schema != 'https://microbiomedata/schema/mixs'
                        and disposition != 'skip';
                    """,
        },
        "mixs": {
            "yaml": "target/mixs_generated_no_imports.yaml",
            "title": "mixs_packages_x_slots",
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
                """,
        },
    }

    new_schema = _wrap_schema(
        client_secret_json, sheet_id, tasks, constructed_class_name, new_schema
    )

    # todo refactor?
    enums_long_sheet_all_envpacks = Sheet2LinkML.get_gsheet_frame(
        client_secret_json, sheet_id, "enums_long"
    )
    enum_sheet = enums_long_sheet_all_envpacks.loc[
        enums_long_sheet_all_envpacks["env_package"].eq(env_package)
    ]

    # override for depth
    new_schema = _inject_supplementary(
        client_secret_json,
        sheet_id,
        enum_sheet,
        "mixs_modified_slots",
        new_schema,
        "mixs_modified",
        constructed_class_name,
        overwrite=True,
    )
    # override for env_package
    new_schema = _inject_supplementary(
        client_secret_json,
        sheet_id,
        enum_sheet,
        "biosample_identification_slots",
        new_schema,
        "samp_id",
        constructed_class_name,
        overwrite=True,
    )
    # haven't documented whether anything else comes along with those overrides yet

    if inc_emsl:
        logger.info("including EMSL terms")
        new_schema = _inject_supplementary(
            client_secret_json,
            sheet_id,
            enum_sheet,
            "EMSL_sample_slots",
            new_schema,
            "emsl",
            constructed_class_name,
        )

    if jgi == "metagenomics":
        logger.info("would extract JGI metagenomics terms")
        new_schema = _inject_supplementary(
            client_secret_json,
            sheet_id,
            enum_sheet,
            "JGI_sample_slots",
            new_schema,
            "jgi_gen",
            constructed_class_name,
            rule_col="analyte type",
            rule_val="metagenomics",
        )
    elif jgi == "metatranscriptomics":
        logger.info("would extract JGI metatranscriptomics terms")
        new_schema = _inject_supplementary(
            client_secret_json,
            sheet_id,
            enum_sheet,
            "JGI_sample_slots",
            new_schema,
            "jgi_gen",
            constructed_class_name,
            rule_col="analyte type",
            rule_val="metatranscriptomics",
        )
    elif jgi == "omit":
        logger.info("would skip JGI terms")
    else:
        logger.info("unexpected JGI processing option")

    # can be executed in runtime
    # consider moving into __name__ == "__main__"
    dumped = yaml_dumper.dumps(new_schema)

    click.echo(dumped)


@click.command()
@click_log.simple_verbosity_option(logger)
@click.option("--model_file", type=click.Path(exists=True), required=True)
@click.option("--output_file", type=click.Path(), required=True)
def mixs_package_map(model_file, output_file):
    mixs_view = SchemaView(model_file)
    # should be "MIxS"
    # logger.info(mixs_view.schema.name)

    mixs_classes = mixs_view.all_classes()
    mixs_class_names = list(mixs_classes.keys())
    mixs_class_names.sort()
    blank_class_row = {
        "class_name": None,
        "is_a_parent": None,
        "is_mixin": False,
        "mixins_used": None,
    }
    class_row_list = []

    for current_class_name in mixs_class_names:
        # logger.info(current_class_name)
        current_cd = mixs_view.get_class(current_class_name)
        # current_is_a = current_cd.is_a
        current_mixin_flag = current_cd.mixin
        mixins_used = current_cd.mixins
        # logger.info(f"{i}\t{current_is_a}\t{current_mixin_flag}\t{mixins_used}")
        current_row = blank_class_row.copy()
        current_row["class_name"] = current_class_name

        if current_cd.is_a is not None:
            current_row["is_a_parent"] = str(current_cd.is_a)

        if current_mixin_flag:
            current_row["is_mixin"] = True
        # current_row['mixins_used'] = str(mixins_used)
        current_row["mixins_used"] = "|".join(mixins_used)
        class_row_list.append(current_row)

    mixs_class_frame = pd.DataFrame(class_row_list)
    # logger.info(mixs_class_frame)
    # for now, it looks like all is_a parents of any other class are the packages

    package_classes = list(mixs_class_frame["is_a_parent"].drop_duplicates())
    package_classes = [
        current_class for current_class in package_classes if current_class is not None
    ]
    package_classes.sort()
    # logger.info(package_classes)

    # env_package_pvs = mixs_view.get_enum('env_package_enum').permissible_values
    # ep_pvs_names = list(env_package_pvs.keys())
    # ep_pvs_names.sort()
    # logger.info(ep_pvs_names)

    mims_package_classes = mixs_class_frame["class_name"].loc[
        mixs_class_frame["mixins_used"].eq("MIMS")
        & mixs_class_frame["is_a_parent"].isin(package_classes)
    ]
    mims_package_classes = list(mims_package_classes)
    mims_package_classes.sort()

    selected_classes = [
        "built environment",
        "microbial mat_biofilm",
        "miscellaneous natural or artificial environment",
        "plant-associated",
        "sediment",
        "soil",
        "wastewater_sludge",
        "water",
    ]

    blank_slot_row = {"class_name": None, "slot_name": None, "disposition": None}
    slot_row_list = []
    for current_pc_name in selected_classes:
        # logger.info(current_pc_name)
        induceds = mixs_view.class_induced_slots(current_pc_name)
        induceds_names = [ci.name for ci in induceds]
        induceds_names.sort()

        for current_induced in induceds_names:
            # logger.info(f"{current_pc_name} {current_induced}")
            current_slot_row = blank_slot_row.copy()
            current_slot_row["class_name"] = current_pc_name
            current_slot_row["slot_name"] = current_induced
            slot_row_list.append(current_slot_row)

    slot_frame = pd.DataFrame(slot_row_list)
    # logger.info(slot_frame)
    slot_frame.to_csv(output_file, sep="\t", index=False)


@click.command()
@click_log.simple_verbosity_option(logger)
@click.option("--model_file", type=click.Path(exists=True), required=True)
@click.option("--selected_class", required=True)
@click.option(
    "--output_file", type=click.Path(), default="target/data.tsv", show_default=True
)
def range_str_ser(model_file, selected_class, output_file):
    # model_file = "target/soil_biosample_modular_annotated.yaml"
    # selected_class = "soil_biosample"
    # soil_biosample_regex_insight.tsv

    row_list = []

    sb_view = SchemaView(model_file)
    sb_class = sb_view.get_class(selected_class)
    sb_slots = sb_class.slots
    sb_slots.sort()
    sb_enums = sb_view.all_enums()
    sb_enum_names = list(sb_enums.keys())

    for i in sb_slots:
        i_struct = sb_view.get_slot(i)
        elements = ["name", "title", "string_serialization", "range"]
        row_dict = {}
        for j in elements:
            row_dict[j] = i_struct[j]
        row_dict["enum_range"] = False
        row_dict["enum_string_ser"] = False
        row_dict["enum_discrepancy"] = False
        # row_dict['enum_conflict'] = False
        if i_struct.range in sb_enum_names:
            row_dict["enum_range"] = True
        if row_dict["string_serialization"] == "enumeration":
            row_dict["enum_string_ser"] = True
        row_dict["enum_discrepancy"] = (
            row_dict["enum_range"] != row_dict["enum_string_ser"]
        )
        row_list.append(row_dict)

    row_frame = pd.DataFrame(row_list)
    row_frame.to_csv(output_file, sep="\t", index=False)


@click.command()
@click_log.simple_verbosity_option(logger)
@click.option(
    "--client_secret",
    default="local/client_secret_fresh-sheet2linkml.apps.googleusercontent.com.json",
    type=click.Path(exists=True),
    help="path your google sheet authentication file",
    show_default=True,
)
@click.option(
    "--sheet_id",
    default="1WErXj8sM5uJi51VVLNQZDilDF7wMiyBC2T4zELp7Axc",
    help="ID of the google sheet that will provide the curated enums",
    show_default=True,
)
@click.option(
    "--tab_title",
    default="Subset_EnvO_Broad_Local_Medium_terms_062221",
    help="which tab in the google sheet will provide the curated enums?",
    show_default=True,
)
@click.option(
    "--curated_tsv_out",
    default="target/tidy_triad_curations.tsv",
    type=click.Path(),
    help="destination for modified data.tsv",
    show_default=True,
)
@click.option(
    "--env_package",
    default="Soil",
    help="""for which environmental packages (as expressed in the google sheet) 
              do you want do extract curated enums??""",
)
def tidy_triad_curations(
    client_secret, sheet_id, tab_title, curated_tsv_out, env_package
):
    raw = Sheet2LinkML.get_gsheet_frame(client_secret, sheet_id, tab_title)

    raw.columns = ["enum", "raw_id", "permissible_value", "definition", "env_package"]

    raw["partial"] = raw["raw_id"].str.replace(
        "<http://purl.obolibrary.org/obo/ENVO_", "ENVO:", regex=True
    )

    raw["term_id"] = raw["partial"].str.replace(">", "", regex=True)

    raw = raw[["env_package", "enum", "permissible_value", "term_id"]]

    raw["env_package"] = raw["env_package"].str.split("|", expand=False)

    df_explode = raw.explode("env_package")

    df_explode = df_explode.loc[df_explode["env_package"].eq(env_package)]

    df_explode["env_package"] = df_explode["env_package"].str.lower()

    df_explode.to_csv(curated_tsv_out, sep="\t", index=False)

@click.command()
@click_log.simple_verbosity_option(logger)
@click.option('--data_tsv_in', default="target/data.tsv", type=click.Path(exists=True),
              help='path to DataHarmonizer data.tsv input', show_default=True)
@click.option('--data_tsv_out', default="target/data_promoted.tsv", type=click.Path(),
              help='destination for modified data.tsv', show_default=True)
@click.option('--promote', multiple=True, help='which columns should be promoted to select type?')
@click.option('--extra_row_files', multiple=True, type=click.Path(exists=True),
              help='path to files defining the new select/enum column(s) etc.', show_default=True)
def promote_to_select(data_tsv_in, data_tsv_out, promote, extra_row_files):
    data_in = pd.read_csv(data_tsv_in, sep="\t")
    for i in promote:
        logger.info(i)
        data_in.loc[data_in['label'].eq(i), 'datatype'] = 'select'
        data_in.loc[data_in['label'].eq(i), 'pattern'] = ''
    to_concat = [data_in]
    for i in extra_row_files:
        logger.info(i)
        temp = pd.read_csv(i, sep="\t")
        to_concat.append(temp)
    catted = pd.concat(to_concat)
    catted.to_csv(data_tsv_out, sep="\t", index=False)