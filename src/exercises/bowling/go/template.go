package main

type Game struct{}

func NewBowling() *Game {
	return &Game{}
}

func (g *Game) Roll(pins int) error {
	// Your code here
	return nil
}

func (g *Game) Score() (int, error) {
	// Your code here
	return 0, nil
}
