let smalls = [|
  "zero"; "one"; "two"; "three"; "four"; "five"; "six"; "seven"; "eight"; "nine";
  "ten"; "eleven"; "twelve"; "thirteen"; "fourteen"; "fifteen"; "sixteen";
  "seventeen"; "eighteen"; "nineteen"
|]

let tens = [|
  ""; ""; "twenty"; "thirty"; "forty"; "fifty"; "sixty"; "seventy"; "eighty"; "ninety"
|]

let scales = [|""; "thousand"; "million"; "billion"|]

let spell_three_digits n =
  let hundred = n / 100 in
  let remainder = n mod 100 in
  let parts = ref [] in

  if hundred > 0 then parts := Printf.sprintf "%s hundred" smalls.(hundred) :: !parts;

  if remainder > 0 then (
    if remainder < 20 then parts := smalls.(remainder) :: !parts
    else (
      let ten = remainder / 10 in
      let unit = remainder mod 10 in
      if unit > 0 then parts := Printf.sprintf "%s-%s" tens.(ten) smalls.(unit) :: !parts
      else parts := tens.(ten) :: !parts
    )
  );

  String.concat " " (List.rev !parts)

let say number =
  let max_val = 1000000000000L in
  if number < 0L || number >= max_val then Error "input out of range"
  else if number = 0L then Ok "zero"
  else
    let num = ref number in
    let scale_idx = ref 0 in
    let parts = ref [] in

    while !num > 0L do
      let chunk = Int64.to_int (Int64.rem !num 1000L) in
      if chunk > 0 then (
        let spelled = spell_three_digits chunk in
        let scale = scales.(!scale_idx) in
        if scale <> "" then parts := (spelled ^ " " ^ scale) :: !parts
        else parts := spelled :: !parts
      );
      num := Int64.div !num 1000L;
      incr scale_idx
    done;

    Ok (String.concat " " !parts)
