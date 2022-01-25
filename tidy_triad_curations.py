import linkml_round_trips.modular_gd as mgd

raw = mgd.get_gsheet_frame('local/client_secret.apps.googleusercontent.com.json',
                           '1WErXj8sM5uJi51VVLNQZDilDF7wMiyBC2T4zELp7Axc',
                           'Subset_EnvO_Broad_Local_Medium_terms_062221')

raw.columns = ['enum', 'raw_id', 'permissible_value', 'definition', 'env_package']

raw['partial'] = raw['raw_id'].str.replace('<http://purl.obolibrary.org/obo/ENVO_', 'ENVO:')

raw['term_id'] = raw['partial'].str.replace('>', '')

raw = raw[['env_package', 'enum', 'permissible_value', 'term_id']]

raw['env_package'] = raw['env_package'].str.split("|", expand=False)

df_explode = raw.explode('env_package')

df_explode = df_explode.loc[df_explode['env_package'].eq('Soil')]

df_explode['env_package'] = df_explode["env_package"].str.lower()

df_explode.to_csv("tidy_triad_curations.tsv", sep="\t", index=False)
