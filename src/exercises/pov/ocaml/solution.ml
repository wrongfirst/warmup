type tree = {
  value : string;
  children : tree list;
}

(* Finds a path of trees from the current root to a node with value `target` *)
let rec path_from_self (target : string) (t : tree) : tree list option =
  if t.value = target then
    Some [t]
  else
    let rec search = function
      | [] -> None
      | child :: rest ->
          match path_from_self target child with
          | Some path -> Some (t :: path)
          | None -> search rest
    in
    search t.children

(* Re-parents the tree from the perspective of `from_node` *)
let from_pov (from_node : string) (root : tree) : tree option =
  match path_from_self from_node root with
  | None -> None
  | Some [] -> None
  | Some (head :: rest) ->
      (* 
        Iterate through the path, flipping the parent-child direction.
        `reparent acc child` adds the previous parent (with the child removed)
        to the current child's children list.
      *)
      let reparent acc child =
        let remaining_children =
          List.filter (fun c -> c.value <> child.value) acc.children
        in
        let updated_parent = { acc with children = remaining_children } in
        { child with children = updated_parent :: child.children }
      in
      Some (List.fold_left reparent head rest)

(* Finds the path of node labels from `from_node` to `to_node` *)
let path_to (from_node : string) (to_node : string) (root : tree) : string list option =
  match from_pov from_node root with
  | None -> None
  | Some new_root ->
      match path_from_self to_node new_root with
      | None -> None
      | Some path -> Some (List.map (fun t -> t.value) path)