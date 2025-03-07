def transpose(text):
    words = text.split('\n')
    dim = max([len(i) for i in words])
    fix_words = [i + '*' * (dim - len(i)) for i in words]
    mix_words = zip(*fix_words) 
    return '\n'.join([''.join(i).rstrip('*').replace('*', ' ') for i in mix_words])