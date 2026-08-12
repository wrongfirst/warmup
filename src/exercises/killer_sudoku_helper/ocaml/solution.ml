let combinations target size exclude =
  let result = ref [] in

  let rec backtrack start_digit current_combo current_sum =
    if List.length current_combo = size then begin
      if current_sum = target then
        result := List.rev current_combo :: !result
    end else begin
      for digit = start_digit to 9 do
        if not (List.mem digit exclude) && current_sum + digit <= target then
          backtrack (digit + 1) (digit :: current_combo) (current_sum + digit)
      done
    end
  in

  backtrack 1 [] 0;
  List.rev !result
