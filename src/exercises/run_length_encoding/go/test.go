package main

func main() {
	Tests.EqualCheck("encode empty string", "", Encode(""))
	Tests.EqualCheck("encode single characters without count", "XYZ", Encode("XYZ"))
	Tests.EqualCheck("encode string with repeated characters", "2A3B4C", Encode("AABBBCCCC"))
	Tests.EqualCheck("encode multiple whitespace", "2 hs2q q2w", Encode("  hs  q q  w"))
	Tests.EqualCheck("decode empty string", "", Decode(""))
	Tests.EqualCheck("decode single characters without count", "XYZ", Decode("XYZ"))
	Tests.EqualCheck("decode string with repeated characters", "AABBBCCCC", Decode("2A3B4C"))
	Tests.EqualCheck("encode and then decode", "zzz ZZ zZ", Decode(Encode("zzz ZZ zZ")))
}
