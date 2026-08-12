// @ts-nocheck
if (typeof Clock !== "function") {
  throw new Error("Clock class is not defined");
}

Tests.equalCheck("on the hour", "08:00", new Clock(8, 0).toString());
Tests.equalCheck("past the hour", "11:09", new Clock(11, 9).toString());
Tests.equalCheck("midnight is zero hours", "00:00", new Clock(24, 0).toString());
Tests.equalCheck("hour rolls over", "01:00", new Clock(25, 0).toString());
Tests.equalCheck("minutes roll over", "02:40", new Clock(0, 160).toString());
Tests.equalCheck("negative hour", "23:00", new Clock(-1, 0).toString());
Tests.equalCheck("negative minutes", "02:20", new Clock(3, -40).toString());
Tests.equalCheck("add minutes", "10:03", new Clock(10, 0).plus(3).toString());
Tests.equalCheck("subtract minutes", "09:40", new Clock(10, 0).minus(20).toString());
Tests.boolCheck("clocks with same time are equal", new Clock(15, 37).equals(new Clock(15, 37)));
Tests.boolCheck("clocks with different time are not equal", !new Clock(15, 37).equals(new Clock(15, 36)));
