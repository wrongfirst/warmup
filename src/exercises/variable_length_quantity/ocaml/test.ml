let string_of_int_list lst =
  "[" ^ String.concat "; " (List.map string_of_int lst) ^ "]"

let () =
  (* Encoding tests *)
  Tests.string_check string_of_int_list "zero" [0] (encode [0]);
  Tests.string_check string_of_int_list "arbitrary single byte" [64] (encode [64]);
  Tests.string_check string_of_int_list "asymmetric single byte" [83] (encode [83]);
  Tests.string_check string_of_int_list "largest single byte" [127] (encode [127]);
  Tests.string_check string_of_int_list "smallest double byte" [129; 0] (encode [128]);
  Tests.string_check string_of_int_list "arbitrary double byte" [192; 0] (encode [8192]);
  Tests.string_check string_of_int_list "largest double byte" [255; 127] (encode [16383]);
  Tests.string_check string_of_int_list "smallest triple byte" [129; 128; 0] (encode [16384]);
  Tests.string_check string_of_int_list "two single-byte values" [64; 127] (encode [64; 127]);
  Tests.string_check string_of_int_list "many multi-byte values" [192; 0; 200; 232; 86; 255; 255; 255; 127; 0; 255; 127; 129; 128; 0] (encode [8192; 1193046; 268435455; 0; 16383; 16384]);

  (* Decoding tests *)
  Tests.string_check string_of_int_list "decode one byte" [127] (decode [127]);
  Tests.string_check string_of_int_list "decode two bytes" [8192] (decode [192; 0]);
  Tests.string_check string_of_int_list "decode three bytes" [2097151] (decode [255; 255; 127]);
  Tests.string_check string_of_int_list "decode multiple values" [8192; 1193046; 268435455; 0; 16383; 16384] (decode [192; 0; 200; 232; 86; 255; 255; 255; 127; 0; 255; 127; 129; 128; 0]);

  (* Incomplete sequence errors *)
  let caught1 = try ignore (decode [255]); false with _ -> true in
  Tests.bool_check "incomplete sequence error" caught1;

  let caught2 = try ignore (decode [128]); false with _ -> true in
  Tests.bool_check "incomplete sequence error zero" caught2
