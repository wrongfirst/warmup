class Tree:
    def __init__(self, label: str, children: list = None):
        self.label = label
        self.children = children or []

    def from_pov(self, from_node: str):
        # Your code here
        return self

    def path_to(self, from_node: str, to_node: str) -> list[str]:
        # Your code here
        return []
