from sheet2dataharmonizer.converters.sheet2linkml import Sheet2LinkML as S2Lml
import logging
import click
import click_log
from linkml_runtime.linkml_model import (
    Annotation, SchemaDefinition, ClassDefinition
)
from linkml_runtime.dumpers import yaml_dumper

from linkml_runtime.utils.schemaview import SchemaView

import pandas as pd

logger = logging.getLogger(__name__)
click_log.basic_config(logger)


@click.command()
@click_log.simple_verbosity_option(logger)
@click.option("--sheet_id", default="1pSmxX6XGOxmoA7S7rKyj5OaEl3PmAl4jAOlROuNHrU0")
@click.option("--tab_title", default="Sections_order")
@click.option("--auth_file", required=True)
def model_sections(auth_file, sheet_id, tab_title):
    section_schema = build_section_schema(auth_file, sheet_id, tab_title)
    dumped = yaml_dumper.dumps(section_schema)
    print(dumped)

    placeholder = build_section_table(section_schema)
    print(placeholder)


def build_section_schema(auth_file="local/client_secret.apps.googleusercontent.com.json",
                         sheet_id="1pSmxX6XGOxmoA7S7rKyj5OaEl3PmAl4jAOlROuNHrU0",
                         tab_title="Sections_order"):
    section_sheet = S2Lml.get_gsheet_frame(title=tab_title, sheet_id=sheet_id, gauth_file_path=auth_file)
    section_lod = section_sheet.to_dict(orient='records')

    section_schema = SchemaDefinition(name="model_sections", id="http://example.com/model_sections")
    dh_section_class = ClassDefinition(name="dh_section")
    section_schema.classes['dh_section'] = dh_section_class
    for i in section_lod:
        sn = i['section_name']
        st = i['section_title']
        current_class = ClassDefinition(name=sn, title=st)
        if i['notes'] != "" and i['notes'] is not None:
            current_class.comments.append(i['notes'])
        current_class.annotations['dh_sect_order'] = Annotation(tag="dh_sect_order", value=i['section_order'])
        current_class.is_a = "dh_section"
        section_schema.classes[sn] = current_class
    return section_schema


def build_section_table(section_schema):
    table_rows = []
    section_view = SchemaView(section_schema)
    dh_sections = section_view.class_children("dh_section")
    for i in dh_sections:
        section_class = section_view.get_class(i)
        section_order = section_class.annotations['dh_sect_order']['value']
        section_title = section_class.title
        table_rows.append({"section": i, "order": section_order, "title": section_title})
    section_frame = pd.DataFrame(table_rows)
    return section_frame

    if __name__ == '__main__':
        model_sections()
