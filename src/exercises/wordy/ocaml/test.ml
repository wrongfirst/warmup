let string_of_res = function
  | Ok n -> Printf.sprintf "Ok %d" n
  | Error e -> Printf.sprintf "Error %s" e

let () =
  Tests.string_check string_of_res "just a number" (Ok 5) (answer "What is 5?");
  Tests.string_check string_of_res "addition" (Ok 2) (answer "What is 1 plus 1?");
  Tests.string_check string_of_res "more addition" (Ok 55) (answer "What is 53 plus 2?");
  Tests.string_check string_of_res "subtraction" (Ok 16) (answer "What is 4 minus -12?");
  Tests.string_check string_of_res "addition and multiplication" (Ok 15) (answer "What is 3 plus 2 multiplied by 3?");
  Tests.bool_check "reject cubed" (match answer "What is 52 cubed?" with Error _ -> true | _ -> false);
  Tests.bool_check "reject non-math" (match answer "Who is the President of the United States?" with Error _ -> true | _ -> false);
  Tests.bool_check "reject syntax error plus plus" (match answer "What is 1 plus plus 2?" with Error _ -> true | _ -> false)
