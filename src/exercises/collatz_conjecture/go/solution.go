package main

import "errors"

func Steps(number int) (int, error) {
	if number <= 0 {
		return 0, errors.New("Only positive integers are allowed")
	}

	count := 0
	curr := number

	for curr != 1 {
		if curr%2 == 0 {
			curr /= 2
		} else {
			curr = 3*curr + 1
		}
		count++
	}

	return count, nil
}
