pairs = {'(':')', '[':']', '{':'}'}

def is_paired(input_string):
    stack = []
    for char in input_string:
        if char in ')]}' and (not len(stack) or char != stack.pop()):
            return False
        if char in '([{':
            stack.append(pairs[char])
    return len(stack) == 0