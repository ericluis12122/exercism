def square_root(number):
    k = 1
    while k * k < number:
      k += 1 
    return (number - k * k + 2 * k) / (2 * k) + (k - 1)