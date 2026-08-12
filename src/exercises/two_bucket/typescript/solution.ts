export interface Result {
  moves: number;
  goalBucket: string;
  otherBucket: number;
}

export function measure(
  bucketOne: number,
  bucketTwo: number,
  goal: number,
  startBucket: string
): Result | { error: string } {
  if (goal > Math.max(bucketOne, bucketTwo)) {
    return { error: "impossible" };
  }

  let b1 = startBucket === "one" ? bucketOne : 0;
  let b2 = startBucket === "two" ? bucketTwo : 0;

  const forbiddenKey =
    startBucket === "one" ? `0,${bucketTwo}` : `${bucketOne},0`;

  const visited = new Set<string>();
  visited.add(`0,0`);
  visited.add(`${b1},${b2}`);
  visited.add(forbiddenKey);

  const queue: Array<[number, number, number]> = [[b1, b2, 1]];

  while (queue.length > 0) {
    const [c1, c2, moves] = queue.shift()!;

    if (c1 === goal) {
      return { moves, goalBucket: "one", otherBucket: c2 };
    }
    if (c2 === goal) {
      return { moves, goalBucket: "two", otherBucket: c1 };
    }

    const pour1to2 = Math.min(c1, bucketTwo - c2);
    const pour2to1 = Math.min(c2, bucketOne - c1);

    const nextStates: Array<[number, number]> = [
      [bucketOne, c2],
      [c1, bucketTwo],
      [0, c2],
      [c1, 0],
      [c1 - pour1to2, c2 + pour1to2],
      [c1 + pour2to1, c2 - pour2to1]
    ];

    for (const [n1, n2] of nextStates) {
      const key = `${n1},${n2}`;
      if (!visited.has(key)) {
        visited.add(key);
        queue.push([n1, n2, moves + 1]);
      }
    }
  }

  return { error: "impossible" };
}
