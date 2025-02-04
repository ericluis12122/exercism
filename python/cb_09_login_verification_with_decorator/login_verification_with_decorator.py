import functools

# User registry with additional information
USER_REGISTRY = {
    "user1": {"password": "password123", "full_name": "Juan Pérez", "email": "juan.perez@example.com"},
    "user2": {"password": "securepass", "full_name": "Maria López", "email": "maria.lopez@example.com"},
}

def verify_login(func):
    """Decorator to check user credentials before executing the function."""
    @functools.wraps(func)
    def wrapper(username, password, *args, **kwargs):
        user_data = USER_REGISTRY.get(username)
        if user_data and user_data["password"] == password:
            print(f"Login successful for user {username}.")
            return func(user_data, *args, **kwargs)
        else:
            print("Login failed. Please check your username and password.")
    return wrapper

@verify_login
def user_information(user_data):
    """Displays the personal information of a logged-in user."""
    print("* User Personal Information:")
    print(f"* Full Name: {user_data['full_name']}")
    print(f"* Email: {user_data['email']}")

# Example usage
user_information("user1", "password123")  # Successful login
user_information("user2", "wrongpass")    # Failed login