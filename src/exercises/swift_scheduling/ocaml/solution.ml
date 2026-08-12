let is_leap_year y =
  (y mod 4 = 0 && y mod 100 <> 0) || (y mod 400 = 0)

let days_in_month y m =
  match m with
  | 1 | 3 | 5 | 7 | 8 | 10 | 12 -> 31
  | 4 | 6 | 9 | 11 -> 30
  | 2 -> if is_leap_year y then 29 else 28
  | _ -> 30

let day_of_week y m d =
  let t = [|0; 3; 2; 5; 0; 3; 5; 1; 4; 6; 2; 4|] in
  let y' = if m < 3 then y - 1 else y in
  (y' + y'/4 - y'/100 + y'/400 + t.(m - 1) + d) mod 7

let next_day (y, m, d) =
  if d < days_in_month y m then (y, m, d + 1)
  else if m < 12 then (y, m + 1, 1)
  else (y + 1, 1, 1)

let prev_day (y, m, d) =
  if d > 1 then (y, m, d - 1)
  else if m > 1 then
    let m' = m - 1 in
    (y, m', days_in_month y m')
  else
    (y - 1, 12, 31)

let rec add_days date n =
  if n <= 0 then date
  else add_days (next_day date) (n - 1)

let delivery_date meeting_start description =
  let y = int_of_string (String.sub meeting_start 0 4) in
  let m = int_of_string (String.sub meeting_start 5 2) in
  let d = int_of_string (String.sub meeting_start 8 2) in
  let hh = int_of_string (String.sub meeting_start 11 2) in
  let mm = int_of_string (String.sub meeting_start 14 2) in
  let ss = int_of_string (String.sub meeting_start 17 2) in

  let fmt (y', m', d') time_str =
    Printf.sprintf "%04d-%02d-%02dT%s" y' m' d' time_str
  in

  if description = "NOW" then
    let new_hh = hh + 2 in
    if new_hh < 24 then
      Printf.sprintf "%04d-%02d-%02dT%02d:%02d:%02d" y m d new_hh mm ss
    else
      let (y', m', d') = next_day (y, m, d) in
      Printf.sprintf "%04d-%02d-%02dT%02d:%02d:%02d" y' m' d' (new_hh - 24) mm ss

  else if description = "ASAP" then
    if hh < 13 then
      fmt (y, m, d) "17:00:00"
    else
      fmt (next_day (y, m, d)) "13:00:00"

  else if description = "EOW" then
    let dow = day_of_week y m d in
    if dow >= 1 && dow <= 3 then
      let days_to_add = 5 - dow in
      fmt (add_days (y, m, d) days_to_add) "17:00:00"
    else
      let days_to_add = (7 - dow) mod 7 in
      fmt (add_days (y, m, d) days_to_add) "20:00:00"

  else if String.length description >= 2 && description.[String.length description - 1] = 'M' then
    let n_str = String.sub description 0 (String.length description - 1) in
    let n = int_of_string n_str in
    let target_y = if m < n then y else y + 1 in
    let rec find_first_workday curr =
      let (cy, cm, cd) = curr in
      let dow = day_of_week cy cm cd in
      if dow <> 0 && dow <> 6 then curr
      else find_first_workday (next_day curr)
    in
    fmt (find_first_workday (target_y, n, 1)) "08:00:00"

  else if String.length description >= 2 && description.[0] = 'Q' then
    let q_str = String.sub description 1 (String.length description - 1) in
    let q = int_of_string q_str in
    let start_q = ((m - 1) / 3) + 1 in
    let target_y = if start_q <= q then y else y + 1 in
    let end_m = q * 3 in
    let last_d = days_in_month target_y end_m in
    let rec find_last_workday curr =
      let (cy, cm, cd) = curr in
      let dow = day_of_week cy cm cd in
      if dow <> 0 && dow <> 6 then curr
      else find_last_workday (prev_day curr)
    in
    fmt (find_last_workday (target_y, end_m, last_d)) "08:00:00"

  else
    meeting_start
