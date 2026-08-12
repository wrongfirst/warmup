package main

func main() {
	zero := " _ \n| |\n|_|\n   "
	one := "   \n  |\n  |\n   "

	res0, err0 := Convert(zero)
	Tests.BoolCheck("Recognizes 0 err", err0 == nil)
	Tests.EqualCheck("Recognizes 0", "0", res0)

	res1, err1 := Convert(one)
	Tests.BoolCheck("Recognizes 1 err", err1 == nil)
	Tests.EqualCheck("Recognizes 1", "1", res1)

	resG, errG := Convert("   \n| |\n| |\n   ")
	Tests.BoolCheck("Recognizes garbled err", errG == nil)
	Tests.EqualCheck("Recognizes garbled", "?", resG)

	multi := "    _  _     _  _  _  _  _  _ \n  | _| _||_||_ |_   ||_||_|| |\n  ||_  _|  | _||_|  ||_| _||_|\n                              "
	resM, errM := Convert(multi)
	Tests.BoolCheck("Recognizes 1234567890 err", errM == nil)
	Tests.EqualCheck("Recognizes 1234567890", "1234567890", resM)

	_, errL := Convert(" _ \n| |\n|_|")
	Tests.BoolCheck("Invalid line count error", errL != nil)

	_, errC := Convert(" _\n| \n|_")
	Tests.BoolCheck("Invalid col count error", errC != nil)
}
