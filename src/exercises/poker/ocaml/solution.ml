let best_hands hands =
  match hands with
  | [] -> []
  | h :: _ -> [h]
