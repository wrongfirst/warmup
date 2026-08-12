if 'classify' not in globals():
    raise Exception("classify function is not defined")

Tests.equal_check("Smallest perfect number", "perfect", classify(6))
Tests.equal_check("Medium perfect number", "perfect", classify(28))
Tests.equal_check("Large perfect number", "perfect", classify(33550336))
Tests.equal_check("Smallest abundant number", "abundant", classify(12))
Tests.equal_check("Medium abundant number", "abundant", classify(30))
Tests.equal_check("Large abundant number", "abundant", classify(33550335))
Tests.equal_check("Smallest prime deficient number", "deficient", classify(2))
Tests.equal_check("Smallest non-prime deficient number", "deficient", classify(4))
Tests.equal_check("Medium deficient number", "deficient", classify(32))
Tests.equal_check("One is classified correctly", "deficient", classify(1))

caught1 = False
try:
    classify(0)
except ValueError:
    caught1 = True
Tests.bool_check("Zero is rejected", caught1)

caught2 = False
try:
    classify(-1)
except ValueError:
    caught2 = True
Tests.bool_check("Negative integer is rejected", caught2)
