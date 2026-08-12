if 'gamestate' not in globals():
    raise Exception("gamestate function is not defined")

Tests.equal_check("Finished game where X won", "win", gamestate(["XOO","X  ","X  "]))
Tests.equal_check("Finished game where O won", "win", gamestate(["OXX","OX ","O  "]))
Tests.equal_check("Draw game", "draw", gamestate(["XOX","XXO","OXO"]))
Tests.equal_check("Ongoing game", "ongoing", gamestate(["   ","   ","   "]))
Tests.equal_check("Ongoing game 5 moves in", "ongoing", gamestate(["X  "," XO","OX "]))

caught1 = False
try:
    gamestate(["XX ","   ","   "])
except ValueError:
    caught1 = True
Tests.bool_check("Invalid board: X went twice", caught1)

caught2 = False
try:
    gamestate(["OOX","   ","   "])
except ValueError:
    caught2 = True
Tests.bool_check("Invalid board: O started", caught2)

caught3 = False
try:
    gamestate(["XXX","OOO","   "])
except ValueError:
    caught3 = True
Tests.bool_check("Invalid board: both won", caught3)
