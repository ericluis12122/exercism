def primes(limit):
    if limit < 2: return []
    numbers_bag = set(range(3, limit + 1, 2)) | {2,}
    not_primes = {multiples for i in numbers_bag for multiples in range(2 * i, limit + 1, i)}
    return sorted(numbers_bag - not_primes)