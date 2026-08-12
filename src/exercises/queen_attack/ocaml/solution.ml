let create row col =
  if row < 0 then "row not positive"
  else if row > 7 then "row not on board"
  else if col < 0 then "column not positive"
  else if col > 7 then "column not on board"
  else "ok"

let can_attack (w_row, w_col) (b_row, b_col) =
  if w_row = b_row || w_col = b_col then true
  else abs (w_row - b_row) = abs (w_col - b_col)
