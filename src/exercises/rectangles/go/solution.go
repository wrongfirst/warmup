package main

func Count(lines []string) int {
	if len(lines) == 0 || len(lines[0]) == 0 {
		return 0
	}

	rows := len(lines)
	cols := len(lines[0])
	total := 0

	for r1 := 0; r1 < rows; r1++ {
		for c1 := 0; c1 < cols; c1++ {
			if lines[r1][c1] != '+' {
				continue
			}

			for r2 := r1 + 1; r2 < rows; r2++ {
				for c2 := c1 + 1; c2 < cols; c2++ {
					if lines[r1][c2] == '+' && lines[r2][c1] == '+' && lines[r2][c2] == '+' {
						valid := true

						for c := c1 + 1; c < c2; c++ {
							if (lines[r1][c] != '-' && lines[r1][c] != '+') ||
								(lines[r2][c] != '-' && lines[r2][c] != '+') {
								valid = false
								break
							}
						}

						if !valid {
							continue
						}

						for r := r1 + 1; r < r2; r++ {
							if (lines[r][c1] != '|' && lines[r][c1] != '+') ||
								(lines[r][c2] != '|' && lines[r][c2] != '+') {
								valid = false
								break
							}
						}

						if valid {
							total++
						}
					}
				}
			}
		}
	}

	return total
}
