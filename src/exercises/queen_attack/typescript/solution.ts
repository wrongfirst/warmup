interface Position {
  row: number;
  column: number;
}

interface Queen {
  position: Position;
}

export function create(queen: Queen): number | { error: string } {
  const { row, column } = queen.position;
  if (row < 0) return { error: "row not positive" };
  if (row > 7) return { error: "row not on board" };
  if (column < 0) return { error: "column not positive" };
  if (column > 7) return { error: "column not on board" };
  return 0;
}

export function canAttack(whiteQueen: Queen, blackQueen: Queen): boolean {
  const w = whiteQueen.position;
  const b = blackQueen.position;
  return (
    w.row === b.row ||
    w.column === b.column ||
    Math.abs(w.row - b.row) === Math.abs(w.column - b.column)
  );
}
