package main

func main() {
	// Position validation tests
	Tests.EqualCheck("queen with a valid position", "ok", Create(2, 2))
	Tests.EqualCheck("queen must have positive row", "row not positive", Create(-2, 2))
	Tests.EqualCheck("queen must have row on board", "row not on board", Create(8, 4))
	Tests.EqualCheck("queen must have positive column", "column not positive", Create(2, -2))
	Tests.EqualCheck("queen must have column on board", "column not on board", Create(4, 8))

	// Attack detection tests
	Tests.BoolCheck("cannot attack", false == CanAttack(2, 4, 6, 6))
	Tests.BoolCheck("can attack on same row", true == CanAttack(2, 4, 2, 6))
	Tests.BoolCheck("can attack on same column", true == CanAttack(4, 5, 2, 5))
	Tests.BoolCheck("can attack on first diagonal", true == CanAttack(2, 2, 0, 4))
	Tests.BoolCheck("can attack on second diagonal", true == CanAttack(2, 2, 3, 1))
	Tests.BoolCheck("can attack on third diagonal", true == CanAttack(2, 2, 1, 1))
	Tests.BoolCheck("can attack on fourth diagonal", true == CanAttack(1, 7, 0, 6))
	Tests.BoolCheck("cannot attack if falling diagonals only match on reflection", false == CanAttack(4, 1, 2, 5))
}
