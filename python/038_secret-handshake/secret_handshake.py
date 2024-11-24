def commands(binary_str):
    code = ('jump', 'close your eyes', 'double blink', 'wink')
    secret = []
    for index, bit in enumerate(binary_str[-4:]):
        if int(bit):
            if int(binary_str[-5]):
                secret.append(code[index])
            else:
                secret.insert(0,code[index])      
    return secret