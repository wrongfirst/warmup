// @ts-nocheck
if (typeof steps !== "function") {
  throw new Error("steps function is not defined");
}

Tests.equalCheck("zero steps for one", 0, steps(1));
Tests.equalCheck("divide if even", 4, steps(16));
Tests.equalCheck("even and odd steps", 9, steps(12));
Tests.equalCheck("large number of even and odd steps", 152, steps(1000000));
Tests.boolCheck("zero is an error", typeof steps(0) === "object");
Tests.boolCheck("negative value is an error", typeof steps(-15) === "object");
