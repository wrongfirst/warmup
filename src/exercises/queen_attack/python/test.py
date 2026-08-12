if 'create' not in globals() or 'can_attack' not in globals():
    raise Exception("create and can_attack functions must be defined")

# Position validation tests
Tests.equal_check("queen with a valid position", 0, create({"position":{"row":2,"column":2}}))
Tests.equal_check("queen must have positive row", {"error":"row not positive"}, create({"position":{"row":-2,"column":2}}))
Tests.equal_check("queen must have row on board", {"error":"row not on board"}, create({"position":{"row":8,"column":4}}))
Tests.equal_check("queen must have positive column", {"error":"column not positive"}, create({"position":{"row":2,"column":-2}}))
Tests.equal_check("queen must have column on board", {"error":"column not on board"}, create({"position":{"row":4,"column":8}}))

# Attack detection tests
Tests.equal_check("cannot attack", False, can_attack({"position":{"row":2,"column":4}}, {"position":{"row":6,"column":6}}))
Tests.equal_check("can attack on same row", True, can_attack({"position":{"row":2,"column":4}}, {"position":{"row":2,"column":6}}))
Tests.equal_check("can attack on same column", True, can_attack({"position":{"row":4,"column":5}}, {"position":{"row":2,"column":5}}))
Tests.equal_check("can attack on first diagonal", True, can_attack({"position":{"row":2,"column":2}}, {"position":{"row":0,"column":4}}))
Tests.equal_check("can attack on second diagonal", True, can_attack({"position":{"row":2,"column":2}}, {"position":{"row":3,"column":1}}))
Tests.equal_check("can attack on third diagonal", True, can_attack({"position":{"row":2,"column":2}}, {"position":{"row":1,"column":1}}))
Tests.equal_check("can attack on fourth diagonal", True, can_attack({"position":{"row":1,"column":7}}, {"position":{"row":0,"column":6}}))
Tests.equal_check("cannot attack if falling diagonals only match on reflection", False, can_attack({"position":{"row":4,"column":1}}, {"position":{"row":2,"column":5}}))
