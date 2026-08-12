let keep p l =
  let rec aux acc = function
    | [] -> List.rev acc
    | x :: xs -> if p x then aux (x :: acc) xs else aux acc xs
  in aux [] l

let discard p l =
  keep (fun x -> not (p x)) l
