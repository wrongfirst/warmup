if 'list_ops' not in globals():
    raise Exception("list_ops function is not defined")

Tests.equal_check("Empty list has length of zero", {}, list_ops([], [{"operation":"count","expected":0}]))
Tests.equal_check("Singleton list has length of one", {}, list_ops([1], [{"operation":"count","expected":1}]))
Tests.equal_check("Non-empty list has correct length", {}, list_ops([1,2,3], [{"operation":"count","expected":3}]))
Tests.equal_check("Pop from empty list is an error", {}, list_ops([], [{"operation":"pop","expected":{"error":"list is empty"}}]))
Tests.equal_check("Can pop from singleton list", {}, list_ops([1], [{"operation":"pop","expected":1}]))
