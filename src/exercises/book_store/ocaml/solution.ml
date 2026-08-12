let group_costs = function
  | 1 -> 800
  | 2 -> 1520
  | 3 -> 2160
  | 4 -> 2560
  | 5 -> 3000
  | _ -> 0

let total basket =
  if basket = [] then 0
  else
    let counts_tbl = Hashtbl.create 8 in
    List.iter (fun b ->
      let c = try Hashtbl.find counts_tbl b with Not_found -> 0 in
      Hashtbl.replace counts_tbl b (c + 1)
    ) basket;

    let initial_counts = Hashtbl.fold (fun _ v acc -> v :: acc) counts_tbl [] in

    let memo = Hashtbl.create 32 in

    let rec solve active =
      let filtered = List.filter (fun c -> c > 0) active in
      if filtered = [] then 0
      else
        let sorted = List.sort (fun a b -> compare b a) filtered in
        try Hashtbl.find memo sorted
        with Not_found ->
          let num_unique = List.length sorted in
          let min_cost = ref 1000000000 in

          for size = 1 to num_unique do
            let next_counts = List.mapi (fun i c -> if i < size then c - 1 else c) sorted in
            let cost = group_costs size + solve next_counts in
            if cost < !min_cost then min_cost := cost
          done;

          Hashtbl.add memo sorted !min_cost;
          !min_cost
    in

    solve initial_counts
