def is_pangram(sentence):
    return len(set([l.lower() for l in sentence if l.isalpha()])) == 26
