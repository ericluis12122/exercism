def classify(number):
    if number > 0:        
        salida = ['perfect','abundant','deficient']
        suma = 0
        for i in range(1,number//2+1):
            suma += 0 if number % i else i
        suma -= number    
        return salida[suma//abs(suma) if suma else 0]
    raise ValueError("Classification is only possible for positive integers.")