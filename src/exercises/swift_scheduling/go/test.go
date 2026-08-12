package main

func main() {
	Tests.EqualCheck("NOW translates to two hours later", "2012-02-13T11:00:00", DeliveryDate("2012-02-13T09:00:00", "NOW"))
	Tests.EqualCheck("ASAP before 13:00", "1999-06-03T17:00:00", DeliveryDate("1999-06-03T09:45:00", "ASAP"))
	Tests.EqualCheck("ASAP at 13:00", "2008-12-22T13:00:00", DeliveryDate("2008-12-21T13:00:00", "ASAP"))
	Tests.EqualCheck("ASAP after 13:00", "2008-12-22T13:00:00", DeliveryDate("2008-12-21T14:50:00", "ASAP"))
	Tests.EqualCheck("EOW on Monday", "2025-02-07T17:00:00", DeliveryDate("2025-02-03T16:00:00", "EOW"))
	Tests.EqualCheck("EOW on Tuesday", "1997-05-02T17:00:00", DeliveryDate("1997-04-29T10:50:00", "EOW"))
	Tests.EqualCheck("EOW on Wednesday", "2005-09-16T17:00:00", DeliveryDate("2005-09-14T11:00:00", "EOW"))
	Tests.EqualCheck("EOW on Thursday", "2011-05-22T20:00:00", DeliveryDate("2011-05-19T08:30:00", "EOW"))
	Tests.EqualCheck("EOW on Friday", "2022-08-07T20:00:00", DeliveryDate("2022-08-05T14:00:00", "EOW"))
	Tests.EqualCheck("EOW leap day", "2008-02-29T17:00:00", DeliveryDate("2008-02-25T10:30:00", "EOW"))
	Tests.EqualCheck("2M before second month", "2007-02-01T08:00:00", DeliveryDate("2007-01-02T14:15:00", "2M"))
	Tests.EqualCheck("11M in eleventh month", "2014-11-03T08:00:00", DeliveryDate("2013-11-21T15:30:00", "11M"))
	Tests.EqualCheck("4M in ninth month", "2020-04-01T08:00:00", DeliveryDate("2019-11-18T15:15:00", "4M"))
	Tests.EqualCheck("Q1 in Q1", "2003-03-31T08:00:00", DeliveryDate("2003-01-01T10:45:00", "Q1"))
	Tests.EqualCheck("Q4 in Q2", "2001-12-31T08:00:00", DeliveryDate("2001-04-09T09:00:00", "Q4"))
	Tests.EqualCheck("Q3 in Q4", "2023-09-29T08:00:00", DeliveryDate("2022-10-06T11:00:00", "Q3"))
	Tests.EqualCheck("Q2 in Q2 month 6", "2019-06-28T08:00:00", DeliveryDate("2019-06-15T09:50:00", "Q2"))
}
