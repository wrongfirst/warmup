package main

func main() {
	resEmpty, errEmpty := Build([]Record{})
	Tests.BoolCheck("empty list err", errEmpty == nil)
	Tests.BoolCheck("empty list res", resEmpty == nil)

	resOne, errOne := Build([]Record{{ID: 0, Parent: 0}})
	Tests.BoolCheck("one node err", errOne == nil)
	Tests.EqualCheck("one node id", 0, resOne.ID)

	tree, errTree := Build([]Record{
		{ID: 0, Parent: 0},
		{ID: 1, Parent: 0},
		{ID: 2, Parent: 0},
	})
	Tests.BoolCheck("tree err", errTree == nil)
	Tests.EqualCheck("root id", 0, tree.ID)
	Tests.EqualCheck("root children count", 2, len(tree.Children))

	_, errInvalid := Build([]Record{{ID: 0, Parent: 1}})
	Tests.BoolCheck("invalid root parent error", errInvalid != nil)
}
