package main

func main() {
	Tests.EqualCheck("no rows", 0, Count([]string{}))
	Tests.EqualCheck("no columns", 0, Count([]string{""}))
	Tests.EqualCheck("no rectangles", 0, Count([]string{" "}))
	Tests.EqualCheck("one rectangle", 1, Count([]string{"+-+", "| |", "+-+"}))
	Tests.EqualCheck("two rectangles without shared parts", 2, Count([]string{"  +-+", "  | |", "+-+-+", "| |  ", "+-+  "}))
	Tests.EqualCheck("five rectangles with shared parts", 5, Count([]string{"  +-+", "  | |", "+-+-+", "| | |", "+-+-+"}))
	Tests.EqualCheck("rectangle of height 1", 1, Count([]string{"+--+", "+--+"}))
	Tests.EqualCheck("rectangle of width 1", 1, Count([]string{"++", "||", "++"}))
}
