let string_of_tuple (x, y, d) =
  Printf.sprintf "(%d, %d, %s)" x y d

let () =
  Tests.string_check string_of_tuple "at origin facing north turn left advance" (-1, 0, "west") (simulate 0 0 "north" "LA");
  Tests.string_check string_of_tuple "at 7,3 facing north evaluate RAALAL" (9, 4, "west") (simulate 7 3 "north" "RAALAL")
