let is_alphanum c =
  (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')

let encode plaintext =
  let lower = String.lowercase_ascii plaintext in
  let buf = Buffer.create (String.length lower) in
  String.iter (fun c -> if is_alphanum c then Buffer.add_char buf c) lower;
  let normalized = Buffer.contents buf in
  let len = String.length normalized in

  if len = 0 then ""
  else
    let c = int_of_float (ceil (sqrt (float_of_int len))) in
    let r = if (c - 1) * c >= len then c - 1 else c in

    let total = r * c in
    let padded = String.init total (fun i ->
      if i < len then normalized.[i] else ' '
    ) in

    let cols = ref [] in
    for col = 0 to c - 1 do
      let col_buf = Buffer.create r in
      for row = 0 to r - 1 do
        Buffer.add_char col_buf padded.[row * c + col]
      done;
      cols := Buffer.contents col_buf :: !cols
    done;

    String.concat " " (List.rev !cols)
