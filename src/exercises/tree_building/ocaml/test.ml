let string_of_node_opt = function
  | Ok (Some n) -> Printf.sprintf "Ok (Node %d, %d children)" n.id (List.length n.children)
  | Ok None -> "Ok None"
  | Error e -> Printf.sprintf "Error %s" e

let () =
  Tests.string_check string_of_node_opt "empty list" (Ok None) (build []);
  Tests.string_check string_of_node_opt "one node" (Ok (Some { id = 0; children = [] })) (build [{ id = 0; parent = 0 }]);
  Tests.bool_check "invalid root parent error" (match build [{ id = 0; parent = 1 }] with Error _ -> true | _ -> false)
