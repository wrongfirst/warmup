type tree = { value : string; children : tree list }

let from_pov (target : string) (tr : tree) : tree option =
  (* Your code here *)
  Some tr

let path_to (from_node : string) (to_node : string) (tr : tree) : string list option =
  (* Your code here *)
  Some []
