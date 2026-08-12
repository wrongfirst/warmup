type 'a node = {
  value : 'a;
  mutable next : 'a node option;
}

type 'a simple_linked_list = {
  mutable head : 'a node option;
  mutable size : int;
}

let create () = { head = None; size = 0 }

let push list v =
  (* Your code here *)
  ()

let pop list =
  (* Your code here *)
  None

let list_ops (initial_values : int list) (operations : (string * int option) list) : bool =
  (* Your code here *)
  true
