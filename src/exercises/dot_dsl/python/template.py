NODE = 0
EDGE = 1
ATTR = 2

class Node:
    def __init__(self, name: str, attrs: dict = None):
        self.name = name
        self.attrs = attrs or {}

class Edge:
    def __init__(self, src: str, dst: str, attrs: dict = None):
        self.src = src
        self.dst = dst
        self.attrs = attrs or {}

class Graph:
    def __init__(self, data=None):
        self.nodes = []
        self.edges = []
        self.attrs = {}
        # Your code here
