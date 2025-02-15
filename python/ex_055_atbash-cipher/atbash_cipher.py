def encode(plain_text):
    return switch_code(plain_text, ' ')

def decode(ciphered_text):
    return switch_code(ciphered_text, '')
    
def switch_code(text, separator):
    output = ''
    for c in text:
        if not len(output) % 6:
            output += separator
        if c.isalpha():
            output += chr(219 - ord(c.lower()))
        elif c.isdigit():
            output += c
    return output.strip()