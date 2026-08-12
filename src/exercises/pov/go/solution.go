package main

type Tree struct {
	Value    string
	Children []*Tree
}

func NewTree(value string, children ...*Tree) *Tree {
	return &Tree{Value: value, Children: children}
}

func findPath(tr *Tree, target string, currentPath []*Tree) []*Tree {
	newPath := append(append([]*Tree{}, currentPath...), tr)
	if tr.Value == target {
		return newPath
	}

	for _, child := range tr.Children {
		res := findPath(child, target, newPath)
		if res != nil {
			return res
		}
	}

	return nil
}

func FromPov(tr *Tree, target string) *Tree {
	path := findPath(tr, target, nil)
	if path == nil {
		return nil
	}

	var newChild *Tree

	for i := 0; i < len(path); i++ {
		node := path[i]
		var nextOnPath *Tree
		if i+1 < len(path) {
			nextOnPath = path[i+1]
		}

		var remainingChildren []*Tree
		for _, c := range node.Children {
			if c != nextOnPath {
				remainingChildren = append(remainingChildren, c)
			}
		}

		if newChild != nil {
			remainingChildren = append(remainingChildren, newChild)
		}

		newChild = NewTree(node.Value, remainingChildren...)
	}

	return newChild
}

func PathTo(tr *Tree, from, to string) []string {
	reparented := FromPov(tr, from)
	if reparented == nil {
		return nil
	}

	pathNodes := findPath(reparented, to, nil)
	if pathNodes == nil {
		return nil
	}

	var res []string
	for _, n := range pathNodes {
		res = append(res, n.Value)
	}

	return res
}
