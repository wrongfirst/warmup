if 'count' not in globals():
    raise Exception("count function is not defined")

Tests.equal_check("no rows", 0, count([]))
Tests.equal_check("no columns", 0, count([""]))
Tests.equal_check("no rectangles", 0, count([" "]))
Tests.equal_check("one rectangle", 1, count(["+-+", "| |", "+-+"]))
Tests.equal_check("two rectangles without shared parts", 2, count(["  +-+", "  | |", "+-+-+", "| |  ", "+-+  "]))
Tests.equal_check("five rectangles with shared parts", 5, count(["  +-+", "  | |", "+-+-+", "| | |", "+-+-+"]))
Tests.equal_check("rectangle of height 1", 1, count(["+--+", "+--+"]))
Tests.equal_check("rectangle of width 1", 1, count(["++", "||", "++"]))
