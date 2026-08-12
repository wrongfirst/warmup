// @ts-nocheck
if (typeof roster !== "function") {
  throw new Error("roster function is not defined");
}

Tests.equalCheck("Roster is empty when no student is added", JSON.stringify([]), JSON.stringify(roster([])));
Tests.equalCheck("Add a student", JSON.stringify([true]), JSON.stringify(add([["Aimee", 2]])));
Tests.equalCheck("Student is added to the roster", JSON.stringify(["Aimee"]), JSON.stringify(roster([["Aimee", 2]])));
Tests.equalCheck("Adding multiple students in the same grade", JSON.stringify([true, true, true]), JSON.stringify(add([["Blair", 2], ["James", 2], ["Paul", 2]])));
Tests.equalCheck("Multiple students in the same grade sorted in roster", JSON.stringify(["Blair", "James", "Paul"]), JSON.stringify(roster([["James", 2], ["Blair", 2], ["Paul", 2]])));
Tests.equalCheck("Cannot add student to same grade more than once", JSON.stringify([true, true, false, true]), JSON.stringify(add([["Blair", 2], ["James", 2], ["James", 2], ["Paul", 2]])));
Tests.equalCheck("Student can't be in two different grades", JSON.stringify([]), JSON.stringify(grade([["Aimee", 2], ["Aimee", 1]], 1)));
