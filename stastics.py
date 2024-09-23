import pandas as pd
import numpy as np

def calculate_statistics(df, column_name):
    column = df[column_name]
    mean = column.mean()
    median = column.median()
    deviation = column.std()

    return mean, median, deviation

df = pd.read_csv('test.csv')

mean, median, std_dev = calculate_statistics(df, 'Age')

print(f"Mean: {mean}")
print(f"Median: {median}")
print(f"Standard Deviation: {std_dev}")



