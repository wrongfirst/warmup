package main

import (
	"sort"
	"strings"
)

func Score(dice []int, category string) int {
	counts := make(map[int]int)
	sum := 0
	for _, d := range dice {
		counts[d]++
		sum += d
	}

	cat := strings.ToLower(category)
	switch cat {
	case "ones":
		return counts[1] * 1
	case "twos":
		return counts[2] * 2
	case "threes":
		return counts[3] * 3
	case "fours":
		return counts[4] * 4
	case "fives":
		return counts[5] * 5
	case "sixes":
		return counts[6] * 6
	case "choice":
		return sum
	case "yacht":
		if len(counts) == 1 {
			return 50
		}
		return 0
	case "full house":
		if len(counts) == 2 {
			for _, c := range counts {
				if c == 3 || c == 2 {
					return sum
				}
			}
		}
		return 0
	case "four of a kind":
		for val, c := range counts {
			if c >= 4 {
				return val * 4
			}
		}
		return 0
	case "little straight":
		s := make([]int, len(dice))
		copy(s, dice)
		sort.Ints(s)
		if s[0] == 1 && s[1] == 2 && s[2] == 3 && s[3] == 4 && s[4] == 5 {
			return 30
		}
		return 0
	case "big straight":
		s := make([]int, len(dice))
		copy(s, dice)
		sort.Ints(s)
		if s[0] == 2 && s[1] == 3 && s[2] == 4 && s[3] == 5 && s[4] == 6 {
			return 30
		}
		return 0
	}

	return 0
}
