const ALLERGENS: string[] = [
  'eggs',
  'peanuts',
  'shellfish',
  'strawberries',
  'tomatoes',
  'chocolate',
  'pollen',
  'cats'
];

export function allergicTo(item: string, score: number): boolean {
  const index = ALLERGENS.indexOf(item);
  if (index === -1) return false;
  return (score & (1 << index)) !== 0;
}

export function list(score: number): string[] {
  return ALLERGENS.filter((_, index) => (score & (1 << index)) !== 0);
}
