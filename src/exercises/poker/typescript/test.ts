// @ts-nocheck
if (typeof bestHands !== "function") {
  throw new Error("bestHands function is not defined");
}

Tests.equalCheck("single hand wins", JSON.stringify(["4S 5S 7H 8D JC"]), JSON.stringify(bestHands(["4S 5S 7H 8D JC"])));
Tests.equalCheck("highest card wins", JSON.stringify(["3S 4S 5D 6H JH"]), JSON.stringify(bestHands(["4D 5S 6S 8D 3C", "2S 4C 7S 9H 10H", "3S 4S 5D 6H JH"])));
