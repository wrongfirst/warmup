// @ts-nocheck
if (typeof parse !== "function") {
  throw new Error("parse function is not defined");
}

Tests.equalCheck("basic", "PNG", parse("Portable Network Graphics"));
Tests.equalCheck("lowercase words", "ROR", parse("Ruby on Rails"));
Tests.equalCheck("punctuation", "FIFO", parse("First In, First Out"));
Tests.equalCheck("all caps word", "GIMP", parse("GNU Image Manipulation Program"));
Tests.equalCheck("hyphenated", "CMOS", parse("Complementary metal-oxide-semaphore"));
Tests.equalCheck("consecutive delimiters", "SIMUFTA", parse("Something - I made up from thin air"));
