export class Element<T> {
  public value: T;
  public next: Element<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

export class SimpleLinkedList<T> {
  private headNode: Element<T> | null = null;
  private countNodes: number = 0;

  push(value: T): void {
    // Your code here
  }

  pop(): T {
    // Your code here
    throw new Error("list is empty");
  }

  get length(): number {
    return this.countNodes;
  }

  toArray(): T[] {
    // Your code here
    return [];
  }

  reverse(): SimpleLinkedList<T> {
    // Your code here
    return this;
  }
}

export function list(initialValues: number[], operations: any[]): Record<string, any> {
  // Your code here
  return {};
}
