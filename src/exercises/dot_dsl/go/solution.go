package main

type Node struct {
	Name  string
	Attrs map[string]string
}

type Edge struct {
	From  string
	To    string
	Attrs map[string]string
}

type Graph struct {
	Nodes []Node
	Edges []Edge
	Attrs map[string]string
}

func NewGraph() *Graph {
	return &Graph{
		Nodes: []Node{},
		Edges: []Edge{},
		Attrs: make(map[string]string),
	}
}

func (g *Graph) WithNodes(nodes ...Node) *Graph {
	g.Nodes = append(g.Nodes, nodes...)
	return g
}

func (g *Graph) WithEdges(edges ...Edge) *Graph {
	g.Edges = append(g.Edges, edges...)
	return g
}

func (g *Graph) WithAttrs(attrs map[string]string) *Graph {
	for k, v := range attrs {
		g.Attrs[k] = v
	}
	return g
}
