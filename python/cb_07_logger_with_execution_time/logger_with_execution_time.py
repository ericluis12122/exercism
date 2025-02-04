import time
import functools

def execution_logger(func):
    """Decorator to log function execution time and handle exceptions."""
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print(f"Invoking function '{func.__name__}'...")
        start_time = time.time()
        try:
            result = func(*args, **kwargs)
            end_time = time.time()
            print(f"Function '{func.__name__}' took {end_time - start_time:.6f} seconds to execute.")
            return result
        except Exception as e:
            print(f"An error occurred in function '{func.__name__}': {e}")
            return None
    return wrapper

# Example function using the decorator
@execution_logger
def fibonacci(n):
    """Generates the first 'n' numbers in the Fibonacci sequence."""
    sequence = [0, 1]
    for _ in range(n - 2):
        sequence.append(sequence[-1] + sequence[-2])
    return sequence

# Running the function
result = fibonacci(20)
print("Function results:", result)