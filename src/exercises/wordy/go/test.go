package main

func main() {
	ans1, err1 := Answer("What is 5?")
	Tests.BoolCheck("just a number err", err1 == nil)
	Tests.EqualCheck("just a number", 5, ans1)

	ans2, err2 := Answer("What is 1 plus 1?")
	Tests.BoolCheck("addition err", err2 == nil)
	Tests.EqualCheck("addition", 2, ans2)

	ans3, err3 := Answer("What is 53 plus 2?")
	Tests.BoolCheck("more addition err", err3 == nil)
	Tests.EqualCheck("more addition", 55, ans3)

	ans4, err4 := Answer("What is 4 minus -12?")
	Tests.BoolCheck("subtraction err", err4 == nil)
	Tests.EqualCheck("subtraction", 16, ans4)

	ans5, err5 := Answer("What is 3 plus 2 multiplied by 3?")
	Tests.BoolCheck("addition and multiplication err", err5 == nil)
	Tests.EqualCheck("addition and multiplication", 15, ans5)

	_, err6 := Answer("What is 52 cubed?")
	Tests.BoolCheck("reject cubed", err6 != nil)

	_, err7 := Answer("Who is the President of the United States?")
	Tests.BoolCheck("reject non-math", err7 != nil)

	_, err8 := Answer("What is 1 plus plus 2?")
	Tests.BoolCheck("reject syntax error plus plus", err8 != nil)
}
