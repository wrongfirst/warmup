package main

var allergens = []string{
	"eggs",
	"peanuts",
	"shellfish",
	"strawberries",
	"tomatoes",
	"chocolate",
	"pollen",
	"cats",
}

func AllergicTo(item string, score int) bool {
	for i, a := range allergens {
		if a == item {
			return (score & (1 << i)) != 0
		}
	}
	return false
}

func Allergies(score int) []string {
	var result []string
	for i, a := range allergens {
		if (score & (1 << i)) != 0 {
			result = append(result, a)
		}
	}
	return result
}
