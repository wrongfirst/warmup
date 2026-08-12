if 'answer' not in globals():
    raise Exception("answer function is not defined")

Tests.equal_check("just a number", 5, answer("What is 5?"))
Tests.equal_check("addition", 2, answer("What is 1 plus 1?"))
Tests.equal_check("more addition", 55, answer("What is 53 plus 2?"))
Tests.equal_check("subtraction", 16, answer("What is 4 minus -12?"))
Tests.equal_check("multiplication", -12, answer("What is -3 multiplied by 4?"))
Tests.equal_check("division", -11, answer("What is -33 divided by 3?"))
Tests.equal_check("multiple additions", 3, answer("What is 1 plus 1 plus 1?"))
Tests.equal_check("addition and multiplication", 15, answer("What is 3 plus 2 multiplied by 3?"))

caught1 = False
try:
    answer("What is 52 cubed?")
except ValueError:
    caught1 = True
Tests.bool_check("reject cubed", caught1)

caught2 = False
try:
    answer("Who is the President of the United States?")
except ValueError:
    caught2 = True
Tests.bool_check("reject non-math", caught2)

caught3 = False
try:
    answer("What is 1 plus plus 2?")
except ValueError:
    caught3 = True
Tests.bool_check("reject syntax error plus plus", caught3)
