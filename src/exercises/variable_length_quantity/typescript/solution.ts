export function encode(numbers: number[]): number[] {
  const result: number[] = [];

  for (let n of numbers) {
    n = n >>> 0;
    const bytes: number[] = [];
    bytes.push(n & 0x7f);
    n = n >>> 7;

    while (n > 0) {
      bytes.push((n & 0x7f) | 0x80);
      n = n >>> 7;
    }

    bytes.reverse();
    result.push(...bytes);
  }

  return result;
}

export function decode(bytes: number[]): number[] {
  const result: number[] = [];
  let current = 0;
  let inSequence = false;

  for (const b of bytes) {
    current = ((current << 7) | (b & 0x7f)) >>> 0;
    inSequence = true;

    if ((b & 0x80) === 0) {
      result.push(current);
      current = 0;
      inSequence = false;
    }
  }

  if (inSequence) {
    throw new Error("incomplete sequence");
  }

  return result;
}
