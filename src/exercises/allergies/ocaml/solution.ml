let allergens = [
  "eggs";
  "peanuts";
  "shellfish";
  "strawberries";
  "tomatoes";
  "chocolate";
  "pollen";
  "cats"
]

let allergic_to item score =
  let rec find_idx i = function
    | [] -> None
    | x :: _ when x = item -> Some i
    | _ :: xs -> find_idx (i + 1) xs
  in
  match find_idx 0 allergens with
  | None -> false
  | Some idx -> (score land (1 lsl idx)) <> 0

let allergies score =
  let rec aux i = function
    | [] -> []
    | x :: xs ->
        if (score land (1 lsl i)) <> 0 then
          x :: aux (i + 1) xs
        else
          aux (i + 1) xs
  in
  aux 0 allergens
