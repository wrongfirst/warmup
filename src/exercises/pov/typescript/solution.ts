export class Tree {
  constructor(public value: string, public children: Tree[] = []) {}

  public findPath(target: string, path: Tree[] = []): Tree[] | null {
    const currentPath = [...path, this];
    if (this.value === target) return currentPath;

    for (const child of this.children) {
      const res = child.findPath(target, currentPath);
      if (res) return res;
    }

    return null;
  }

  public fromPov(target: string): Tree {
    const path = this.findPath(target);
    if (!path) {
      throw new Error("Tree does not contain target node");
    }

    let newChild: Tree | null = null;

    for (let i = 0; i < path.length; i++) {
      const node = path[i];
      const nextOnPath = i + 1 < path.length ? path[i + 1] : null;

      const remainingChildren = node.children.filter((c) => c !== nextOnPath);
      if (newChild) {
        remainingChildren.push(newChild);
      }

      newChild = new Tree(node.value, remainingChildren);
    }

    return newChild!;
  }

  public pathTo(from: string, to: string): string[] {
    const reparented = this.fromPov(from);
    const pathNodes = reparented.findPath(to);
    if (!pathNodes) {
      throw new Error("No path found");
    }
    return pathNodes.map((n) => n.value);
  }
}
