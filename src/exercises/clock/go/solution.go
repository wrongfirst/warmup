package main

import "fmt"

type Clock struct {
	totalMinutes int
}

func NewClock(hour, minute int) Clock {
	total := (hour*60 + minute) % 1440
	if total < 0 {
		total += 1440
	}
	return Clock{totalMinutes: total}
}

func (c Clock) String() string {
	h := c.totalMinutes / 60
	m := c.totalMinutes % 60
	return fmt.Sprintf("%02d:%02d", h, m)
}

func (c Clock) Add(minutes int) Clock {
	return NewClock(0, c.totalMinutes+minutes)
}

func (c Clock) Subtract(minutes int) Clock {
	return NewClock(0, c.totalMinutes-minutes)
}
