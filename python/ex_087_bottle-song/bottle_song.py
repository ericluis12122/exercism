def recite(start, take=1):
    numbers = ('ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one', 'no')
    output, start, take = [], 11 - start, 11 - start + take
    pairs = zip(numbers[start - 1: take], numbers[start: take])
    for n1, n2 in pairs:
        s1 = '' if n1 == 'one' else 's'
        s2 = '' if n2 == 'one' else 's'
        output.append(f'{n1.capitalize()} green bottle{s1} hanging on the wall,')
        output.append(output[-1])
        output.append('And if one green bottle should accidentally fall,')
        output.append(f'There\'ll be {n2} green bottle{s2} hanging on the wall.')
        output.append('')
    output.pop()
    return output