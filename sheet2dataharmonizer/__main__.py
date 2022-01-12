import os
import logging

import sheet2dataharmonizer.converters.sheet2linkml as mgd

from linkml_runtime.linkml_model import SlotDefinition, Example
from linkml_runtime.dumpers import yaml_dumper

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname( __file__ ), '..'))

logger = logging.getLogger(__name__)


def wrap_schema(
    client_secret_json, sheet_id, tasks, constructed_class_name, new_schema
):
    """TODO: Decide on more appropriate name and fill in docstring."""
    for title, task in tasks.items():
        pysqldf_slot_list = mgd.subset_slots_from_sheet(
            client_secret_json, sheet_id, task["title"], task["query"]
        )
        new_schema = mgd.wrapper(
            task["yaml"],
            title,
            task["focus_class"],
            pysqldf_slot_list,
            new_schema,
            constructed_class_name,
        )

    return new_schema


def add_emsl_schema(emsl_dict, new_schema):
    """TODO: Decide on more appropriate name and fill in docstring."""
    for i in emsl_dict:
        if i["slot"] in new_schema.slots:
            logger.info(f"slot {i['slot']} already in destination schema")
        else:
            new_slot = SlotDefinition(
                name=i["slot"],
                slot_uri="emsl:" + i["slot"],
                title=i["name"],
                string_serialization=i["syntax"],
            )
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
            new_schema.slots[i["slot"]] = new_slot
            new_schema.classes[constructed_class_name].slots.append(i["slot"])

    return new_schema


def main(
    constructed_schema_name,
    constructed_schema_id,
    constructed_class_name,
    additional_prefixes,
    client_secret_json,
    sheet_id,
    tasks,
):
    new_schema = mgd.construct_schema(
        constructed_schema_name,
        constructed_schema_id,
        constructed_class_name,
        additional_prefixes,
    )

    new_schema = wrap_schema(
        client_secret_json, sheet_id, tasks, constructed_class_name, new_schema
    )

    emsl_sheet = mgd.get_gsheet_frame(client_secret_json, sheet_id, "EMSL_sample_slots")
    emsl_dict = emsl_sheet.to_dict(orient="records")

    new_schema = add_emsl_schema(emsl_dict, new_schema)

    # can be executed in runtime
    # consider moving into __name__ == "__main__"
    dumped = yaml_dumper.dumps(new_schema)

    logger.info(dumped)


if __name__ == "__main__":
    # TODO: rename variables with more semantic names
    sheet_id = "1pSmxX6XGOxmoA7S7rKyj5OaEl3PmAl4jAOlROuNHrU0"
    client_secret_path = os.path.join(
        ROOT_DIR, "local/sheets.googleapis.com-python.json"
    )

    constructed_schema_name = "soil_biosample"
    constructed_schema_id = "http://example.com/soil_biosample"
    constructed_class_name = "soil_biosample"

    additional_prefixes = {
        "prov": "http://www.w3.org/ns/prov#",
        "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
        "schema": "http://schema.org/",
        "xsd": "http://www.w3.org/2001/XMLSchema#",
        "UO": "http://purl.obolibrary.org/obo/UO_",
    }

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
            "focus_class": "soil",
            "query": """
                SELECT
                    slot as slot
                FROM
                    gsheet_frame
                where
                    package = 'soil'
                    and (
                    disposition = 'use as-is' or disposition = 'borrowed as-is'
                    )
                """,
        },
    }

    main(
        constructed_schema_name,
        constructed_schema_id,
        constructed_class_name,
        additional_prefixes,
        client_secret_path,
        sheet_id,
        tasks,
    )
