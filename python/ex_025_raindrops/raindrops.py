def convert(number):
    s = ""    
    if not number % 3:
        s += "Pling"
    if not number % 5:
        s += "Plang"
    if not number % 7:
        s += "Plong"
    if not s:
        s += str(number)
    return s
        
        
