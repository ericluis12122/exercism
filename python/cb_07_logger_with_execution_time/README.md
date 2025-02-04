# Logger with Execution Time

## Problem Statement  
Imagine you are developing a complex system that includes multiple critical functions. To ensure everything runs correctly and to track the execution time of these functions, you decide to implement a **logging decorator** that measures execution time.

The decorator should perform the following actions:

1. **Before calling the original function**, print a message indicating that the function is about to execute.  
2. **After execution**, print a message displaying the time taken for execution.  
3. **If an exception occurs**, handle it and print an appropriate message indicating an error.  

---

## Example Input and Output  

### **Input (Function Invocation):**  
```python
@execution_logger
def fibonacci(n):
    sequence = [0, 1]
    for _ in range(n - 2):
        sequence.append(sequence[-1] + sequence[-2])
    return sequence
```
### **Output:** 
```js
Invoking function 'fibonacci'...
Function 'fibonacci' took 0.0012459754943847656 seconds to execute.
Function results: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]
```