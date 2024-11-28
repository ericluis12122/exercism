def translate(text):
    symbols_1 = {'a', 'e', 'i', 'o', 'u'}
    symbols_2 = {'yt', 'xr'}
    symbols_x = {'a', 'e', 'i', 'o', 'u', 'y'}

    new_words = ""
    for word in text.split(" "):
        if word[0] in symbols_1 or word[0:2] in symbols_2:
            new_words += word + "ay "
            continue
        for i in range(1,len(word)):
            if word[i] in symbols_x:
                if word[i] == 'u' and word[i-1] == 'q':
                    i += 1
                new_words += word[i:] + word[:i] + "ay "
                break
    return new_words[:-1]
