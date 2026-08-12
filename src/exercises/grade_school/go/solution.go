package main

import "sort"

type Student struct {
	Name  string
	Grade int
}

type GradeSchool struct {
	rosterMap   map[int][]string
	allStudents map[string]bool
}

func NewGradeSchool() *GradeSchool {
	return &GradeSchool{
		rosterMap:   make(map[int][]string),
		allStudents: make(map[string]bool),
	}
}

func (g *GradeSchool) AddStudent(name string, gradeNum int) bool {
	if g.allStudents[name] {
		return false
	}
	g.allStudents[name] = true
	g.rosterMap[gradeNum] = append(g.rosterMap[gradeNum], name)
	sort.Strings(g.rosterMap[gradeNum])
	return true
}

func (g *GradeSchool) GetRoster() []string {
	var grades []int
	for gr := range g.rosterMap {
		grades = append(grades, gr)
	}
	sort.Ints(grades)

	var result []string
	for _, gr := range grades {
		result = append(result, g.rosterMap[gr]...)
	}
	return result
}

func (g *GradeSchool) GetGrade(gradeNum int) []string {
	list := make([]string, len(g.rosterMap[gradeNum]))
	copy(list, g.rosterMap[gradeNum])
	sort.Strings(list)
	return list
}

func Roster(students []Student) []string {
	school := NewGradeSchool()
	for _, s := range students {
		school.AddStudent(s.Name, s.Grade)
	}
	return school.GetRoster()
}

func Grade(students []Student, desiredGrade int) []string {
	school := NewGradeSchool()
	for _, s := range students {
		school.AddStudent(s.Name, s.Grade)
	}
	return school.GetGrade(desiredGrade)
}

func Add(students []Student) []bool {
	school := NewGradeSchool()
	res := make([]bool, len(students))
	for i, s := range students {
		res[i] = school.AddStudent(s.Name, s.Grade)
	}
	return res
}
