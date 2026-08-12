// @ts-nocheck
if (typeof say !== "function") {
  throw new Error("say function is not defined");
}

Tests.equalCheck("zero", "zero", say(0));
Tests.equalCheck("one", "one", say(1));
Tests.equalCheck("fourteen", "fourteen", say(14));
Tests.equalCheck("twenty", "twenty", say(20));
Tests.equalCheck("twenty-two", "twenty-two", say(22));
Tests.equalCheck("one hundred", "one hundred", say(100));
Tests.equalCheck("one hundred twenty-three", "one hundred twenty-three", say(123));
Tests.equalCheck("one thousand", "one thousand", say(1000));
Tests.equalCheck("one thousand two hundred thirty-four", "one thousand two hundred thirty-four", say(1234));
Tests.equalCheck("one million", "one million", say(1000000));
Tests.equalCheck("one billion", "one billion", say(1000000000));
Tests.equalCheck("999,999,999,999", "nine hundred ninety-nine billion nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred ninety-nine", say(999999999999));
Tests.boolCheck("negative is error", typeof say(-1) === "object");
Tests.boolCheck("too large is error", typeof say(1000000000000) === "object");
