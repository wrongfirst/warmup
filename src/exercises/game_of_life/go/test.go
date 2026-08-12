package main

import "fmt"

func main() {
	Tests.EqualCheck("empty matrix", fmt.Sprintf("%v", [][]int{}), fmt.Sprintf("%v", Tick([][]int{})))
	Tests.EqualCheck("live cells with zero neighbors die", fmt.Sprintf("%v", [][]int{{0,0,0},{0,0,0},{0,0,0}}), fmt.Sprintf("%v", Tick([][]int{{0,0,0},{0,1,0},{0,0,0}})))
	Tests.EqualCheck("live cells with one neighbor die", fmt.Sprintf("%v", [][]int{{0,0,0},{0,0,0},{0,0,0}}), fmt.Sprintf("%v", Tick([][]int{{0,0,0},{0,1,0},{0,1,0}})))
	Tests.EqualCheck("live cells with two neighbors stay alive", fmt.Sprintf("%v", [][]int{{0,0,0},{1,0,1},{0,0,0}}), fmt.Sprintf("%v", Tick([][]int{{1,0,1},{1,0,1},{1,0,1}})))
	Tests.EqualCheck("live cells with three neighbors stay alive", fmt.Sprintf("%v", [][]int{{0,0,0},{1,0,0},{1,1,0}}), fmt.Sprintf("%v", Tick([][]int{{0,1,0},{1,0,0},{1,1,0}})))
	Tests.EqualCheck("dead cells with three neighbors become alive", fmt.Sprintf("%v", [][]int{{0,0,0},{1,1,0},{0,0,0}}), fmt.Sprintf("%v", Tick([][]int{{1,1,0},{0,0,0},{1,0,0}})))
}
