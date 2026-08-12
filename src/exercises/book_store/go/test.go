package main

func main() {
	Tests.EqualCheck("Only a single book", 800, Total([]int{1}))
	Tests.EqualCheck("Two of the same book", 1600, Total([]int{2, 2}))
	Tests.EqualCheck("Empty basket", 0, Total([]int{}))
	Tests.EqualCheck("Two different books", 1520, Total([]int{1, 2}))
	Tests.EqualCheck("Three different books", 2160, Total([]int{1, 2, 3}))
	Tests.EqualCheck("Four different books", 2560, Total([]int{1, 2, 3, 4}))
	Tests.EqualCheck("Five different books", 3000, Total([]int{1, 2, 3, 4, 5}))
	Tests.EqualCheck("Two groups of four is cheaper than group of five plus group of three", 5120, Total([]int{1, 1, 2, 2, 3, 3, 4, 5}))
	Tests.EqualCheck("Two groups of four differs in book order", 5120, Total([]int{1, 1, 2, 3, 4, 4, 5, 5}))
}
