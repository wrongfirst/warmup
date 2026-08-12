package main

func main() {
	Tests.BoolCheck("paired square brackets", IsPaired("[]"))
	Tests.BoolCheck("empty string", IsPaired(""))
	Tests.BoolCheck("unpaired brackets", !IsPaired("[["))
	Tests.BoolCheck("wrong ordered brackets", !IsPaired("}{"))
	Tests.BoolCheck("wrong closing bracket", !IsPaired("{]"))
	Tests.BoolCheck("paired with whitespace", IsPaired("{ }"))
	Tests.BoolCheck("partially paired brackets", !IsPaired("{[])"))
	Tests.BoolCheck("simple nested brackets", IsPaired("{[]}"))
	Tests.BoolCheck("several paired brackets", IsPaired("{}[]"))
	Tests.BoolCheck("paired and nested brackets", IsPaired("([{}({}[])])"))
	Tests.BoolCheck("math expression", IsPaired("(((185 + 223.85) * 15) - 343)"))
}
