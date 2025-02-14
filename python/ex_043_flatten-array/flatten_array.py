def flatten(iterable):
    def flat(list_item):
        for i in list_item:
            if isinstance(i, list):
                flat(i)
            elif i != None:
                output.append(i)
    output = []
    flat(iterable)
    return output