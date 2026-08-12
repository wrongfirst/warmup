export function steps(n: number): number | { error: string } {
  if (n <= 0 || !Number.isInteger(n)) {
    return { error: "Only positive integers are allowed" };
  }

  let count = 0;
  let curr = n;

  while (curr !== 1) {
    if (curr % 2 === 0) {
      curr = curr / 2;
    } else {
      curr = 3 * curr + 1;
    }
    count++;
  }

  return count;
}
