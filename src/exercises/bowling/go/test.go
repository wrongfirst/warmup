package main

func play(rolls []int) (*Game, error) {
	g := NewBowling()
	for _, r := range rolls {
		if err := g.Roll(r); err != nil {
			return nil, err
		}
	}
	return g, nil
}

func score(rolls []int) int {
	g, err := play(rolls)
	if err != nil {
		return -1
	}
	s, err := g.Score()
	if err != nil {
		return -1
	}
	return s
}

func rollError(previousRolls []int, r int) bool {
	g, err := play(previousRolls)
	if err != nil {
		return true
	}
	return g.Roll(r) != nil
}

func scoreError(rolls []int) bool {
	g, err := play(rolls)
	if err != nil {
		return true
	}
	_, err = g.Score()
	return err != nil
}

func main() {
	Tests.EqualCheck("should be able to score a game with all zeros", 0, score([]int{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0}))
	Tests.EqualCheck("should be able to score a game with no strikes or spares", 90, score([]int{3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6}))
	Tests.EqualCheck("a spare followed by zeros is worth ten points", 10, score([]int{6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0}))
	Tests.EqualCheck("points scored in the roll after a spare are counted twice", 16, score([]int{6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0}))
	Tests.EqualCheck("consecutive spares each get a one roll bonus", 31, score([]int{5, 5, 3, 7, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0}))
	Tests.EqualCheck("a spare in the last frame gets a one roll bonus that is counted once", 17, score([]int{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 7}))
	Tests.EqualCheck("a strike earns ten points in a frame with a single roll", 10, score([]int{10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0}))
	Tests.EqualCheck("points scored in the two rolls after a strike are counted twice as a bonus", 26, score([]int{10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0}))
	Tests.EqualCheck("consecutive strikes each get the two roll bonus", 81, score([]int{10, 10, 10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0}))
	Tests.EqualCheck("a strike in the last frame gets a two roll bonus that is counted once", 18, score([]int{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 7, 1}))
	Tests.EqualCheck("rolling a spare with the two roll bonus does not get a bonus roll", 20, score([]int{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 7, 3}))
	Tests.EqualCheck("strikes with the two roll bonus do not get bonus rolls", 30, score([]int{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10}))
	Tests.EqualCheck("last two strikes followed by only last bonus with non strike points", 31, score([]int{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 0, 1}))
	Tests.EqualCheck("a strike with the one roll bonus after a spare in the last frame does not get a bonus", 20, score([]int{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 10}))
	Tests.EqualCheck("all strikes is a perfect game", 300, score([]int{10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10}))
	Tests.EqualCheck("two bonus rolls after a strike in the last frame can score more than 10 points if one is a strike", 26, score([]int{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 6}))

	Tests.BoolCheck("rolls cannot score negative points", rollError([]int{}, -1))
	Tests.BoolCheck("a roll cannot score more than 10 points", rollError([]int{}, 11))
	Tests.BoolCheck("two rolls in a frame cannot score more than 10 points", rollError([]int{5}, 6))
	Tests.BoolCheck("bonus roll after a strike in the last frame cannot score more than 10 points", rollError([]int{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10}, 11))
	Tests.BoolCheck("two bonus rolls after a strike in the last frame cannot score more than 10 points", rollError([]int{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 5}, 6))
	Tests.BoolCheck("the second bonus rolls after a strike in the last frame cannot be a strike if the first one is not a strike", rollError([]int{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 6}, 10))
	Tests.BoolCheck("second bonus roll after a strike in the last frame cannot score more than 10 points", rollError([]int{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10}, 11))
	Tests.BoolCheck("cannot roll if game already has ten frames", rollError([]int{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0}, 0))
	Tests.BoolCheck("cannot roll after bonus roll for spare", rollError([]int{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 2}, 2))
	Tests.BoolCheck("cannot roll after bonus rolls for strike", rollError([]int{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 3, 2}, 2))

	Tests.BoolCheck("an unstarted game cannot be scored", scoreError([]int{}))
	Tests.BoolCheck("an incomplete game cannot be scored", scoreError([]int{0, 0}))
	Tests.BoolCheck("bonus rolls for a strike in the last frame must be rolled before score can be calculated", scoreError([]int{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10}))
	Tests.BoolCheck("both bonus rolls for a strike in the last frame must be rolled before score can be calculated", scoreError([]int{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10}))
	Tests.BoolCheck("bonus roll for a spare in the last frame must be rolled before score can be calculated", scoreError([]int{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3}))
}
