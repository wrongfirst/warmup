if 'BowlingGame' not in globals():
    raise Exception("BowlingGame class is not defined")

def play(rolls):
    g = BowlingGame()
    for r in rolls:
        g.roll(r)
    return g

def can_roll(rolls, pin):
    try:
        play(rolls).roll(pin)
        return False
    except (ValueError, Exception):
        return True

def score_err(rolls):
    try:
        play(rolls).score()
        return False
    except (ValueError, Exception):
        return True

# Score tests
Tests.equal_check("should be able to score a game with all zeros", 0, play([0] * 20).score())
Tests.equal_check("should be able to score a game with no strikes or spares", 90, play([3, 6] * 10).score())
Tests.equal_check("a spare followed by zeros is worth ten points", 10, play([6, 4] + [0] * 18).score())
Tests.equal_check("points scored in the roll after a spare are counted twice", 16, play([6, 4, 3] + [0] * 17).score())
Tests.equal_check("consecutive spares each get a one roll bonus", 31, play([5, 5, 3, 7, 4] + [0] * 15).score())
Tests.equal_check("a spare in the last frame gets a one roll bonus that is counted once", 17, play([0] * 18 + [7, 3, 7]).score())
Tests.equal_check("a strike earns ten points in a frame with a single roll", 10, play([10] + [0] * 18).score())
Tests.equal_check("points scored in the two rolls after a strike are counted twice as a bonus", 26, play([10, 5, 3] + [0] * 16).score())
Tests.equal_check("consecutive strikes each get the two roll bonus", 81, play([10, 10, 10, 5, 3] + [0] * 12).score())
Tests.equal_check("a strike in the last frame gets a two roll bonus that is counted once", 18, play([0] * 18 + [10, 7, 1]).score())
Tests.equal_check("rolling a spare with the two roll bonus does not get a bonus roll", 20, play([0] * 18 + [10, 7, 3]).score())
Tests.equal_check("strikes with the two roll bonus do not get bonus rolls", 30, play([0] * 18 + [10, 10, 10]).score())
Tests.equal_check("last two strikes followed by only last bonus with non strike points", 31, play([0] * 16 + [10, 10, 0, 1]).score())
Tests.equal_check("a strike with the one roll bonus after a spare in the last frame does not get a bonus", 20, play([0] * 18 + [7, 3, 10]).score())
Tests.equal_check("all strikes is a perfect game", 300, play([10] * 12).score())
Tests.equal_check("two bonus rolls after a strike in the last frame can score more than 10 points if one is a strike", 26, play([0] * 18 + [10, 10, 6]).score())

# Roll error tests
Tests.bool_check("rolls cannot score negative points", can_roll([], -1))
Tests.bool_check("a roll cannot score more than 10 points", can_roll([], 11))
Tests.bool_check("two rolls in a frame cannot score more than 10 points", can_roll([5], 6))
Tests.bool_check("bonus roll after a strike in the last frame cannot score more than 10 points", can_roll([0] * 18 + [10], 11))
Tests.bool_check("two bonus rolls after a strike in the last frame cannot score more than 10 points", can_roll([0] * 18 + [10, 5], 6))
Tests.bool_check("the second bonus rolls after a strike in the last frame cannot be a strike if the first one is not a strike", can_roll([0] * 18 + [10, 6], 10))
Tests.bool_check("second bonus roll after a strike in the last frame cannot score more than 10 points", can_roll([0] * 18 + [10, 10], 11))
Tests.bool_check("cannot roll if game already has ten frames", can_roll([0] * 20, 0))
Tests.bool_check("cannot roll after bonus roll for spare", can_roll([0] * 18 + [7, 3, 2], 2))
Tests.bool_check("cannot roll after bonus rolls for strike", can_roll([0] * 18 + [10, 3, 2], 2))

# Score error tests
Tests.bool_check("an unstarted game cannot be scored", score_err([]))
Tests.bool_check("an incomplete game cannot be scored", score_err([0, 0]))
Tests.bool_check("bonus rolls for a strike in the last frame must be rolled before score can be calculated", score_err([0] * 18 + [10]))
Tests.bool_check("both bonus rolls for a strike in the last frame must be rolled before score can be calculated", score_err([0] * 18 + [10, 10]))
Tests.bool_check("bonus roll for a spare in the last frame must be rolled before score can be calculated", score_err([0] * 18 + [7, 3]))
