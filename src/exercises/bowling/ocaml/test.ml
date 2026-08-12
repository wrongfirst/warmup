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

let repeat val_ v_count =
  let rec aux acc n = if n <= 0 then acc else aux (val_ :: acc) (n - 1) in
  aux [] v_count

let () =
  Tests.string_check string_of_res "gutter game" (Ok 0) (score (play_game (repeat 0 20)));
  Tests.string_check string_of_res "all ones" (Ok 20) (score (play_game (repeat 1 20)));
  Tests.string_check string_of_res "one spare" (Ok 22) (score (play_game ([5; 5; 3] @ repeat 0 17)));
  Tests.string_check string_of_res "one strike" (Ok 26) (score (play_game ([10; 3; 5] @ repeat 0 16)));
  Tests.string_check string_of_res "perfect game" (Ok 300) (score (play_game (repeat 10 12)));
  Tests.bool_check "incomplete game score is error" (match score (play_game [0; 0]) with Error _ -> true | _ -> false)
