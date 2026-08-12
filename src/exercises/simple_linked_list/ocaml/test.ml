let () =
  Tests.bool_check "Empty list has length of zero" (list_ops [] [("count", Some 0)]);
  Tests.bool_check "Singleton list has length of one" (list_ops [1] [("count", Some 1)]);
  Tests.bool_check "Non-empty list has correct length" (list_ops [1; 2; 3] [("count", Some 3)]);
  Tests.bool_check "Pop from empty list is an error" (list_ops [] [("pop", None)]);
  Tests.bool_check "Can pop from singleton list" (list_ops [1] [("pop", Some 1)])
