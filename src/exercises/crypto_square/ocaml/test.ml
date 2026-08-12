let identity s = s

let () =
  Tests.string_check identity "empty plain text results in an empty cipher text" "" (encode "");
  Tests.string_check identity "normalization results in empty text" "" (encode "...");
  Tests.string_check identity "Lowercase" "a" (encode "A");
  Tests.string_check identity "Remove spaces" "b" (encode "  b ");
  Tests.string_check identity "Remove punctuation" "1" (encode "@1,%!");
  Tests.string_check identity "9 character plaintext forms 3x3 square" "tsf hiu isn" (encode "This is fun!");
  Tests.string_check identity "8 character plaintext forms 3x3 square with trailing space" "clu hlt io " (encode "Chill out.");
  Tests.string_check identity "54 character plaintext forms 8x7 rectangle" "imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn  sseoau " (encode "If man was meant to stay on the ground, god would have given us roots.")
