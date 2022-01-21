import click
import linkml_runtime
import pandas as pd
from linkml_runtime.utils.schemaview import SchemaView
# for data?
from linkml_runtime.dumpers import yaml_dumper
# yaml gen for the schema?
from linkml.utils.schemaloader import SchemaLoader

from linkml_model import SchemaDefinition, EnumDefinition, PermissibleValue
from linkml.generators.yamlgen import YAMLGenerator
from linkml_runtime.utils.yamlutils import as_yaml
import crdch_model
import nmdc_schema
import yaml

# read schema or data from yaml file or string
#  or by importing package
# write schema or data from yaml file or string
# manipulate schemas, schemaviews, raw dictionaries

# there are pyyaml ways to dump a dict as a YMLS string or file
# as well as

# enums -> tsv -> enums

# make sure mixs source is running off of the latest spreadsheet and had been pushed to pypi

# do some linkml-runtime-api
#  over data
# how to query model for which slots are required?

# use some dataclasses or pydantic
# what's ruyaml good for?

# method for getting package slots from mixs

# check on issues I agreed to! and slack messages

# gh actions practice

# Felix descriptions to Titles?
# OLS, BioPortal or other methods for annotating emums and other model elements/values with terms
# look for species specific databases ie Pseudomonas https://www.pseudomonas.com/strain/download

# move synbio handcrafted to root. keeps sql based approach _somewhere_
# make with yaml gen and project gen

# poetry autocomplete

# PermissibleValue(text='pvtext', description=None, meaning=None, is_a=None, mixins=[], extensions={}, annotations={},
#                  alt_descriptions={}, title=None, deprecated=None, todos=[], notes=[], comments=[], examples=[],
#                  in_subset=[], from_schema=None, imported_from=None, see_also=[],
#                  deprecated_element_has_exact_replacement=None, deprecated_element_has_possible_replacement=None)

pv_string_slots = ["text", "description", "meaning", "is_a", "title"]


# from a mapping perspective,
# interested in original text, matching text, match type, match_value, string dist, dist_type, notes
def enum_to_tsv(current_enum_def, new_tsv_file_name):
    pv_list = []
    temp = current_enum_def.permissible_values
    for pvn, pvd in temp.items():
        pv_dict = {}
        for i in pv_string_slots:
            pv_dict[i] = pvd[i]
        pv_list.append(pv_dict)
    pv_frame = pd.DataFrame(pv_list)
    pv_frame.to_csv(new_tsv_file_name, sep="\t", index=False)


def tsv_to_enum(current_file_name):
    pv_frame = pd.read_csv(current_file_name, sep="\t")
    pv_list = pv_frame.to_dict(orient="records")
    new_enum = EnumDefinition(name="temp")
    for i in pv_list:
        new_pv = PermissibleValue(text=i['text'])
        for j in pv_string_slots:
            new_pv[j] = str(i[j])
        new_enum.permissible_values[i['text']] = new_pv
    print(new_enum)


def get_class_slot_attribs(current_class):
    pass


@click.command()
@click.option('--crdch_yaml', type=click.Path(exists=True),
              default="../ccdhmodel/model/schema/crdch_model.yaml",
              show_default=True)
@click.option('--mixs_yaml', type=click.Path(exists=True),
              default="../mixs-source/model/schema/mixs.yaml",
              show_default=True)
@click.option('--nmdc_yaml', type=click.Path(exists=True),
              default="../nmdc-schema/src/schema/nmdc.yaml",
              show_default=True)
@click.option('--synbio_yaml', type=click.Path(exists=True),
              default="../synbio-schema/handcrafted/model/synbio.yaml",
              show_default=True)
@click.option('--meta_yaml', type=click.Path(exists=True),
              default="../linkml-model/linkml_model/model/schema/meta.yaml",
              show_default=True)
def hello(crdch_yaml, mixs_yaml, nmdc_yaml, synbio_yaml, meta_yaml):
    """experiment with different interactions with linkml."""

    # # yaml file to SchemaView
    # mixs_view = SchemaView(mixs_yaml)

    meta_view = SchemaView(meta_yaml)

    # print(meta_view)

    mv_classes = meta_view.all_classes()
    mvckl = list(mv_classes.keys())
    mvckl.sort()
    # print(mvckl)

    # SlotDefinition(name='see_also', id_prefixes=[], definition_uri=None, aliases=[], local_names={}, conforms_to=None,
    #                mappings=[], exact_mappings=[], close_mappings=[], related_mappings=[], narrow_mappings=[],
    #                broad_mappings=[], extensions={}, annotations={}, description='a reference', alt_descriptions={},
    #                title=None, deprecated=None, todos=[], notes=[], comments=[], examples=[], in_subset=['owl'],
    #                from_schema='https://w3id.org/linkml/meta', imported_from=None, see_also=[],
    #                deprecated_element_has_exact_replacement=None, deprecated_element_has_possible_replacement=None,
    #                is_a=None, abstract=None, mixin=None, mixins=[], apply_to=[], values_from=[], created_by=None,
    #                created_on=None, last_updated_on=None, modified_by=None, status=None, string_serialization=None,
    #                singular_name=None, domain='element', slot_uri='rdfs:seeAlso', multivalued=True, inherited=None,
    #                readonly=None, ifabsent=None, inlined=None, inlined_as_list=None, key=None, identifier=None,
    #                designates_type=None, alias=None, owner='permissible_value', domain_of=[], subproperty_of=None,
    #                symmetric=None, inverse=None, is_class_field=None, role=None, is_usage_slot=None,
    #                usage_slot_name=None, range='uriorcurie', range_expression=None, required=None, recommended=None,
    #                minimum_value=None, maximum_value=None, pattern=None, equals_string=None, equals_string_in=[],
    #                equals_number=None, equals_expression=None, minimum_cardinality=None, maximum_cardinality=None,
    #                has_member=None, all_members={}, none_of=[], exactly_one_of=[], any_of=[], all_of=[])

    # what are all of the possible attributes of a permissible value?
    # I don't see "meaning" in here
    pv_i_slots = meta_view.class_induced_slots("permissible_value")
    for i_s in pv_i_slots:
        fisd = [a for a in dir(i_s) if not a.startswith('_')]
        fisd.sort()
        for j in fisd:
            print(j)


    # # try with comprehensions
    # # sort class and slot names
    # mixs_classes = mixs_view.all_classes()
    # # for mclass_name, mclassdef in mixs_classes.items():
    # #     class_slots = mixs_view.class_induced_slots(mclass_name)
    # #     for mslot in class_slots:
    # #         mrec = mslot.recommended
    # #         mreq = mslot.required
    # #         if mreq:
    # #             mrr = "required"
    # #         elif mrec:
    # #             mrr = "recommended"
    # #         else:
    # #             mrr = None
    # #         # print(f"{mclass_name} {mslot.name} {mrr}")
    #
    # # yaml file to SchemaDefinition
    # mixs_schema = SchemaLoader(mixs_yaml)
    #
    # # mixs_string = yaml_dumper.dumps(mixs_schema)
    #
    # # print(mixs_string)
    #
    # # x = crdch_model
    # # print(type(crdch_model))
    #
    # # x = SchemaLoader(crdch_model)
    # # print(x)
    #
    # # bottomup = SchemaDefinition(name="roundtripper", id="roundtripper")
    # # print(as_yaml(bottomup))
    #
    # buenum = EnumDefinition(name="my_enum")
    #
    # bupv1 = PermissibleValue(text="bupv1")
    # bupv2 = PermissibleValue(text="bupv2")
    # bupv3 = PermissibleValue(text="bupv3")
    #
    # buenum.permissible_values["bupv1"] = bupv1
    # buenum.permissible_values["bupv2"] = bupv2
    # buenum.permissible_values["bupv3"] = bupv3
    #
    # # print(buenum)
    #
    # enum_to_tsv(buenum, "placeholder.tsv")
    #
    # tsv_to_enum("placeholder_curated.tsv")
    #
    # get_class_slot_attribs()
    #
    # # EnumDefinition(name='my_enum', id_prefixes=[], definition_uri=None, aliases=[], local_names={}, conforms_to=None,
    # #                mappings=[], exact_mappings=[], close_mappings=[], related_mappings=[], narrow_mappings=[],
    # #                broad_mappings=[], extensions={}, annotations={}, description=None, alt_descriptions={}, title=None,
    # #                deprecated=None, todos=[], notes=[], comments=[], examples=[], in_subset=[], from_schema=None,
    # #                imported_from=None, see_also=[], deprecated_element_has_exact_replacement=None,
    # #                deprecated_element_has_possible_replacement=None, code_set=None, code_set_tag=None,
    # #                code_set_version=None, pv_formula=None, permissible_values={})
    #
    # # PermissibleValue(text='pvtext', description=None, meaning=None, is_a=None, mixins=[], extensions={}, annotations={},
    # #                  alt_descriptions={}, title=None, deprecated=None, todos=[], notes=[], comments=[], examples=[],
    # #                  in_subset=[], from_schema=None, imported_from=None, see_also=[],
    # #                  deprecated_element_has_exact_replacement=None, deprecated_element_has_possible_replacement=None)


if __name__ == '__main__':
    hello()
