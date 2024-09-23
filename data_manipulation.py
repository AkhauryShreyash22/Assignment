import pandas as pd

def above30rows(df, column_name):
    filtered_df = df[df[column_name] > 30]
    return filtered_df.head(5)

df = pd.read_csv('test.csv')
data_frame = pd.DataFrame(df)
print(above30rows(df, 'Age'))
