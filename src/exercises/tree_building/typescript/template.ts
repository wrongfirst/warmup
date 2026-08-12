export interface Record {
  id: number;
  parent: number;
}

export class RecordNode {
  id: number;
  children: RecordNode[];

  constructor(id: number) {
    this.id = id;
    this.children = [];
  }
}

export function Build(records: Record[]): RecordNode | null {
  // Your code here
  return null;
}
