if 'roster' not in globals():
    raise Exception("roster function is not defined")

Tests.equal_check("Roster is empty when no student is added", [], roster([]))
Tests.equal_check("Add a student", [True], add([("Aimee", 2)]))
Tests.equal_check("Student is added to the roster", ["Aimee"], roster([("Aimee", 2)]))
Tests.equal_check("Adding multiple students in the same grade", [True, True, True], add([("Blair", 2), ("James", 2), ("Paul", 2)]))
Tests.equal_check("Multiple students in the same grade sorted in roster", ["Blair", "James", "Paul"], roster([("James", 2), ("Blair", 2), ("Paul", 2)]))
Tests.equal_check("Cannot add student to same grade more than once", [True, True, False, True], add([("Blair", 2), ("James", 2), ("James", 2), ("Paul", 2)]))
Tests.equal_check("Student can't be in two different grades", [], grade([("Aimee", 2), ("Aimee", 1)], 1))
