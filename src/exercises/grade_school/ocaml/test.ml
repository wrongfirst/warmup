let string_of_str_list l =
  "[" ^ String.concat "; " (List.map (fun s -> "\"" ^ s ^ "\"") l) ^ "]"

let string_of_bool_list l =
  "[" ^ String.concat "; " (List.map string_of_bool l) ^ "]"

let () =
  Tests.string_check string_of_str_list "Roster is empty when no student is added" [] (roster []);
  Tests.string_check string_of_bool_list "Add a student" [true] (add [("Aimee", 2)]);
  Tests.string_check string_of_str_list "Student is added to the roster" ["Aimee"] (roster [("Aimee", 2)]);
  Tests.string_check string_of_bool_list "Adding multiple students in the same grade" [true; true; true] (add [("Blair", 2); ("James", 2); ("Paul", 2)]);
  Tests.string_check string_of_str_list "Multiple students in the same grade sorted in roster" ["Blair"; "James"; "Paul"] (roster [("James", 2); ("Blair", 2); ("Paul", 2)]);
  Tests.string_check string_of_bool_list "Cannot add student to same grade more than once" [true; true; false; true] (add [("Blair", 2); ("James", 2); ("James", 2); ("Paul", 2)]);
  Tests.string_check string_of_str_list "Student can't be in two different grades" [] (grade [("Aimee", 2); ("Aimee", 1)] 1)
