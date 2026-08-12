package main

import "fmt"

func main() {
	Tests.BoolCheck("not allergic to anything", false == AllergicTo("eggs", 0))
	Tests.BoolCheck("allergic only to eggs", true == AllergicTo("eggs", 1))
	Tests.BoolCheck("allergic to eggs and something else", true == AllergicTo("eggs", 3))
	Tests.BoolCheck("allergic to something, but not eggs", false == AllergicTo("eggs", 2))
	Tests.BoolCheck("allergic to everything", true == AllergicTo("eggs", 255))
	Tests.BoolCheck("allergic to peanuts", true == AllergicTo("peanuts", 7))
	Tests.BoolCheck("ignores non-allergen bits for AllergicTo", true == AllergicTo("eggs", 257))

	Tests.EqualCheck("no allergies", fmt.Sprintf("%v", []string{}), fmt.Sprintf("%v", Allergies(0)))
	Tests.EqualCheck("just eggs", fmt.Sprintf("%v", []string{"eggs"}), fmt.Sprintf("%v", Allergies(1)))
	Tests.EqualCheck("just peanuts", fmt.Sprintf("%v", []string{"peanuts"}), fmt.Sprintf("%v", Allergies(2)))
	Tests.EqualCheck("just strawberries", fmt.Sprintf("%v", []string{"strawberries"}), fmt.Sprintf("%v", Allergies(8)))
	Tests.EqualCheck("eggs and peanuts", fmt.Sprintf("%v", []string{"eggs", "peanuts"}), fmt.Sprintf("%v", Allergies(3)))
	Tests.EqualCheck("more than eggs but not peanuts", fmt.Sprintf("%v", []string{"eggs", "shellfish"}), fmt.Sprintf("%v", Allergies(5)))
	Tests.EqualCheck("everything", fmt.Sprintf("%v", []string{"eggs", "peanuts", "shellfish", "strawberries", "tomatoes", "chocolate", "pollen", "cats"}), fmt.Sprintf("%v", Allergies(255)))
	Tests.EqualCheck("ignores non-allergen score parts", fmt.Sprintf("%v", []string{"eggs", "shellfish", "strawberries", "tomatoes", "chocolate", "pollen", "cats"}), fmt.Sprintf("%v", Allergies(509)))
	Tests.EqualCheck("ignores non-allergen score parts without highest valid score", fmt.Sprintf("%v", []string{"eggs"}), fmt.Sprintf("%v", Allergies(257)))
}
