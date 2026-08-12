type position = { row : int; column : int }

let saddle_points matrix =
  let arr = Array.of_list (List.map Array.of_list matrix) in
  let rows = Array.length arr in
  if rows = 0 then []
  else
    let cols = Array.length arr.(0) in
    if cols = 0 then []
    else
      let acc = ref [] in
      for r = 0 to rows - 1 do
        let row_max = ref arr.(r).(0) in
        for c = 1 to cols - 1 do
          if arr.(r).(c) > !row_max then row_max := arr.(r).(c)
        done;
        for c = 0 to cols - 1 do
          if arr.(r).(c) = !row_max then begin
            let is_min = ref true in
            for k = 0 to rows - 1 do
              if arr.(k).(c) < arr.(r).(c) then is_min := false
            done;
            if !is_min then acc := { row = r + 1; column = c + 1 } :: !acc
          end
        done
      done;
      List.rev !acc
