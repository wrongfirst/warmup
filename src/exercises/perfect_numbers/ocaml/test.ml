let string_of_res = function
  | Ok s -> Printf.sprintf "Ok %s" s
  | Error e -> Printf.sprintf "Error %s" e

let () =
  Tests.string_check string_of_res "Smallest perfect number" (Ok "perfect") (classify 6);
  Tests.string_check string_of_res "Medium perfect number" (Ok "perfect") (classify 28);
  Tests.string_check string_of_res "Large perfect number" (Ok "perfect") (classify 33550336);
  Tests.string_check string_of_res "Smallest abundant number" (Ok "abundant") (classify 12);
  Tests.string_check string_of_res "Smallest prime deficient number" (Ok "deficient") (classify 2);
  Tests.bool_check "Zero is rejected" (match classify 0 with Error _ -> true | _ -> false);
  Tests.bool_check "Negative integer is rejected" (match classify (-1) with Error _ -> true | _ -> false)
