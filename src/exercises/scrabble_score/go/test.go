package main

func main() {
	Tests.EqualCheck("lowercase letter", 1, Score("a"))
	Tests.EqualCheck("uppercase letter", 1, Score("A"))
	Tests.EqualCheck("valuable letter", 4, Score("f"))
	Tests.EqualCheck("short word", 2, Score("at"))
	Tests.EqualCheck("short, valuable word", 12, Score("zoo"))
	Tests.EqualCheck("medium word", 6, Score("street"))
	Tests.EqualCheck("medium, valuable word", 22, Score("quirky"))
	Tests.EqualCheck("long, mixed-case word", 41, Score("OxyphenButazone"))
	Tests.EqualCheck("english-like word", 8, Score("pinata"))
	Tests.EqualCheck("empty input", 0, Score(""))
	Tests.EqualCheck("entire alphabet available", 87, Score("abcdefghijklmnopqrstuvwxyz"))
}
