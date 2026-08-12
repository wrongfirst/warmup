export function degreeOfSeparation(
  familyTree: Record<string, string[]>,
  personA: string,
  personB: string
): number | null {
  if (personA === personB) return 0;

  const adj = new Map<string, Set<string>>();

  const addEdge = (u: string, v: string) => {
    if (!adj.has(u)) adj.set(u, new Set());
    if (!adj.has(v)) adj.set(v, new Set());
    adj.get(u)!.add(v);
    adj.get(v)!.add(u);
  };

  for (const [parent, children] of Object.entries(familyTree)) {
    for (const child of children) {
      addEdge(parent, child);
    }
    for (let i = 0; i < children.length; i++) {
      for (let j = i + 1; j < children.length; j++) {
        addEdge(children[i], children[j]);
      }
    }
  }

  if (!adj.has(personA) || !adj.has(personB)) return null;

  const visited = new Set<string>();
  const queue: Array<[string, number]> = [[personA, 0]];
  visited.add(personA);

  while (queue.length > 0) {
    const [curr, dist] = queue.shift()!;

    if (curr === personB) return dist;

    const neighbors = adj.get(curr);
    if (neighbors) {
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push([neighbor, dist + 1]);
        }
      }
    }
  }

  return null;
}
