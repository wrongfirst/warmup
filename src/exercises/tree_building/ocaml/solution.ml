type record = { id : int; parent : int }
type node = { id : int; children : node list }

let build records =
  if records = [] then Ok None
  else
    let sorted = List.sort (fun a b -> compare a.id b.id) records in
    let root_rec = List.hd sorted in
    if root_rec.id <> 0 || root_rec.parent <> 0 then Error "Root node is invalid"
    else
      let len = List.length sorted in
      let nodes = Array.make len { id = 0; children = [] } in
      let valid = ref true in
      let err_msg = ref "" in

      List.iteri (fun i rec_ ->
        if rec_.id <> i then (
          valid := false; err_msg := "Record id mismatch or non-contiguous"
        );
        if i > 0 && rec_.parent >= rec_.id then (
          valid := false; err_msg := "Parent id must be less than id"
        );
        nodes.(i) <- { id = rec_.id; children = [] }
      ) sorted;

      if not !valid then Error !err_msg
      else (
        let children_map = Hashtbl.create len in
        List.iter (fun rec_ ->
          if rec_.id <> 0 then (
            let existing = try Hashtbl.find children_map rec_.parent with Not_found -> [] in
            Hashtbl.replace children_map rec_.parent (existing @ [rec_.id])
          )
        ) sorted;

        let rec assemble_node id =
          let child_ids = try Hashtbl.find children_map id with Not_found -> [] in
          { id; children = List.map assemble_node child_ids }
        in

        Ok (Some (assemble_node 0))
      )
