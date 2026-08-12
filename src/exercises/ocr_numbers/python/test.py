if 'convert' not in globals():
    raise Exception("convert function is not defined")

zero = [" _ ", "| |", "|_|", "   "]
one = ["   ", "  |", "  |", "   "]

Tests.equal_check("Recognizes 0", "0", convert(zero))
Tests.equal_check("Recognizes 1", "1", convert(one))
Tests.equal_check("Recognizes garbled", "?", convert(["   ", "| |", "| |", "   "]))
Tests.equal_check("Recognizes 1234567890", "1234567890", convert([
    "    _  _     _  _  _  _  _  _ ",
    "  | _| _||_||_ |_   ||_||_|| |",
    "  ||_  _|  | _||_|  ||_| _||_|",
    "                              "
]))

caught1 = False
try:
    convert([" _ ", "| |", "|_|"])
except ValueError:
    caught1 = True
Tests.bool_check("Invalid line count error", caught1)

caught2 = False
try:
    convert([" _", "| ", "|_"])
except ValueError:
    caught2 = True
Tests.bool_check("Invalid col count error", caught2)
