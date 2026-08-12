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
  let n = { value = v; next = list.head } in
  list.head <- Some n;
  list.size <- list.size + 1

let pop list =
  match list.head with
  | None -> None
  | Some n ->
      list.head <- n.next;
      list.size <- list.size - 1;
      Some n.value

let list_ops initial_values operations =
  let sll = create () in
  List.iter (fun v -> push sll v) initial_values;

  let valid = ref true in
  List.iter (fun (op, expected) ->
    if !valid then match op with
    | "count" ->
        if Some sll.size <> expected then valid := false
    | "pop" ->
        let res = pop sll in
        if res <> expected then valid := false
    | _ -> ()
  ) operations;

  !valid
