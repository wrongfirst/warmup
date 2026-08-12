type clock = { total_minutes : int }

let create (hour : int) (minute : int) : clock =
  (* Your code here *)
  { total_minutes = 0 }

let add (minutes : int) (c : clock) : clock =
  (* Your code here *)
  c

let sub (minutes : int) (c : clock) : clock =
  (* Your code here *)
  c

let to_string (c : clock) : string =
  (* Your code here *)
  "00:00"
