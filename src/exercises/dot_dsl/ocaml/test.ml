let () =
  let empty_g = create_graph [] in
  Tests.equal_check "empty graph nodes" 0 (List.length empty_g.nodes);
  Tests.equal_check "empty graph edges" 0 (List.length empty_g.edges);

  let g = create_graph [
    `Attr ("bgcolor", "yellow");
    `Node { name = "a"; attrs = [("color", "red")] };
    `Node { name = "b"; attrs = [("color", "blue")] };
    `Edge { from_node = "a"; to_node = "b"; attrs = [("color", "green")] };
  ] in

  Tests.string_check (fun x -> x) "graph attrs" "yellow" (List.assoc "bgcolor" g.attrs);
  Tests.equal_check "graph nodes count" 2 (List.length g.nodes);
  Tests.string_check (fun x -> x) "graph node a attr" "red" (List.assoc "color" (List.hd g.nodes).attrs);
  Tests.equal_check "graph edges count" 1 (List.length g.edges)
