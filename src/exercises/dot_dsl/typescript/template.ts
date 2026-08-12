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
    // Your code here
  }
}
