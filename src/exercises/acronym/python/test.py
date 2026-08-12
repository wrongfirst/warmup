if 'abbreviate' not in globals():
    raise Exception("abbreviate function is not defined")

Tests.equal_check("basic", "PNG", abbreviate("Portable Network Graphics"))
Tests.equal_check("lowercase words", "ROR", abbreviate("Ruby on Rails"))
Tests.equal_check("punctuation", "FIFO", abbreviate("First In, First Out"))
Tests.equal_check("all caps word", "GIMP", abbreviate("GNU Image Manipulation Program"))
Tests.equal_check("hyphenated", "CMOS", abbreviate("Complementary metal-oxide-semaphore"))
Tests.equal_check("consecutive delimiters", "SIMUFTA", abbreviate("Something - I must have dreamt it or wept: a-footfall on the stair"))
