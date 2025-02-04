## Access Control Decorator

Imagine you are developing a document management application for an enterprise environment. You want to implement a decorator called `verify_execution_environment` to control access to functions based on the execution environment.

### Functionality

- Before executing the function, check if the execution environment is `"production"`.
- If the environment is `"production"`, allow the function execution and display a message indicating that access is granted in the production environment.
- If the environment is not `"production"`, prevent the function execution and display a message indicating that access is restricted to production environments.

### Implementation

Apply this decorator to two functions, `upload_document` and `delete_document`. Try executing these functions with different environments and observe the behavior of the decorator.

### Example of Input and Output:

#### Input:
```python
# Environment: 'production' or 'development'
upload_document("Document1")
delete_document("Document1")
```

#### Output:
```text
Access granted: Running in production environment.
Document uploaded.
Access granted: Running in production environment.
Document deleted.
```

Or, if the environment is not `"production"`:

```text
Access denied: This function is restricted to the production environment.
Access denied: This function is restricted to the production environment.
```
