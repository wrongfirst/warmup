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

function canRoll(rolls: number[], roll: number): boolean {
  try {
    play(rolls).roll(roll);
    return false;
  } catch {
    return true;
  }
}

function scoreErr(rolls: number[]): boolean {
  try {
    const res = play(rolls).score();
    return typeof res === "object" && res !== null && "error" in res;
  } catch {
    return true;
  }
}

// Score tests
Tests.equalCheck("should be able to score a game with all zeros", 0, play(Array(20).fill(0)).score());
Tests.equalCheck("should be able to score a game with no strikes or spares", 90, play([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]).score());
Tests.equalCheck("a spare followed by zeros is worth ten points", 10, play([6, 4, ...Array(18).fill(0)]).score());
Tests.equalCheck("points scored in the roll after a spare are counted twice", 16, play([6, 4, 3, ...Array(17).fill(0)]).score());
Tests.equalCheck("consecutive spares each get a one roll bonus", 31, play([5, 5, 3, 7, 4, ...Array(15).fill(0)]).score());
Tests.equalCheck("a spare in the last frame gets a one roll bonus that is counted once", 17, play([...Array(18).fill(0), 7, 3, 7]).score());
Tests.equalCheck("a strike earns ten points in a frame with a single roll", 10, play([10, ...Array(18).fill(0)]).score());
Tests.equalCheck("points scored in the two rolls after a strike are counted twice as a bonus", 26, play([10, 5, 3, ...Array(16).fill(0)]).score());
Tests.equalCheck("consecutive strikes each get the two roll bonus", 81, play([10, 10, 10, 5, 3, ...Array(12).fill(0)]).score());
Tests.equalCheck("a strike in the last frame gets a two roll bonus that is counted once", 18, play([...Array(18).fill(0), 10, 7, 1]).score());
Tests.equalCheck("rolling a spare with the two roll bonus does not get a bonus roll", 20, play([...Array(18).fill(0), 10, 7, 3]).score());
Tests.equalCheck("strikes with the two roll bonus do not get bonus rolls", 30, play([...Array(18).fill(0), 10, 10, 10]).score());
Tests.equalCheck("last two strikes followed by only last bonus with non strike points", 31, play([...Array(16).fill(0), 10, 10, 0, 1]).score());
Tests.equalCheck("a strike with the one roll bonus after a spare in the last frame does not get a bonus", 20, play([...Array(18).fill(0), 7, 3, 10]).score());
Tests.equalCheck("all strikes is a perfect game", 300, play(Array(12).fill(10)).score());
Tests.equalCheck("two bonus rolls after a strike in the last frame can score more than 10 points if one is a strike", 26, play([...Array(18).fill(0), 10, 10, 6]).score());

// Roll error tests
Tests.boolCheck("rolls cannot score negative points", canRoll([], -1));
Tests.boolCheck("a roll cannot score more than 10 points", canRoll([], 11));
Tests.boolCheck("two rolls in a frame cannot score more than 10 points", canRoll([5], 6));
Tests.boolCheck("bonus roll after a strike in the last frame cannot score more than 10 points", canRoll([...Array(18).fill(0), 10], 11));
Tests.boolCheck("two bonus rolls after a strike in the last frame cannot score more than 10 points", canRoll([...Array(18).fill(0), 10, 5], 6));
Tests.boolCheck("the second bonus rolls after a strike in the last frame cannot be a strike if the first one is not a strike", canRoll([...Array(18).fill(0), 10, 6], 10));
Tests.boolCheck("second bonus roll after a strike in the last frame cannot score more than 10 points", canRoll([...Array(18).fill(0), 10, 10], 11));
Tests.boolCheck("cannot roll if game already has ten frames", canRoll(Array(20).fill(0), 0));
Tests.boolCheck("cannot roll after bonus roll for spare", canRoll([...Array(18).fill(0), 7, 3, 2], 2));
Tests.boolCheck("cannot roll after bonus rolls for strike", canRoll([...Array(18).fill(0), 10, 3, 2], 2));

// Score error tests
Tests.boolCheck("an unstarted game cannot be scored", scoreErr([]));
Tests.boolCheck("an incomplete game cannot be scored", scoreErr([0, 0]));
Tests.boolCheck("bonus rolls for a strike in the last frame must be rolled before score can be calculated", scoreErr([...Array(18).fill(0), 10]));
Tests.boolCheck("both bonus rolls for a strike in the last frame must be rolled before score can be calculated", scoreErr([...Array(18).fill(0), 10, 10]));
Tests.boolCheck("bonus roll for a spare in the last frame must be rolled before score can be calculated", scoreErr([...Array(18).fill(0), 7, 3]));
