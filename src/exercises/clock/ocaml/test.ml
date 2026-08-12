let identity s = s

let () =
  Tests.string_check identity "on the hour" "08:00" (to_string (create 8 0));
  Tests.string_check identity "past the hour" "11:09" (to_string (create 11 9));
  Tests.string_check identity "midnight is zero hours" "00:00" (to_string (create 24 0));
  Tests.string_check identity "hour rolls over" "01:00" (to_string (create 25 0));
  Tests.string_check identity "minutes roll over" "02:40" (to_string (create 0 160));
  Tests.string_check identity "negative hour" "23:00" (to_string (create (-1) 0));
  Tests.string_check identity "negative minutes" "02:20" (to_string (create 3 (-40)));
  Tests.string_check identity "add minutes" "10:03" (to_string (add 3 (create 10 0)));
  Tests.string_check identity "subtract minutes" "09:40" (to_string (sub 20 (create 10 0)));
  Tests.bool_check "clocks with same time are equal" (create 15 37 = create 15 37);
  Tests.bool_check "clocks with different time are not equal" (create 15 37 <> create 15 36)
