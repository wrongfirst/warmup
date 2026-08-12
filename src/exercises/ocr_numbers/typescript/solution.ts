const PATTERNS: Record<string, string> = {
  " _ | ||_|   ": "0",
  "     |  |   ": "1",
  " _  _||_    ": "2",
  " _  _| _|   ": "3",
  "   |_|  |   ": "4",
  " _ |_  _|   ": "5",
  " _ |_ |_|   ": "6",
  " _   |  |   ": "7",
  " _ |_||_|   ": "8",
  " _ |_| _|   ": "9",
};

export function convert(input: string): string | { error: string } {
  const rows = input.split("\n");
  if (rows.length % 4 !== 0) {
    return { error: "Number of input lines is not a multiple of four" };
  }

  const numCols = rows[0].length;
  for (const row of rows) {
    if (row.length !== numCols) {
      return { error: "Inconsistent line lengths" };
    }
  }
  if (numCols % 3 !== 0) {
    return { error: "Number of input columns is not a multiple of three" };
  }

  const gridRowResults: string[] = [];

  for (let gridRow = 0; gridRow < rows.length; gridRow += 4) {
    let lineResult = "";
    for (let col = 0; col < numCols; col += 3) {
      let cellPattern = "";
      for (let r = 0; r < 4; r++) {
        cellPattern += rows[gridRow + r].slice(col, col + 3);
      }
      lineResult += PATTERNS[cellPattern] || "?";
    }
    gridRowResults.push(lineResult);
  }

  return gridRowResults.join(",");
}
