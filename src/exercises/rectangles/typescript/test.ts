// @ts-nocheck
if (typeof count !== "function") {
  throw new Error("count function is not defined");
}

Tests.equalCheck("no rows", 0, count([]));
Tests.equalCheck("no columns", 0, count([""]));
Tests.equalCheck("no rectangles", 0, count([" "]));
Tests.equalCheck("one rectangle", 1, count(["+-+", "| |", "+-+"]));
Tests.equalCheck("two rectangles without shared parts", 2, count(["  +-+", "  | |", "+-+-+", "| |  ", "+-+  "]));
Tests.equalCheck("five rectangles with shared parts", 5, count(["  +-+", "  | |", "+-+-+", "| | |", "+-+-+"]));
Tests.equalCheck("rectangle of height 1", 1, count(["+--+", "+--+"]));
Tests.equalCheck("rectangle of width 1", 1, count(["++", "||", "++"]));
