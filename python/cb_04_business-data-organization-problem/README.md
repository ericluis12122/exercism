# Business Data Organization Problem  

Imagine you work at an international company with teams distributed across different countries.  
Each team has a list of employees represented as dictionaries, containing the following information:  
- **Name**  
- **Age**  
- **Performance in recent projects**  

## Objective  
Your task is to consolidate a list of all employees in the company, following these organization rules:  
1. **Sort by performance in recent projects** (in descending order).  
2. **If performance is the same**, sort by age (in ascending order).  
3. **Group employees by country** for better analysis.  

### Requirements  
- Use **lambda functions** for sorting and grouping.  

### Example  
#### Input  
An employee record represented in **JSON, dictionaries, or another data structure**.  

#### Output  
A list of employees **grouped by country and sorted according to the defined rules**.  
