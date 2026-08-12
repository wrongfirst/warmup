package main

func main() {
	s1, ok1 := Say(0)
	Tests.BoolCheck("zero ok", ok1)
	Tests.EqualCheck("zero", "zero", s1)

	s2, ok2 := Say(1)
	Tests.BoolCheck("one ok", ok2)
	Tests.EqualCheck("one", "one", s2)

	s3, ok3 := Say(14)
	Tests.BoolCheck("fourteen ok", ok3)
	Tests.EqualCheck("fourteen", "fourteen", s3)

	s4, ok4 := Say(1234)
	Tests.BoolCheck("1234 ok", ok4)
	Tests.EqualCheck("one thousand two hundred thirty-four", "one thousand two hundred thirty-four", s4)

	s5, ok5 := Say(999999999999)
	Tests.BoolCheck("999999999999 ok", ok5)
	Tests.EqualCheck("999,999,999,999", "nine hundred ninety-nine billion nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred ninety-nine", s5)

	_, ok6 := Say(-1)
	Tests.BoolCheck("negative is error", !ok6)

	_, ok7 := Say(1000000000000)
	Tests.BoolCheck("too large is error", !ok7)
}
