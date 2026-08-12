package main

import "encoding/json"

func main() {
	leaf := NewTree("x")
	repLeaf := FromPov(leaf, "x")
	Tests.EqualCheck("singleton fromPov", "x", repLeaf.Value)

	t := NewTree("parent", NewTree("x"), NewTree("y"))
	reparented := FromPov(t, "x")
	Tests.EqualCheck("x is new root", "x", reparented.Value)
	Tests.EqualCheck("x has parent as child", "parent", reparented.Children[0].Value)

	p := PathTo(t, "x", "y")
	bytes, _ := json.Marshal(p)
	Tests.EqualCheck("pathTo simple", `["x","parent","y"]`, string(bytes))
}
