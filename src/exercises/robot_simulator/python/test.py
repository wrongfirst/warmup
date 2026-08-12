if 'Robot' not in globals():
    raise Exception("Robot class is not defined")

robot1 = Robot(NORTH, 0, 0)
robot1.move("LA")
Tests.equal_check("at origin facing north turn left advance", (-1, 0), robot1.coordinates)
Tests.equal_check("facing west after turn left", WEST, robot1.direction)

robot2 = Robot(NORTH, 7, 3)
robot2.move("RAALAL")
Tests.equal_check("at 7,3 facing north evaluate RAALAL coords", (9, 4), robot2.coordinates)
Tests.equal_check("at 7,3 facing north evaluate RAALAL bearing", WEST, robot2.direction)
