// @ts-nocheck
if (typeof tick !== "function") {
  throw new Error("tick function is not defined");
}

Tests.equalCheck("empty matrix", JSON.stringify([]), JSON.stringify(tick([])));
Tests.equalCheck("live cells with zero neighbors die", JSON.stringify([[0,0,0],[0,0,0],[0,0,0]]), JSON.stringify(tick([[0,0,0],[0,1,0],[0,0,0]])));
Tests.equalCheck("live cells with one neighbor die", JSON.stringify([[0,0,0],[0,0,0],[0,0,0]]), JSON.stringify(tick([[0,0,0],[0,1,0],[0,1,0]])));
Tests.equalCheck("live cells with two neighbors stay alive", JSON.stringify([[0,0,0],[1,0,1],[0,0,0]]), JSON.stringify(tick([[1,0,1],[1,0,1],[1,0,1]])));
Tests.equalCheck("live cells with three neighbors stay alive", JSON.stringify([[0,0,0],[1,0,0],[1,1,0]]), JSON.stringify(tick([[0,1,0],[1,0,0],[1,1,0]])));
Tests.equalCheck("dead cells with three neighbors become alive", JSON.stringify([[0,0,0],[1,1,0],[0,0,0]]), JSON.stringify(tick([[1,1,0],[0,0,0],[1,0,0]])));
