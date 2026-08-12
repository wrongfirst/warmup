// @ts-nocheck
if (typeof list !== "function") {
  throw new Error("list function is not defined");
}

Tests.equalCheck("Empty list has length of zero", JSON.stringify({}), JSON.stringify(list([], [{"operation":"count","expected":0}])));
Tests.equalCheck("Singleton list has length of one", JSON.stringify({}), JSON.stringify(list([1], [{"operation":"count","expected":1}])));
Tests.equalCheck("Non-empty list has correct length", JSON.stringify({}), JSON.stringify(list([1,2,3], [{"operation":"count","expected":3}])));
Tests.equalCheck("Pop from empty list is an error", JSON.stringify({}), JSON.stringify(list([], [{"operation":"pop","expected":{"error":"list is empty"}}])));
Tests.equalCheck("Can pop from singleton list", JSON.stringify({}), JSON.stringify(list([1], [{"operation":"pop","expected":1}])));
