let encode numbers =
  let encode_single n =
    let rec aux curr acc =
      let chunk = (curr land 0x7f) in
      let next_n = curr lsr 7 in
      if next_n = 0 then
        if acc = [] then [chunk] else (chunk lor 0x80) :: acc
      else
        let chunk_with_msb = if acc = [] then chunk else chunk lor 0x80 in
        aux next_n (chunk_with_msb :: acc)
    in
    aux n []
  in
  List.concat (List.map encode_single numbers)

let decode bytes =
  let rec aux current in_seq acc = function
    | [] ->
        if in_seq then failwith "incomplete sequence"
        else List.rev acc
    | b :: bs ->
        let new_curr = (current lsl 7) lor (b land 0x7f) in
        if (b land 0x80) = 0 then
          aux 0 false (new_curr :: acc) bs
        else
          aux new_curr true acc bs
  in
  aux 0 false [] bytes
