# Name Transformation and Filtering Problem

## Problem Statement  
Imagine you are developing a name-processing tool for a contact management application. You have a list of names in the format **"Last Name, First Name"**, and you need to perform the following tasks:

1. **Transform** the list of full names into the format **"First Name Last Name"** using a lambda function.
2. **Filter** the list to include only names that:  
   - Contain at least **two vowels** (a, e, i, o, u).  
   - Have a **length greater than 10 characters**.  

---

## Example Input and Output  

### **Input:**  
```python
names = ["Pérez, Juan", "López, María", "García, José", "Smith, John"]
```
### **Output:**  
```py
['María López', 'José García']
```