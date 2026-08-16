let string_of_int_val x = string_of_int x

let () =
  Tests.string_check string_of_int_val "Yacht" 50 (score [5; 5; 5; 5; 5] "yacht");
  Tests.string_check string_of_int_val "Not Yacht" 0 (score [1; 3; 3; 2; 5] "yacht");
  Tests.string_check string_of_int_val "Ones" 3 (score [1; 1; 1; 3; 5] "ones");
  Tests.string_check string_of_int_val "Ones out of order" 3 (score [3; 1; 1; 5; 1] "ones");
  Tests.string_check string_of_int_val "No ones" 0 (score [4; 3; 6; 5; 5] "ones");
  Tests.string_check string_of_int_val "Twos" 2 (score [2; 3; 4; 5; 6] "twos");
  Tests.string_check string_of_int_val "Four of a Kind" 12 (score [3; 3; 3; 3; 5] "four of a kind");
  Tests.string_check string_of_int_val "Four of a Kind from Yacht" 12 (score [3; 3; 3; 3; 3] "four of a kind");
  Tests.string_check string_of_int_val "Full House" 19 (score [3; 3; 3; 5; 5] "full house");
  Tests.string_check string_of_int_val "Full House not matching" 0 (score [3; 3; 3; 3; 5] "full house");
  Tests.string_check string_of_int_val "Little Straight" 30 (score [3; 5; 4; 1; 2] "little straight");
  Tests.string_check string_of_int_val "Big Straight" 30 (score [4; 6; 2; 5; 3] "big straight");
  Tests.string_check string_of_int_val "Choice" 23 (score [3; 3; 5; 6; 6] "choice")
