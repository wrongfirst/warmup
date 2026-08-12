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

func main() {
	g1, _ := play(repeat(0, 20))
	s1, _ := g1.Score()
	Tests.EqualCheck("gutter game", 0, s1)

	g2, _ := play(repeat(1, 20))
	s2, _ := g2.Score()
	Tests.EqualCheck("all ones", 20, s2)

	g3, _ := play(append([]int{5, 5, 3}, repeat(0, 17)...))
	s3, _ := g3.Score()
	Tests.EqualCheck("one spare", 22, s3)

	g4, _ := play(append([]int{10, 3, 5}, repeat(0, 16)...))
	s4, _ := g4.Score()
	Tests.EqualCheck("one strike", 26, s4)

	g5, _ := play(repeat(10, 12))
	s5, _ := g5.Score()
	Tests.EqualCheck("perfect game", 300, s5)

	g6, _ := play([]int{0, 0})
	_, err6 := g6.Score()
	Tests.BoolCheck("incomplete game score is error", err6 != nil)
}

func repeat(val, count int) []int {
	res := make([]int, count)
	for i := range res {
		res[i] = val
	}
	return res
}
