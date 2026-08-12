if 'total' not in globals():
    raise Exception("total function is not defined")

Tests.equal_check("Only a single book", 800, total([1]))
Tests.equal_check("Two of the same book", 1600, total([2, 2]))
Tests.equal_check("Empty basket", 0, total([]))
Tests.equal_check("Two different books", 1520, total([1, 2]))
Tests.equal_check("Three different books", 2160, total([1, 2, 3]))
Tests.equal_check("Four different books", 2560, total([1, 2, 3, 4]))
Tests.equal_check("Five different books", 3000, total([1, 2, 3, 4, 5]))
Tests.equal_check("Two groups of four is cheaper than group of five plus group of three", 5120, total([1, 1, 2, 2, 3, 3, 4, 5]))
Tests.equal_check("Two groups of four differs in book order", 5120, total([1, 1, 2, 3, 4, 4, 5, 5]))
