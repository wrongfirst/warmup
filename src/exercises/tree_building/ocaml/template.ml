type record = { id : int; parent : int }
type node = { id : int; children : node list }

let build (records : record list) : (node option, string) result =
  (* Your code here *)
  Ok None
