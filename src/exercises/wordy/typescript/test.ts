// @ts-nocheck
if (typeof answer !== "function") {
  throw new Error("answer function is not defined");
}

Tests.equalCheck("just a number", 5, answer("What is 5?"));
Tests.equalCheck("addition", 2, answer("What is 1 plus 1?"));
Tests.equalCheck("more addition", 55, answer("What is 53 plus 2?"));
Tests.equalCheck("subtraction", 16, answer("What is 4 minus -12?"));
Tests.equalCheck("multiplication", -12, answer("What is -3 multiplied by 4?"));
Tests.equalCheck("division", -11, answer("What is -33 divided by 3?"));
Tests.equalCheck("multiple additions", 3, answer("What is 1 plus 1 plus 1?"));
Tests.equalCheck("addition and multiplication", 15, answer("What is 3 plus 2 multiplied by 3?"));
Tests.boolCheck("reject cubed", typeof answer("What is 52 cubed?") === "object");
Tests.boolCheck("reject non-math", typeof answer("Who is the President of the United States?") === "object");
Tests.boolCheck("reject syntax error plus plus", typeof answer("What is 1 plus plus 2?") === "object");
