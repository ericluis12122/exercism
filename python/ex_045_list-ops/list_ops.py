def append(list1, list2):
    return [*list1, *list2]


def concat(lists):
    return foldl(lambda acc, x: [*acc,*x] , lists, [])


def filter(function, list):
    return [x for x in list if function(x)]


def length(list):
    return len(list)


def map(function, list):
    return [function(x) for x in list]


def foldl(function, list, initial):
    for x in list:
        initial = function(initial, x)
    return initial


def foldr(function, list, initial):
    for x in list[::-1]:
        initial = function(initial, x)
    return initial


def reverse(list):
    return list[::-1]
