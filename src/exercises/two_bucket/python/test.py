if 'measure' not in globals():
    raise Exception("measure function is not defined")

Tests.equal_check("Measure using bucket one of size 3 and bucket two of size 5 - start with bucket one", {"moves": 4, "goalBucket": "one", "otherBucket": 5}, measure(3, 5, 1, "one"))
Tests.equal_check("Measure using bucket one of size 3 and bucket two of size 5 - start with bucket two", {"moves": 8, "goalBucket": "two", "otherBucket": 3}, measure(3, 5, 1, "two"))
Tests.equal_check("Measure using bucket one of size 7 and bucket two of size 11 - start with bucket one", {"moves": 14, "goalBucket": "one", "otherBucket": 11}, measure(7, 11, 2, "one"))
Tests.equal_check("Measure using bucket one of size 7 and bucket two of size 11 - start with bucket two", {"moves": 18, "goalBucket": "two", "otherBucket": 7}, measure(7, 11, 2, "two"))
Tests.equal_check("Measure one step using bucket one of size 1 and bucket two of size 3 - start with bucket two", {"moves": 1, "goalBucket": "two", "otherBucket": 0}, measure(1, 3, 3, "two"))
Tests.equal_check("Measure using bucket one of size 2 and bucket two of size 3", {"moves": 2, "goalBucket": "two", "otherBucket": 2}, measure(2, 3, 3, "one"))
Tests.equal_check("Bucket one much bigger than bucket two", {"moves": 6, "goalBucket": "one", "otherBucket": 1}, measure(5, 1, 2, "one"))
Tests.equal_check("Bucket one much smaller than bucket two", {"moves": 6, "goalBucket": "two", "otherBucket": 0}, measure(3, 15, 9, "one"))
Tests.equal_check("Not possible to reach the goal", {"error": "impossible"}, measure(6, 15, 5, "one"))
Tests.equal_check("Goal larger than both buckets is impossible", {"error": "impossible"}, measure(5, 7, 8, "one"))
