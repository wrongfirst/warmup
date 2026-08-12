export function classify(n: number): "perfect" | "abundant" | "deficient" | { error: string } {
  if (n <= 0 || !Number.isInteger(n)) {
    return { error: "Classification is only possible for natural numbers." };
  }

  if (n === 1) return "deficient";

  let sum = 1;
  const limit = Math.floor(Math.sqrt(n));

  for (let i = 2; i <= limit; i++) {
    if (n % i === 0) {
      sum += i;
      const other = n / i;
      if (other !== i) {
        sum += other;
      }
    }
  }

  if (sum === n) return "perfect";
  if (sum > n) return "abundant";
  return "deficient";
}
