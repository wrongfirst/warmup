from collections import defaultdict, deque

def degree_of_separation(family_tree: dict[str, list[str]], person_a: str, person_b: str):
    if person_a == person_b:
        return 0

    adj = defaultdict(set)
    for parent, children in family_tree.items():
        for child in children:
            adj[parent].add(child)
            adj[child].add(parent)
        for i in range(len(children)):
            for j in range(i + 1, len(children)):
                adj[children[i]].add(children[j])
                adj[children[j]].add(children[i])

    if person_a not in adj or person_b not in adj:
        return None

    visited = {person_a}
    queue = deque([(person_a, 0)])

    while queue:
        curr, dist = queue.popleft()
        if curr == person_b:
            return dist
        for neighbor in adj[curr]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append((neighbor, dist + 1))

    return None
