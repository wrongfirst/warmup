let is_paired input =
  let stack = ref [] in
  let valid = ref true in

  String.iter (fun ch ->
    if !valid then match ch with
    | '[' | '{' | '(' -> stack := ch :: !stack
    | ']' ->
        (match !stack with
         | '[' :: rest -> stack := rest
         | _ -> valid := false)
    | '}' ->
        (match !stack with
         | '{' :: rest -> stack := rest
         | _ -> valid := false)
    | ')' ->
        (match !stack with
         | '(' :: rest -> stack := rest
         | _ -> valid := false)
    | _ -> ()
  ) input;

  !valid && !stack = []
