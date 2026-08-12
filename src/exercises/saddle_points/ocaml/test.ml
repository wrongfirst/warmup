let () =
  let m = [ [9; 8; 7]; [5; 3; 2]; [6; 6; 7] ] in
  let res = saddle_points m in
  Tests.equal_check "single saddle point" [{ row = 2; column = 1 }] res
