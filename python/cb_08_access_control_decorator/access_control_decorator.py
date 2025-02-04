import functools

# Define the execution environment
ENVIRONMENT = "production"  # Change to "development" to test access restriction

def verify_execution_environment(func):
    """Decorator to restrict function execution to the production environment."""
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        if ENVIRONMENT == "production":
            print(f"Access granted: Running in {ENVIRONMENT} environment.")
            return func(*args, **kwargs)
        else:
            print("Access denied: This function is restricted to the production environment.")
    return wrapper

@verify_execution_environment
def upload_document(document_name):
    """Simulates document upload."""
    print(f"Document '{document_name}' uploaded.")

@verify_execution_environment
def delete_document(document_name):
    """Simulates document deletion."""
    print(f"Document '{document_name}' deleted.")

# Test the functions with different environments
upload_document("Document1")
delete_document("Document1")