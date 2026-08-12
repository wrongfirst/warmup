package main

func main() {
	res1, err1 := Classify(6)
	Tests.BoolCheck("Smallest perfect number err", err1 == nil)
	Tests.EqualCheck("Smallest perfect number", "perfect", res1)

	res2, err2 := Classify(28)
	Tests.BoolCheck("Medium perfect number err", err2 == nil)
	Tests.EqualCheck("Medium perfect number", "perfect", res2)

	res3, err3 := Classify(33550336)
	Tests.BoolCheck("Large perfect number err", err3 == nil)
	Tests.EqualCheck("Large perfect number", "perfect", res3)

	res4, err4 := Classify(12)
	Tests.BoolCheck("Smallest abundant number err", err4 == nil)
	Tests.EqualCheck("Smallest abundant number", "abundant", res4)

	res5, err5 := Classify(2)
	Tests.BoolCheck("Smallest prime deficient number err", err5 == nil)
	Tests.EqualCheck("Smallest prime deficient number", "deficient", res5)

	_, err6 := Classify(0)
	Tests.BoolCheck("Zero is rejected", err6 != nil)

	_, err7 := Classify(-1)
	Tests.BoolCheck("Negative integer is rejected", err7 != nil)
}
