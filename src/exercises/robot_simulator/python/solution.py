NORTH = "north"
EAST = "east"
SOUTH = "south"
WEST = "west"

DIRECTIONS = [NORTH, EAST, SOUTH, WEST]

class Robot:
    def __init__(self, direction=NORTH, x=0, y=0):
        self.direction = direction
        self.coordinates = (x, y)

    def turn_right(self):
        idx = DIRECTIONS.index(self.direction)
        self.direction = DIRECTIONS[(idx + 1) % 4]

    def turn_left(self):
        idx = DIRECTIONS.index(self.direction)
        self.direction = DIRECTIONS[(idx + 3) % 4]

    def advance(self):
        x, y = self.coordinates
        if self.direction == NORTH:
            y += 1
        elif self.direction == EAST:
            x += 1
        elif self.direction == SOUTH:
            y -= 1
        elif self.direction == WEST:
            x -= 1
        self.coordinates = (x, y)

    def move(self, instructions):
        for char in instructions:
            if char == "R":
                self.turn_right()
            elif char == "L":
                self.turn_left()
            elif char == "A":
                self.advance()
