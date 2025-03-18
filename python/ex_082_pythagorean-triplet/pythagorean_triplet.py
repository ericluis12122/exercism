def triplets_with_sum(number):
    output = []
    for a in range(3, number//2):
        for b in range(a + 1, number//2):
            c = number - a - b
            if a ** 2 + b ** 2 == c ** 2:
                output.append([a, b, c])
    return output