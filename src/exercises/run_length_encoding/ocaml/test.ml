let identity s = s

let () =
  Tests.string_check identity "encode empty string" "" (encode "");
  Tests.string_check identity "encode single characters only are encoded without count" "XYZ" (encode "XYZ");
  Tests.string_check identity "encode string with no single characters" "2A3B4C" (encode "AABBBCCCC");
  Tests.string_check identity "encode single characters mixed with repeated characters" "12WB12W3B24WB" (encode "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB");
  Tests.string_check identity "encode multiple whitespace mixed in string" "2 hs2q q2w2 " (encode "  hsqq qww  ");
  Tests.string_check identity "encode lowercase characters" "2a3b4c" (encode "aabbbcccc");
  Tests.string_check identity "decode empty string" "" (decode "");
  Tests.string_check identity "decode single characters only" "XYZ" (decode "XYZ");
  Tests.string_check identity "decode string with no single characters" "AABBBCCCC" (decode "2A3B4C");
  Tests.string_check identity "decode single characters with repeated characters" "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB" (decode "12WB12W3B24WB");
  Tests.string_check identity "decode multiple whitespace mixed in string" "  hsqq qww  " (decode "2 hs2q q2w2 ");
  Tests.string_check identity "decode lowercase string" "aabbbcccc" (decode "2a3b4c");
  Tests.string_check identity "encode followed by decode gives original string" "zzz ZZ  zZ" (decode (encode "zzz ZZ  zZ"))
