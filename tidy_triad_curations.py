import linkml_round_trips.modular_gd as mgd
import click
import logging
import click_log

# import pandas as pd

logger = logging.getLogger(__name__)
click_log.basic_config(logger)


@click.command()
@click_log.simple_verbosity_option()
@click.option('--client_secret', default="local/client_secret.apps.googleusercontent.com.json",
              type=click.Path(exists=True),
              help='path your google sheet authentication file', show_default=True)
@click.option('--sheet_id', default="1WErXj8sM5uJi51VVLNQZDilDF7wMiyBC2T4zELp7Axc",
              help='ID of the google sheet that will provide the curated enums', show_default=True)
@click.option('--tab_title', default="Subset_EnvO_Broad_Local_Medium_terms_062221",
              help='which tab in the google sheet will provide the curated enums?', show_default=True)
@click.option('--curated_tsv_out', default="target/tidy_triad_curations.tsv", type=click.Path(),
              help='destination for modified data.tsv', show_default=True)
@click.option('--env_package', default='Soil',
              help="""for which environmental packages (as expressed in the google sheet) 
              do you want do extract curated enums??""")
def tidy_triad_curations(client_secret, sheet_id, tab_title, curated_tsv_out, env_package):
    raw = mgd.get_gsheet_frame(client_secret, sheet_id, tab_title)

    raw.columns = ['enum', 'raw_id', 'permissible_value', 'definition', 'env_package']

    raw['partial'] = raw['raw_id'].str.replace('<http://purl.obolibrary.org/obo/ENVO_', 'ENVO:', regex=True)

    raw['term_id'] = raw['partial'].str.replace('>', '', regex=True)

    raw = raw[['env_package', 'enum', 'permissible_value', 'term_id']]

    raw['env_package'] = raw['env_package'].str.split("|", expand=False)

    df_explode = raw.explode('env_package')

    df_explode = df_explode.loc[df_explode['env_package'].eq(env_package)]

    df_explode['env_package'] = df_explode["env_package"].str.lower()

    df_explode.to_csv(curated_tsv_out, sep="\t", index=False)


if __name__ == '__main__':
    tidy_triad_curations()
