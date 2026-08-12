package main

func main() {
	Tests.EqualCheck("empty plain text results in an empty cipher text", "", Encode(""))
	Tests.EqualCheck("normalization results in empty text", "", Encode("..."))
	Tests.EqualCheck("Lowercase", "a", Encode("A"))
	Tests.EqualCheck("Remove spaces", "b", Encode("  b "))
	Tests.EqualCheck("Remove punctuation", "1", Encode("@1,%!"))
	Tests.EqualCheck("9 character plaintext forms 3x3 square", "tsf hiu isn", Encode("This is fun!"))
	Tests.EqualCheck("8 character plaintext forms 3x3 square with trailing space", "clu hlt io ", Encode("Chill out."))
	Tests.EqualCheck("54 character plaintext forms 8x7 rectangle", "imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn  sseoau ", Encode("If man was meant to stay on the ground, god would have given us roots."))
}
