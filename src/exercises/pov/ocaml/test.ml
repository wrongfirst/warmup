let rec string_of_tree t =
  let children_str =
    t.children |> List.map string_of_tree |> String.concat "; "
  in
  Printf.sprintf "{ value = %S; children = [%s] }" t.value children_str

let string_of_tree_opt = function
  | Some t -> Printf.sprintf "Some (%s)" (string_of_tree t)
  | None -> "None"

let string_of_list_opt = function
  | Some l ->
      Printf.sprintf "Some [%s]"
        (l |> List.map (Printf.sprintf "%S") |> String.concat "; ")
  | None -> "None"

let () =
  (* 1. Singleton tree from_pov *)
  let leaf = { value = "x"; children = [] } in
  Tests.string_check string_of_tree_opt "singleton fromPov"
    (Some { value = "x"; children = [] })
    (from_pov "x" leaf);

  (* 2. Re-parenting from_pov *)
  let t =
    {
      value = "parent";
      children =
        [
          { value = "x"; children = [] };
          { value = "y"; children = [] };
        ];
    }
  in
  let expected_reparented =
    {
      value = "x";
      children =
        [
          {
            value = "parent";
            children = [{ value = "y"; children = [] }];
          };
        ];
    }
  in
  Tests.string_check string_of_tree_opt "reparent fromPov"
    (Some expected_reparented)
    (from_pov "x" t);

  (* 3. Path from non-existent node returns None *)
  Tests.equal_check "fromPov non-existent node"
    None
    (from_pov "not_found" t);

  (* 4. Simple path_to *)
  Tests.string_check string_of_list_opt "pathTo simple"
    (Some ["x"; "parent"; "y"])
    (path_to "x" "y" t);

  (* 5. path_to between same node *)
  Tests.string_check string_of_list_opt "pathTo self"
    (Some ["x"])
    (path_to "x" "x" t);

  (* 6. path_to when target or source does not exist *)
  Tests.equal_check "pathTo missing destination"
    None
    (path_to "x" "non_existent" t)