// @ts-nocheck
if (typeof Bowling !== "function") {
  throw new Error("Bowling class is not defined");
}

function play(rolls: number[]): Bowling {
  const g = new Bowling();
  for (const r of rolls) {
    g.roll(r);
  }
  return g;
}

Tests.equalCheck("gutter game", 0, play(Array(20).fill(0)).score());
Tests.equalCheck("all ones", 20, play(Array(20).fill(1)).score());
Tests.equalCheck("one spare", 22, play([5, 5, 3, ...Array(17).fill(0)]).score());
Tests.equalCheck("one strike", 26, play([10, 3, 5, ...Array(16).fill(0)]).score());
Tests.equalCheck("perfect game", 300, play(Array(12).fill(10)).score());
Tests.boolCheck("incomplete game score is error", typeof play([0, 0]).score() === "object");
