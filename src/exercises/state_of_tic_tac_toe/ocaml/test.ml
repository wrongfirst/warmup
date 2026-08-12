let string_of_res = function
  | Ok s -> Printf.sprintf "Ok %s" s
  | Error e -> Printf.sprintf "Error %s" e

let () =
  Tests.string_check string_of_res "Finished game where X won" (Ok "win") (gamestate ["XOO"; "X  "; "X  "]);
  Tests.string_check string_of_res "Finished game where O won" (Ok "win") (gamestate ["OXX"; "OX "; "O  "]);
  Tests.string_check string_of_res "Draw game" (Ok "draw") (gamestate ["XOX"; "XXO"; "OXO"]);
  Tests.string_check string_of_res "Ongoing game" (Ok "ongoing") (gamestate ["   "; "   "; "   "]);
  Tests.bool_check "Invalid board: X went twice" (match gamestate ["XX "; "   "; "   "] with Error _ -> true | _ -> false);
  Tests.bool_check "Invalid board: O started" (match gamestate ["OOX"; "   "; "   "] with Error _ -> true | _ -> false);
  Tests.bool_check "Invalid board: both won" (match gamestate ["XXX"; "OOO"; "   "] with Error _ -> true | _ -> false)
