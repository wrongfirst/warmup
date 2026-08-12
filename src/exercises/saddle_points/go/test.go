package main

import "fmt"

func main() {
	matrix := [][]int{
		{9, 8, 7},
		{5, 3, 2},
		{6, 6, 7},
	}
	res := SaddlePoints(matrix)
	Tests.EqualCheck("Single saddle point", fmt.Sprintf("%v", []Pair{{Row: 2, Column: 1}}), fmt.Sprintf("%v", res))
}
