colors_encoded = ('black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white')

def value(colors):
    return colors_encoded.index(colors[0]) * 10 + colors_encoded.index(colors[1])


