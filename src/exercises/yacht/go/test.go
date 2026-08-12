package main

func main() {
	Tests.EqualCheck("Yacht", 50, Score([]int{5, 5, 5, 5, 5}, "yacht"))
	Tests.EqualCheck("Not Yacht", 0, Score([]int{1, 3, 3, 2, 5}, "yacht"))
	Tests.EqualCheck("Ones", 3, Score([]int{1, 1, 1, 3, 5}, "ones"))
	Tests.EqualCheck("Ones out of order", 3, Score([]int{3, 1, 1, 5, 1}, "ones"))
	Tests.EqualCheck("No ones", 0, Score([]int{4, 3, 6, 5, 5}, "ones"))
	Tests.EqualCheck("Twos", 10, Score([]int{2, 3, 4, 5, 6}, "twos"))
	Tests.EqualCheck("Four of a Kind", 12, Score([]int{3, 3, 3, 3, 5}, "four of a kind"))
	Tests.EqualCheck("Four of a Kind from Yacht", 12, Score([]int{3, 3, 3, 3, 3}, "four of a kind"))
	Tests.EqualCheck("Full House", 19, Score([]int{3, 3, 3, 5, 5}, "full house"))
	Tests.EqualCheck("Full House not matching", 0, Score([]int{3, 3, 3, 3, 5}, "full house"))
	Tests.EqualCheck("Little Straight", 30, Score([]int{3, 5, 4, 1, 2}, "little straight"))
	Tests.EqualCheck("Big Straight", 30, Score([]int{4, 6, 2, 5, 3}, "big straight"))
	Tests.EqualCheck("Choice", 23, Score([]int{3, 3, 5, 6, 6}, "choice"))
}
