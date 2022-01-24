from linkml_runtime.utils.schemaview import SchemaView


# from linkml_model import PermissibleValue

# temp = meta_view.class_induced_slots("SlotDefinition")
# print(temp)

def get_obj_sorted_keys(obj):
    obj_keys = list(obj.keys())
    obj_keys.sort()
    return obj_keys


def print_list(the_list):
    for i in the_list:
        print(i)
    print('\n')


meta_yaml = "../../linkml-model/linkml_model/model/schema/meta.yaml"

meta_view = SchemaView(meta_yaml)

print_list(get_obj_sorted_keys(meta_view.all_classes()))

sd_islots = meta_view.class_induced_slots("slot_definition")

sdis_names = [i["name"] for i in sd_islots]
sdis_names.sort()

print_list(sdis_names)

# # def get_list_sorted_names(obj):
# #     list_keys = [ akey for ]
# #     obj_keys.sort()
# #     return obj_keys


# # def print_sorted(obj):
# #     skl = get_obj_sorted_keys(obj)
# #     print_list(skl)
#
#
# mclasses = meta_view.all_classes()
# mclass_names = get_obj_sorted_keys(mclasses)
# print_list(mclass_names)
#
# pv_is = meta_view.class_induced_slots("permissible_value")
# # this is a list of slot definitions, each of which does have a name
# pvis_names = [pvis['name'] for pvis in pv_is]
# pvis_names.sort()
# for i in pvis_names:
#     print(i)
#
# # # these don't include the induced slots like name
# # # actually permissible Values don't have names they have text
# # pv_dir = [a for a in dir(PermissibleValue) if not a.startswith('_')]
# # pv_dir.sort()
# # print_list(pv_dir)
#
#
# # alt_descriptions
# # annotations
# # comments
# # deprecated
# # deprecated element has exact replacement
# # deprecated element has possible replacement
# # description
# # examples
# # extensions
# # from_schema
# # imported_from
# # in_subset
# # meaning
# # notes
# # see_also
# # text
# # title
# # todos
#
#
# # text title meaning annotations
# # annotations:
# # match_val: Bacteriophage
# # M13
# # match_type: hasExactSynonym
# # cosine: 0.0
