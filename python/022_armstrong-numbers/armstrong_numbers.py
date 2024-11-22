def is_armstrong_number(number):
    result = 0
    d = number
    l = len(str(number))
    for i in range(0, l):
        result += (d % 10) ** l
        d = d // 10
    return result == number
        
