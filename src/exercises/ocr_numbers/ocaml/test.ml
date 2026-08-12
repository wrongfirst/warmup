let string_of_res = function
  | Ok s -> Printf.sprintf "Ok %s" s
  | Error e -> Printf.sprintf "Error %s" e

let zero = [" _ "; "| |"; "|_|"; "   "]
let one = ["   "; "  |"; "  |"; "   "]

let () =
  Tests.string_check string_of_res "Recognizes 0" (Ok "0") (convert zero);
  Tests.string_check string_of_res "Recognizes 1" (Ok "1") (convert one);
  Tests.string_check string_of_res "Recognizes garbled" (Ok "?") (convert ["   "; "| |"; "| |"; "   "]);
  Tests.string_check string_of_res "Recognizes 1234567890" (Ok "1234567890") (convert [
    "    _  _     _  _  _  _  _  _ ";
    "  | _| _||_||_ |_   ||_||_|| |";
    "  ||_  _|  | _||_|  ||_| _||_|";
    "                              "
  ]);
  Tests.bool_check "Invalid line count error" (match convert [" _ "; "| |"; "|_|"] with Error _ -> true | _ -> false);
  Tests.bool_check "Invalid col count error" (match convert [" _"; "| "; "|_"] with Error _ -> true | _ -> false)
