from linkml_runtime.linkml_model import (SlotDefinition)
from linkml_runtime.dumpers import yaml_dumper
import yaml
from pprint import pprint
from linkml_runtime.loaders import yaml_loader

sd = SlotDefinition(name="agrochem_addition",
                    description="Addition of fertilizers, pesticides, etc. - amount and time of applications",
                    title="history/agrochemical additions",
                    from_schema="http://example.com/MIxS",
                    is_a="core field",
                    string_serialization='{text};{float} {unit};{timestamp}',
                    slot_uri="MIXS:0000639",
                    multivalued=True,
                    owner="soil",
                    range="quantity value",
                    required=False)
print("Original SlotDefinition")
print(sd)
print("\n")

print("As a YAML string")
ys = yaml_dumper.dumps(sd)
print(ys)
print("\n")
reload_ys = SlotDefinition(ys)
print("Attempted reload from YAML string")
print(reload_ys)
print("\n")

print("As a dictionary")
asdict = yaml.safe_load(ys)
pprint(asdict)
print("\n")
print("Attempted reload from dictionary")
reload_asdict = SlotDefinition(asdict)
print(reload_asdict)

# redo = SlotDefinition(yd)

obj = yaml_loader.loads(ys, SlotDefinition)
print(obj)
