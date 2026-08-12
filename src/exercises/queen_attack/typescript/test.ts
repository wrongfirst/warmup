// @ts-nocheck
if (typeof create !== "function" || typeof canAttack !== "function") {
  throw new Error("create and canAttack functions must be defined");
}

// Position validation tests
Tests.equalCheck("queen with a valid position", JSON.stringify(0), JSON.stringify(create({ position: { row: 2, column: 2 } })));
Tests.equalCheck("queen must have positive row", JSON.stringify({ error: "row not positive" }), JSON.stringify(create({ position: { row: -2, column: 2 } })));
Tests.equalCheck("queen must have row on board", JSON.stringify({ error: "row not on board" }), JSON.stringify(create({ position: { row: 8, column: 4 } })));
Tests.equalCheck("queen must have positive column", JSON.stringify({ error: "column not positive" }), JSON.stringify(create({ position: { row: 2, column: -2 } })));
Tests.equalCheck("queen must have column on board", JSON.stringify({ error: "column not on board" }), JSON.stringify(create({ position: { row: 4, column: 8 } })));

// Attack detection tests
Tests.equalCheck("cannot attack", false, canAttack({ position: { row: 2, column: 4 } }, { position: { row: 6, column: 6 } }));
Tests.equalCheck("can attack on same row", true, canAttack({ position: { row: 2, column: 4 } }, { position: { row: 2, column: 6 } }));
Tests.equalCheck("can attack on same column", true, canAttack({ position: { row: 4, column: 5 } }, { position: { row: 2, column: 5 } }));
Tests.equalCheck("can attack on first diagonal", true, canAttack({ position: { row: 2, column: 2 } }, { position: { row: 0, column: 4 } }));
Tests.equalCheck("can attack on second diagonal", true, canAttack({ position: { row: 2, column: 2 } }, { position: { row: 3, column: 1 } }));
Tests.equalCheck("can attack on third diagonal", true, canAttack({ position: { row: 2, column: 2 } }, { position: { row: 1, column: 1 } }));
Tests.equalCheck("can attack on fourth diagonal", true, canAttack({ position: { row: 1, column: 7 } }, { position: { row: 0, column: 6 } }));
Tests.equalCheck("cannot attack if falling diagonals only match on reflection", false, canAttack({ position: { row: 4, column: 1 } }, { position: { row: 2, column: 5 } }));
