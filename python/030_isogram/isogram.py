def is_isogram(string):
    l = len(string)
    for i in range(l):
        if string[i].isalpha():
            for j in range(i+1,l):
                if string[i].lower() == string[j].lower():
                    return False
    return True
