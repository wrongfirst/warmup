// @ts-nocheck
if (typeof measure !== "function") {
  throw new Error("measure function is not defined");
}

Tests.equalCheck("Measure using bucket one of size 3 and bucket two of size 5 - start with bucket one", JSON.stringify({ moves: 4, goalBucket: "one", otherBucket: 5 }), JSON.stringify(measure(3, 5, 1, "one")));
Tests.equalCheck("Measure using bucket one of size 3 and bucket two of size 5 - start with bucket two", JSON.stringify({ moves: 8, goalBucket: "two", otherBucket: 3 }), JSON.stringify(measure(3, 5, 1, "two")));
Tests.equalCheck("Measure using bucket one of size 7 and bucket two of size 11 - start with bucket one", JSON.stringify({ moves: 14, goalBucket: "one", otherBucket: 11 }), JSON.stringify(measure(7, 11, 2, "one")));
Tests.equalCheck("Measure using bucket one of size 7 and bucket two of size 11 - start with bucket two", JSON.stringify({ moves: 18, goalBucket: "two", otherBucket: 7 }), JSON.stringify(measure(7, 11, 2, "two")));
Tests.equalCheck("Measure one step using bucket one of size 1 and bucket two of size 3 - start with bucket two", JSON.stringify({ moves: 1, goalBucket: "two", otherBucket: 0 }), JSON.stringify(measure(1, 3, 3, "two")));
Tests.equalCheck("Measure using bucket one of size 2 and bucket two of size 3", JSON.stringify({ moves: 2, goalBucket: "two", otherBucket: 2 }), JSON.stringify(measure(2, 3, 3, "one")));
Tests.equalCheck("Bucket one much bigger than bucket two", JSON.stringify({ moves: 6, goalBucket: "one", otherBucket: 1 }), JSON.stringify(measure(5, 1, 2, "one")));
Tests.equalCheck("Bucket one much smaller than bucket two", JSON.stringify({ moves: 6, goalBucket: "two", otherBucket: 0 }), JSON.stringify(measure(3, 15, 9, "one")));
Tests.equalCheck("Not possible to reach the goal", JSON.stringify({ error: "impossible" }), JSON.stringify(measure(6, 15, 5, "one")));
Tests.equalCheck("Goal larger than both buckets is impossible", JSON.stringify({ error: "impossible" }), JSON.stringify(measure(5, 7, 8, "one")));
