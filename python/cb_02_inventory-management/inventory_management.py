def search_product(code, inventory):
    # If the inventory is empty, return 'Not Found'
    if not inventory:
        return 'Not Found'

    # Find the middle index of the inventory list
    mid = len(inventory) // 2

    # If the product at the middle index matches the code, return its quantity
    if inventory[mid]['code'] == code:
        return inventory[mid]['quantity']

    # If the product code at the middle is greater than the search code, search in the left half
    if inventory[mid]['code'] > code:
        return search_product(code, inventory[:mid])

    # Otherwise, search in the right half
    return search_product(code, inventory[mid + 1:])
