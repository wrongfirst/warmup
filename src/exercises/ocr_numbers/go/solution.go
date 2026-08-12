package main

import (
	"errors"
	"strings"
)

var patterns = map[string]string{
	" _ | ||_|   ": "0",
	"     |  |   ": "1",
	" _  _||_    ": "2",
	" _  _| _|   ": "3",
	"   |_|  |   ": "4",
	" _ |_  _|   ": "5",
	" _ |_ |_|   ": "6",
	" _   |  |   ": "7",
	" _ |_||_|   ": "8",
	" _ |_| _|   ": "9",
}

func Convert(input string) (string, error) {
	rows := strings.Split(input, "\n")
	if len(rows)%4 != 0 {
		return "", errors.New("Number of input lines is not a multiple of four")
	}

	numCols := len(rows[0])
	for _, r := range rows {
		if len(r) != numCols {
			return "", errors.New("Inconsistent line lengths")
		}
	}
	if numCols%3 != 0 {
		return "", errors.New("Number of input columns is not a multiple of three")
	}

	var gridRowResults []string

	for gridRow := 0; gridRow < len(rows); gridRow += 4 {
		var lineResult strings.Builder
		for col := 0; col < numCols; col += 3 {
			var cellPattern strings.Builder
			for r := 0; r < 4; r++ {
				cellPattern.WriteString(rows[gridRow+r][col : col+3])
			}
			digit, ok := patterns[cellPattern.String()]
			if ok {
				lineResult.WriteString(digit)
			} else {
				lineResult.WriteString("?")
			}
		}
		gridRowResults = append(gridRowResults, lineResult.String())
	}

	return strings.Join(gridRowResults, ","), nil
}
