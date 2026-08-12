let classify number =
  if number <= 0 then Error "Classification is only possible for natural numbers."
  else if number = 1 then Ok "deficient"
  else
    let sum = ref 1 in
    let limit = int_of_float (sqrt (float_of_int number)) in
    for i = 2 to limit do
      if number mod i = 0 then begin
        sum := !sum + i;
        let other = number / i in
        if other <> i then sum := !sum + other
      end
    done;
    if !sum = number then Ok "perfect"
    else if !sum > number then Ok "abundant"
    else Ok "deficient"
