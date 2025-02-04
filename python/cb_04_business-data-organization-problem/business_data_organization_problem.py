from collections import defaultdict

# Sample employee data
employees = [
    {"name": "Alice", "age": 30, "performance": 90, "country": "USA"},
    {"name": "Bob", "age": 25, "performance": 95, "country": "Canada"},
    {"name": "Charlie", "age": 35, "performance": 90, "country": "USA"},
    {"name": "David", "age": 28, "performance": 95, "country": "Canada"},
    {"name": "Eve", "age": 30, "performance": 85, "country": "Germany"},
    {"name": "Frank", "age": 33, "performance": 90, "country": "Germany"},
]

# Sorting: First by performance (descending), then by age (ascending)
sorted_employees = sorted(employees, key=lambda e: (-e["performance"], e["age"]))

# Grouping employees by country
grouped_employees = defaultdict(list)
for emp in sorted_employees:
    grouped_employees[emp["country"]].append(emp)

# Display results
for country, emp_list in grouped_employees.items():
    print(f"\nCountry: {country}")
    for emp in emp_list:
        print(f"  {emp['name']} - Age: {emp['age']}, Performance: {emp['performance']}")