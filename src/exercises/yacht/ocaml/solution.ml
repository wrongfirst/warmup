let score dice category =
  let sum = List.fold_left (+) 0 dice in
  let count target = List.length (List.filter (( = ) target) dice) in
  let sorted = List.sort compare dice in
  
  let is_yacht () =
    match sorted with
    | [a; b; c; d; e] -> a = b && b = c && c = d && d = e
    | _ -> false
  in

  let is_full_house () =
    match sorted with
    | [a; b; c; d; e] when a = b && b = c && d = e && c <> d -> true
    | [a; b; c; d; e] when a = b && c = d && d = e && b <> c -> true
    | _ -> false
  in

  let four_of_a_kind_val () =
    match sorted with
    | [a; b; c; d; _] when a = b && b = c && c = d -> a * 4
    | [_; b; c; d; e] when b = c && c = d && d = e -> b * 4
    | _ -> 0
  in

  match String.lowercase_ascii category with
  | "ones" -> count 1 * 1
  | "twos" -> count 2 * 2
  | "threes" -> count 3 * 3
  | "fours" -> count 4 * 4
  | "fives" -> count 5 * 5
  | "sixes" -> count 6 * 6
  | "choice" -> sum
  | "yacht" -> if is_yacht () then 50 else 0
  | "full house" -> if is_full_house () then sum else 0
  | "four of a kind" -> four_of_a_kind_val ()
  | "little straight" -> if sorted = [1; 2; 3; 4; 5] then 30 else 0
  | "big straight" -> if sorted = [2; 3; 4; 5; 6] then 30 else 0
  | _ -> 0
