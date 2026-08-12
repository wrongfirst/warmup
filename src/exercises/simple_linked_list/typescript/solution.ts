export class Element<T> {
  public value: T;
  public next: Element<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

export class SimpleLinkedList<T> {
  public headNode: Element<T> | null = null;
  private countNodes: number = 0;

  push(value: T): void {
    const node = new Element(value);
    node.next = this.headNode;
    this.headNode = node;
    this.countNodes++;
  }

  pop(): T {
    if (!this.headNode) {
      throw new Error("list is empty");
    }
    const val = this.headNode.value;
    this.headNode = this.headNode.next;
    this.countNodes--;
    return val;
  }

  get length(): number {
    return this.countNodes;
  }

  toArray(): T[] {
    const result: T[] = [];
    let curr = this.headNode;
    while (curr) {
      result.unshift(curr.value);
      curr = curr.next;
    }
    return result;
  }

  reverse(): SimpleLinkedList<T> {
    const reversed = new SimpleLinkedList<T>();
    let curr = this.headNode;
    while (curr) {
      reversed.push(curr.value);
      curr = curr.next;
    }
    return reversed;
  }
}

export function list(initialValues: number[], operations: any[]): Record<string, any> {
  const sll = new SimpleLinkedList<number>();
  for (const v of initialValues) {
    sll.push(v);
  }

  for (const op of operations) {
    if (op.operation === "count") {
      if (sll.length !== op.expected) {
        return { error: `expected count ${op.expected}, got ${sll.length}` };
      }
    } else if (op.operation === "push") {
      sll.push(op.value);
    } else if (op.operation === "pop") {
      try {
        const val = sll.pop();
        if (val !== op.expected) {
          return { error: `expected pop ${op.expected}, got ${val}` };
        }
      } catch (err: any) {
        if (!op.expected || op.expected.error !== "list is empty") {
          return { error: "list is empty" };
        }
      }
    } else if (op.operation === "reverse") {
      const rev = sll.reverse();
      sll.headNode = rev.headNode;
    } else if (op.operation === "toArray") {
      const arr = sll.toArray();
      if (JSON.stringify(arr) !== JSON.stringify(op.expected)) {
        return { error: `expected toArray ${JSON.stringify(op.expected)}, got ${JSON.stringify(arr)}` };
      }
    }
  }

  return {};
}
