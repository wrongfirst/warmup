let string_of_str_list l =
  "[" ^ String.concat "; " (List.map (fun s -> "\"" ^ s ^ "\"") l) ^ "]"

let () =
  Tests.string_check string_of_str_list "just the header if no input" ["Team                           | MP |  W |  D |  L |  P"] (tally []);
  Tests.string_check string_of_str_list "a win is three points, a loss is zero points"
    ["Team                           | MP |  W |  D |  L |  P";
     "Allegoric Alaskans             |  1 |  1 |  0 |  0 |  3";
     "Blithering Badgers             |  1 |  0 |  0 |  1 |  0"]
    (tally ["Allegoric Alaskans;Blithering Badgers;win"]);
  Tests.string_check string_of_str_list "a draw is one point each"
    ["Team                           | MP |  W |  D |  L |  P";
     "Allegoric Alaskans             |  1 |  0 |  1 |  0 |  1";
     "Blithering Badgers             |  1 |  0 |  1 |  0 |  1"]
    (tally ["Allegoric Alaskans;Blithering Badgers;draw"])
