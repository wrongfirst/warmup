export class Node {
  constructor(public name: string, public attrs: Record<string, string> = {}) {}
}

export class Edge {
  constructor(public from: string, public to: string, public attrs: Record<string, string> = {}) {}
}

export class Attr {
  constructor(public key: string, public value: string) {}
}

export class Graph {
  public nodes: Node[] = [];
  public edges: Edge[] = [];
  public attrs: Record<string, string> = {};

  constructor(items: Array<Node | Edge | Attr> = []) {
    for (const item of items) {
      if (item instanceof Node) {
        this.nodes.push(item);
      } else if (item instanceof Edge) {
        this.edges.push(item);
      } else if (item instanceof Attr) {
        this.attrs[item.key] = item.value;
      }
    }
  }
}
