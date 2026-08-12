package main

import "errors"

type Game struct {
	rolls []int
}

func NewBowling() *Game {
	return &Game{rolls: []int{}}
}

func (g *Game) isComplete() bool {
	frame := 1
	idx := 0
	for idx < len(g.rolls) && frame <= 10 {
		if frame < 10 {
			if g.rolls[idx] == 10 {
				idx++
			} else {
				idx += 2
			}
			frame++
		} else {
			if len(g.rolls)-idx < 2 {
				return false
			}
			r1 := g.rolls[idx]
			r2 := g.rolls[idx+1]
			if r1 == 10 || r1+r2 == 10 {
				return len(g.rolls)-idx == 3
			}
			return len(g.rolls)-idx == 2
		}
	}
	return false
}

func (g *Game) Roll(pins int) error {
	if pins < 0 || pins > 10 {
		return errors.New("Pins must have a value from 0 to 10")
	}
	if g.isComplete() {
		return errors.New("Cannot roll after game is over")
	}

	rollsSoFar := append(append([]int{}, g.rolls...), pins)
	frame := 1
	idx := 0

	for idx < len(rollsSoFar) && frame <= 10 {
		if frame < 10 {
			if rollsSoFar[idx] == 10 {
				idx++
				frame++
			} else {
				if idx+1 < len(rollsSoFar) {
					if rollsSoFar[idx]+rollsSoFar[idx+1] > 10 {
						return errors.New("Pin count exceeds 10 in a frame")
					}
					idx += 2
					frame++
				} else {
					idx++
				}
			}
		} else {
			r1 := rollsSoFar[idx]
			var r2, r3 *int
			if idx+1 < len(rollsSoFar) {
				r2 = &rollsSoFar[idx+1]
			}
			if idx+2 < len(rollsSoFar) {
				r3 = &rollsSoFar[idx+2]
			}

			if r1 != 10 && r2 != nil && r1+*r2 > 10 {
				return errors.New("Pin count exceeds 10 in a frame")
			}
			if r1 == 10 && r2 != nil && *r2 != 10 && r3 != nil && *r2+*r3 > 10 {
				return errors.New("Pin count exceeds 10 in a frame")
			}
			idx = len(rollsSoFar)
		}
	}

	g.rolls = append(g.rolls, pins)
	return nil
}

func (g *Game) Score() (int, error) {
	if !g.isComplete() {
		return 0, errors.New("Score cannot be taken until the end of the game")
	}

	total := 0
	idx := 0

	for frame := 1; frame <= 10; frame++ {
		if g.rolls[idx] == 10 {
			total += 10 + g.rolls[idx+1] + g.rolls[idx+2]
			idx++
		} else if g.rolls[idx]+g.rolls[idx+1] == 10 {
			total += 10 + g.rolls[idx+2]
			idx += 2
		} else {
			total += g.rolls[idx] + g.rolls[idx+1]
			idx += 2
		}
	}

	return total, nil
}
