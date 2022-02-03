import logging
from typing import Dict, Any, List

import pygsheets
import pandas as pd

from linkml_runtime.linkml_model import (
    SchemaDefinition,
    ClassDefinition,
    Prefix,
    SlotDefinition,
    Example,
    Annotation
)
from linkml_runtime.utils.schemaview import SchemaView

from pandasql import sqldf

logger = logging.getLogger(__name__)


class Sheet2LinkML:
    def __init__(self, path_to_yaml: str) -> None:
        self.path_to_yaml = path_to_yaml

    @staticmethod
    def get_gsheet_frame(
            gauth_file_path: str, sheet_id: str, title: str
    ) -> pd.DataFrame:
        gc = pygsheets.authorize(client_secret=gauth_file_path)
        gsheet = gc.open_by_key(sheet_id)
        current_tab = gsheet.worksheet("title", title)
        current_frame = current_tab.get_as_df()

        return current_frame

    def make_view_helper(self, schema_alias: str, class_name: str) -> Dict[str, Any]:
        current_view = SchemaView(self.path_to_yaml)
        current_slots = current_view.all_slots()
        induced_slots = current_view.class_induced_slots(class_name)
        induced_slot_names = [i.name for i in induced_slots]
        is_dict = dict(zip(induced_slot_names, induced_slots))
        all_classes = current_view.all_classes()
        ac_names = [k for k, v in all_classes.items()]
        all_enums = current_view.all_enums()
        ae_names = [k for k, v in all_enums.items()]
        all_types = current_view.all_types()
        at_names = [k for k, v in all_types.items()]

        return {
            "schema_alias": schema_alias,
            "view": current_view,
            "schema_slot_dict": current_slots,
            "schema_class_names": ac_names,
            "schema_enum_names": ae_names,
            "schema_type_names": at_names,
            "class_name": class_name,
            "class_slots_dict": is_dict,
        }

    @staticmethod
    def get_slot_provenance(
            slot_list: List[str], helped_schema: Dict[str, List[str]]
    ) -> Dict[str, List[str]]:
        provenance_dict = {"class_induced": [], "schema_other": [], "non_schema": []}
        for current_slot in slot_list:
            if current_slot in helped_schema["class_slots_dict"]:
                current_provenance = "class_induced"
            elif current_slot in helped_schema["schema_slot_dict"]:
                current_provenance = "schema_other"
            else:
                current_provenance = "non_schema"
            provenance_dict[current_provenance].append(current_slot)
        return provenance_dict

    @staticmethod
    def construct_schema(
            schema_name: str,
            schema_id: str,
            class_name: str,
            prefix_dict: Dict[str, str],
    ) -> SchemaDefinition:
        constructed_schema = SchemaDefinition(name=schema_name, id=schema_id)
        constructed_class = ClassDefinition(name=class_name)
        constructed_schema.classes[class_name] = constructed_class
        constructed_schema.classes[class_name].from_schema = schema_id
        for k, v in prefix_dict.items():
            constructed_schema.prefixes[k] = Prefix(prefix_prefix=k, prefix_reference=v)
        return constructed_schema

    def modular_exhaust_class(
            self, dict_to_exhaust: Dict[str, str], helped_schema: Dict[str, str]
    ) -> Dict[str, str]:
        all_slots_dict = helped_schema["schema_slot_dict"]
        all_class_names = helped_schema["schema_class_names"]
        all_enum_names = helped_schema["schema_enum_names"]
        all_type_names = helped_schema["schema_type_names"]

        if (
                len(dict_to_exhaust["pending_ranges"]) == 0
                and len(dict_to_exhaust["pending_slots"]) == 0
        ):
            mvp = helped_schema["view"].schema.prefixes
            mvs = helped_schema["view"].all_subsets()
            dict_to_exhaust["prefixes"] = mvp
            dict_to_exhaust["subsets"] = mvs
            return dict_to_exhaust
        else:
            class_parents = set()
            usage_ranges = set()
            for pc in dict_to_exhaust["pending_ranges"]:
                dict_to_exhaust["exhausted_ranges"].add(pc)
                i_s = helped_schema["view"].class_induced_slots(pc)
                isnl = [slot.name for slot in i_s]
                isns = set(isnl)
                dict_to_exhaust["pending_slots"] = dict_to_exhaust[
                    "pending_slots"
                ].union(isns)
                class_parents.update(set(helped_schema["view"].class_ancestors(pc)))
                cd = helped_schema["view"].get_class(pc)
                for k, v in cd.slot_usage.items():
                    if v.range is not None:
                        usage_ranges.add(v.range)
            dict_to_exhaust["pending_ranges"] = (
                    dict_to_exhaust["pending_ranges"] - dict_to_exhaust["exhausted_ranges"]
            )
            for cp in class_parents:
                if cp not in dict_to_exhaust["exhausted_ranges"]:
                    dict_to_exhaust["pending_ranges"].add(cp)
            for ur in usage_ranges:
                if (
                        ur in all_class_names
                        and ur not in dict_to_exhaust["exhausted_ranges"]
                ):
                    dict_to_exhaust["pending_ranges"].add(ur)
                if ur in all_type_names:
                    # a typeof could sneak in here?
                    dict_to_exhaust["exhausted_types"].add(ur)
            isas = set()
            for ps in dict_to_exhaust["pending_slots"]:
                if ps not in dict_to_exhaust["exhausted_slots"]:
                    current_slot_def = all_slots_dict[ps]
                    isas.update(set(helped_schema["view"].slot_ancestors(ps)))

                    current_slot_range = current_slot_def.range
                    if current_slot_range is not None:
                        if current_slot_range in all_type_names:
                            dict_to_exhaust["exhausted_types"].add(current_slot_range)
                            td = helped_schema["view"].get_type(current_slot_range)
                            tdto = td.typeof
                            if tdto is not None:
                                dict_to_exhaust["exhausted_types"].add(tdto)
                        if current_slot_range in all_enum_names:
                            dict_to_exhaust["exhausted_enums"].add(current_slot_range)
                        if current_slot_range in all_class_names:
                            if (
                                    current_slot_range
                                    not in dict_to_exhaust["exhausted_ranges"]
                            ):
                                dict_to_exhaust["pending_ranges"].add(
                                    current_slot_range
                                )

                    # refactor?
                    current_slot_domain = current_slot_def.domain
                    if current_slot_domain is not None:
                        if (
                                current_slot_domain
                                not in dict_to_exhaust["exhausted_ranges"]
                        ):
                            dict_to_exhaust["pending_ranges"].add(current_slot_domain)

                    dict_to_exhaust["exhausted_slots"].add(ps)
            dict_to_exhaust["pending_slots"] = (
                    dict_to_exhaust["pending_slots"] - dict_to_exhaust["exhausted_slots"]
            )
            for parent in isas:
                dict_to_exhaust["pending_slots"].add(parent)

            return self.modular_exhaust_class(dict_to_exhaust, helped_schema)

    def wrapper(
            self,
            schema_alias: str,
            selected_class: str,
            selected_slots: List[str],
            dest_schema: SchemaDefinition,
            dest_class: str,
            col_sects_orders: pd.DataFrame
    ) -> SchemaDefinition:
        helped = self.make_view_helper(schema_alias, selected_class)

        slot_provenance = Sheet2LinkML.get_slot_provenance(selected_slots, helped)

        class_slot_dict = {
            "pending_ranges": set(),
            "pending_slots": set(),
            "exhausted_ranges": set(),
            "exhausted_slots": set(),
            "exhausted_enums": set(),
            "exhausted_types": set(),
        }

        for i in slot_provenance["schema_other"]:
            class_slot_dict["pending_slots"].add(i)
        for i in slot_provenance["class_induced"]:
            class_slot_dict["pending_slots"].add(i)
        class_slot_dict["pending_ranges"].add(selected_class)

        exhaustion_res = self.modular_exhaust_class(class_slot_dict, helped)

        # REFACTOR ?
        for i in exhaustion_res["exhausted_enums"]:
            dest_schema.enums[i] = helped["view"].get_enum(i)
        # remember could handle differently for induces slots/slot usage
        for i in exhaustion_res["exhausted_slots"]:
            dest_schema.slots[i] = helped["view"].get_slot(i)
        for i in exhaustion_res["exhausted_ranges"]:
            temp = helped["view"].get_class(i)
            dest_schema.classes[i] = temp
        for i in exhaustion_res["exhausted_types"]:
            dest_schema.types[i] = helped["view"].get_type(i)

        # don't forget about possibility of adding induced slots as slot usages
        for i in selected_slots:
            slot_sect = col_sects_orders.loc[col_sects_orders['slot'].eq(i), 'section'].squeeze()
            slot_ord = col_sects_orders.loc[col_sects_orders['slot'].eq(i), 'column_order'].squeeze()
            # logger.warning(i)
            sect_ann = Annotation(tag="dh:section_name", value=slot_sect)
            dest_schema.slots[i].annotations["dh:section_name"] = sect_ann
            ord_ann = Annotation(tag="dh:column_number", value=slot_ord)
            dest_schema.slots[i].annotations["dh:column_number"] = ord_ann
            # logger.warning(dest_schema.slots[i])
            dest_schema.classes[dest_class].slots.append(i)

        for k, v in exhaustion_res["prefixes"].items():
            dest_schema.prefixes[k] = v

        for k, v in exhaustion_res["subsets"].items():
            dest_schema.subsets[k] = v

        return dest_schema

    @staticmethod
    def subset_slots_from_sheet(
            secret: str, id_of_sheet: str, sheet_title: str, query: str
    ) -> List[str]:
        gsheet_frame = Sheet2LinkML.get_gsheet_frame(secret, id_of_sheet, sheet_title)
        # Local variable 'gsheet_frame' value is not used
        throwaway = type(gsheet_frame)
        pysqldf_res = sqldf(query)
        slot_list = list(pysqldf_res["slot"])
        return slot_list
