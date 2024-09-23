import pandas as pd

df = pd.read_csv('test.csv')

new_df = df.dropna()

print ("original data")

print(df.to_string()) 

print ('After cleaning')

print (new_df.to_string())