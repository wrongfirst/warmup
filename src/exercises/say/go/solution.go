package main

import (
	"fmt"
	"strings"
)

var smalls = []string{
	"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
	"ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
	"seventeen", "eighteen", "nineteen",
}

var tens = []string{
	"", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety",
}

var scales = []string{"", "thousand", "million", "billion"}

func spellThreeDigits(n int64) string {
	var parts []string
	hundred := n / 100
	remainder := n % 100

	if hundred > 0 {
		parts = append(parts, fmt.Sprintf("%s hundred", smalls[hundred]))
	}

	if remainder > 0 {
		if remainder < 20 {
			parts = append(parts, smalls[remainder])
		} else {
			ten := remainder / 10
			unit := remainder % 10
			if unit > 0 {
				parts = append(parts, fmt.Sprintf("%s-%s", tens[ten], smalls[unit]))
			} else {
				parts = append(parts, tens[ten])
			}
		}
	}

	return strings.Join(parts, " ")
}

func Say(n int64) (string, bool) {
	if n < 0 || n >= 1000000000000 {
		return "", false
	}
	if n == 0 {
		return "zero", true
	}

	num := n
	scaleIdx := 0
	var parts []string

	for num > 0 {
		chunk := num % 1000
		if chunk > 0 {
			spelled := spellThreeDigits(chunk)
			scale := scales[scaleIdx]
			if scale != "" {
				parts = append([]string{fmt.Sprintf("%s %s", spelled, scale)}, parts...)
			} else {
				parts = append([]string{spelled}, parts...)
			}
		}
		num /= 1000
		scaleIdx++
	}

	return strings.Join(parts, " "), true
}
