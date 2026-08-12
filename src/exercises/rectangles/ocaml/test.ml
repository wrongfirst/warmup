let string_of_int_val x = string_of_int x

let () =
  Tests.string_check string_of_int_val "no rows" 0 (count []);
  Tests.string_check string_of_int_val "no columns" 0 (count [""]);
  Tests.string_check string_of_int_val "no rectangles" 0 (count [" "]);
  Tests.string_check string_of_int_val "one rectangle" 1 (count ["+-+"; "| |"; "+-+"]);
  Tests.string_check string_of_int_val "two rectangles without shared parts" 2 (count ["  +-+"; "  | |"; "+-+-+"; "| |  "; "+-+  "]);
  Tests.string_check string_of_int_val "five rectangles with shared parts" 5 (count ["  +-+"; "  | |"; "+-+-+"; "| | |"; "+-+-+"]);
  Tests.string_check string_of_int_val "rectangle of height 1" 1 (count ["+--+"; "+--+"]);
  Tests.string_check string_of_int_val "rectangle of width 1" 1 (count ["++"; "||"; "++"])
