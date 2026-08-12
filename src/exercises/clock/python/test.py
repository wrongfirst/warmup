if 'Clock' not in globals():
    raise Exception("Clock class is not defined")

Tests.equal_check("on the hour", "08:00", str(Clock(8, 0)))
Tests.equal_check("past the hour", "11:09", str(Clock(11, 9)))
Tests.equal_check("midnight is zero hours", "00:00", str(Clock(24, 0)))
Tests.equal_check("hour rolls over", "01:00", str(Clock(25, 0)))
Tests.equal_check("minutes roll over", "02:40", str(Clock(0, 160)))
Tests.equal_check("negative hour", "23:00", str(Clock(-1, 0)))
Tests.equal_check("negative minutes", "02:20", str(Clock(3, -40)))
Tests.equal_check("add minutes", "10:03", str(Clock(10, 0) + 3))
Tests.equal_check("subtract minutes", "09:40", str(Clock(10, 0) - 20))
Tests.bool_check("clocks with same time are equal", Clock(15, 37) == Clock(15, 37))
Tests.bool_check("clocks with different time are not equal", Clock(15, 37) != Clock(15, 36))
