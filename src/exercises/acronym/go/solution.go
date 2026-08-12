package main

import (
	"strings"
	"unicode"
)

func Abbreviate(s string) string {
	s = strings.ReplaceAll(s, "_", "")
	s = strings.ReplaceAll(s, "-", " ")

	words := strings.Fields(s)
	var acronym []rune

	for _, w := range words {
		cleaned := strings.TrimFunc(w, func(r rune) bool {
			return !unicode.IsLetter(r) && !unicode.IsDigit(r)
		})
		if len(cleaned) > 0 {
			runes := []rune(cleaned)
			acronym = append(acronym, unicode.ToUpper(runes[0]))
		}
	}

	return string(acronym)
}
