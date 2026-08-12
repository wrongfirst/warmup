// @ts-nocheck
if (typeof gamestate !== "function") {
  throw new Error("gamestate function is not defined");
}

Tests.equalCheck("Finished game where X won", JSON.stringify("win"), JSON.stringify(gamestate(["XOO","X  ","X  "])));
Tests.equalCheck("Finished game where O won", JSON.stringify("win"), JSON.stringify(gamestate(["OXX","OX ","O  "])));
Tests.equalCheck("Draw game", JSON.stringify("draw"), JSON.stringify(gamestate(["XOX","XXO","OXO"])));
Tests.equalCheck("Ongoing game", JSON.stringify("ongoing"), JSON.stringify(gamestate(["   ","   ","   "])));
Tests.equalCheck("Ongoing game 5 moves in", JSON.stringify("ongoing"), JSON.stringify(gamestate(["X  "," XO","OX "])));
Tests.boolCheck("Invalid board: X went twice", typeof gamestate(["XX ","   ","   "]) === "object");
Tests.boolCheck("Invalid board: O started", typeof gamestate(["OOX","   ","   "]) === "object");
Tests.boolCheck("Invalid board: both won", typeof gamestate(["XXX","OOO","   "]) === "object");
Tests.boolCheck("Invalid board: O kept playing after X wins", typeof gamestate(["OO ","XXX"," O "]) === "object");
