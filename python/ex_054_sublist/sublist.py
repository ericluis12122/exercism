SUBLIST = 'sub'
SUPERLIST = 'super'
EQUAL = 'equal'
UNEQUAL = 'unequal'

def sublist(list_one, list_two):
    if len(list_one) == len(list_two) and is_sublist(list_one, list_two):
        return 'equal'
    if len(list_one) < len(list_two) and is_sublist(list_one, list_two):
        return 'sub'
    if len(list_one) > len(list_two) and is_sublist(list_two, list_one):
        return 'super'
    return 'unequal'

def is_sublist(list_one, list_two):
    if not len(list_one): return True 
    for i in range(len(list_two) - len(list_one) + 1):
        if list_one[0] == list_two[i]:
            for j in range(len(list_one)):
                if list_one[j] != list_two[i + j]: break
            else: return True
    return False