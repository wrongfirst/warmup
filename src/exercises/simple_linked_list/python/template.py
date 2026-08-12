class Element:
    def __init__(self, value):
        self.value = value
        self.next = None

class SimpleLinkedList:
    def __init__(self, values=None):
        self._head = None
        self._length = 0
        if values:
            for v in values:
                self.push(v)

    def __len__(self):
        return self._length

    def push(self, value):
        # Your code here
        pass

    def pop(self):
        # Your code here
        raise IndexError("list is empty")

    def reversed(self):
        # Your code here
        return self

def list_ops(initial_values: list[int], operations: list[dict]) -> dict:
    # Your code here
    return {}
