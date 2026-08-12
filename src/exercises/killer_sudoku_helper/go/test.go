package main

import "fmt"

func main() {
	Tests.EqualCheck("1-digit cage sum 1", fmt.Sprintf("%v", [][]int{{1}}), fmt.Sprintf("%v", Combinations(1, 1, []int{})))
	Tests.EqualCheck("1-digit cage sum 7", fmt.Sprintf("%v", [][]int{{7}}), fmt.Sprintf("%v", Combinations(7, 1, []int{})))
	Tests.EqualCheck("2-digit cage sum 10", fmt.Sprintf("%v", [][]int{{1,9},{2,8},{3,7},{4,6}}), fmt.Sprintf("%v", Combinations(10, 2, []int{})))
	Tests.EqualCheck("3-digit cage sum 7", fmt.Sprintf("%v", [][]int{{1,2,4}}), fmt.Sprintf("%v", Combinations(7, 3, []int{})))
	Tests.EqualCheck("2-digit cage sum 10 with excluded digits", fmt.Sprintf("%v", [][]int{{2,8},{3,7}}), fmt.Sprintf("%v", Combinations(10, 2, []int{1,4})))
}
