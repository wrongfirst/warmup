package main

import (
	"errors"
	"math"
)

func Classify(number int) (string, error) {
	if number <= 0 {
		return "", errors.New("Classification is only possible for natural numbers.")
	}

	if number == 1 {
		return "deficient", nil
	}

	aliquotSum := 1
	limit := int(math.Sqrt(float64(number)))

	for i := 2; i <= limit; i++ {
		if number%i == 0 {
			aliquotSum += i
			other := number / i
			if other != i {
				aliquotSum += other
			}
		}
	}

	if aliquotSum == number {
		return "perfect", nil
	}
	if aliquotSum > number {
		return "abundant", nil
	}
	return "deficient", nil
}
