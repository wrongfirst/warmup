package main

import (
	"math"
	"strings"
	"unicode"
)

func Encode(pt string) string {
	var normalized []rune
	for _, r := range strings.ToLower(pt) {
		if unicode.IsLetter(r) || unicode.IsDigit(r) {
			normalized = append(normalized, r)
		}
	}

	if len(normalized) == 0 {
		return ""
	}

	length := len(normalized)
	c := int(math.Ceil(math.Sqrt(float64(length))))
	r := c
	if (c-1)*c >= length {
		r = c - 1
	}

	totalLen := r * c
	padded := make([]rune, totalLen)
	for i := 0; i < totalLen; i++ {
		if i < length {
			padded[i] = normalized[i]
		} else {
			padded[i] = ' '
		}
	}

	var columns []string
	for col := 0; col < c; col++ {
		var colRunes []rune
		for row := 0; row < r; row++ {
			colRunes = append(colRunes, padded[row*c+col])
		}
		columns = append(columns, string(colRunes))
	}

	return strings.Join(columns, " ")
}
