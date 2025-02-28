one = ('','one','two','three','four','five','six','seven','eight','nine')
ten = ('ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen')
two = ('','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety')
tho = ('','thousand','million','billion')
def say(number):
    if not 0 <= number < 10 ** 12: raise ValueError("input out of range")
    if not number: return 'zero'
    output = ''
    count = 0
    while number > 0:
        mil = number % 1000
        number //= 1000
        s = say_1(mil)
        if s: output = s + ' ' + tho[count] + ' ' + output
        count += 1
    return output.rstrip()
    
def say_1(number):
    if not number: return ''
    pos = -1
    unit = 0
    output = []
    while number > 0:
        pos += 1
        digit = number % 10
        number //= 10
        if pos % 3 == 0:
            output.insert(0, one[digit]) 
            unit = digit
        elif pos % 3 == 1:
            if digit > 1:
                output.insert(0, two[digit] + ('-' if unit else ''))
            elif digit:
                output.pop(0)
                output.insert(0, ten[unit])
        else:
            output.insert(0, one[digit] + ' hundred ' * (digit != 0))
    return ''.join(output).rstrip()