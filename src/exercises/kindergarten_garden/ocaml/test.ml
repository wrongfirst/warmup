let () =
  let res = plants "RC\nGG" "Alice" in
  Tests.equal_check "Alice plants" ["radishes"; "clover"; "grass"; "grass"] res
