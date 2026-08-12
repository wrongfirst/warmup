let string_of_str_list lst =
  "[" ^ String.concat "; " (List.map (fun s -> "\"" ^ s ^ "\"") lst) ^ "]"

let () =
  Tests.bool_check "not allergic to anything" (not (allergic_to "eggs" 0));
  Tests.bool_check "allergic only to eggs" (allergic_to "eggs" 1);
  Tests.bool_check "allergic to eggs and something else" (allergic_to "eggs" 3);
  Tests.bool_check "allergic to something, but not eggs" (not (allergic_to "eggs" 2));
  Tests.bool_check "allergic to everything" (allergic_to "eggs" 255);
  Tests.bool_check "allergic to peanuts" (allergic_to "peanuts" 7);
  Tests.bool_check "ignores non-allergen bits for allergic_to" (allergic_to "eggs" 257);

  Tests.string_check string_of_str_list "no allergies" [] (allergies 0);
  Tests.string_check string_of_str_list "just eggs" ["eggs"] (allergies 1);
  Tests.string_check string_of_str_list "just peanuts" ["peanuts"] (allergies 2);
  Tests.string_check string_of_str_list "just strawberries" ["strawberries"] (allergies 8);
  Tests.string_check string_of_str_list "eggs and peanuts" ["eggs"; "peanuts"] (allergies 3);
  Tests.string_check string_of_str_list "more than eggs but not peanuts" ["eggs"; "shellfish"] (allergies 5);
  Tests.string_check string_of_str_list "everything" ["eggs"; "peanuts"; "shellfish"; "strawberries"; "tomatoes"; "chocolate"; "pollen"; "cats"] (allergies 255);
  Tests.string_check string_of_str_list "ignores non-allergen score parts" ["eggs"; "shellfish"; "strawberries"; "tomatoes"; "chocolate"; "pollen"; "cats"] (allergies 509);
  Tests.string_check string_of_str_list "ignores non-allergen score parts without highest valid score" ["eggs"] (allergies 257)
