type result = {
  moves : int;
  goal_bucket : string;
  other_bucket : int;
}

let measure bucket_one bucket_two goal start_bucket =
  if goal > max bucket_one bucket_two then None
  else
    let b1_init = if start_bucket = "one" then bucket_one else 0 in
    let b2_init = if start_bucket = "two" then bucket_two else 0 in

    let forbidden =
      if start_bucket = "one" then (0, bucket_two)
      else (bucket_one, 0)
    in

    let visited = Hashtbl.create 64 in
    Hashtbl.add visited (0, 0) true;
    Hashtbl.add visited (b1_init, b2_init) true;
    Hashtbl.add visited forbidden true;

    let queue = Queue.create () in
    Queue.add (b1_init, b2_init, 1) queue;

    let res = ref None in
    while not (Queue.is_empty queue) && !res = None do
      let (c1, c2, moves) = Queue.pop queue in
      if c1 = goal then
        res := Some { moves; goal_bucket = "one"; other_bucket = c2 }
      else if c2 = goal then
        res := Some { moves; goal_bucket = "two"; other_bucket = c1 }
      else begin
        let pour1to2 = min c1 (bucket_two - c2) in
        let pour2to1 = min c2 (bucket_one - c1) in

        let next_states = [
          (bucket_one, c2);
          (c1, bucket_two);
          (0, c2);
          (c1, 0);
          (c1 - pour1to2, c2 + pour1to2);
          (c1 + pour2to1, c2 - pour2to1);
        ] in

        List.iter (fun st ->
          if not (Hashtbl.mem visited st) then begin
            Hashtbl.add visited st true;
            Queue.add (fst st, snd st, moves + 1) queue
          end
        ) next_states
      end
    done;
    !res
