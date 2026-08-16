// @ts-nocheck
if (typeof encode !== "function" || typeof decode !== "function") {
  throw new Error("encode/decode function is not defined");
}

Tests.equalCheck("encode empty string", "", encode(""));
Tests.equalCheck("encode single characters only are encoded without count", "XYZ", encode("XYZ"));
Tests.equalCheck("encode string with no single characters", "2A3B4C", encode("AABBBCCCC"));
Tests.equalCheck("encode single characters mixed with repeated characters", "12WB12W3B24WB", encode("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"));
Tests.equalCheck("encode multiple whitespace mixed in string", "2 hs2q q2w2 ", encode("  hsqq qww  "));
Tests.equalCheck("encode lowercase characters", "2a3b4c", encode("aabbbcccc"));
Tests.equalCheck("decode empty string", "", decode(""));
Tests.equalCheck("decode single characters only", "XYZ", decode("XYZ"));
Tests.equalCheck("decode string with no single characters", "AABBBCCCC", decode("2A3B4C"));
Tests.equalCheck("decode single characters with repeated characters", "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB", decode("12WB12W3B24WB"));
Tests.equalCheck("decode multiple whitespace mixed in string", "  hsqq qww  ", decode("2 hs2q q2w2 "));
Tests.equalCheck("decode lowercase string", "aabbbcccc", decode("2a3b4c"));
Tests.equalCheck("encode followed by decode gives original string", "zzz ZZ  zZ", decode(encode("zzz ZZ  zZ")));
