// @ts-nocheck
if (typeof plants !== "function") {
  throw new Error("plants function is not defined");
}

Tests.equalCheck("single student Alice", JSON.stringify(["radishes", "clover", "grass", "grass"]), JSON.stringify(plants("RC\nGG", "Alice")));
Tests.equalCheck("two students Bob", JSON.stringify(["clover", "grass", "radishes", "clover"]), JSON.stringify(plants("VVCG\nVVRC", "Bob")));
Tests.equalCheck("Bob in small garden", JSON.stringify(["clover", "clover", "clover", "clover"]), JSON.stringify(plants("VVCCGG\nVVCCGG", "Bob")));
Tests.equalCheck("Charlie in small garden", JSON.stringify(["grass", "grass", "grass", "grass"]), JSON.stringify(plants("VVCCGG\nVVCCGG", "Charlie")));

const fullGarden = "VRCGVVRVCGGCCGVRGCVCGCGV\nVRCCCGCRRGVCGCRVVCVGCGCV";
Tests.equalCheck("full garden - Alice", JSON.stringify(["violets", "radishes", "violets", "radishes"]), JSON.stringify(plants(fullGarden, "Alice")));
Tests.equalCheck("full garden - Bob", JSON.stringify(["clover", "grass", "clover", "clover"]), JSON.stringify(plants(fullGarden, "Bob")));
Tests.equalCheck("full garden - Kincaid", JSON.stringify(["grass", "clover", "clover", "grass"]), JSON.stringify(plants(fullGarden, "Kincaid")));
Tests.equalCheck("full garden - Larry", JSON.stringify(["grass", "violets", "clover", "violets"]), JSON.stringify(plants(fullGarden, "Larry")));
