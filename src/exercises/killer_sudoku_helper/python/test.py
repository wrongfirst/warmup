if 'combinations' not in globals():
    raise Exception("combinations function is not defined")

Tests.equal_check("1-digit cage sum 1", [[1]], combinations(1, 1, []))
Tests.equal_check("1-digit cage sum 7", [[7]], combinations(7, 1, []))
Tests.equal_check("2-digit cage sum 10", [[1,9],[2,8],[3,7],[4,6]], combinations(10, 2, []))
Tests.equal_check("3-digit cage sum 7", [[1,2,4]], combinations(7, 3, []))
Tests.equal_check("2-digit cage sum 10 with excluded digits", [[2,8],[3,7]], combinations(10, 2, [1,4]))
