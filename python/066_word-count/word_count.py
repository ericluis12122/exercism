from string import punctuation

def count_words(sentence):
    sentence = sentence.translate(str.maketrans(',_', '  '))
    words = [word.strip(punctuation).lower() for word in sentence.split()]
    output = {}
    for word in words:
        output[word] = output.setdefault(word,0) + 1
    return output