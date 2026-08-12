let answer question =
  let prefix = "What is " in
  let len_p = String.length prefix in
  let len_q = String.length question in

  if len_q < len_p + 1 || String.sub question 0 len_p <> prefix || question.[len_q - 1] <> '?' then
    Error "syntax error"
  else
    let expr = String.sub question len_p (len_q - len_p - 1) |> String.trim in
    if expr = "" then Error "syntax error"
    else
      let normalized =
        let s = Str.global_replace (Str.regexp_string "multiplied by") "multiplied_by" expr in
        Str.global_replace (Str.regexp_string "divided by") "divided_by" s
      in
      let tokens = Str.split (Str.regexp "[ \t]+") normalized in
      if tokens = [] then Error "syntax error"
      else
        let acc = ref None in
        let op = ref None in
        let valid = ref true in
        let err_msg = ref "syntax error" in

        List.iter (fun token ->
          if !valid then (
            match int_of_string_opt token with
            | Some num ->
                (match !acc with
                 | None ->
                     if !op <> None then (valid := false; err_msg := "syntax error")
                     else acc := Some num
                 | Some a ->
                     (match !op with
                      | None -> valid := false; err_msg := "syntax error"
                      | Some "plus" -> acc := Some (a + num); op := None
                      | Some "minus" -> acc := Some (a - num); op := None
                      | Some "multiplied_by" -> acc := Some (a * num); op := None
                      | Some "divided_by" -> acc := Some (a / num); op := None
                      | _ -> valid := false; err_msg := "unknown operation"))
            | None ->
                if token = "plus" || token = "minus" || token = "multiplied_by" || token = "divided_by" then (
                  if !acc = None || !op <> None then (valid := false; err_msg := "syntax error")
                  else op := Some token
                ) else (
                  valid := false; err_msg := "unknown operation"
                )
          )
        ) tokens;

        if not !valid then Error !err_msg
        else match !acc, !op with
        | Some res, None -> Ok res
        | _ -> Error "syntax error"
