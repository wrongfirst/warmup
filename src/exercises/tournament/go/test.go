package main

import "fmt"

func main() {
	Tests.EqualCheck("just the header if no input", fmt.Sprintf("%v", []string{"Team                           | MP |  W |  D |  L |  P"}), fmt.Sprintf("%v", Tally([]string{})))

	winLossExp := []string{
		"Team                           | MP |  W |  D |  L |  P",
		"Allegoric Alaskans             |  1 |  1 |  0 |  0 |  3",
		"Blithering Badgers             |  1 |  0 |  0 |  1 |  0",
	}
	Tests.EqualCheck("a win is three points, a loss is zero points", fmt.Sprintf("%v", winLossExp), fmt.Sprintf("%v", Tally([]string{"Allegoric Alaskans;Blithering Badgers;win"})))

	drawExp := []string{
		"Team                           | MP |  W |  D |  L |  P",
		"Allegoric Alaskans             |  1 |  0 |  1 |  0 |  1",
		"Blithering Badgers             |  1 |  0 |  1 |  0 |  1",
	}
	Tests.EqualCheck("a draw is one point each", fmt.Sprintf("%v", drawExp), fmt.Sprintf("%v", Tally([]string{"Allegoric Alaskans;Blithering Badgers;draw"})))
}
