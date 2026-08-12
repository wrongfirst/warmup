if 'steps' not in globals():
    raise Exception("steps function is not defined")

Tests.equal_check("zero steps for one", 0, steps(1))
Tests.equal_check("divide if even", 4, steps(16))
Tests.equal_check("even and odd steps", 9, steps(12))
Tests.equal_check("large number of even and odd steps", 152, steps(1000000))

caught1 = False
try:
    steps(0)
except ValueError:
    caught1 = True
Tests.bool_check("zero is an error", caught1)

caught2 = False
try:
    steps(-15)
except ValueError:
    caught2 = True
Tests.bool_check("negative value is an error", caught2)
