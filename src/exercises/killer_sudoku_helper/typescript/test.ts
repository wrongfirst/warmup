// @ts-nocheck
if (typeof combinations !== "function") {
  throw new Error("combinations function is not defined");
}

Tests.equalCheck("1-digit cage sum 1", JSON.stringify([[1]]), JSON.stringify(combinations({ sum: 1, size: 1, exclude: [] })));
Tests.equalCheck("1-digit cage sum 7", JSON.stringify([[7]]), JSON.stringify(combinations({ sum: 7, size: 1, exclude: [] })));
Tests.equalCheck("2-digit cage sum 10", JSON.stringify([[1,9],[2,8],[3,7],[4,6]]), JSON.stringify(combinations({ sum: 10, size: 2, exclude: [] })));
Tests.equalCheck("3-digit cage sum 7", JSON.stringify([[1,2,4]]), JSON.stringify(combinations({ sum: 7, size: 3, exclude: [] })));
Tests.equalCheck("2-digit cage sum 10 with excluded digits", JSON.stringify([[2,8],[3,7]]), JSON.stringify(combinations({ sum: 10, size: 2, exclude: [1,4] })));
