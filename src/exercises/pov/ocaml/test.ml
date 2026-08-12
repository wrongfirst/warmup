let string_of_tree_opt = function
  | Some t -> Printf.sprintf "Some %s" t.value
  | None -> "None"

let string_of_list_opt = function
  | Some l -> Printf.sprintf "Some [%s]" (String.concat "; " l)
  | None -> "None"

let () =
  let leaf = { value = "x"; children = [] } in
  Tests.string_check string_of_tree_opt "singleton fromPov" (Some "x") (from_pov "x" leaf);

  let t = { value = "parent"; children = [{ value = "x"; children = [] }; { value = "y"; children = [] }] } in
  let reparented = from_pov "x" t in
  Tests.string_check string_of_tree_opt "x is new root" (Some "x") reparented;

  Tests.string_check string_of_list_opt "pathTo simple" (Some ["x"; "parent"; "y"]) (path_to "x" "y" t)
