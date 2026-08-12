type attr = string * string
type node = { name : string; attrs : attr list }
type edge = { from_node : string; to_node : string; attrs : attr list }
type graph = { nodes : node list; edges : edge list; attrs : attr list }

let create_graph (items : [`Node of node | `Edge of edge | `Attr of attr] list) : graph =
  (* Your code here *)
  { nodes = []; edges = []; attrs = [] }
