let string_of_int_val x = string_of_int x

let () =
  Tests.string_check string_of_int_val "Only a single book" 800 (total [1]);
  Tests.string_check string_of_int_val "Two of the same book" 1600 (total [2; 2]);
  Tests.string_check string_of_int_val "Empty basket" 0 (total []);
  Tests.string_check string_of_int_val "Two different books" 1520 (total [1; 2]);
  Tests.string_check string_of_int_val "Three different books" 2160 (total [1; 2; 3]);
  Tests.string_check string_of_int_val "Four different books" 2560 (total [1; 2; 3; 4]);
  Tests.string_check string_of_int_val "Five different books" 3000 (total [1; 2; 3; 4; 5]);
  Tests.string_check string_of_int_val "Two groups of four is cheaper than group of five plus group of three" 5120 (total [1; 1; 2; 2; 3; 3; 4; 5]);
  Tests.string_check string_of_int_val "Two groups of four differs in book order" 5120 (total [1; 1; 2; 3; 4; 4; 5; 5])
