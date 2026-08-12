let pattern_to_digit = function
  | " _ | ||_|   " -> "0"
  | "     |  |   " -> "1"
  | " _  _||_    " -> "2"
  | " _  _| _|   " -> "3"
  | "   |_|  |   " -> "4"
  | " _ |_  _|   " -> "5"
  | " _ |_ |_|   " -> "6"
  | " _   |  |   " -> "7"
  | " _ |_||_|   " -> "8"
  | " _ |_| _|   " -> "9"
  | _ -> "?"

let convert input_grid =
  let num_rows = List.length input_grid in
  if num_rows mod 4 <> 0 then Error "Number of input lines is not a multiple of four"
  else if input_grid = [] then Ok ""
  else
    let rows_arr = Array.of_list input_grid in
    let num_cols = String.length rows_arr.(0) in
    let valid_cols = ref true in

    Array.iter (fun row ->
      if String.length row <> num_cols then valid_cols := false
    ) rows_arr;

    if not !valid_cols then Error "Inconsistent line lengths"
    else if num_cols mod 3 <> 0 then Error "Number of input columns is not a multiple of three"
    else
      let grid_row_results = ref [] in
      let grid_row = ref 0 in

      while !grid_row < num_rows do
        let line_buf = Buffer.create (num_cols / 3) in
        let col = ref 0 in
        while !col < num_cols do
          let cell_buf = Buffer.create 12 in
          for r = 0 to 3 do
            Buffer.add_string cell_buf (String.sub rows_arr.(!grid_row + r) !col 3)
          done;
          Buffer.add_string line_buf (pattern_to_digit (Buffer.contents cell_buf));
          col := !col + 3
        done;
        grid_row_results := Buffer.contents line_buf :: !grid_row_results;
        grid_row := !grid_row + 4
      done;

      Ok (String.concat "," (List.rev !grid_row_results))
