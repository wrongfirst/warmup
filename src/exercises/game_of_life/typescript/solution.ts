export function tick(matrix: number[][]): number[][] {
  if (matrix.length === 0 || matrix[0].length === 0) return [];

  const rows = matrix.length;
  const cols = matrix[0].length;
  const result: number[][] = Array.from({ length: rows }, () => new Array(cols).fill(0));

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let liveNeighbors = 0;
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) continue;
          const nr = r + dr;
          const nc = c + dc;
          if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
            if (matrix[nr][nc] === 1) liveNeighbors++;
          }
        }
      }

      if (matrix[r][c] === 1) {
        result[r][c] = liveNeighbors === 2 || liveNeighbors === 3 ? 1 : 0;
      } else {
        result[r][c] = liveNeighbors === 3 ? 1 : 0;
      }
    }
  }

  return result;
}
