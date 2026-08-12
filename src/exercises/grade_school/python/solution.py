from collections import defaultdict

class GradeSchool:
    def __init__(self):
        self.grades = defaultdict(list)
        self.all_students = set()

    def add_student(self, name: str, grade_num: int) -> bool:
        if name in self.all_students:
            return False
        self.all_students.add(name)
        self.grades[grade_num].append(name)
        self.grades[grade_num].sort()
        return True

    def get_roster(self) -> list[str]:
        res = []
        for g in sorted(self.grades.keys()):
            res.extend(self.grades[g])
        return res

    def get_grade(self, grade_num: int) -> list[str]:
        return sorted(self.grades.get(grade_num, []))

def roster(students: list[tuple[str, int]]) -> list[str]:
    school = GradeSchool()
    for name, g in students:
        school.add_student(name, g)
    return school.get_roster()

def grade(students: list[tuple[str, int]], desired_grade: int) -> list[str]:
    school = GradeSchool()
    for name, g in students:
        school.add_student(name, g)
    return school.get_grade(desired_grade)

def add(students: list[tuple[str, int]]) -> list[bool]:
    school = GradeSchool()
    return [school.add_student(name, g) for name, g in students]
