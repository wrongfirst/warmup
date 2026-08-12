let string_of_result_opt = function
  | None -> "None"
  | Some r -> Printf.sprintf "{moves=%d, goal_bucket=\"%s\", other_bucket=%d}" r.moves r.goal_bucket r.other_bucket

let () =
  Tests.string_check string_of_result_opt "Measure bucket one size 3 bucket two size 5 start with bucket one"
    (Some { moves = 4; goal_bucket = "one"; other_bucket = 5 }) (measure 3 5 1 "one");
  Tests.string_check string_of_result_opt "Measure bucket one size 3 bucket two size 5 start with bucket two"
    (Some { moves = 8; goal_bucket = "two"; other_bucket = 3 }) (measure 3 5 1 "two");
  Tests.string_check string_of_result_opt "Measure bucket one size 7 bucket two size 11 start with bucket one"
    (Some { moves = 14; goal_bucket = "one"; other_bucket = 11 }) (measure 7 11 2 "one");
  Tests.string_check string_of_result_opt "Measure bucket one size 7 bucket two size 11 start with bucket two"
    (Some { moves = 18; goal_bucket = "two"; other_bucket = 7 }) (measure 7 11 2 "two");
  Tests.string_check string_of_result_opt "Impossible goal"
    None (measure 6 15 5 "one");
  Tests.string_check string_of_result_opt "Goal larger than both buckets"
    None (measure 5 7 8 "one")
