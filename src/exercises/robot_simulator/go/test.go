package main

func main() {
	x1, y1, d1 := Step(0, 0, "north", "LA")
	Tests.EqualCheck("at origin facing north turn left advance x", -1, x1)
	Tests.EqualCheck("at origin facing north turn left advance y", 0, y1)
	Tests.EqualCheck("facing west after turn left", "west", d1)

	x2, y2, d2 := Step(7, 3, "north", "RAALAL")
	Tests.EqualCheck("at 7,3 facing north evaluate RAALAL x", 9, x2)
	Tests.EqualCheck("at 7,3 facing north evaluate RAALAL y", 4, y2)
	Tests.EqualCheck("at 7,3 facing north evaluate RAALAL bearing", "west", d2)
}
