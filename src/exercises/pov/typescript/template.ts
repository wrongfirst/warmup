export class Tree {
  constructor(public value: string, public children: Tree[] = []) {}

  public fromPov(target: string): Tree {
    // Your code here
    return this;
  }

  public pathTo(from: string, to: string): string[] {
    // Your code here
    return [];
  }
}
