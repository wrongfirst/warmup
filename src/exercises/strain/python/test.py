if 'keep' not in globals() or 'discard' not in globals():
    raise Exception("keep and discard functions must be defined")

Tests.equal_check("keep on empty list", [], keep([], lambda x: True))
Tests.equal_check("keeps everything", [1, 3, 5], keep([1, 3, 5], lambda x: True))
Tests.equal_check("keeps nothing", [], keep([1, 3, 5], lambda x: False))
Tests.equal_check("keeps first and last", [1, 3], keep([1, 2, 3], lambda x: x % 2 == 1))
Tests.equal_check("keeps strings", ["zebra", "zombies", "zealot"], keep(["apple", "zebra", "banana", "zombies", "cherimoya", "zealot"], lambda x: x.startswith('z')))

Tests.equal_check("discard on empty list", [], discard([], lambda x: True))
Tests.equal_check("discards everything", [], discard([1, 3, 5], lambda x: True))
Tests.equal_check("discards nothing", [1, 3, 5], discard([1, 3, 5], lambda x: False))
Tests.equal_check("discards first and last", [2], discard([1, 2, 3], lambda x: x % 2 == 1))
Tests.equal_check("discards strings", ["apple", "banana", "cherimoya"], discard(["apple", "zebra", "banana", "zombies", "cherimoya", "zealot"], lambda x: x.startswith('z')))
