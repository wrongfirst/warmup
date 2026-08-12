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
  if (records.length === 0) return null;

  const sorted = [...records].sort((a, b) => a.id - b.id);

  if (sorted[0].id !== 0 || sorted[0].parent !== 0) {
    throw new Error("Root node is invalid");
  }

  const nodes: RecordNode[] = [];

  for (let i = 0; i < sorted.length; i++) {
    const rec = sorted[i];
    if (rec.id !== i) {
      throw new Error("Record id mismatch or non-contiguous");
    }
    if (i > 0 && rec.parent >= rec.id) {
      throw new Error("Parent id must be less than id");
    }
    nodes.push(new RecordNode(rec.id));
  }

  for (let i = 1; i < sorted.length; i++) {
    const rec = sorted[i];
    nodes[rec.parent].children.push(nodes[i]);
  }

  return nodes[0];
}
