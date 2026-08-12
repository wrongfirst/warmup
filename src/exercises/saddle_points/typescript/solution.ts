export interface Position {
  row: number;
  column: number;
}

export function saddlePoints(matrix: number[][]): Position[] {
  if (!matrix.length || !matrix[0].length) return [];
  const rows = matrix.length;
  const cols = matrix[0].length;
  const points: Position[] = [];

  for (let r = 0; r < rows; r++) {
    const rowMax = Math.max(...matrix[r]);
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] === rowMax) {
        let isColMin = true;
        for (let k = 0; k < rows; k++) {
          if (matrix[k][c] < matrix[r][c]) {
            isColMin = false;
            break;
          }
        }
        if (isColMin) {
          points.push({ row: r + 1, column: c + 1 });
        }
      }
    }
  }

  return points;
}
