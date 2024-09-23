import pandas as pd
import matplotlib.pyplot as plt

def age_visualize (df, column_name):
        age_counts = df[column_name].value_counts().sort_index()
        plt.figure(figsize=(20, 10))
        plt.bar(age_counts.index, age_counts.values, color='skyblue')

        plt.xlabel('Age')
        plt.ylabel('Number of Users')
        plt.title('Age Distribution of Users')

        plt.show()

df = pd.read_csv('test.csv')

age_visualize(df, 'Age')