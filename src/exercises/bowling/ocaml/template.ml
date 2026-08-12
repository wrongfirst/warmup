type game = { rolls : int list }

let create () : game = { rolls = [] }

let roll (pins : int) (g : game) : (game, string) result =
  (* Your code here *)
  Ok g

let score (g : game) : (int, string) result =
  (* Your code here *)
  Ok 0
