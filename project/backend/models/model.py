import json
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
import numpy as np
from lesions_data import lesions

# Convert lesions dictionary to DataFrame
lesion_data = []
for isic_id, details in lesions.items():
    if 'diagnosis' in details:
        lesion_data.append([isic_id] + list(details['data']) + [details['diagnosis']])

# Define column names
columns = ['isic_id', 'border_jaggedness', 'border_asymmetry', 'color_asymmetry',
           'color_irregularity', 'contrast', 'diagnosis']
df = pd.DataFrame(lesion_data, columns=columns)

# Map diagnosis to binary values: malignant as 1, others as 0
df['label'] = df['diagnosis'].apply(lambda x: 1 if x == 'Malignant' else 0)

# Define feature set and labels
X = df[['border_jaggedness', 'border_asymmetry', 'color_asymmetry',
        'color_irregularity', 'contrast']]
y = df['label']

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create and fit the model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Get feature importances
feature_importances = model.feature_importances_
features = X.columns

# Standardizing the features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Calculate contribution scores
contribution_scores = np.dot(X_scaled, feature_importances)

# Create a DataFrame to hold contribution scores
contribution_df = pd.DataFrame(X_scaled, columns=features)
contribution_df['contribution_score'] = contribution_scores
contribution_df['isic_id'] = df['isic_id']  # Add isic_id for reference
contribution_df['diagnosis'] = df['diagnosis']  # Include diagnosis for filtering

# Set a significance threshold (e.g., mean contribution score + 1 std deviation)
mean_score = contribution_df['contribution_score'].mean()
std_score = contribution_df['contribution_score'].std()
threshold = mean_score + std_score

# Identify significant features
contribution_df['significant'] = contribution_df['contribution_score'] > threshold

# Filter for malignant cases with significant contributions
malignant_contributions = contribution_df[
    contribution_df['diagnosis'] == 'Malignant'
]

# Create a list to hold the results
malignant_feature_lists = []
malignant_dict = {}

# Generate a list of features that meet the threshold for each malignant lesion
for _, row in malignant_contributions.iterrows():
    isic_id = row['isic_id']
    significant_features = [feature for feature in features if row[feature] > threshold]
    if not significant_features:  # If no features passed the threshold
        # Calculate z-scores
        z_scores = (row[:-3] - mean_score) / std_score
        highest_z_score_feature = z_scores.idxmax()  # Get the feature with the highest z-score
        significant_features = [highest_z_score_feature]
    malignant_dict[isic_id] = significant_features

with open("malignant_features.json", "w") as f:
    json.dump(malignant_dict, f)
