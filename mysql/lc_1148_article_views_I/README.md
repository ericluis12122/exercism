# Article Views I

## Table Schema

### `Views` Table:

| Column Name | Type    |
|-------------|---------|
| article_id  | int     |
| author_id   | int     |
| viewer_id   | int     |
| view_date   | date    |

- There is **no primary key** in this table, meaning it may contain **duplicate rows**.
- Each row represents a **viewer** viewing an **article** written by an **author** on a specific **date**.
- If `author_id` and `viewer_id` are the same, it means the **author viewed their own article**.

## Problem Statement
Find all **authors** who have viewed at least one of their **own articles**.

### **Constraints**
- The result must be sorted by **id in ascending order**.

## Example

### **Input:**
#### `Views` Table:

| article_id | author_id | viewer_id | view_date  |
|------------|-----------|-----------|------------|
| 1          | 3         | 5         | 2019-08-01 |
| 1          | 3         | 6         | 2019-08-02 |
| 2          | 7         | 7         | 2019-08-01 |
| 2          | 7         | 6         | 2019-08-02 |
| 4          | 7         | 1         | 2019-07-22 |
| 3          | 4         | 4         | 2019-07-21 |
| 3          | 4         | 4         | 2019-07-21 |

### **Output:**

| id   |
|------|
| 4    |
| 7    |