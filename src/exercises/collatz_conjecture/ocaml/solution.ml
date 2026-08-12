let steps number =
  if number <= 0 then Error "Only positive integers are allowed"
  else
    let rec loop curr count =
      if curr = 1 then count
      else if curr mod 2 = 0 then loop (curr / 2) (count + 1)
      else loop (3 * curr + 1) (count + 1)
    in
    Ok (loop number 0)
