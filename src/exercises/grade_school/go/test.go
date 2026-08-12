package main

import "fmt"

func main() {
	Tests.EqualCheck("Roster is empty when no student is added", fmt.Sprintf("%v", []string{}), fmt.Sprintf("%v", Roster([]Student{})))
	Tests.EqualCheck("Add a student", fmt.Sprintf("%v", []bool{true}), fmt.Sprintf("%v", Add([]Student{{"Aimee", 2}})))
	Tests.EqualCheck("Student is added to the roster", fmt.Sprintf("%v", []string{"Aimee"}), fmt.Sprintf("%v", Roster([]Student{{"Aimee", 2}})))
	Tests.EqualCheck("Adding multiple students in the same grade", fmt.Sprintf("%v", []bool{true, true, true}), fmt.Sprintf("%v", Add([]Student{{"Blair", 2}, {"James", 2}, {"Paul", 2}})))
	Tests.EqualCheck("Multiple students in the same grade sorted in roster", fmt.Sprintf("%v", []string{"Blair", "James", "Paul"}), fmt.Sprintf("%v", Roster([]Student{{"James", 2}, {"Blair", 2}, {"Paul", 2}})))
	Tests.EqualCheck("Cannot add student to same grade more than once", fmt.Sprintf("%v", []bool{true, true, false, true}), fmt.Sprintf("%v", Add([]Student{{"Blair", 2}, {"James", 2}, {"James", 2}, {"Paul", 2}})))
	Tests.EqualCheck("Student can't be in two different grades", fmt.Sprintf("%v", []string{}), fmt.Sprintf("%v", Grade([]Student{{"Aimee", 2}, {"Aimee", 1}}, 1)))
}
