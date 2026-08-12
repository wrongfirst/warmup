NORTH = "north"
EAST = "east"
SOUTH = "south"
WEST = "west"

class Robot:
    def __init__(self, direction=NORTH, x=0, y=0):
        self.direction = direction
        self.coordinates = (x, y)

    def turn_right(self):
        # Your code here
        pass

    def turn_left(self):
        # Your code here
        pass

    def advance(self):
        # Your code here
        pass

    def move(self, instructions):
        # Your code here
        pass
