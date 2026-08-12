package main

func main() {
	r1, status1 := Measure(3, 5, 1, "one")
	Tests.EqualCheck("Measure using bucket one of size 3 and bucket two of size 5 - start with bucket one status", "ok", status1)
	Tests.EqualCheck("Measure using bucket one of size 3 and bucket two of size 5 - start with bucket one moves", 4, r1.Moves)
	Tests.EqualCheck("Measure using bucket one of size 3 and bucket two of size 5 - start with bucket one goalBucket", "one", r1.GoalBucket)
	Tests.EqualCheck("Measure using bucket one of size 3 and bucket two of size 5 - start with bucket one otherBucket", 5, r1.OtherBucket)

	r2, status2 := Measure(3, 5, 1, "two")
	Tests.EqualCheck("Measure using bucket one of size 3 and bucket two of size 5 - start with bucket two status", "ok", status2)
	Tests.EqualCheck("Measure using bucket one of size 3 and bucket two of size 5 - start with bucket two moves", 8, r2.Moves)
	Tests.EqualCheck("Measure using bucket one of size 3 and bucket two of size 5 - start with bucket two goalBucket", "two", r2.GoalBucket)

	_, status3 := Measure(6, 15, 5, "one")
	Tests.EqualCheck("Not possible to reach the goal", "impossible", status3)

	_, status4 := Measure(5, 7, 8, "one")
	Tests.EqualCheck("Goal larger than both buckets is impossible", "impossible", status4)
}
