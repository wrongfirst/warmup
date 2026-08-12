type tree = { value : string; children : tree list }

let rec find_path target tr current_path =
  let new_path = current_path @ [tr] in
  if tr.value = target then Some new_path
  else
    let rec aux = function
      | [] -> None
      | child :: rest ->
          (match find_path target child new_path with
           | Some p -> Some p
           | None -> aux rest)
    in
    aux tr.children

let from_pov target tr =
  match find_path target tr [] with
  | None -> None
  | Some path ->
      let new_child = ref None in
      let path_arr = Array.of_list path in
      let len = Array.length path_arr in

      for i = 0 to len - 1 do
        let node = path_arr.(i) in
        let next_on_path = if i + 1 < len then Some path_arr.(i + 1) else None in

        let remaining = List.filter (fun c ->
          match next_on_path with
          | Some next_n -> c.value <> next_n.value
          | None -> true
        ) node.children in

        let updated_children =
          match !new_child with
          | Some child -> remaining @ [child]
          | None -> remaining
        in

        new_child := Some { value = node.value; children = updated_children }
      done;

      !new_child

let path_to from_node to_node tr =
  match from_pov from_node tr with
  | None -> None
  | Some reparented ->
      (match find_path to_node reparented [] with
       | None -> None
       | Some path_nodes -> Some (List.map (fun n -> n.value) path_nodes))
