const SMALLS = [
  "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
  "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
  "seventeen", "eighteen", "nineteen",
];

const TENS = [
  "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety",
];

const SCALES = ["", "thousand", "million", "billion"];

function spellThreeDigits(n: number): string {
  const parts: string[] = [];
  const hundred = Math.floor(n / 100);
  const remainder = n % 100;

  if (hundred > 0) {
    parts.push(`${SMALLS[hundred]} hundred`);
  }

  if (remainder > 0) {
    if (remainder < 20) {
      parts.push(SMALLS[remainder]);
    } else {
      const ten = Math.floor(remainder / 10);
      const unit = remainder % 10;
      if (unit > 0) {
        parts.push(`${TENS[ten]}-${SMALLS[unit]}`);
      } else {
        parts.push(TENS[ten]);
      }
    }
  }

  return parts.join(" ");
}

export function say(n: number): string | { error: string } {
  if (n < 0 || n >= 1e12 || !Number.isInteger(n)) {
    return { error: "input out of range" };
  }
  if (n === 0) return "zero";

  let num = n;
  let scaleIdx = 0;
  const parts: string[] = [];

  while (num > 0) {
    const chunk = num % 1000;
    if (chunk > 0) {
      const spelled = spellThreeDigits(chunk);
      const scale = SCALES[scaleIdx];
      if (scale) {
        parts.unshift(`${spelled} ${scale}`);
      } else {
        parts.unshift(spelled);
      }
    }
    num = Math.floor(num / 1000);
    scaleIdx++;
  }

  return parts.join(" ");
}
