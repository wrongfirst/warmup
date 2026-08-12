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
  // Your code here
  return { moves: 0, goalBucket: "", otherBucket: 0 };
}
