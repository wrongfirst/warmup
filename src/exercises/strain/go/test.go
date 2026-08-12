package main

import "fmt"

func main() {
	res1 := Keep([]int{1, 2, 3}, func(x int) bool { return x%2 == 1 })
	Tests.EqualCheck("Keep odd numbers", fmt.Sprintf("%v", []int{1, 3}), fmt.Sprintf("%v", res1))

	res2 := Discard([]int{1, 2, 3}, func(x int) bool { return x%2 == 1 })
	Tests.EqualCheck("Discard odd numbers", fmt.Sprintf("%v", []int{2}), fmt.Sprintf("%v", res2))
}
