let () =
  let res1 = keep (fun x -> x mod 2 = 1) [1; 2; 3] in
  Tests.equal_check "keep odd" [1; 3] res1;
  let res2 = discard (fun x -> x mod 2 = 1) [1; 2; 3] in
  Tests.equal_check "discard odd" [2] res2
