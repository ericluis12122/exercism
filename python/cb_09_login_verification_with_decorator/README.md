## Login Verification with Decorator

You are developing an authentication system for a web application and want to implement a login system that verifies whether the user-provided credentials are valid before allowing access to certain functions. Additionally, once the user has successfully logged in, they should receive their personal information.

### Implementation Requirements

- A user registry that contains additional information such as full name and email.
- A decorator called `verify_login` that accepts the username and password as arguments. This decorator will check if the provided credentials are valid by comparing them with the user registry. If the credentials are valid, the decorated function will execute and receive the user's personal information as an argument.
- A function called `user_information` that prints the user's personal details after they have successfully logged in.

### Example Input and Output

#### Input:
```python
user_information("user1", "password123")
```

#### Output:
```text
Login successful for user user1.
* User Personal Information:
* Full Name: Juan Pérez
```

If the login fails:
```text
Login failed. Please check your username and password.
```
