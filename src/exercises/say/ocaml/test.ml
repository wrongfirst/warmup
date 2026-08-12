let string_of_res = function
  | Ok s -> Printf.sprintf "Ok %s" s
  | Error e -> Printf.sprintf "Error %s" e

let () =
  Tests.string_check string_of_res "zero" (Ok "zero") (say 0L);
  Tests.string_check string_of_res "one" (Ok "one") (say 1L);
  Tests.string_check string_of_res "fourteen" (Ok "fourteen") (say 14L);
  Tests.string_check string_of_res "twenty-two" (Ok "twenty-two") (say 22L);
  Tests.string_check string_of_res "one thousand two hundred thirty-four" (Ok "one thousand two hundred thirty-four") (say 1234L);
  Tests.bool_check "negative is error" (match say (-1L) with Error _ -> true | _ -> false);
  Tests.bool_check "too large is error" (match say 1000000000000L with Error _ -> true | _ -> false)
