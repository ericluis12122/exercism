class EmptyListException(Exception):
    def __init__(self, message):
        self.message = message

class Node:
    def __init__(self, value, next=None):
        self._value = value
        self._next = next

    def value(self):
        return self._value

    def next(self):
        return self._next

    def set_next(self, new_next):
        self._next = new_next

class LinkedList:
    def __init__(self, values=None):
        self._len = 0
        self._head = None
        if values is not None:
            for value in values:
                self.push(value)

    def __iter__(self):
        current = self._head
        while current is not None:
            yield current.value()
            current = current.next()
            
    def __len__(self):
        return self._len

    def head(self):
        if self._len == 0:
            raise EmptyListException("The list is empty.")
        return self._head

    def push(self, value):
        newNode = Node(value, self._head)
        self._head = newNode
        self._len += 1
        
    def pop(self):
        if self._len == 0:
            raise EmptyListException("The list is empty.")
        output = self._head.value()
        self._head = self._head.next()
        self._len -= 1
        return output

    def reversed(self):
        prev = None
        current = self._head
        while current is not None:
            child = current.next()
            current.set_next(prev)
            prev = current
            current = child
        self._head = prev
        return self