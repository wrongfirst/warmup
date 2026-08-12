let identity s = s

let () =
  Tests.string_check identity "basic" "PNG" (abbreviate "Portable Network Graphics");
  Tests.string_check identity "lowercase words" "ROR" (abbreviate "Ruby on Rails");
  Tests.string_check identity "punctuation" "FIFO" (abbreviate "First In, First Out");
  Tests.string_check identity "all caps word" "GIMP" (abbreviate "GNU Image Manipulation Program");
  Tests.string_check identity "hyphenated" "CMOS" (abbreviate "Complementary metal-oxide-semaphore");
  Tests.string_check identity "consecutive delimiters" "SIMUFTA" (abbreviate "Something - I must have dreamt it or wept: a-footfall on the stair")
