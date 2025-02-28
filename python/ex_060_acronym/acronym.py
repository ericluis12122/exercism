def abbreviate(words):
    words = " " + words
    l = len(words)
    letters = []
    for i in range(1, l):
        if words[i].isalpha() and words[i-1] in " -_":
            letters.append(words[i].upper())
    return "".join(letters)