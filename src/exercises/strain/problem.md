Implement the `keep` and `discard` operations on collections.

Given a collection and a predicate on the collection's elements, `keep` returns a new collection containing those elements where the predicate is true, while `discard` returns a new collection containing those elements where the predicate is false.

For example, given the collection of numbers `[1, 2, 3, 4, 5]` and the predicate `is_even`:
- `keep` should produce `[2, 4]`
- `discard` should produce `[1, 3, 5]`

## Restrictions
Do not use standard library collection filtering (e.g. `Array.prototype.filter`, `List.filter`, `filter()` in Python/Go). Solve this using basic loop and conditional constructs!
