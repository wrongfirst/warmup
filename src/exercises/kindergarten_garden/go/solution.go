package main

import "strings"

var plantNames = map[rune]string{
	'G': "grass",
	'C': "clover",
	'R': "radishes",
	'V': "violets",
}

var students = []string{
	"Alice", "Bob", "Charlie", "David", "Eve", "Fred",
	"Ginny", "Harriet", "Ileana", "Joseph", "Kincaid", "Larry",
}

func Plants(diagram string, student string) []string {
	rows := strings.Split(diagram, "\n")
	idx := -1
	for i, s := range students {
		if s == student {
			idx = i
			break
		}
	}
	if idx == -1 || len(rows) < 2 {
		return nil
	}
	c := idx * 2
	return []string{
		plantNames[rune(rows[0][c])],
		plantNames[rune(rows[0][c+1])],
		plantNames[rune(rows[1][c])],
		plantNames[rune(rows[1][c+1])],
	}
}
