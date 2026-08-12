export interface Cage {
  sum: number;
  size: number;
  exclude?: number[];
}

export function combinations(cage: Cage): number[][] {
  const { sum: target, size, exclude = [] } = cage;
  const excludedSet = new Set(exclude);
  const result: number[][] = [];

  function backtrack(startDigit: number, currentCombo: number[], currentSum: number) {
    if (currentCombo.length === size) {
      if (currentSum === target) {
        result.push([...currentCombo]);
      }
      return;
    }

    for (let digit = startDigit; digit <= 9; digit++) {
      if (excludedSet.has(digit)) continue;
      if (currentSum + digit > target) break;

      currentCombo.push(digit);
      backtrack(digit + 1, currentCombo, currentSum + digit);
      currentCombo.pop();
    }
  }

  backtrack(1, [], 0);
  return result;
}
