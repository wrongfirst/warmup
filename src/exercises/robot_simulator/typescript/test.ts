// @ts-nocheck
if (typeof Robot !== "function") {
  throw new Error("Robot class is not defined");
}

const robot1 = new Robot();
robot1.place({ x: 0, y: 0, direction: "north" });
robot1.evaluate("LA");
Tests.equalCheck("at origin facing north turn left advance", JSON.stringify([-1, 0]), JSON.stringify(robot1.coordinates));
Tests.equalCheck("facing west after turn left", "west", robot1.bearing);

const robot2 = new Robot();
robot2.place({ x: 7, y: 3, direction: "north" });
robot2.evaluate("RAALAL");
Tests.equalCheck("at 7,3 facing north evaluate RAALAL coords", JSON.stringify([9, 4]), JSON.stringify(robot2.coordinates));
Tests.equalCheck("at 7,3 facing north evaluate RAALAL bearing", "west", robot2.bearing);
