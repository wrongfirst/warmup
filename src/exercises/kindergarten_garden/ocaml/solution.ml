let plant_of_char = function
  | 'G' -> "grass"
  | 'C' -> "clover"
  | 'R' -> "radishes"
  | 'V' -> "violets"
  | _ -> ""

let students = [
  "Alice"; "Bob"; "Charlie"; "David"; "Eve"; "Fred";
  "Ginny"; "Harriet"; "Ileana"; "Joseph"; "Kincaid"; "Larry"
]

let index_of elem lst =
  let rec aux idx = function
    | [] -> -1
    | x :: _ when x = elem -> idx
    | _ :: xs -> aux (idx + 1) xs
  in aux 0 lst

let plants diagram student =
  let lines = String.split_on_char '\n' diagram in
  match lines with
  | r1 :: r2 :: _ ->
    let s_idx = index_of student students in
    if s_idx = -1 then []
    else
      let c = s_idx * 2 in
      [ plant_of_char r1.[c];
        plant_of_char r1.[c + 1];
        plant_of_char r2.[c];
        plant_of_char r2.[c + 1] ]
  | _ -> []
