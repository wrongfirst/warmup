package main

func Combinations(target, size int, exclude []int) [][]int {
	excludedSet := make(map[int]bool)
	for _, v := range exclude {
		excludedSet[v] = true
	}

	var result [][]int
	var currentCombo []int

	var backtrack func(startDigit, currentSum int)
	backtrack = func(startDigit, currentSum int) {
		if len(currentCombo) == size {
			if currentSum == target {
				comboCopy := make([]int, size)
				copy(comboCopy, currentCombo)
				result = append(result, comboCopy)
			}
			return
		}

		for digit := startDigit; digit <= 9; digit++ {
			if excludedSet[digit] {
				continue
			}
			if currentSum+digit > target {
				break
			}

			currentCombo = append(currentCombo, digit)
			backtrack(digit+1, currentSum+digit)
			currentCombo = currentCombo[:len(currentCombo)-1]
		}
	}

	backtrack(1, 0)
	return result
}
