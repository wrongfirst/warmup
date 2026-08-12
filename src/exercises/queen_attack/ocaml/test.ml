let string_of_str s = s

let () =
  (* Position validation tests *)
  Tests.string_check string_of_str "queen with a valid position" "ok" (create 2 2);
  Tests.string_check string_of_str "queen must have positive row" "row not positive" (create (-2) 2);
  Tests.string_check string_of_str "queen must have row on board" "row not on board" (create 8 4);
  Tests.string_check string_of_str "queen must have positive column" "column not positive" (create 2 (-2));
  Tests.string_check string_of_str "queen must have column on board" "column not on board" (create 4 8);

  (* Attack detection tests *)
  Tests.bool_check "cannot attack" (not (can_attack (2, 4) (6, 6)));
  Tests.bool_check "can attack on same row" (can_attack (2, 4) (2, 6));
  Tests.bool_check "can attack on same column" (can_attack (4, 5) (2, 5));
  Tests.bool_check "can attack on first diagonal" (can_attack (2, 2) (0, 4));
  Tests.bool_check "can attack on second diagonal" (can_attack (2, 2) (3, 1));
  Tests.bool_check "can attack on third diagonal" (can_attack (2, 2) (1, 1));
  Tests.bool_check "can attack on fourth diagonal" (can_attack (1, 7) (0, 6));
  Tests.bool_check "cannot attack if falling diagonals only match on reflection" (not (can_attack (4, 1) (2, 5)))
