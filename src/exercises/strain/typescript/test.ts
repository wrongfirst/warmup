// @ts-nocheck
if (typeof keep !== "function" || typeof discard !== "function") {
  throw new Error("keep and discard functions must be defined");
}

Tests.equalCheck("keep on empty list", JSON.stringify([]), JSON.stringify(keep([], (x) => true)));
Tests.equalCheck("keeps everything", JSON.stringify([1, 3, 5]), JSON.stringify(keep([1, 3, 5], (x) => true)));
Tests.equalCheck("keeps nothing", JSON.stringify([]), JSON.stringify(keep([1, 3, 5], (x) => false)));
Tests.equalCheck("keeps first and last", JSON.stringify([1, 3]), JSON.stringify(keep([1, 2, 3], (x) => x % 2 === 1)));
Tests.equalCheck("keeps strings starting with z", JSON.stringify(["zebra", "zombies", "zealot"]), JSON.stringify(keep(["apple", "zebra", "banana", "zombies", "cherimoya", "zealot"], (x: string) => x.startsWith('z'))));

Tests.equalCheck("discard on empty list", JSON.stringify([]), JSON.stringify(discard([], (x) => true)));
Tests.equalCheck("discards everything", JSON.stringify([]), JSON.stringify(discard([1, 3, 5], (x) => true)));
Tests.equalCheck("discards nothing", JSON.stringify([1, 3, 5]), JSON.stringify(discard([1, 3, 5], (x) => false)));
Tests.equalCheck("discards first and last", JSON.stringify([2]), JSON.stringify(discard([1, 2, 3], (x) => x % 2 === 1)));
Tests.equalCheck("discards strings starting with z", JSON.stringify(["apple", "banana", "cherimoya"]), JSON.stringify(discard(["apple", "zebra", "banana", "zombies", "cherimoya", "zealot"], (x: string) => x.startsWith('z'))));
