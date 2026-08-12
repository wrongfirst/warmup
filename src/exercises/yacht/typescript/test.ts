// @ts-nocheck
if (typeof score !== "function") {
  throw new Error("score function is not defined");
}

Tests.equalCheck("Yacht", 50, score([5, 5, 5, 5, 5], "yacht"));
Tests.equalCheck("Not Yacht", 0, score([1, 3, 3, 2, 5], "yacht"));
Tests.equalCheck("Ones", 3, score([1, 1, 1, 3, 5], "ones"));
Tests.equalCheck("Ones out of order", 3, score([3, 1, 1, 5, 1], "ones"));
Tests.equalCheck("No ones", 0, score([4, 3, 6, 5, 5], "ones"));
Tests.equalCheck("Twos", 10, score([2, 3, 4, 5, 6], "twos"));
Tests.equalCheck("Four of a Kind", 12, score([3, 3, 3, 3, 5], "four of a kind"));
Tests.equalCheck("Four of a Kind from Yacht", 12, score([3, 3, 3, 3, 3], "four of a kind"));
Tests.equalCheck("Full House", 19, score([3, 3, 3, 5, 5], "full house"));
Tests.equalCheck("Full House not matching", 0, score([3, 3, 3, 3, 5], "full house"));
Tests.equalCheck("Little Straight", 30, score([3, 5, 4, 1, 2], "little straight"));
Tests.equalCheck("Big Straight", 30, score([4, 6, 2, 5, 3], "big straight"));
Tests.equalCheck("Choice", 23, score([3, 3, 5, 6, 6], "choice"));
