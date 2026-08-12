// @ts-nocheck
if (typeof saddlePoints !== "function") {
  throw new Error("saddlePoints function is not defined");
}

const matrix1 = [
  [9, 8, 7],
  [5, 3, 2],
  [6, 6, 7]
];
Tests.equalCheck("single saddle point", JSON.stringify([{ row: 2, column: 1 }]), JSON.stringify(saddlePoints(matrix1)));

const matrix2 = [
  [1, 2, 3],
  [3, 1, 2],
  [2, 3, 1]
];
Tests.equalCheck("no saddle points", JSON.stringify([]), JSON.stringify(saddlePoints(matrix2)));
