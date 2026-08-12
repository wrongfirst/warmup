export class GradeSchool {
  private rosterMap = new Map<number, string[]>();
  private allStudents = new Set<string>();

  add(name: string, gradeNum: number): boolean {
    if (this.allStudents.has(name)) {
      return false;
    }
    this.allStudents.add(name);

    if (!this.rosterMap.has(gradeNum)) {
      this.rosterMap.set(gradeNum, []);
    }
    this.rosterMap.get(gradeNum)!.push(name);
    this.rosterMap.get(gradeNum)!.sort();
    return true;
  }

  roster(): string[] {
    const grades = Array.from(this.rosterMap.keys()).sort((a, b) => a - b);
    const result: string[] = [];
    for (const g of grades) {
      result.push(...this.rosterMap.get(g)!);
    }
    return result;
  }

  grade(gradeNum: number): string[] {
    return (this.rosterMap.get(gradeNum) || []).slice().sort();
  }
}

export function roster(students: Array<[string, number]>): string[] {
  const school = new GradeSchool();
  for (const [name, g] of students) {
    school.add(name, g);
  }
  return school.roster();
}

export function grade(students: Array<[string, number]>, desiredGrade: number): string[] {
  const school = new GradeSchool();
  for (const [name, g] of students) {
    school.add(name, g);
  }
  return school.grade(desiredGrade);
}

export function add(students: Array<[string, number]>): boolean[] {
  const school = new GradeSchool();
  return students.map(([name, g]) => school.add(name, g));
}
