// @ts-nocheck
if (typeof tally !== "function") {
  throw new Error("tally function is not defined");
}

Tests.equalCheck("just the header if no input", JSON.stringify(["Team                           | MP |  W |  D |  L |  P"]), JSON.stringify(tally([])));

const winLossExp = [
  "Team                           | MP |  W |  D |  L |  P",
  "Allegoric Alaskans             |  1 |  1 |  0 |  0 |  3",
  "Blithering Badgers             |  1 |  0 |  0 |  1 |  0"
];
Tests.equalCheck("a win is three points, a loss is zero points", JSON.stringify(winLossExp), JSON.stringify(tally(["Allegoric Alaskans;Blithering Badgers;win"])));

const drawExp = [
  "Team                           | MP |  W |  D |  L |  P",
  "Allegoric Alaskans             |  1 |  0 |  1 |  0 |  1",
  "Blithering Badgers             |  1 |  0 |  1 |  0 |  1"
];
Tests.equalCheck("a draw is one point each", JSON.stringify(drawExp), JSON.stringify(tally(["Allegoric Alaskans;Blithering Badgers;draw"])));
