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
