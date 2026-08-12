package main

type Pair struct {
	Row    int
	Column int
}

func SaddlePoints(matrix [][]int) []Pair {
	if len(matrix) == 0 || len(matrix[0]) == 0 {
		return []Pair{}
	}
	rows := len(matrix)
	cols := len(matrix[0])
	var result []Pair

	for r := 0; r < rows; r++ {
		rowMax := matrix[r][0]
		for c := 1; c < cols; c++ {
			if matrix[r][c] > rowMax {
				rowMax = matrix[r][c]
			}
		}
		for c := 0; c < cols; c++ {
			if matrix[r][c] == rowMax {
				isMin := true
				for k := 0; k < rows; k++ {
					if matrix[k][c] < matrix[r][c] {
						isMin = false
						break
					}
				}
				if isMin {
					result = append(result, Pair{Row: r + 1, Column: c + 1})
				}
			}
		}
	}
	return result
}
