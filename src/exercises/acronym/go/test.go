package main

func main() {
	Tests.EqualCheck("basic", "PNG", Abbreviate("Portable Network Graphics"))
	Tests.EqualCheck("lowercase words", "ROR", Abbreviate("Ruby on Rails"))
	Tests.EqualCheck("punctuation", "FIFO", Abbreviate("First In, First Out"))
	Tests.EqualCheck("all caps word", "GIMP", Abbreviate("GNU Image Manipulation Program"))
	Tests.EqualCheck("hyphenated", "CMOS", Abbreviate("Complementary metal-oxide-semaphore"))
	Tests.EqualCheck("consecutive delimiters", "SIMUFTA", Abbreviate("Something - I must have dreamt it or wept: a-footfall on the stair"))
}
