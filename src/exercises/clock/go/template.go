package main

type Clock struct {
	totalMinutes int
}

func NewClock(hour, minute int) Clock {
	// Your code here
	return Clock{}
}

func (c Clock) String() string {
	// Your code here
	return "00:00"
}

func (c Clock) Add(minutes int) Clock {
	// Your code here
	return c
}

func (c Clock) Subtract(minutes int) Clock {
	// Your code here
	return c
}
