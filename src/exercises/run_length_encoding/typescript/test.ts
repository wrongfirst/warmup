// @ts-nocheck
if (typeof encode !== "function" || typeof decode !== "function") {
  throw new Error("encode/decode function is not defined");
}

Tests.equalCheck("encode empty string", "", encode(""));
Tests.equalCheck("encode single characters without count", "XYZ", encode("XYZ"));
Tests.equalCheck("encode string with repeated characters", "2A3B4C", encode("AABBBCCCC"));
Tests.equalCheck("encode multiple whitespace", "2 hs2q q2w", encode("  hs  q q  w"));
Tests.equalCheck("decode empty string", "", decode(""));
Tests.equalCheck("decode single characters without count", "XYZ", decode("XYZ"));
Tests.equalCheck("decode string with repeated characters", "AABBBCCCC", decode("2A3B4C"));
Tests.equalCheck("encode and then decode", "zzz ZZ zZ", decode(encode("zzz ZZ zZ")));
