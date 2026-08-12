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
        node = Element(value)
        node.next = self._head
        self._head = node
        self._length += 1

    def pop(self):
        if not self._head:
            raise IndexError("list is empty")
        val = self._head.value
        self._head = self._head.next
        self._length -= 1
        return val

    def reversed(self):
        rev = SimpleLinkedList()
        curr = self._head
        while curr:
            rev.push(curr.value)
            curr = curr.next
        return rev

def list_ops(initial_values: list[int], operations: list[dict]) -> dict:
    sll = SimpleLinkedList()
    for v in initial_values:
        sll.push(v)

    for op in operations:
        name = op.get("operation")
        expected = op.get("expected")

        if name == "count":
            if len(sll) != expected:
                return {"error": f"expected count {expected}, got {len(sll)}"}
        elif name == "push":
            sll.push(op.get("value"))
        elif name == "pop":
            try:
                val = sll.pop()
                if val != expected:
                    return {"error": f"expected pop {expected}, got {val}"}
            except IndexError:
                if not isinstance(expected, dict) or expected.get("error") != "list is empty":
                    return {"error": "list is empty"}
        elif name == "reverse":
            sll = sll.reversed()

    return {}
