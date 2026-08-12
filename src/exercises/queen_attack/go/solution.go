package main

import "math"

func Create(row, col int) string {
	if row < 0 {
		return "row not positive"
	}
	if row > 7 {
		return "row not on board"
	}
	if col < 0 {
		return "column not positive"
	}
	if col > 7 {
		return "column not on board"
	}
	return "ok"
}

func CanAttack(whiteRow, whiteCol, blackRow, blackCol int) bool {
	if whiteRow == blackRow || whiteCol == blackCol {
		return true
	}
	return math.Abs(float64(whiteRow-blackRow)) == math.Abs(float64(whiteCol-blackCol))
}
