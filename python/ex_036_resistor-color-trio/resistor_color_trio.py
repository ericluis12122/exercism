color = ('black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white')
magnitude = ('', 'kilo', 'mega', 'giga')
def label(colors):
    one, two, three, *_ = colors
    number = (color.index(one) * 10 + color.index(two)) * 10 ** color.index(three)
    count = 0
    while number and not number % 1000:
        count += 1
        number //= 1000
    return str(number) + ' ' + magnitude[count] + 'ohms'