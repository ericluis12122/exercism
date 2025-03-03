def proverb(*input_data, qualifier=None):
    if not input_data: return []
    output = [f'For want of a {a} the {b} was lost.' for a, b in zip(input_data, input_data[1:])]
    c = qualifier + ' ' + input_data[0] if not qualifier is None else input_data[0]
    return output + [f'And all for the want of a {c}.']