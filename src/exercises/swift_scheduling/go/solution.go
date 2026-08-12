package main

import (
	"fmt"
	"regexp"
	"strconv"
	"time"
)

func DeliveryDate(meetingStart, description string) string {
	t, err := time.Parse("2006-01-02T15:04:05", meetingStart)
	if err != nil {
		return meetingStart
	}

	if description == "NOW" {
		res := t.Add(2 * time.Hour)
		return res.Format("2006-01-02T15:04:05")
	}

	if description == "ASAP" {
		if t.Hour() < 13 {
			return fmt.Sprintf("%04d-%02d-%02dT17:00:00", t.Year(), t.Month(), t.Day())
		}
		tomorrow := t.AddDate(0, 0, 1)
		return fmt.Sprintf("%04d-%02d-%02dT13:00:00", tomorrow.Year(), tomorrow.Month(), tomorrow.Day())
	}

	if description == "EOW" {
		weekday := t.Weekday()
		if weekday >= time.Monday && weekday <= time.Wednesday {
			daysToAdd := int(time.Friday - weekday)
			target := t.AddDate(0, 0, daysToAdd)
			return fmt.Sprintf("%04d-%02d-%02dT17:00:00", target.Year(), target.Month(), target.Day())
		}
		daysToAdd := (7 - int(weekday)) % 7
		target := t.AddDate(0, 0, daysToAdd)
		return fmt.Sprintf("%04d-%02d-%02dT20:00:00", target.Year(), target.Month(), target.Day())
	}

	mRe := regexp.MustCompile(`^(\d+)M$`)
	mMatch := mRe.FindStringSubmatch(description)
	if len(mMatch) > 1 {
		n, _ := strconv.Atoi(mMatch[1])
		targetYear := t.Year()
		if int(t.Month()) >= n {
			targetYear++
		}
		d := time.Date(targetYear, time.Month(n), 1, 8, 0, 0, 0, time.UTC)
		for d.Weekday() == time.Saturday || d.Weekday() == time.Sunday {
			d = d.AddDate(0, 0, 1)
		}
		return d.Format("2006-01-02T15:04:05")
	}

	qRe := regexp.MustCompile(`^Q(\d+)$`)
	qMatch := qRe.FindStringSubmatch(description)
	if len(qMatch) > 1 {
		q, _ := strconv.Atoi(qMatch[1])
		startQ := (int(t.Month())-1)/3 + 1
		targetYear := t.Year()
		if startQ > q {
			targetYear++
		}
		endMonth := q * 3
		firstOfNext := time.Date(targetYear, time.Month(endMonth+1), 1, 8, 0, 0, 0, time.UTC)
		d := firstOfNext.AddDate(0, 0, -1)
		for d.Weekday() == time.Saturday || d.Weekday() == time.Sunday {
			d = d.AddDate(0, 0, -1)
		}
		return d.Format("2006-01-02T15:04:05")
	}

	return meetingStart
}
