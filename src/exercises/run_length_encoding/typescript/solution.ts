export function encode(input: string): string {
  if (!input) return "";
  let result = "";
  let count = 1;

  for (let i = 0; i < input.length; i++) {
    if (i + 1 < input.length && input[i] === input[i + 1]) {
      count++;
    } else {
      result += (count > 1 ? count : "") + input[i];
      count = 1;
    }
  }

  return result;
}

export function decode(input: string): string {
  if (!input) return "";
  let result = "";
  let countStr = "";

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (/\d/.test(char)) {
      countStr += char;
    } else {
      const count = countStr.length > 0 ? parseInt(countStr, 10) : 1;
      result += char.repeat(count);
      countStr = "";
    }
  }

  return result;
}
