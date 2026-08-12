type clock = { total_minutes : int }

let create hour minute =
  let total = (hour * 60 + minute) mod 1440 in
  let total = if total < 0 then total + 1440 else total in
  { total_minutes = total }

let add minutes c =
  create 0 (c.total_minutes + minutes)

let sub minutes c =
  create 0 (c.total_minutes - minutes)

let to_string c =
  let h = c.total_minutes / 60 in
  let m = c.total_minutes mod 60 in
  Printf.sprintf "%02d:%02d" h m
