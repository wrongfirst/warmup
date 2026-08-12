let directions = [|"north"; "east"; "south"; "west"|]

let find_dir_idx d =
  let idx = ref 0 in
  for i = 0 to 3 do
    if directions.(i) = d then idx := i
  done;
  !idx

let simulate x y dir instructions =
  let curr_x = ref x in
  let curr_y = ref y in
  let dir_idx = ref (find_dir_idx dir) in

  String.iter (fun ch ->
    match ch with
    | 'R' -> dir_idx := (!dir_idx + 1) mod 4
    | 'L' -> dir_idx := (!dir_idx + 3) mod 4
    | 'A' ->
        (match directions.(!dir_idx) with
         | "north" -> curr_y := !curr_y + 1
         | "east" -> curr_x := !curr_x + 1
         | "south" -> curr_y := !curr_y - 1
         | "west" -> curr_x := !curr_x - 1
         | _ -> ())
    | _ -> ()
  ) instructions;

  (!curr_x, !curr_y, directions.(!dir_idx))
