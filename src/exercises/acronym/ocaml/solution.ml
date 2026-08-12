let abbreviate phrase =
  let cleaned =
    phrase
    |> Str.global_replace (Str.regexp "_") ""
    |> Str.global_replace (Str.regexp "-") " "
  in
  let words = Str.split (Str.regexp "[ \t\n\r,:]+") cleaned in
  let first_letters = List.filter_map (fun w ->
    if String.length w > 0 then Some (String.make 1 (Char.uppercase_ascii w.[0]))
    else None
  ) words in
  String.concat "" first_letters
