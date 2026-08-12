let string_of_res = function
  | Ok n -> Printf.sprintf "Ok %d" n
  | Error e -> Printf.sprintf "Error %s" e

let () =
  Tests.string_check string_of_res "zero steps for one" (Ok 0) (steps 1);
  Tests.string_check string_of_res "divide if even" (Ok 4) (steps 16);
  Tests.string_check string_of_res "even and odd steps" (Ok 9) (steps 12);
  Tests.string_check string_of_res "large number of even and odd steps" (Ok 152) (steps 1000000);
  Tests.bool_check "zero is an error" (match steps 0 with Error _ -> true | _ -> false);
  Tests.bool_check "negative value is an error" (match steps (-15) with Error _ -> true | _ -> false)
