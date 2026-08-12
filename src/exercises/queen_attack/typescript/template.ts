interface Position {
  row: number;
  column: number;
}

interface Queen {
  position: Position;
}

export function create(queen: Queen): number | { error: string } {
  // Your code here
  return 0;
}

export function canAttack(whiteQueen: Queen, blackQueen: Queen): boolean {
  // Your code here
  return false;
}
