if 'best_hands' not in globals():
    raise Exception("best_hands function is not defined")

Tests.equal_check("single hand wins", ["4S 5S 7H 8D JC"], best_hands(["4S 5S 7H 8D JC"]))
Tests.equal_check("highest card wins", ["3S 4S 5D 6H JH"], best_hands(["4D 5S 6S 8D 3C", "2S 4C 7S 9H 10H", "3S 4S 5D 6H JH"]))
