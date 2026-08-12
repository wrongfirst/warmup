// @ts-nocheck
if (typeof plants !== "function") {
  throw new Error("plants function is not defined");
}

const diagram1 = "RC\nGG";
Tests.equalCheck("garden with single student", JSON.stringify(["radishes", "clover", "grass", "grass"]), JSON.stringify(plants(diagram1, "Alice")));

const diagram2 = "VVCG\nVVRC";
Tests.equalCheck("garden with two students - Bob", JSON.stringify(["clover", "grass", "radishes", "clover"]), JSON.stringify(plants(diagram2, "Bob")));
