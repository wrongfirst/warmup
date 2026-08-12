package main

func main() {
	s1, err1 := Steps(1)
	Tests.BoolCheck("zero steps for one err", err1 == nil)
	Tests.EqualCheck("zero steps for one", 0, s1)

	s2, err2 := Steps(16)
	Tests.BoolCheck("divide if even err", err2 == nil)
	Tests.EqualCheck("divide if even", 4, s2)

	s3, err3 := Steps(12)
	Tests.BoolCheck("even and odd steps err", err3 == nil)
	Tests.EqualCheck("even and odd steps", 9, s3)

	s4, err4 := Steps(1000000)
	Tests.BoolCheck("large number of even and odd steps err", err4 == nil)
	Tests.EqualCheck("large number of even and odd steps", 152, s4)

	_, err5 := Steps(0)
	Tests.BoolCheck("zero is an error", err5 != nil)

	_, err6 := Steps(-15)
	Tests.BoolCheck("negative value is an error", err6 != nil)
}
