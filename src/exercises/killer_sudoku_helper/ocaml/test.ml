let string_of_combos m =
  "[" ^ String.concat "; " (List.map (fun row -> "[" ^ String.concat "; " (List.map string_of_int row) ^ "]") m) ^ "]"

let () =
  Tests.string_check string_of_combos "1-digit cage sum 1" [[1]] (combinations 1 1 []);
  Tests.string_check string_of_combos "1-digit cage sum 7" [[7]] (combinations 7 1 []);
  Tests.string_check string_of_combos "2-digit cage sum 10" [[1;9];[2;8];[3;7];[4;6]] (combinations 10 2 []);
  Tests.string_check string_of_combos "3-digit cage sum 7" [[1;2;4]] (combinations 7 3 []);
  Tests.string_check string_of_combos "2-digit cage sum 10 with excluded digits" [[2;8];[3;7]] (combinations 10 2 [1;4])
