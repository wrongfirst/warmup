package main

import (
	"fmt"
	"sort"
)

var groupCosts = map[int]int{
	0: 0,
	1: 800,
	2: 1520,
	3: 2160,
	4: 2560,
	5: 3000,
}

func Total(basket []int) int {
	if len(basket) == 0 {
		return 0
	}

	countsMap := make(map[int]int)
	for _, book := range basket {
		countsMap[book]++
	}

	var initialCounts []int
	for _, count := range countsMap {
		initialCounts = append(initialCounts, count)
	}

	memo := make(map[string]int)

	var solve func(counts []int) int
	solve = func(counts []int) int {
		var active []int
		for _, c := range counts {
			if c > 0 {
				active = append(active, c)
			}
		}
		if len(active) == 0 {
			return 0
		}

		sort.Slice(active, func(i, j int) bool {
			return active[i] > active[j]
		})

		key := fmt.Sprintf("%v", active)
		if val, ok := memo[key]; ok {
			return val
		}

		minCost := 1000000000
		numUnique := len(active)

		for size := 1; size <= numUnique; size++ {
			nextState := make([]int, len(active))
			copy(nextState, active)
			for i := 0; i < size; i++ {
				nextState[i]--
			}

			cost := groupCosts[size] + solve(nextState)
			if cost < minCost {
				minCost = cost
			}
		}

		memo[key] = minCost
		return minCost
	}

	return solve(initialCounts)
}
