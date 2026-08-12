export function gamestate(board: string[]): "win" | "draw" | "ongoing" | { error: string } {
  let countX = 0;
  let countO = 0;

  for (const row of board) {
    for (const char of row) {
      if (char === 'X') countX++;
      if (char === 'O') countO++;
    }
  }

  if (countO > countX || countX > countO + 1) {
    return { error: "Wrong turn order" };
  }

  const lines = [
    [board[0][0], board[0][1], board[0][2]],
    [board[1][0], board[1][1], board[1][2]],
    [board[2][0], board[2][1], board[2][2]],
    [board[0][0], board[1][0], board[2][0]],
    [board[0][1], board[1][1], board[2][1]],
    [board[0][2], board[1][2], board[2][2]],
    [board[0][0], board[1][1], board[2][2]],
    [board[0][2], board[1][1], board[2][0]]
  ];

  let xWins = false;
  let oWins = false;

  for (const line of lines) {
    if (line[0] === 'X' && line[1] === 'X' && line[2] === 'X') xWins = true;
    if (line[0] === 'O' && line[1] === 'O' && line[2] === 'O') oWins = true;
  }

  if (xWins && oWins) {
    return { error: "Impossible board: game should have ended after the game was won" };
  }

  if (xWins && countX === countO) {
    return { error: "Impossible board: game should have ended after the game was won" };
  }

  if (oWins && countX > countO) {
    return { error: "Impossible board: game should have ended after the game was won" };
  }

  if (xWins || oWins) {
    return "win";
  }

  if (countX + countO === 9) {
    return "draw";
  }

  return "ongoing";
}
