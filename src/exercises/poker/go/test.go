package main

import "fmt"

func main() {
	res := BestHands([]string{"4S 5S 7H 8D JC"})
	Tests.EqualCheck("Single hand wins", fmt.Sprintf("%v", []string{"4S 5S 7H 8D JC"}), fmt.Sprintf("%v", res))
}
