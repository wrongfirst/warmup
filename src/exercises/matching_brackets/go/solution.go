package main

func IsPaired(input string) bool {
	var stack []rune
	pairs := map[rune]rune{
		']': '[',
		'}': '{',
		')': '(',
	}
	opens := map[rune]bool{
		'[': true,
		'{': true,
		'(': true,
	}

	for _, char := range input {
		if opens[char] {
			stack = append(stack, char)
		} else if match, isClose := pairs[char]; isClose {
			if len(stack) == 0 || stack[len(stack)-1] != match {
				return false
			}
			stack = stack[:len(stack)-1]
		}
	}

	return len(stack) == 0
}
