export function isPaired(input: string): boolean {
  const stack: string[] = [];
  const pairs: Record<string, string> = {
    "]": "[",
    "}": "{",
    ")": "(",
  };
  const opens = new Set(["[", "{", "("]);

  for (const char of input) {
    if (opens.has(char)) {
      stack.push(char);
    } else if (char in pairs) {
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
