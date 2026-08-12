// @ts-nocheck
if (typeof score !== "function") {
  throw new Error("score function is not defined");
}

Tests.equalCheck("lowercase letter", 1, score("a"));
Tests.equalCheck("uppercase letter", 1, score("A"));
Tests.equalCheck("valuable letter", 4, score("f"));
Tests.equalCheck("short word", 2, score("at"));
Tests.equalCheck("short, valuable word", 12, score("zoo"));
Tests.equalCheck("medium word", 6, score("street"));
Tests.equalCheck("medium, valuable word", 22, score("quirky"));
Tests.equalCheck("long, mixed-case word", 41, score("OxyphenButazone"));
Tests.equalCheck("english-like word", 8, score("pinata"));
Tests.equalCheck("empty input", 0, score(""));
Tests.equalCheck("entire alphabet available", 87, score("abcdefghijklmnopqrstuvwxyz"));
