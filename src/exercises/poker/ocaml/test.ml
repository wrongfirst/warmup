let () =
  let res = best_hands ["4S 5S 7H 8D JC"] in
  Tests.equal_check "single hand" ["4S 5S 7H 8D JC"] res
