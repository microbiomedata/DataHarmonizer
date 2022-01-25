import linkml_round_trips.modular_gd as mgd
# from linkml_runtime.linkml_model import SlotDefinition, Example, EnumDefinition
from linkml_runtime.dumpers import yaml_dumper

import click

import logging
import click_log

import pandas as pd

logger = logging.getLogger(__name__)
click_log.basic_config(logger)


@click.command()
@click_log.simple_verbosity_option()
@click.option('--data_tsv_in', default="target/data.tsv", type=click.Path(exists=True),
              help='path to DataHarmonizer data.tsv input', show_default=True)
@click.option('--data_tsv_out', default="target/data_promoted.tsv", type=click.Path(),
              help='destination for modified data.tsv', show_default=True)
@click.option('--promote', multiple=True, help='which columns should be promoted to select type?')
@click.option('--extra_row_files', multiple=True, type=click.Path(exists=True),
              help='path to files defining the new select/enum column(s) etc.', show_default=True)
def promote_to_select(data_tsv_in, data_tsv_out, promote, extra_row_files):
    data_in = pd.read_csv(data_tsv_in, sep="\t")
    for i in promote:
        logger.info(i)
        data_in.loc[data_in['label'].eq(i), 'datatype'] = 'select'
        data_in.loc[data_in['label'].eq(i), 'pattern'] = ''
    to_concat = [data_in]
    for i in extra_row_files:
        logger.info(i)
        temp = pd.read_csv(i, sep="\t")
        to_concat.append(temp)
    catted = pd.concat(to_concat)
    catted.to_csv(data_tsv_out, sep="\t", index=False)


if __name__ == '__main__':
    promote_to_select()
