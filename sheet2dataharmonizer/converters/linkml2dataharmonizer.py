from __future__ import annotations
import re
import logging

from typing import Any, Dict, List

import pandas as pd

from linkml_runtime.utils.schemaview import SchemaView

logger = logging.getLogger(__name__)

# model_file = "target/soil_biosample_interleaved.yaml"
# selected_class = "soil_biosample_class"
# default_section = "default"
# default_source = ""  # for reuse of enums?
# default_capitalize = ""
# default_data_status = ""
# output_file = "target/data.tsv"


class LinkML2DataHarmonizer:
    """Class interface that has methods for conversion
    from LinkML to DataHarmonizer interface."""

    def __init__(self, linkml_model_path: str) -> None:
        self.model_sv = SchemaView(linkml_model_path)
        self.range_tally = []
        self.string_ser_tally = []

    def classes(self) -> Any:
        return self.model_sv.all_classes()

    def enums(self) -> Any:
        return self.model_sv.all_enums()

    def table_columns(self) -> List[str]:
        return [
            "Ontology ID",
            "label",
            "parent class",
            "description",
            "guidance",
            "datatype",
            "pattern",
            "requirement",
            "examples",
            "source",
            "capitalize",
            "data status",
            "max value",
            "min value",
            "EXPORT_dev",
        ]

    def range_data_types(self) -> Dict[str, str]:
        return {
            "date": "xs:date",
            "double": "xs:decimal",
            "string": "xs:token",
            "timestamp value": "date",
        }

    def str_ser_data_types(self) -> Dict[str, str]:
        return {
            "{float}": "xs:decimal",
            "{integer}": "xs:nonNegativeInteger",
            "{timestamp}": "xs:date",
        }

    def range_regexes(self) -> Dict[str, str]:
        return {"quantity value": r"[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)? \S+"}

    def str_ser_regexes(self) -> Dict[str, str]:
        return {
            "{float} {unit}": r"[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)? \S+",
            "{text};{float} {unit}": r"\S*;[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)? \S+",
            "{termLabel} {[termID]}": r".* \[ENVO:\d+\]",
            "{text}:{text}": r"[^\:\n\r]+\:[^\:\n\r]+",
        }

    def log_tally(self, tally: List[str], message: str) -> None:
        logger.info(message)
        logger.info(pd.Series(tally).value_counts())
        logger.info("\n")

    def _req_rec_from_slot_usage(self) -> Dict[str, List[str]]:
        """Get Dictionary of required and recommended properties from slot usage."""
        reqs_from_usage = []

        classes = self.classes()
        class_names = list(classes.keys())
        class_names.sort()

        for cc in class_names:
            current_class = classes[cc]
            ccsu = current_class.slot_usage
            ccsu_names = list(ccsu.keys())
            ccsu_names.sort()
            for current_usage in ccsu_names:
                current_row_dict = {
                    "class": cc,
                    "slot": current_usage,
                    "required": ccsu[current_usage].required,
                    "recommended": ccsu[current_usage].recommended,
                }
                reqs_from_usage.append(current_row_dict)

        reqs_from_usage_frame = pd.DataFrame(reqs_from_usage)
        reqs_from_usage_frame["required"] = reqs_from_usage_frame["required"].fillna(
            False
        )
        reqs_from_usage_frame["recommended"] = reqs_from_usage_frame[
            "recommended"
        ].fillna(False)
        req_from_usage = list(
            reqs_from_usage_frame.loc[reqs_from_usage_frame.required, "slot"]
        )
        rec_from_usage = list(
            reqs_from_usage_frame.loc[reqs_from_usage_frame.recommended, "slot"]
        )

        return {"required": req_from_usage, "recommended": rec_from_usage}

    def _get_is_a_struct(
        self, selected_class: str, default_section: str, as_a: str = "dictionary"
    ):
        relevant_slots = self.model_sv.class_induced_slots(selected_class)
        isa_dict = {}
        isa_set = set()

        for i in relevant_slots:
            # block that adds approporiate section names to the data.tsv
            if i.annotations:
                relevant_isa = i.annotations._get("dh:section_name").value
            else:
                relevant_isa = i.is_a

            isa_dict[i.name] = relevant_isa
            isa_set.add(relevant_isa)

        if as_a == "set":
            return isa_set

        return isa_dict

    def _get_section_list(self, selected_class: str, default_section: str):
        blank_row = {i: "" for i in self.table_columns()}

        isa_set = self._get_is_a_struct(selected_class, default_section, as_a="set")

        isa_list = list(isa_set)
        isa_list = [i for i in isa_list if i]
        isa_list.sort()
        section_list = []
        for i in isa_list:
            current_row = blank_row.copy()
            current_row["label"] = i
            section_list.append(current_row)

        return section_list

    def _get_term_pv_list(
        self,
        selected_class: str,
        default_section: str,
        default_source: str,
        default_capitalize: str,
        default_data_status: str,
    ):
        blank_row = {i: "" for i in self.table_columns()}

        isa_dict = self._get_is_a_struct(selected_class, default_section)

        term_names = list(isa_dict.keys())
        term_names.sort()
        term_list = []
        pv_list = []

        relevant_slots = self.model_sv.class_induced_slots(selected_class)
        rs_names = [i.name for i in relevant_slots]
        rs_dict = dict(zip(rs_names, relevant_slots))

        model_enum_names = list(self.enums().keys())
        model_enum_names.sort()

        for i in term_names:
            logger.info(f"processing {i}")
            current_row = blank_row.copy()
            current_sd = rs_dict[i]

            current_row["Ontology ID"] = current_sd.slot_uri
            if current_sd.title is not None and len(current_sd.title) > 0:
                current_row["label"] = current_sd.title
            else:
                current_row["label"] = current_sd.name

            # useless parent classes:  attribute, <default>,
            current_row["parent class"] = isa_dict[i]

            # description: quote and or bracket wrappers, TODO, empty
            if current_sd.description is None:
                pass
            else:
                # these are of type linkml_runtime.utils.yamlutils.extended_str
                # even though GOLD sample identifiers ['identifiers for corresponding sample in GOLD'] looks like a list
                # current_row["description"] = current_sd.description[0]
                temp = current_sd.description
                temp = re.sub(r"^[\['\"]*", "", temp)
                temp = re.sub(r"['\]\"]*$", "", temp)
                current_row["description"] = temp

            # block that adds column information to the data.tsv
            # the int() is necessary to convert the column number from str type to int so
            # pandas can sort
            try:
                current_row["column_number"] = int(
                    current_sd.annotations._get("dh:column_number").value
                )
            except AttributeError:
                logger.debug(f"No annotations associated with slot {current_sd.name}")
                pass

            # guidance: I have moved slot used in...  out of the MIxS comments
            #  Occurrence is still in there
            #   ~ half of the MixS soil/NMDC biosample fields lack comments for "guidance"
            #   Montana provides her own, to be concatenated on
            #   Damion's latest LinkML -> JS approach lays the comments and examples out nicer
            current_row["guidance"] = " | ".join(current_sd.comments)

            # todo refactor
            current_row["datatype"] = "xs:token"

            if current_sd.pattern is not None and current_sd.pattern != "":
                if (
                    current_row["guidance"] is not None
                    and current_row["guidance"] != ""
                ):
                    current_row["guidance"] = (
                        current_row["guidance"]
                        + " | pattern as regular expression: "
                        + current_sd.pattern
                    )
                else:
                    current_row["guidance"] = (
                        "pattern as regular expression: " + current_sd.pattern
                    )

            if (
                current_sd.string_serialization is not None
                and current_sd.string_serialization != ""
            ):
                if (
                    current_row["guidance"] is not None
                    and current_row["guidance"] != ""
                ):
                    current_row["guidance"] = (
                        current_row["guidance"]
                        + " | pattern generalization: "
                        + current_sd.string_serialization
                    )
                else:
                    current_row["guidance"] = (
                        "pattern generalization: " + current_sd.string_serialization
                    )
                # if current_sd.string_serialization == '{float}':
                #     current_row["datatype"] = "xs:decimal"
            # todo map types
            # don't forget selects and multis
            # map selects to terms and indent
            self.range_tally.append(current_sd.range)

            if (
                current_sd.string_serialization is not None
                and current_sd.string_serialization != ""
            ):
                self.string_ser_tally.append(current_sd.string_serialization[0:99])
            else:
                self.string_ser_tally.append("<none>")

            current_row["pattern"] = current_sd.pattern

            # if (current_sd.pattern is None or current_sd.pattern == "") and current_sd.range == "quantity value":
            #     current_row["pattern"] = q_val_pattern
            # todo check for numeric but don't force float when int will do?
            if current_sd.minimum_value is not None and current_sd.minimum_value != "":
                current_row["min value"] = current_sd.minimum_value

            if current_sd.maximum_value is not None and current_sd.maximum_value != "":
                current_row["max value"] = current_sd.maximum_value

            if current_sd.range in model_enum_names:
                # anything else to clear?
                current_row["pattern"] = ""
                # update this once the enums are built
                if current_sd.multivalued:
                    current_row["datatype"] = "multiple"
                    logger.info(f"    {i} is multi-valued")
                else:
                    current_row["datatype"] = "select"

                model_enums = self.enums()
                pvs_obj = model_enums[current_sd.range].permissible_values
                pv_keys = list(pvs_obj.keys())
                pv_keys.sort()
                for pvk in pv_keys:
                    pv_row = blank_row.copy()
                    pv_row["label"] = pvk
                    pv_row["parent class"] = current_sd.title
                    # use term meaning as ontology ID if possible
                    pv_row["Ontology ID"] = pvs_obj[pvk].meaning
                    pv_list.append(pv_row)

            req_rec_dict = self._req_rec_from_slot_usage()

            if current_sd.recommended or current_sd.name in req_rec_dict["recommended"]:
                current_row["requirement"] = "recommended"
            elif current_sd.required or current_sd.name in req_rec_dict["required"]:
                current_row["requirement"] = "required"

            example_list = []
            for exmpl in current_sd.examples:
                # ignoring description which always seems to be None
                if exmpl.value is not None and len(exmpl.value) > 0:
                    example_list.append(exmpl.value)
                    example_cat = "|".join(example_list)
                    current_row["examples"] = example_cat

            current_row["source"] = default_source  # for reuse of enums?
            current_row["capitalize"] = default_capitalize
            current_row["data status"] = default_data_status
            # any other ways to infer min or max, as a supplement to the datatypes?
            current_row["max value"] = current_sd.maximum_value
            current_row["min value"] = current_sd.minimum_value
            # old issue... export menu saves a file but not with the briefer LinkML names (as opposed to titles)
            current_row["EXPORT_dev"] = current_sd.name

            range_data_types = self.range_data_types()
            str_ser_data_types = self.str_ser_data_types()
            range_regexes = self.range_regexes()
            str_ser_regexes = self.str_ser_regexes()

            if current_sd.range in range_data_types:
                current_row["datatype"] = range_data_types[current_sd.range]
            elif current_sd.string_serialization in str_ser_data_types:
                current_row["datatype"] = str_ser_data_types[
                    current_sd.string_serialization
                ]

            if current_sd.range in range_regexes:
                current_row["pattern"] = range_regexes[current_sd.range]
            elif current_sd.string_serialization in str_ser_regexes:
                current_row["pattern"] = str_ser_regexes[
                    current_sd.string_serialization
                ]

            if current_sd.identifier:
                current_row["datatype"] = "xs:unique"
                current_row["requirement"] = "required"

            term_list.append(current_row)
        logger.info("\n")

        return {"term": term_list, "pv": pv_list}

    def _combined_list(
        self,
        section_list: List[str],
        term_list: List[str],
        pv_list: List[str],
        selected_class: str,
        default_section: str,
    ):
        final_list = section_list + term_list + pv_list
        needs_reordering = pd.DataFrame(final_list)

        slot_review = self.model_sv.class_induced_slots(selected_class)
        identifier_slots = []
        for i in slot_review:
            if i.identifier:
                identifier_slots.append(i.name)

        isa_dict = self._get_is_a_struct(selected_class, default_section)
        identifier_sections = []
        for i in identifier_slots:
            identifier_sections.append(isa_dict[i])

        stolen_label_rows = needs_reordering.loc[
            needs_reordering["label"].isin(identifier_sections)
        ]
        nr_leftovers = needs_reordering.loc[
            ~needs_reordering["label"].isin(identifier_sections)
        ]
        stolen_parent_rows = needs_reordering.loc[
            needs_reordering["parent class"].isin(identifier_sections)
        ]
        nr_leftovers = nr_leftovers.loc[
            ~nr_leftovers["parent class"].isin(identifier_sections)
        ]
        cream_of_crop = stolen_parent_rows.loc[
            stolen_parent_rows["label"].isin(identifier_slots)
        ]
        coc_leftovers = stolen_parent_rows.loc[
            ~stolen_parent_rows["label"].isin(identifier_slots)
        ]

        reunited = stolen_label_rows.append(cream_of_crop)
        reunited = reunited.append(coc_leftovers)
        reunited = reunited.append(nr_leftovers)

        # group columns by sections in the template and order the columns
        # by column_number field
        reunited = reunited.groupby("parent class").apply(
            pd.DataFrame.sort_values, "column_number"
        )

        self.log_tally(
            self.range_tally,
            "TABULATION OF SLOT RANGES, for prioritizing range->regex conversion",
        )
        self.log_tally(
            self.string_ser_tally,
            "TABULATION OF STRING SERIALIZATIONS, for prioritizing serialization->regex conversion",
        )

        return reunited


# # soil biosample
# ranges that could be interpreted as datatypes or patterns
# I already did quantity value
# I have the following rules for any range that is defined as an enum...???
# string                   39
# quantity value           16
# external identifier       3
# date                      3
# cur_land_use_enum         1
# drainage_class_enum       1
# fao_class_enum            1
# double                    1
# profile_position_enum     1
# soil_horizon_enum         1
# tillage_enum              1
