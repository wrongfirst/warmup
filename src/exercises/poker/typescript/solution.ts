export function bestHands(hands: string[]): string[] {
  if (hands.length === 1) return hands;

  const scoreHand = (handStr: string) => {
    const ranks = "2345678910JQKA";
    const cards = handStr.split(' ').map(c => {
      const rankStr = c.slice(0, -1);
      const suit = c.slice(-1);
      const rank = rankStr === '10' ? 10 : ranks.indexOf(rankStr) + 2;
      return { rank, suit };
    });

    cards.sort((a, b) => b.rank - a.rank);

    const isFlush = cards.every(c => c.suit === cards[0].suit);
    let isStraight = cards.every((c, i) => i === 0 || cards[i - 1].rank - c.rank === 1);
    
    if (!isStraight && cards[0].rank === 14 && cards[1].rank === 5 && cards[2].rank === 4 && cards[3].rank === 3 && cards[4].rank === 2) {
      isStraight = true;
      cards.push(cards.shift()!);
    }

    const counts: Record<number, number> = {};
    for (const c of cards) {
      counts[c.rank] = (counts[c.rank] || 0) + 1;
    }

    const groups = Object.entries(counts)
      .map(([r, count]) => ({ rank: Number(r), count }))
      .sort((a, b) => b.count - a.count || b.rank - a.rank);

    let category = 0;
    if (isStraight && isFlush) category = 8;
    else if (groups[0].count === 4) category = 7;
    else if (groups[0].count === 3 && groups[1]?.count === 2) category = 6;
    else if (isFlush) category = 5;
    else if (isStraight) category = 4;
    else if (groups[0].count === 3) category = 3;
    else if (groups[0].count === 2 && groups[1]?.count === 2) category = 2;
    else if (groups[0].count === 2) category = 1;

    const scoreVector = [category, ...groups.map(g => g.rank)];
    return { handStr, scoreVector };
  };

  const scored = hands.map(scoreHand);
  
  const compareScores = (a: number[], b: number[]) => {
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
      if ((a[i] || 0) !== (b[i] || 0)) {
        return (b[i] || 0) - (a[i] || 0);
      }
    }
    return 0;
  };

  scored.sort((a, b) => compareScores(a.scoreVector, b.scoreVector));
  const bestScore = scored[0].scoreVector;

  return scored
    .filter(s => compareScores(s.scoreVector, bestScore) === 0)
    .map(s => s.handStr);
}
