package main

import (
	"strconv"
	"strings"
	"unicode"
)

func Encode(input string) string {
	if len(input) == 0 {
		return ""
	}

	runes := []rune(input)
	var sb strings.Builder
	count := 1

	for i := 0; i < len(runes); i++ {
		if i+1 < len(runes) && runes[i] == runes[i+1] {
			count++
		} else {
			if count > 1 {
				sb.WriteString(strconv.Itoa(count))
			}
			sb.WriteRune(runes[i])
			count = 1
		}
	}

	return sb.String()
}

func Decode(input string) string {
	if len(input) == 0 {
		return ""
	}

	runes := []rune(input)
	var sb strings.Builder
	var countStr strings.Builder

	for _, r := range runes {
		if unicode.IsDigit(r) {
			countStr.WriteRune(r)
		} else {
			count := 1
			if countStr.Len() > 0 {
				count, _ = strconv.Atoi(countStr.String())
				countStr.Reset()
			}
			for i := 0; i < count; i++ {
				sb.WriteRune(r)
			}
		}
	}

	return sb.String()
}
