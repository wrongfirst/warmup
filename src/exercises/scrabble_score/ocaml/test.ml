let string_of_int_val x = string_of_int x

let () =
  Tests.string_check string_of_int_val "lowercase letter" 1 (score "a");
  Tests.string_check string_of_int_val "uppercase letter" 1 (score "A");
  Tests.string_check string_of_int_val "valuable letter" 4 (score "f");
  Tests.string_check string_of_int_val "short word" 2 (score "at");
  Tests.string_check string_of_int_val "short, valuable word" 12 (score "zoo");
  Tests.string_check string_of_int_val "medium word" 6 (score "street");
  Tests.string_check string_of_int_val "medium, valuable word" 22 (score "quirky");
  Tests.string_check string_of_int_val "long, mixed-case word" 41 (score "OxyphenButazone");
  Tests.string_check string_of_int_val "english-like word" 8 (score "pinata");
  Tests.string_check string_of_int_val "empty input" 0 (score "");
  Tests.string_check string_of_int_val "entire alphabet available" 87 (score "abcdefghijklmnopqrstuvwxyz")
