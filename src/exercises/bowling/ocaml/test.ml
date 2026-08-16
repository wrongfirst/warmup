let string_of_res = function
  | Ok n -> Printf.sprintf "Ok %d" n
  | Error e -> Printf.sprintf "Error %s" e

let play_game rolls =
  let g = ref (create ()) in
  List.iter (fun r ->
    match roll r !g with
    | Ok g' -> g := g'
    | Error _ -> ()
  ) rolls;
  !g

let () =
  Tests.string_check string_of_res "should be able to score a game with all zeros" (Ok 0) (score (play_game [0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0]));
  Tests.string_check string_of_res "should be able to score a game with no strikes or spares" (Ok 90) (score (play_game [3; 6; 3; 6; 3; 6; 3; 6; 3; 6; 3; 6; 3; 6; 3; 6; 3; 6; 3; 6]));
  Tests.string_check string_of_res "a spare followed by zeros is worth ten points" (Ok 10) (score (play_game [6; 4; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0]));
  Tests.string_check string_of_res "points scored in the roll after a spare are counted twice" (Ok 16) (score (play_game [6; 4; 3; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0]));
  Tests.string_check string_of_res "consecutive spares each get a one roll bonus" (Ok 31) (score (play_game [5; 5; 3; 7; 4; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0]));
  Tests.string_check string_of_res "a spare in the last frame gets a one roll bonus that is counted once" (Ok 17) (score (play_game [0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 7; 3; 7]));
  Tests.string_check string_of_res "a strike earns ten points in a frame with a single roll" (Ok 10) (score (play_game [10; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0]));
  Tests.string_check string_of_res "points scored in the two rolls after a strike are counted twice as a bonus" (Ok 26) (score (play_game [10; 5; 3; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0]));
  Tests.string_check string_of_res "consecutive strikes each get the two roll bonus" (Ok 81) (score (play_game [10; 10; 10; 5; 3; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0]));
  Tests.string_check string_of_res "a strike in the last frame gets a two roll bonus that is counted once" (Ok 18) (score (play_game [0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 10; 7; 1]));
  Tests.string_check string_of_res "rolling a spare with the two roll bonus does not get a bonus roll" (Ok 20) (score (play_game [0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 10; 7; 3]));
  Tests.string_check string_of_res "strikes with the two roll bonus do not get bonus rolls" (Ok 30) (score (play_game [0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 10; 10; 10]));
  Tests.string_check string_of_res "last two strikes followed by only last bonus with non strike points" (Ok 31) (score (play_game [0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 10; 10; 0; 1]));
  Tests.string_check string_of_res "a strike with the one roll bonus after a spare in the last frame does not get a bonus" (Ok 20) (score (play_game [0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 7; 3; 10]));
  Tests.string_check string_of_res "all strikes is a perfect game" (Ok 300) (score (play_game [10; 10; 10; 10; 10; 10; 10; 10; 10; 10; 10; 10]));
  Tests.string_check string_of_res "two bonus rolls after a strike in the last frame can score more than 10 points if one is a strike" (Ok 26) (score (play_game [0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 10; 10; 6]));

  Tests.bool_check "rolls cannot score negative points" (match roll (-1) (play_game []) with Error _ -> true | _ -> false);
  Tests.bool_check "a roll cannot score more than 10 points" (match roll 11 (play_game []) with Error _ -> true | _ -> false);
  Tests.bool_check "two rolls in a frame cannot score more than 10 points" (match roll 6 (play_game [5]) with Error _ -> true | _ -> false);
  Tests.bool_check "bonus roll after a strike in the last frame cannot score more than 10 points" (match roll 11 (play_game [0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 10]) with Error _ -> true | _ -> false);
  Tests.bool_check "two bonus rolls after a strike in the last frame cannot score more than 10 points" (match roll 6 (play_game [0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 10; 5]) with Error _ -> true | _ -> false);
  Tests.bool_check "the second bonus rolls after a strike in the last frame cannot be a strike if the first one is not a strike" (match roll 10 (play_game [0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 10; 6]) with Error _ -> true | _ -> false);
  Tests.bool_check "second bonus roll after a strike in the last frame cannot score more than 10 points" (match roll 11 (play_game [0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 10; 10]) with Error _ -> true | _ -> false);
  Tests.bool_check "cannot roll if game already has ten frames" (match roll 0 (play_game [0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0]) with Error _ -> true | _ -> false);
  Tests.bool_check "cannot roll after bonus roll for spare" (match roll 2 (play_game [0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 7; 3; 2]) with Error _ -> true | _ -> false);
  Tests.bool_check "cannot roll after bonus rolls for strike" (match roll 2 (play_game [0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 10; 3; 2]) with Error _ -> true | _ -> false);

  Tests.bool_check "an unstarted game cannot be scored" (match score (play_game []) with Error _ -> true | _ -> false);
  Tests.bool_check "an incomplete game cannot be scored" (match score (play_game [0; 0]) with Error _ -> true | _ -> false);
  Tests.bool_check "bonus rolls for a strike in the last frame must be rolled before score can be calculated" (match score (play_game [0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 10]) with Error _ -> true | _ -> false);
  Tests.bool_check "both bonus rolls for a strike in the last frame must be rolled before score can be calculated" (match score (play_game [0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 10; 10]) with Error _ -> true | _ -> false);
  Tests.bool_check "bonus roll for a spare in the last frame must be rolled before score can be calculated" (match score (play_game [0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 7; 3]) with Error _ -> true | _ -> false)
