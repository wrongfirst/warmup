package main

type Tree struct {
	Value    string
	Children []*Tree
}

func NewTree(value string, children ...*Tree) *Tree {
	return &Tree{Value: value, Children: children}
}

func FromPov(tr *Tree, target string) *Tree {
	// Your code here
	return tr
}

func PathTo(tr *Tree, from, to string) []string {
	// Your code here
	return nil
}
