let add students =
  let seen = Hashtbl.create 16 in
  List.map (fun (name, _) ->
    if Hashtbl.mem seen name then false
    else begin
      Hashtbl.add seen name true;
      true
    end
  ) students

let process students =
  let seen = Hashtbl.create 16 in
  let valid = ref [] in
  List.iter (fun (name, g) ->
    if not (Hashtbl.mem seen name) then begin
      Hashtbl.add seen name true;
      valid := (name, g) :: !valid
    end
  ) students;
  List.rev !valid

let roster students =
  let valid = process students in
  let sorted = List.sort (fun (n1, g1) (n2, g2) ->
    if g1 <> g2 then compare g1 g2
    else String.compare n1 n2
  ) valid in
  List.map fst sorted

let grade students desired_grade =
  let valid = process students in
  let filtered = List.filter (fun (_, g) -> g = desired_grade) valid in
  let names = List.map fst filtered in
  List.sort String.compare names
