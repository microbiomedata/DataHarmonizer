import click

from sheet2dataharmonizer.converters.linkml2dataharmonizer import LinkML2DataHarmonizer


@click.command()
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
