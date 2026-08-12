let score_char ch =
  match Char.lowercase_ascii ch with
  | 'a' | 'e' | 'i' | 'o' | 'u' | 'l' | 'n' | 'r' | 's' | 't' -> 1
  | 'd' | 'g' -> 2
  | 'b' | 'c' | 'm' | 'p' -> 3
  | 'f' | 'h' | 'v' | 'w' | 'y' -> 4
  | 'k' -> 5
  | 'j' | 'x' -> 8
  | 'q' | 'z' -> 10
  | _ -> 0

let score word =
  let total = ref 0 in
  String.iter (fun ch -> total := !total + score_char ch) word;
  !total
