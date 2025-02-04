from functools import reduce
from collections import defaultdict

# Datos de ejemplo
sales = [
    {"product": "Laptop", "date": "2024-10-15", "amount": 1200, "location": "USA"},
    {"product": "Phone", "date": "2024-11-20", "amount": 800, "location": "Canada"},
    {"product": "Tablet", "date": "2024-12-05", "amount": 600, "location": "USA"},
    {"product": "Monitor", "date": "2024-07-10", "amount": 400, "location": "Mexico"},
    {"product": "Headphones", "date": "2024-12-25", "amount": 550, "location": "Canada"},
    {"product": "Camera", "date": "2024-09-05", "amount": 700, "location": "USA"},
]

# Filtrar ventas del último trimestre y con monto superior a $500
filtered_sales = list(filter(lambda s: int(s["date"].split("-")[1]) in {10, 11, 12} and s["amount"] > 500, sales))

# Agrupar por ubicación
grouped_sales = reduce(lambda acc, s: acc[s["location"]].append(s["amount"]) or acc, filtered_sales, defaultdict(list))

# Calcular promedio de ventas por ubicación y ordenar por monto promedio descendente
sorted_locations = sorted(grouped_sales.items(), key=lambda x: sum(x[1]) / len(x[1]), reverse=True)

# Imprimir resultados
print([loc for loc, _ in sorted_locations])