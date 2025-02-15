def rows(letter):
    diff = ord(letter) - ord('A')
    half_diamond = [' ' * (diff - i) + chr(ord('A') + i) + ' ' * (i * 2 - 1) + chr(ord('A') + i) * bool(i) + ' ' * (diff - i) for i in range(diff + 1)]
    return half_diamond if letter == 'A' else half_diamond + half_diamond[diff - 1 : : -1]
    