package main

func Tick(matrix [][]int) [][]int {
	if len(matrix) == 0 || len(matrix[0]) == 0 {
		return [][]int{}
	}

	rows := len(matrix)
	cols := len(matrix[0])
	result := make([][]int, rows)
	for i := range result {
		result[i] = make([]int, cols)
	}

	for r := 0; r < rows; r++ {
		for c := 0; c < cols; c++ {
			liveNeighbors := 0
			for dr := -1; dr <= 1; dr++ {
				for dc := -1; dc <= 1; dc++ {
					if dr == 0 && dc == 0 {
						continue
					}
					nr, nc := r+dr, c+dc
					if nr >= 0 && nr < rows && nc >= 0 && nc < cols {
						if matrix[nr][nc] == 1 {
							liveNeighbors++
						}
					}
				}
			}

			if matrix[r][c] == 1 {
				if liveNeighbors == 2 || liveNeighbors == 3 {
					result[r][c] = 1
				} else {
					result[r][c] = 0
				}
			} else {
				if liveNeighbors == 3 {
					result[r][c] = 1
				} else {
					result[r][c] = 0
				}
			}
		}
	}

	return result
}
