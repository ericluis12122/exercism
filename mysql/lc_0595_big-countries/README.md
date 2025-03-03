# Big Countries

## Table Schema

### `World` Table:

| Column Name | Type    |
|-------------|---------|
| name        | varchar |
| continent   | varchar |
| area        | int     |
| population  | int     |
| gdp         | bigint  |

- `name` is the **primary key** (unique values).
- Each row provides information about a country's **name, continent, area, population, and GDP**.

## Problem Statement
A country is considered **big** if:
1. It has an **area** of at least **3,000,000** km².
2. OR it has a **population** of at least **25,000,000**.

Write a **SQL query** to retrieve the **name, population, and area** of all big countries.

## Example

### **Input:**
#### `World` Table:

| name        | continent | area    | population | gdp          |
|------------|-----------|---------|------------|--------------|
| Afghanistan | Asia      | 652230  | 25500100   | 20343000000  |
| Albania     | Europe    | 28748   | 2831741    | 12960000000  |
| Algeria     | Africa    | 2381741 | 37100000   | 188681000000 |
| Andorra     | Europe    | 468     | 78115      | 3712000000   |
| Angola      | Africa    | 1246700 | 20609294   | 100990000000 |

### **Output:**

| name        | population | area    |
|------------|------------|---------|
| Afghanistan | 25500100   | 652230  |
| Algeria     | 37100000   | 2381741 |