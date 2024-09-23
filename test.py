import csv

data = [
    ['Name', 'Age'],
    ['Shreyash', 22],
    ['Rajesh', 30],
    ['Rakesh', 35],
    ['Rohan', 30],
    ['Rahul'],
    ['Sohan'],
    ['Abhishek', 22],
    ['Abhinash', 30]
]

with open('test.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerows(data)

print("CSV file created successfully!")
