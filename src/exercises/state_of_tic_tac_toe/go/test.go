package main

func main() {
	st1, err1 := Gamestate([]string{"XOO","X  ","X  "})
	Tests.BoolCheck("Finished game where X won err", err1 == nil)
	Tests.EqualCheck("Finished game where X won", "win", st1)

	st2, err2 := Gamestate([]string{"OXX","OX ","O  "})
	Tests.BoolCheck("Finished game where O won err", err2 == nil)
	Tests.EqualCheck("Finished game where O won", "win", st2)

	st3, err3 := Gamestate([]string{"XOX","XXO","OXO"})
	Tests.BoolCheck("Draw game err", err3 == nil)
	Tests.EqualCheck("Draw game", "draw", st3)

	st4, err4 := Gamestate([]string{"   ","   ","   "})
	Tests.BoolCheck("Ongoing game err", err4 == nil)
	Tests.EqualCheck("Ongoing game", "ongoing", st4)

	_, err5 := Gamestate([]string{"XX ","   ","   "})
	Tests.BoolCheck("Invalid board: X went twice", err5 != nil)

	_, err6 := Gamestate([]string{"OOX","   ","   "})
	Tests.BoolCheck("Invalid board: O started", err6 != nil)

	_, err7 := Gamestate([]string{"XXX","OOO","   "})
	Tests.BoolCheck("Invalid board: both won", err7 != nil)
}
