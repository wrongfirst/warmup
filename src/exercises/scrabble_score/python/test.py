if 'score' not in globals():
    raise Exception("score function is not defined")

Tests.equal_check("lowercase letter", 1, score("a"))
Tests.equal_check("uppercase letter", 1, score("A"))
Tests.equal_check("valuable letter", 4, score("f"))
Tests.equal_check("short word", 2, score("at"))
Tests.equal_check("short, valuable word", 12, score("zoo"))
Tests.equal_check("medium word", 6, score("street"))
Tests.equal_check("medium, valuable word", 22, score("quirky"))
Tests.equal_check("long, mixed-case word", 41, score("OxyphenButazone"))
Tests.equal_check("english-like word", 8, score("pinata"))
Tests.equal_check("empty input", 0, score(""))
Tests.equal_check("entire alphabet available", 87, score("abcdefghijklmnopqrstuvwxyz"))
