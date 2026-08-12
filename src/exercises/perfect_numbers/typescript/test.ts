// @ts-nocheck
if (typeof classify !== "function") {
  throw new Error("classify function is not defined");
}

Tests.equalCheck("Smallest perfect number", "perfect", classify(6));
Tests.equalCheck("Medium perfect number", "perfect", classify(28));
Tests.equalCheck("Large perfect number", "perfect", classify(33550336));
Tests.equalCheck("Smallest abundant number", "abundant", classify(12));
Tests.equalCheck("Medium abundant number", "abundant", classify(30));
Tests.equalCheck("Large abundant number", "abundant", classify(33550335));
Tests.equalCheck("Smallest prime deficient number", "deficient", classify(2));
Tests.equalCheck("Smallest non-prime deficient number", "deficient", classify(4));
Tests.equalCheck("Medium deficient number", "deficient", classify(32));
Tests.equalCheck("One is classified correctly", "deficient", classify(1));
Tests.boolCheck("Zero is rejected", typeof classify(0) === "object");
Tests.boolCheck("Negative integer is rejected", typeof classify(-1) === "object");
