.PHONY: all setup clean post_clone_submodule_steps test

all: docs/template/dev/data.tsv target/mixs_package_classes.tsv target/soil_biosample_regex_insight.tsv

# target/mixs_package_classes.tsv target/soil_biosample_regex_insight.tsv

setup: clean post_clone_submodule_steps target/string_serialization_check.txt target/string_serialization_expected_failure.txt test
	# this sets the poetry environment, not the poetry application
	# setting up the poetry application is the user's responsibility
	# https://python-poetry.org/docs/#installation
	poetry install

clean:
	rm -f target/*.yaml
	rm -f target/*.tsv
	rm -f target/*.log

test:
	# avoiding tests in submodules
	poetry run pytest -rP tests/

# turbomam/mixs-source
#   moves "patterns" to string serializastions
#   removes some comments
#   still having trouble instantiating annotations for what used to be comments about Occurrence, "This field is used..."
# yaml.representer.RepresenterError: ('cannot represent an object', JsonObj(Occurrence=Annotation(tag='Occurrence', value='', extensions={}, annotations={})))
post_clone_submodule_steps:
	git submodule init
	git submodule update

# this LinkML to DataHarmonizer workflow wants stuff like {PMID}|{DOI}|{URL} in "string_serialization" not "pattern"
# egrep may not behave the same way on all systems
# make it a real test
target/string_serialization_check.txt:
	egrep "string_serialization:.*{PMID}|{DOI}|{URL}" mixs-source/model/schema/terms.yaml > $@

# demonstrating that a failed step terminates the make process
target/string_serialization_expected_failure.txt:
	- egrep "pattern:.*{PMID}|{DOI}|{URL}" ../mixs-source/model/schema/*yaml > $@

target/soil_biosample_regex_insight.tsv: target/soil_biosample_modular.yaml
	poetry run python ranges_string_sers.py \
		--model_file target/soil_biosample_modular_annotated.yaml \
		--selected_class soil_biosample \
		--output_file $@

target/mixs_package_classes.tsv:
	poetry run mixs_package_classes \
		--model_file mixs-source/model/schema/mixs.yaml --output_file $@

target/mixs_generated.yaml: setup
	# passing these schemas through the yaml generator ensures(?) prefixed term ids
	#   and consolidates the model into a single file
	poetry run gen-yaml mixs-source/model/schema/mixs.yaml > $@ 2>> target/yaml_generation.log

target/mixs_generated_no_imports.yaml: target/mixs_generated.yaml
	# deleting the imports block since we've already generated complete models
	#   and SchemaView won't find the imports
	yq eval 'del(.imports)' $< > $@

target/nmdc_generated.yaml: setup
	poetry run gen-yaml nmdc-schema/src/schema/nmdc.yaml > $@  2>> target/yaml_generation.log

target/nmdc_generated_no_imports.yaml: target/nmdc_generated.yaml
	yq eval 'del(.imports)' $< > $@

target/soil_biosample_modular.yaml: target/mixs_generated_no_imports.yaml target/nmdc_generated_no_imports.yaml
	# combine or mint terms according to the Soil-NMDC-Template_Compiled Google Sheet
	#   and consulting the generated models above
	poetry run combine_schemas --verbosity INFO --env_package soil --inc_emsl --jgi metagenomics > $@
	# test for LinkML schema validity
	# todo see: mangled name already exists #92
	yq eval 'del(.classes.["quantity value"].attributes)' $@ > target/soil_biosample_modular_no_redundant_mangling.yaml
	poetry run gen-yaml \
		target/soil_biosample_modular_no_redundant_mangling.yaml > target/soil_biosample_modular_no_redundant_mangling_generated.yaml 2> target/soil_biosample_modular_no_redundant_mangling_generated.log

target/soil_biosample_modular_annotated.yaml: target/soil_biosample_modular.yaml
	# find EnvO terms to account for FAO soil classes at least
	poetry run enum_annotator \
		--modelfile $< \
		--requested_enum_name fao_class_enum \
		--ontology_string ENVO \
		--max_cosine 0.1  > target/temp1.yaml 2>> target/annotation.log
	poetry run enum_annotator \
		--modelfile target/temp1.yaml \
		--requested_enum_name cur_land_use_enum \
		--ontology_string ENVO \
		--max_cosine 0.1  \
		--trim_parentheticals  > target/temp2.yaml 2>> target/annotation.log
	poetry run enum_annotator \
		--modelfile target/temp2.yaml \
		--requested_enum_name analysis_type_enum \
		--ontology_string ENVO \
		--max_cosine 0.1 > $@ 2>> target/annotation.log
	rm -rf target/temp*yaml

target/data.tsv: target/soil_biosample_modular_annotated.yaml
	poetry run linkml_to_dh_light --model_file $< --selected_class soil_biosample 2> target/linkml_to_dh_light.log

target/soil_ebs_terms.txt:
	poetry run python tidy_triad_curations.py \
		--client_secret local/client_secret.apps.googleusercontent.com.json \
		--sheet_id "1WErXj8sM5uJi51VVLNQZDilDF7wMiyBC2T4zELp7Axc" \
		--tab_title "Subset_EnvO_Broad_Local_Medium_terms_062221" \
		--env_package 'Soil' \
		--curated_tsv_out $@

# need a method for generating the envo*tsv files
# include hident sparql files
# how to access?
# will require robot
# what other system requirements do we have besides python 3.9, poetry and yq?
target/soil_ebs_terms_indented.tsv: target/soil_ebs_terms.txt
	poetry run hident \
		--sco_tab_file_name artifacts/envo_sco.tsv \
		--lab_tab_file_name artifacts/envo_labs.tsv \
		--curie_file_name $< \
		--pad_char _ \
		--pad_count 2 \
		--parent_term 'broad-scale environmental context' \
		--indented_tsv $@

target/data_promoted.tsv: target/data.tsv target/soil_ebs_terms_indented.tsv
	# todo this is 1) a workaround for: yet another 'Failed to map' #79
	# a way to add enum/select rows (from hident?) and change the owning column to type "select"
	# currently disables the owning column's regex validation
	poetry run python promote_to_select.py \
		--promote 'broad-scale environmental context' \
		--extra_row_files artifacts/extra_mixs_inv_field_row.tsv \
		--extra_row_files target/soil_ebs_terms_indented.tsv \
		--data_tsv_out $@

# this converts data.tsv to a data harmonizer main.html + main.js etc.
#  and then stages it in the docs folder which will be exposed via GH pages
docs/template/dev/data.tsv: target/data_promoted.tsv
	cp $< template/dev/data.tsv
	cd template/dev && poetry run python ../../script/make_data.py 2> make_data.log && cd -
	cp -r libraries docs
	cp -r script docs
	cp -r template docs
	cp main.css main.html docs
	# add, commit, push and merge main (with GH pages enabled) so that people can see the results at
	#   https://turbomam.github.io/DataHarmonizer/main.html
	#   go to the GH pages setup screen eg https://github.com/org/repo/settings/pages
	#     ensure that the pages are being built from the docs folder in the master/main branch



# todo may want to work on related files like SOP.pdf, reference_template.html (before make_data.py?)

# todo: check export results
#   the column headers in the exported file should use slot names, not slot titles
#   corresponding to mixs_6_slot_name (etc)  and "Column Header" from the Soil-NMDC-Template_Compiled google sheet
#   or EXPORT_dev and label from the DH template
# data.tsv has an EXPORT_dev column populated with slot names
# export.js was pasted in based a default-case advice from Damion

# todo: slots with identifier=True are now required/unique. check that they appear on the left hand side of template

# todo: provide more valid and invalid example data files in exampleInput

#   static deviations vs  cidgoh/DataHarmonizer, based on their main branch as of early Dec 2021:
#     edited the const TEMPLATES in script/main.js to refect what templates are avaialble,
#       how they should be labelled and tagged for publication vs draft
#     updated the definition of template_label (let template_label) to reflect the label of the desired default template

# general makefile thought: try using $(word 2,$^) for 2nd and later dependencies


## todo: using target/nmdc_biosample_generated.yaml as input here
##   forces the inclusion of reasonable slot uris, but also forces in-lining of enums?
##   should put slot uri generation code in get_dependencies (DONE?)
#
#target/soil_biosample.yaml:target/mixs_soil.yaml target/nmdc_biosample_generated.yaml
#	poetry run merge_dont_interleave \
#		--model_file1 target/mixs_soil.yaml \
#		--model_file2 target/nmdc_biosample.yaml \
#		--output $@
#
#
#target/soil_biosample_interleaved.yaml: target/soil_biosample.yaml
#	#poetry run python linkml_round_trips/interleave_mergeds.py
#	poetry run interleave_mergeds \
#		--model_file=$< \
#		--class1 "soil" \
#		--class2 "biosample" \
#		--source_name1 "MIxS" \
#		--source_name2 "NMDC" \
#		--output $@
#	# can check the validity of any LinkML file (and generate a more explicit version?) with gen-yaml
#	poetry run gen-yaml \
#		target/soil_biosample_interleaved.yaml > target/soil_biosample_interleaved_generated.yaml \
#			2> target/soil_biosample_interleaved_generated.log
#
## if range is one of the enums, then pattern is probably a string serialization
##   *something* along those lines is being checked in linkml_to_dh_light.py, but that should be moved into make model/schema/mixs.yaml
#target/data.tsv: target/soil_biosample_interleaved.yaml
#	poetry run linkml_to_dh_light \
#		--model_file $< \
#		--selected_class soil_biosample_class \
#		--output_file=$@


