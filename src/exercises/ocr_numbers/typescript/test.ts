// @ts-nocheck
if (typeof convert !== "function") {
  throw new Error("convert function is not defined");
}

const zero = " _ \n| |\n|_|\n   ";
const one = "   \n  |\n  |\n   ";

Tests.equalCheck("Recognizes 0", "0", convert(zero));
Tests.equalCheck("Recognizes 1", "1", convert(one));
Tests.equalCheck("Recognizes garbled", "?", convert("   \n| |\n| |\n   "));
Tests.equalCheck("Recognizes 1234567890", "1234567890", convert("    _  _     _  _  _  _  _  _ \n  | _| _||_||_ |_   ||_||_|| |\n  ||_  _|  | _||_|  ||_| _||_|\n                              "));
Tests.boolCheck("Invalid line count error", typeof convert(" _ \n| |\n|_|") === "object");
Tests.boolCheck("Invalid col count error", typeof convert(" _\n| \n|_") === "object");
