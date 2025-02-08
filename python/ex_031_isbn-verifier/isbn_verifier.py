def is_valid(isbn):
    s = isbn.replace('-','')
    l = len(s)-1
    if l != 9:
        return False
    n = 0
    for i in range(l):
        if not s[i].isdigit():
            return False
        n += int(s[i]) * ((l+1)-i)
    if s[-1].isdigit():
        return not ((n + int(s[-1])) % 11)
    return s[-1].lower() == 'x' and not ((n + 10) % 11)