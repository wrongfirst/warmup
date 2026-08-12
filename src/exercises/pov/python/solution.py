class Tree:
    def __init__(self, label: str, children: list = None):
        self.label = label
        self.children = children or []

    def _find_path(self, target: str, path: list = None) -> list:
        if path is None:
            path = []
        current_path = path + [self]
        if self.label == target:
            return current_path

        for child in self.children:
            res = child._find_path(target, current_path)
            if res:
                return res

        return None

    def from_pov(self, from_node: str):
        path = self._find_path(from_node)
        if not path:
            raise ValueError("Tree does not contain target node")

        new_child = None
        for i in range(len(path)):
            node = path[i]
            next_on_path = path[i + 1] if i + 1 < len(path) else None

            remaining_children = [c for c in node.children if c is not next_on_path]
            if new_child:
                remaining_children.append(new_child)

            new_child = Tree(node.label, remaining_children)

        return new_child

    def path_to(self, from_node: str, to_node: str) -> list[str]:
        reparented = self.from_pov(from_node)
        path_nodes = reparented._find_path(to_node)
        if not path_nodes:
            raise ValueError("No path found")
        return [n.label for n in path_nodes]
