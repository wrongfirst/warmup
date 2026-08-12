type team_stats = {
  name : string;
  mutable w : int;
  mutable d : int;
  mutable l : int;
}

let tally input =
  let header = "Team                           | MP |  W |  D |  L |  P" in
  let teams = Hashtbl.create 16 in

  let get_team name =
    try Hashtbl.find teams name
    with Not_found ->
      let st = { name; w = 0; d = 0; l = 0 } in
      Hashtbl.add teams name st;
      st
  in

  List.iter (fun line ->
    match String.split_on_char ';' line with
    | [team_a; team_b; result] ->
        let a = get_team team_a in
        let b = get_team team_b in
        if result = "win" then (a.w <- a.w + 1; b.l <- b.l + 1)
        else if result = "loss" then (a.l <- a.l + 1; b.w <- b.w + 1)
        else if result = "draw" then (a.d <- a.d + 1; b.d <- b.d + 1)
    | _ -> ()
  ) input;

  let list = Hashtbl.fold (fun _ v acc -> v :: acc) teams [] in

  let sorted = List.sort (fun t1 t2 ->
    let p1 = t1.w * 3 + t1.d in
    let p2 = t2.w * 3 + t2.d in
    if p1 <> p2 then compare p2 p1
    else String.compare t1.name t2.name
  ) list in

  let rows = List.map (fun t ->
    let mp = t.w + t.d + t.l in
    let p = t.w * 3 + t.d in
    Printf.sprintf "%-31s| %2d | %2d | %2d | %2d | %2d" t.name mp t.w t.d t.l p
  ) sorted in

  header :: rows
