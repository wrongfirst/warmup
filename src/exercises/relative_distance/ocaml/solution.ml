let degree_of_separation family_tree person_a person_b =
  if person_a = person_b then Some 0
  else
    let adj = Hashtbl.create 64 in
    let add_edge u v =
      let current_u = try Hashtbl.find adj u with Not_found -> [] in
      if not (List.mem v current_u) then Hashtbl.replace adj u (v :: current_u);
      let current_v = try Hashtbl.find adj v with Not_found -> [] in
      if not (List.mem u current_v) then Hashtbl.replace adj v (u :: current_v)
    in

    List.iter (fun (parent, children) ->
      List.iter (fun child -> add_edge parent child) children;
      let rec add_siblings = function
        | [] -> ()
        | c1 :: cs ->
            List.iter (fun c2 -> add_edge c1 c2) cs;
            add_siblings cs
      in
      add_siblings children
    ) family_tree;

    if not (Hashtbl.mem adj person_a) || not (Hashtbl.mem adj person_b) then None
    else
      let visited = Hashtbl.create 64 in
      Hashtbl.add visited person_a true;
      let queue = Queue.create () in
      Queue.add (person_a, 0) queue;

      let result = ref None in
      while not (Queue.is_empty queue) && !result = None do
        let (curr, dist) = Queue.pop queue in
        if curr = person_b then
          result := Some dist
        else
          let neighbors = try Hashtbl.find adj curr with Not_found -> [] in
          List.iter (fun neighbor ->
            if not (Hashtbl.mem visited neighbor) then begin
              Hashtbl.add visited neighbor true;
              Queue.add (neighbor, dist + 1) queue
            end
          ) neighbors
      done;
      !result
