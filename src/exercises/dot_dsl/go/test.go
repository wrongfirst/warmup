package main

func main() {
	emptyG := NewGraph()
	Tests.EqualCheck("empty graph nodes", 0, len(emptyG.Nodes))
	Tests.EqualCheck("empty graph edges", 0, len(emptyG.Edges))

	g := NewGraph().
		WithAttrs(map[string]string{"bgcolor": "yellow"}).
		WithNodes(
			Node{Name: "a", Attrs: map[string]string{"color": "red"}},
			Node{Name: "b", Attrs: map[string]string{"color": "blue"}},
		).
		WithEdges(
			Edge{From: "a", To: "b", Attrs: map[string]string{"color": "green"}},
		)

	Tests.EqualCheck("graph attrs", "yellow", g.Attrs["bgcolor"])
	Tests.EqualCheck("graph nodes count", 2, len(g.Nodes))
	Tests.EqualCheck("graph node a attr", "red", g.Nodes[0].Attrs["color"])
	Tests.EqualCheck("graph edges count", 1, len(g.Edges))
	Tests.EqualCheck("graph edge a-b attr", "green", g.Edges[0].Attrs["color"])
}
