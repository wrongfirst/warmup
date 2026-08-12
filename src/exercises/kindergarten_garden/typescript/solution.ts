const PLANT_NAMES: Record<string, string> = {
  G: 'grass',
  C: 'clover',
  R: 'radishes',
  V: 'violets'
};

const STUDENTS = [
  'Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Fred',
  'Ginny', 'Harriet', 'Ileana', 'Joseph', 'Kincaid', 'Larry'
];

export function plants(diagram: string, student: string): string[] {
  const [row1, row2] = diagram.split('\n');
  const index = STUDENTS.indexOf(student);
  if (index === -1) return [];

  const i1 = index * 2;
  const i2 = i1 + 1;

  return [
    PLANT_NAMES[row1[i1]],
    PLANT_NAMES[row1[i2]],
    PLANT_NAMES[row2[i1]],
    PLANT_NAMES[row2[i2]]
  ];
}
