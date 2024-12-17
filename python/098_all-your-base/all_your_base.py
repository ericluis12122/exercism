def rebase(input_base, digits, output_base):
    if input_base < 2: raise ValueError("input base must be >= 2")
    if output_base < 2: raise ValueError("output base must be >= 2")
    if not digits or not sum(digits): return [0]
    number = 0
    output = []
    for i, d in enumerate(digits[::-1]):
        if d < 0 or d >= input_base:
            raise ValueError("all digits must satisfy 0 <= d < input base")
        number += d * input_base ** i
    while number: 
        output.insert(0, number % output_base)
        number //= output_base 
    return output