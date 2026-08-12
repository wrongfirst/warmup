let gamestate board =
  let count_ch ch =
    List.fold_left (fun acc row ->
      let rec count_row i acc_row =
        if i >= String.length row then acc_row
        else if row.[i] = ch then count_row (i + 1) (acc_row + 1)
        else count_row (i + 1) acc_row
      in
      acc + count_row 0 0
    ) 0 board
  in
  let count_x = count_ch 'X' in
  let count_o = count_ch 'O' in

  if count_o > count_x || count_x > count_o + 1 then
    Error "Wrong turn order"
  else
    let b = Array.map (fun row -> Array.init 3 (fun i -> row.[i])) (Array.of_list board) in
    let lines = [
      [b.(0).(0); b.(0).(1); b.(0).(2)];
      [b.(1).(0); b.(1).(1); b.(1).(2)];
      [b.(2).(0); b.(2).(1); b.(2).(2)];
      [b.(0).(0); b.(1).(0); b.(2).(0)];
      [b.(0).(1); b.(1).(1); b.(2).(1)];
      [b.(0).(2); b.(1).(2); b.(2).(2)];
      [b.(0).(0); b.(1).(1); b.(2).(2)];
      [b.(0).(2); b.(1).(1); b.(2).(0)];
    ] in

    let x_wins = List.exists (fun line -> line = ['X'; 'X'; 'X']) lines in
    let o_wins = List.exists (fun line -> line = ['O'; 'O'; 'O']) lines in

    if x_wins && o_wins then Error "Impossible board"
    else if x_wins && count_x = count_o then Error "Impossible board"
    else if o_wins && count_x > count_o then Error "Impossible board"
    else if x_wins || o_wins then Ok "win"
    else if count_x + count_o = 9 then Ok "draw"
    else Ok "ongoing"
