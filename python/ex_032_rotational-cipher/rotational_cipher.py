def rotate(text, key):
    return ''.join([c.isupper() * chr((ord(c) - ord('A') + key) % 26 + ord('A')) 
                    or c.islower() * chr((ord(c) - ord('a') + key) % 26 + ord('a')) 
                    or c 
                    for c in text])