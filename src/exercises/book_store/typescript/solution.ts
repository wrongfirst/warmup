const GROUP_COSTS: Record<number, number> = {
  0: 0,
  1: 800,
  2: 1520,
  3: 2160,
  4: 2560,
  5: 3000,
};

export function total(basket: number[]): number {
  if (basket.length === 0) return 0;

  const countsMap = new Map<number, number>();
  for (const book of basket) {
    countsMap.set(book, (countsMap.get(book) || 0) + 1);
  }

  const initialCounts = Array.from(countsMap.values()).sort((a, b) => b - a);

  const memo = new Map<string, number>();

  function solve(counts: number[]): number {
    const active = counts.filter((c) => c > 0).sort((a, b) => b - a);
    if (active.length === 0) return 0;

    const key = active.join(",");
    if (memo.has(key)) return memo.get(key)!;

    let minCost = Infinity;
    const numUnique = active.length;

    for (let size = 1; size <= numUnique; size++) {
      const nextCounts = [...active];
      for (let i = 0; i < size; i++) {
        nextCounts[i]--;
      }
      const cost = GROUP_COSTS[size] + solve(nextCounts);
      if (cost < minCost) {
        minCost = cost;
      }
    }

    memo.set(key, minCost);
    return minCost;
  }

  return solve(initialCounts);
}
