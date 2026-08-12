export function keep<T>(array: T[], predicate: (element: T) => boolean): T[] {
  const result: T[] = [];
  for (const item of array) {
    if (predicate(item)) {
      result.push(item);
    }
  }
  return result;
}

export function discard<T>(array: T[], predicate: (element: T) => boolean): T[] {
  const result: T[] = [];
  for (const item of array) {
    if (!predicate(item)) {
      result.push(item);
    }
  }
  return result;
}
