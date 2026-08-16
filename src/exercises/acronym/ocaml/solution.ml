let abbreviate phrase =
  let rec loop i in_word acc =
    if i = String.length phrase then
      (* We've reached the end. Reverse the accumulated chars, convert to strings, and join *)
      acc |> List.rev |> List.map (String.make 1) |> String.concat ""
    else
      match phrase.[i] with
      | '_' -> 
          (* Ignore underscores completely (matches `global_replace "_" ""`) *)
          loop (i + 1) in_word acc
      | '-' | ' ' | '\t' | '\n' | '\r' | ',' | ':' -> 
          (* These act as word boundaries (matches your hyphen replacement and regex split) *)
          loop (i + 1) false acc
      | c -> 
          (* Regular characters *)
          if in_word then
            (* Already inside a word, just skip to the next character *)
            loop (i + 1) true acc
          else
            (* First letter of a new word! Capitalize and add to our accumulator *)
            let upper_c = Char.uppercase_ascii c in
            loop (i + 1) true (upper_c :: acc)
  in
  loop 0 false []
