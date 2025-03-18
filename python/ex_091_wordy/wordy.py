ops = {'plus' : lambda a, b : a + b, 
       'minus' : lambda a, b : a - b,
       'multiplied' : lambda a, b : a * b,
       'divided' : lambda a, b : a / b}

def answer(question):
    if question[:7] != 'What is' or question[-1] != '?' or question[11:-1] == 'cubed':
        raise ValueError("unknown operation")
    cadena = question[8:-1].replace(' by', '').split(' ')
    try:    
        value = int(cadena.pop(0))        
        for i in range(0,len(cadena),2):
            if cadena[i] in ops:
                value = ops[cadena[i]](value,int(cadena[i + 1]))
            else:
                raise ValueError("syntax error")
        return value
    except:
        raise ValueError("syntax error")