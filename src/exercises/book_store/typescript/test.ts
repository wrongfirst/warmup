// @ts-nocheck
if (typeof total !== "function") {
  throw new Error("total function is not defined");
}

Tests.equalCheck("Only a single book", 800, total([1]));
Tests.equalCheck("Two of the same book", 1600, total([2, 2]));
Tests.equalCheck("Empty basket", 0, total([]));
Tests.equalCheck("Two different books", 1520, total([1, 2]));
Tests.equalCheck("Three different books", 2160, total([1, 2, 3]));
Tests.equalCheck("Four different books", 2560, total([1, 2, 3, 4]));
Tests.equalCheck("Five different books", 3000, total([1, 2, 3, 4, 5]));
Tests.equalCheck("Two groups of four is cheaper than group of five plus group of three", 5120, total([1, 1, 2, 2, 3, 3, 4, 5]));
Tests.equalCheck("Two groups of four differs in book order", 5120, total([1, 1, 2, 3, 4, 4, 5, 5]));
