NODE = 0
EDGE = 1
ATTR = 2

class Node:
    def __init__(self, name: str, attrs: dict = None):
        self.name = name
        self.attrs = attrs or {}

    def __eq__(self, other):
        return isinstance(other, Node) and self.name == other.name and self.attrs == other.attrs

class Edge:
    def __init__(self, src: str, dst: str, attrs: dict = None):
        self.src = src
        self.dst = dst
        self.attrs = attrs or {}

    def __eq__(self, other):
        return isinstance(other, Edge) and self.src == other.src and self.dst == other.dst and self.attrs == other.attrs

class Graph:
    def __init__(self, data=None):
        self.nodes = []
        self.edges = []
        self.attrs = {}

        if data is not None:
            if not isinstance(data, list):
                raise TypeError("Graph data must be a list")
            for item in data:
                if not isinstance(item, tuple) or len(item) < 2:
                    raise TypeError("Item must be a tuple")
                item_type = item[0]
                if item_type == NODE:
                    if len(item) != 3:
                        raise ValueError("Node item must be (NODE, name, attrs)")
                    self.nodes.append(Node(item[1], item[2]))
                elif item_type == EDGE:
                    if len(item) != 4:
                        raise ValueError("Edge item must be (EDGE, src, dst, attrs)")
                    self.edges.append(Edge(item[1], item[2], item[3]))
                elif item_type == ATTR:
                    if len(item) != 3:
                        raise ValueError("Attr item must be (ATTR, key, value)")
                    self.attrs[item[1]] = item[2]
                else:
                    raise ValueError("Unknown item type")
