import pandas as pd

# Load the metadata
metadata = pd.read_csv("training_data/metadata.csv")
supp_metadata = pd.read_csv("supplemental_data.csv")

lesions = {}
border_jaggedness = 'tbp_lv_area_perim_ratio'
border_asymmetry = 'tbp_lv_symm_2axis'
color_asymmetry = 'tbp_lv_radial_color_std_max'
color_irregularity = 'tbp_lv_color_std_mean'
contrast = 'tbp_lv_deltaLBnorm'

# Populate lesions dictionary from metadata
for index, entry in metadata.iterrows():
    lesions[entry['isic_id']] = {
        'data': (
            entry[border_jaggedness],
            entry[border_asymmetry],
            entry[color_asymmetry],
            entry[color_irregularity],
            entry[contrast]
        )
    }

# Add diagnosis information from supplementary metadata
for index, entry in supp_metadata.iterrows():
    if entry['isic_id'] in lesions:  # Ensure the key exists
        lesions[entry['isic_id']]['diagnosis'] = entry['iddx_1']
