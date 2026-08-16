package main

func main() {
	Tests.EqualCheck("encode empty string", "", Encode(""))
	Tests.EqualCheck("encode single characters only are encoded without count", "XYZ", Encode("XYZ"))
	Tests.EqualCheck("encode string with no single characters", "2A3B4C", Encode("AABBBCCCC"))
	Tests.EqualCheck("encode single characters mixed with repeated characters", "12WB12W3B24WB", Encode("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"))
	Tests.EqualCheck("encode multiple whitespace mixed in string", "2 hs2q q2w2 ", Encode("  hsqq qww  "))
	Tests.EqualCheck("encode lowercase characters", "2a3b4c", Encode("aabbbcccc"))
	Tests.EqualCheck("decode empty string", "", Decode(""))
	Tests.EqualCheck("decode single characters only", "XYZ", Decode("XYZ"))
	Tests.EqualCheck("decode string with no single characters", "AABBBCCCC", Decode("2A3B4C"))
	Tests.EqualCheck("decode single characters with repeated characters", "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB", Decode("12WB12W3B24WB"))
	Tests.EqualCheck("decode multiple whitespace mixed in string", "  hsqq qww  ", Decode("2 hs2q q2w2 "))
	Tests.EqualCheck("decode lowercase string", "aabbbcccc", Decode("2a3b4c"))
	Tests.EqualCheck("encode followed by decode gives original string", "zzz ZZ  zZ", Decode(Encode("zzz ZZ  zZ")))
}
