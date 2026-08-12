type attr = string * string
type node = { name : string; attrs : attr list }
type edge = { from_node : string; to_node : string; attrs : attr list }
type graph = { nodes : node list; edges : edge list; attrs : attr list }

let create_graph items =
  let nodes = ref [] in
  let edges = ref [] in
  let attrs = ref [] in

  List.iter (function
    | `Node n -> nodes := !nodes @ [n]
    | `Edge e -> edges := !edges @ [e]
    | `Attr a -> attrs := !attrs @ [a]
  ) items;

  { nodes = !nodes; edges = !edges; attrs = !attrs }
