let identity s = s

let () =
  Tests.string_check identity "encode empty string" "" (encode "");
  Tests.string_check identity "encode single characters without count" "XYZ" (encode "XYZ");
  Tests.string_check identity "encode string with repeated characters" "2A3B4C" (encode "AABBBCCCC");
  Tests.string_check identity "encode multiple whitespace" "2 hs2q q2w" (encode "  hs  q q  w");
  Tests.string_check identity "decode empty string" "" (decode "");
  Tests.string_check identity "decode single characters without count" "XYZ" (decode "XYZ");
  Tests.string_check identity "decode string with repeated characters" "AABBBCCCC" (decode "2A3B4C");
  Tests.string_check identity "encode and then decode" "zzz ZZ zZ" (decode (encode "zzz ZZ zZ"))
