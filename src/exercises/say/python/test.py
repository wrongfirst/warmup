if 'say' not in globals():
    raise Exception("say function is not defined")

Tests.equal_check("zero", "zero", say(0))
Tests.equal_check("one", "one", say(1))
Tests.equal_check("fourteen", "fourteen", say(14))
Tests.equal_check("twenty", "twenty", say(20))
Tests.equal_check("twenty-two", "twenty-two", say(22))
Tests.equal_check("one hundred", "one hundred", say(100))
Tests.equal_check("one hundred twenty-three", "one hundred twenty-three", say(123))
Tests.equal_check("one thousand", "one thousand", say(1000))
Tests.equal_check("one thousand two hundred thirty-four", "one thousand two hundred thirty-four", say(1234))
Tests.equal_check("one million", "one million", say(1000000))
Tests.equal_check("one billion", "one billion", say(1000000000))
Tests.equal_check("999,999,999,999", "nine hundred ninety-nine billion nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred ninety-nine", say(999999999999))

caught1 = False
try:
    say(-1)
except ValueError:
    caught1 = True
Tests.bool_check("negative is error", caught1)

caught2 = False
try:
    say(1000000000000)
except ValueError:
    caught2 = True
Tests.bool_check("too large is error", caught2)
