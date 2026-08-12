// @ts-nocheck
if (typeof encode !== "function") {
  throw new Error("encode function is not defined");
}

Tests.equalCheck("empty plain text results in an empty cipher text", "", encode(""));
Tests.equalCheck("normalization results in empty text", "", encode("..."));
Tests.equalCheck("Lowercase", "a", encode("A"));
Tests.equalCheck("Remove spaces", "b", encode("  b "));
Tests.equalCheck("Remove punctuation", "1", encode("@1,%!"));
Tests.equalCheck("9 character plaintext forms 3x3 square", "tsf hiu isn", encode("This is fun!"));
Tests.equalCheck("8 character plaintext forms 3x3 square with trailing space", "clu hlt io ", encode("Chill out."));
Tests.equalCheck("54 character plaintext forms 8x7 rectangle", "imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn  sseoau ", encode("If man was meant to stay on the ground, god would have given us roots."));
