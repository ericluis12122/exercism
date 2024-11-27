def sum_of_multiples(limit, multiples):
    return sum({nth_multiple for value in multiples if value 
                for nth_multiple in range(value, limit, value)})