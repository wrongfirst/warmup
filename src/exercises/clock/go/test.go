package main

func main() {
	Tests.EqualCheck("on the hour", "08:00", NewClock(8, 0).String())
	Tests.EqualCheck("past the hour", "11:09", NewClock(11, 9).String())
	Tests.EqualCheck("midnight is zero hours", "00:00", NewClock(24, 0).String())
	Tests.EqualCheck("hour rolls over", "01:00", NewClock(25, 0).String())
	Tests.EqualCheck("minutes roll over", "02:40", NewClock(0, 160).String())
	Tests.EqualCheck("negative hour", "23:00", NewClock(-1, 0).String())
	Tests.EqualCheck("negative minutes", "02:20", NewClock(3, -40).String())
	Tests.EqualCheck("add minutes", "10:03", NewClock(10, 0).Add(3).String())
	Tests.EqualCheck("subtract minutes", "09:40", NewClock(10, 0).Subtract(20).String())
	Tests.BoolCheck("clocks with same time are equal", NewClock(15, 37) == NewClock(15, 37))
	Tests.BoolCheck("clocks with different time are not equal", NewClock(15, 37) != NewClock(15, 36))
}
