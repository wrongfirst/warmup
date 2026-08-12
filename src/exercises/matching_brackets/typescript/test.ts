// @ts-nocheck
if (typeof isPaired !== "function") {
  throw new Error("isPaired function is not defined");
}

Tests.boolCheck("paired square brackets", isPaired("[]"));
Tests.boolCheck("empty string", isPaired(""));
Tests.boolCheck("unpaired brackets", !isPaired("[["));
Tests.boolCheck("wrong ordered brackets", !isPaired("}{"));
Tests.boolCheck("wrong closing bracket", !isPaired("{]"));
Tests.boolCheck("paired with whitespace", isPaired("{ }"));
Tests.boolCheck("partially paired brackets", !isPaired("{[])"));
Tests.boolCheck("simple nested brackets", isPaired("{[]}"));
Tests.boolCheck("several paired brackets", isPaired("{}[]"));
Tests.boolCheck("paired and nested brackets", isPaired("([{}({}[])])"));
Tests.boolCheck("math expression", isPaired("(((185 + 223.85) * 15) - 343)"));
Tests.boolCheck("complex latex expression", isPaired("\\left(\\begin{array}{cc} \\frac{1}{3} & x\\\\ \\frac{2}{3} & y \\end{array}\\right)"));
