package main

import "fmt"

type Result struct {
	Moves       int    `json:"moves"`
	GoalBucket  string `json:"goalBucket"`
	OtherBucket int    `json:"otherBucket"`
}

func Measure(bucketOne, bucketTwo, goal int, startBucket string) (Result, string) {
	maxCap := bucketOne
	if bucketTwo > maxCap {
		maxCap = bucketTwo
	}
	if goal > maxCap {
		return Result{}, "impossible"
	}

	b1 := 0
	b2 := 0
	if startBucket == "one" {
		b1 = bucketOne
	} else {
		b2 = bucketTwo
	}

	forbidden := "0,0"
	if startBucket == "one" {
		forbidden = fmt.Sprintf("0,%d", bucketTwo)
	} else {
		forbidden = fmt.Sprintf("%d,0", bucketOne)
	}

	visited := make(map[string]bool)
	visited["0,0"] = true
	visited[fmt.Sprintf("%d,%d", b1, b2)] = true
	visited[forbidden] = true

	type state struct {
		c1, c2, moves int
	}

	queue := []state{{c1: b1, c2: b2, moves: 1}}

	for len(queue) > 0 {
		curr := queue[0]
		queue = queue[1:]

		if curr.c1 == goal {
			return Result{Moves: curr.moves, GoalBucket: "one", OtherBucket: curr.c2}, "ok"
		}
		if curr.c2 == goal {
			return Result{Moves: curr.moves, GoalBucket: "two", OtherBucket: curr.c1}, "ok"
		}

		p1to2 := curr.c1
		if bucketTwo-curr.c2 < p1to2 {
			p1to2 = bucketTwo - curr.c2
		}

		p2to1 := curr.c2
		if bucketOne-curr.c1 < p2to1 {
			p2to1 = bucketOne - curr.c1
		}

		nextStates := [][2]int{
			{bucketOne, curr.c2},
			{curr.c1, bucketTwo},
			{0, curr.c2},
			{curr.c1, 0},
			{curr.c1 - p1to2, curr.c2 + p1to2},
			{curr.c1 + p2to1, curr.c2 - p2to1},
		}

		for _, s := range nextStates {
			key := fmt.Sprintf("%d,%d", s[0], s[1])
			if !visited[key] {
				visited[key] = true
				queue = append(queue, state{c1: s[0], c2: s[1], moves: curr.moves + 1})
			}
		}
	}

	return Result{}, "impossible"
}
