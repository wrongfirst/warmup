if 'BowlingGame' not in globals():
    raise Exception("BowlingGame class is not defined")

def play(rolls):
    g = BowlingGame()
    for r in rolls:
        g.roll(r)
    return g

Tests.equal_check("gutter game", 0, play([0]*20).score())
Tests.equal_check("all ones", 20, play([1]*20).score())
Tests.equal_check("one spare", 22, play([5, 5, 3] + [0]*17).score())
Tests.equal_check("one strike", 26, play([10, 3, 5] + [0]*16).score())
Tests.equal_check("perfect game", 300, play([10]*12).score())

caught = False
try:
    play([0, 0]).score()
except ValueError:
    caught = True
Tests.bool_check("incomplete game score is error", caught)
