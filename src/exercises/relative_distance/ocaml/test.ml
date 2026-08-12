let string_of_opt_int = function
  | None -> "None"
  | Some x -> Printf.sprintf "Some %d" x

let () =
  Tests.string_check string_of_opt_int "Direct parent-child relation" (Some 1) (degree_of_separation [("Vera", ["Tomoko"]); ("Tomoko", ["Aditi"])] "Vera" "Tomoko");
  Tests.string_check string_of_opt_int "Sibling relationship" (Some 1) (degree_of_separation [("Dalia", ["Olga"; "Yassin"])] "Olga" "Yassin");
  Tests.string_check string_of_opt_int "Two degrees of separation, grandchild" (Some 2) (degree_of_separation [("Khadija", ["Mateo"]); ("Mateo", ["Rami"])] "Khadija" "Rami");
  Tests.string_check string_of_opt_int "Unrelated individuals" None (degree_of_separation [("Priya", ["Rami"]); ("Kaito", ["Elif"])] "Priya" "Kaito")
