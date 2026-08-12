if 'saddle_points' not in globals():
    raise Exception("saddle_points function is not defined")

matrix1 = [
    [9, 8, 7],
    [5, 3, 2],
    [6, 6, 7]
]
Tests.equal_check("single saddle point", [{"row": 2, "column": 1}], saddle_points(matrix1))

matrix2 = [
    [1, 2, 3],
    [3, 1, 2],
    [2, 3, 1]
]
Tests.equal_check("no saddle points", [], saddle_points(matrix2))
