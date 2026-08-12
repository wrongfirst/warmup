package main

const (
	North = "north"
	East  = "east"
	South = "south"
	West  = "west"
)

var directions = []string{North, East, South, West}

func Step(x, y int, dir string, instructions string) (int, int, string) {
	dirIdx := 0
	for i, d := range directions {
		if d == dir {
			dirIdx = i
			break
		}
	}

	currX, currY := x, y

	for _, ch := range instructions {
		switch ch {
		case 'R':
			dirIdx = (dirIdx + 1) % 4
		case 'L':
			dirIdx = (dirIdx + 3) % 4
		case 'A':
			switch directions[dirIdx] {
			case North:
				currY++
			case East:
				currX++
			case South:
				currY--
			case West:
				currX--
			}
		}
	}

	return currX, currY, directions[dirIdx]
}
