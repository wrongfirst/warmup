package main

import "fmt"

func main() {
	Tests.EqualCheck("single student Alice", fmt.Sprintf("%v", []string{"radishes", "clover", "grass", "grass"}), fmt.Sprintf("%v", Plants("RC\nGG", "Alice")))
	Tests.EqualCheck("two students Bob", fmt.Sprintf("%v", []string{"clover", "grass", "radishes", "clover"}), fmt.Sprintf("%v", Plants("VVCG\nVVRC", "Bob")))
	Tests.EqualCheck("Bob in small garden", fmt.Sprintf("%v", []string{"clover", "clover", "clover", "clover"}), fmt.Sprintf("%v", Plants("VVCCGG\nVVCCGG", "Bob")))
	Tests.EqualCheck("Charlie in small garden", fmt.Sprintf("%v", []string{"grass", "grass", "grass", "grass"}), fmt.Sprintf("%v", Plants("VVCCGG\nVVCCGG", "Charlie")))

	fullGarden := "VRCGVVRVCGGCCGVRGCVCGCGV\nVRCCCGCRRGVCGCRVVCVGCGCV"
	Tests.EqualCheck("full garden - Alice", fmt.Sprintf("%v", []string{"violets", "radishes", "violets", "radishes"}), fmt.Sprintf("%v", Plants(fullGarden, "Alice")))
	Tests.EqualCheck("full garden - Bob", fmt.Sprintf("%v", []string{"clover", "grass", "clover", "clover"}), fmt.Sprintf("%v", Plants(fullGarden, "Bob")))
	Tests.EqualCheck("full garden - Kincaid", fmt.Sprintf("%v", []string{"grass", "clover", "clover", "grass"}), fmt.Sprintf("%v", Plants(fullGarden, "Kincaid")))
	Tests.EqualCheck("full garden - Larry", fmt.Sprintf("%v", []string{"grass", "violets", "clover", "violets"}), fmt.Sprintf("%v", Plants(fullGarden, "Larry")))
}
