if 'encode' not in globals() or 'decode' not in globals():
    raise Exception("encode/decode function is not defined")

Tests.equal_check("encode empty string", "", encode(""))
Tests.equal_check("encode single characters without count", "XYZ", encode("XYZ"))
Tests.equal_check("encode string with repeated characters", "2A3B4C", encode("AABBBCCCC"))
Tests.equal_check("encode multiple whitespace", "2 hs2q q2w", encode("  hs  q q  w"))
Tests.equal_check("decode empty string", "", decode(""))
Tests.equal_check("decode single characters without count", "XYZ", decode("XYZ"))
Tests.equal_check("decode string with repeated characters", "AABBBCCCC", decode("2A3B4C"))
Tests.equal_check("encode and then decode", "zzz ZZ zZ", decode(encode("zzz ZZ zZ")))
