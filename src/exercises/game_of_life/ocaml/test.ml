let string_of_matrix m =
  "[" ^ String.concat "; " (List.map (fun row -> "[" ^ String.concat "; " (List.map string_of_int row) ^ "]") m) ^ "]"

let () =
  Tests.string_check string_of_matrix "empty matrix" [] (tick []);
  Tests.string_check string_of_matrix "live cells with zero neighbors die" [[0;0;0];[0;0;0];[0;0;0]] (tick [[0;0;0];[0;1;0];[0;0;0]]);
  Tests.string_check string_of_matrix "live cells with one neighbor die" [[0;0;0];[0;0;0];[0;0;0]] (tick [[0;0;0];[0;1;0];[0;1;0]]);
  Tests.string_check string_of_matrix "live cells with two neighbors stay alive" [[0;0;0];[1;0;1];[0;0;0]] (tick [[1;0;1];[1;0;1];[1;0;1]]);
  Tests.string_check string_of_matrix "live cells with three neighbors stay alive" [[0;0;0];[1;0;0];[1;1;0]] (tick [[0;1;0];[1;0;0];[1;1;0]]);
  Tests.string_check string_of_matrix "dead cells with three neighbors become alive" [[0;0;0];[1;1;0];[0;0;0]] (tick [[1;1;0];[0;0;0];[1;0;0]])
