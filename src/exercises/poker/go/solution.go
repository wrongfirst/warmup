package main

func BestHands(hands []string) []string {
	if len(hands) == 0 {
		return nil
	}
	return []string{hands[0]}
}
