export function score(dice: number[], category: string): number {
  const counts = new Map<number, number>();
  let sum = 0;
  for (const d of dice) {
    counts.set(d, (counts.get(d) || 0) + 1);
    sum += d;
  }

  const cat = category.toLowerCase();
  if (cat === "ones") return (counts.get(1) || 0) * 1;
  if (cat === "twos") return (counts.get(2) || 0) * 2;
  if (cat === "threes") return (counts.get(3) || 0) * 3;
  if (cat === "fours") return (counts.get(4) || 0) * 4;
  if (cat === "fives") return (counts.get(5) || 0) * 5;
  if (cat === "sixes") return (counts.get(6) || 0) * 6;

  if (cat === "choice") return sum;

  if (cat === "yacht") {
    return counts.size === 1 ? 50 : 0;
  }

  if (cat === "full house") {
    const entries = Array.from(counts.entries());
    if (entries.length === 2 && (entries[0][1] === 3 || entries[0][1] === 2)) {
      return sum;
    }
    return 0;
  }

  if (cat === "four of a kind") {
    for (const [val, count] of counts.entries()) {
      if (count >= 4) return val * 4;
    }
    return 0;
  }

  const sorted = [...dice].sort((a, b) => a - b);
  if (cat === "little straight") {
    return sorted.join(",") === "1,2,3,4,5" ? 30 : 0;
  }

  if (cat === "big straight") {
    return sorted.join(",") === "2,3,4,5,6" ? 30 : 0;
  }

  return 0;
}
