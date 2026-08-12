if 'plants' not in globals():
    raise Exception("plants function is not defined")

Tests.equal_check("single student Alice", ["radishes", "clover", "grass", "grass"], plants("RC\nGG", "Alice"))
Tests.equal_check("two students Bob", ["clover", "grass", "radishes", "clover"], plants("VVCG\nVVRC", "Bob"))
