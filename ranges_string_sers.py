from linkml_runtime.utils.schemaview import SchemaView
import pandas as pd

sb_yaml_file = "target/soil_biosample_modular_annotated.yaml"
sb_class_name = "soil_biosample"

row_list = []

sb_view = SchemaView(sb_yaml_file)
sb_class = sb_view.get_class(sb_class_name)
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
    row_dict['enum_range'] = False
    row_dict['enum_string_ser'] = False
    row_dict['enum_discrepancy'] = False
    # row_dict['enum_conflict'] = False
    if i_struct.range in sb_enum_names:
        row_dict['enum_range'] = True
    if row_dict['string_serialization'] == "enumeration":
        row_dict['enum_string_ser'] = True
    row_dict['enum_discrepancy'] = row_dict['enum_range'] != row_dict['enum_string_ser']
    row_list.append(row_dict)

row_frame = pd.DataFrame(row_list)
row_frame.to_csv("soil_biosample_regex_insight.tsv", sep="\t", index=False)
