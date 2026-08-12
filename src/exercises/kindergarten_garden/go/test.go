package main

import "fmt"

func main() {
	res := Plants("RC\nGG", "Alice")
	Tests.EqualCheck("Alice plants", fmt.Sprintf("%v", []string{"radishes", "clover", "grass", "grass"}), fmt.Sprintf("%v", res))
}
