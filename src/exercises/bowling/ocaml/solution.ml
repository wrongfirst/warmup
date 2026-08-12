type game = { rolls : int list }

let create () = { rolls = [] }

let is_complete rolls =
  let len = List.length rolls in
  let arr = Array.of_list rolls in
  let frame = ref 1 in
  let idx = ref 0 in

  while !idx < len && !frame <= 10 do
    if !frame < 10 then (
      if arr.(!idx) = 10 then idx := !idx + 1
      else idx := !idx + 2;
      incr frame
    ) else (
      if len - !idx < 2 then frame := 11
      else (
        let r1 = arr.(!idx) in
        let r2 = arr.(!idx + 1) in
        if r1 = 10 || r1 + r2 = 10 then (
          if len - !idx = 3 then idx := len
        ) else (
          if len - !idx = 2 then idx := len
        );
        incr frame
      )
    )
  done;

  !idx = len && !frame = 11

let roll pins g =
  if pins < 0 || pins > 10 then Error "Pins must have a value from 0 to 10"
  else if is_complete g.rolls then Error "Cannot roll after game is over"
  else
    let rolls_so_far = g.rolls @ [pins] in
    let len = List.length rolls_so_far in
    let arr = Array.of_list rolls_so_far in
    let frame = ref 1 in
    let idx = ref 0 in
    let valid = ref true in
    let err_msg = ref "" in

    while !idx < len && !frame <= 10 && !valid do
      if !frame < 10 then (
        if arr.(!idx) = 10 then (
          incr idx; incr frame
        ) else (
          if !idx + 1 < len then (
            if arr.(!idx) + arr.(!idx + 1) > 10 then (
              valid := false; err_msg := "Pin count exceeds 10 in a frame"
            );
            idx := !idx + 2; incr frame
          ) else incr idx
        )
      ) else (
        let r1 = arr.(!idx) in
        let r2 = if !idx + 1 < len then Some arr.(!idx + 1) else None in
        let r3 = if !idx + 2 < len then Some arr.(!idx + 2) else None in

        (match r2 with
         | Some v2 ->
             if r1 <> 10 && r1 + v2 > 10 then (
               valid := false; err_msg := "Pin count exceeds 10 in a frame"
             )
         | None -> ());

        (match r2, r3 with
         | Some v2, Some v3 ->
             if r1 = 10 && v2 <> 10 && v2 + v3 > 10 then (
               valid := false; err_msg := "Pin count exceeds 10 in a frame"
             )
         | _ -> ());

        idx := len
      )
    done;

    if not !valid then Error !err_msg
    else Ok { rolls = rolls_so_far }

let score g =
  if not (is_complete g.rolls) then Error "Score cannot be taken until the end of the game"
  else
    let arr = Array.of_list g.rolls in
    let total = ref 0 in
    let idx = ref 0 in

    for _frame = 1 to 10 do
      if arr.(!idx) = 10 then (
        total := !total + 10 + arr.(!idx + 1) + arr.(!idx + 2);
        incr idx
      ) else if arr.(!idx) + arr.(!idx + 1) = 10 then (
        total := !total + 10 + arr.(!idx + 2);
        idx := !idx + 2
      ) else (
        total := !total + arr.(!idx) + arr.(!idx + 1);
        idx := !idx + 2
      )
    done;

    Ok !total
