let answer question =
  let prefix = "What is" in
  if not (String.starts_with ~prefix question) || not (String.ends_with ~suffix:"?" question) then
    Error "unknown operation"
  else
    let body =
      let p_len = String.length prefix in
      let q_len = String.length question in
      String.sub question p_len (q_len - p_len - 1) |> String.trim
    in
    if body = "" then
      Error "syntax error"
    else
      let tokens =
        body
        |> String.split_on_char ' '
        |> List.filter (fun s -> s <> "")
      in

      let rec eval acc = function
        | [] -> Ok acc
        | "plus" :: rest -> apply_op acc ( + ) rest
        | "minus" :: rest -> apply_op acc ( - ) rest
        | "multiplied" :: "by" :: rest -> apply_op acc ( * ) rest
        | "divided" :: "by" :: rest -> apply_op acc ( / ) rest
        | token :: _ ->
            (match int_of_string_opt token with
             | Some _ -> Error "syntax error"
             | None -> Error "unknown operation")

      and apply_op acc op tokens =
        match tokens with
        | [] -> Error "syntax error"
        | num_str :: rest ->
            (match int_of_string_opt num_str with
             | Some n -> eval (op acc n) rest
             | None ->
                 if num_str = "plus" || num_str = "minus" || num_str = "multiplied" || num_str = "divided" then
                   Error "syntax error"
                 else
                   Error "unknown operation")
      in

      match tokens with
      | [] -> Error "syntax error"
      | first :: rest ->
          (match int_of_string_opt first with
           | Some n -> eval n rest
           | None ->
               if first = "plus" || first = "minus" || first = "multiplied" || first = "divided" then
                 Error "syntax error"
               else
                 Error "unknown operation")