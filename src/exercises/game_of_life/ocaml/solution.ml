let tick matrix =
  if matrix = [] || List.hd matrix = [] then []
  else
    let rows = List.length matrix in
    let cols = List.length (List.hd matrix) in
    let arr = Array.map Array.of_list (Array.of_list matrix) in

    let count_live_neighbors r c =
      let count = ref 0 in
      for dr = -1 to 1 do
        for dc = -1 to 1 do
          if not (dr = 0 && dc = 0) then begin
            let nr = r + dr in
            let nc = c + dc in
            if nr >= 0 && nr < rows && nc >= 0 && nc < cols then
              if arr.(nr).(nc) = 1 then incr count
          end
        done
      done;
      !count
    in

    let res = Array.make_matrix rows cols 0 in
    for r = 0 to rows - 1 do
      for c = 0 to cols - 1 do
        let n = count_live_neighbors r c in
        if arr.(r).(c) = 1 then
          res.(r).(c) <- (if n = 2 || n = 3 then 1 else 0)
        else
          res.(r).(c) <- (if n = 3 then 1 else 0)
      done
    done;

    Array.to_list (Array.map Array.to_list res)
