package main

import (
	"errors"
	"sort"
)

type Record struct {
	ID     int
	Parent int
}

type Node struct {
	ID       int
	Children []*Node
}

func Build(records []Record) (*Node, error) {
	if len(records) == 0 {
		return nil, nil
	}

	sorted := make([]Record, len(records))
	copy(sorted, records)
	sort.Slice(sorted, func(i, j int) bool {
		return sorted[i].ID < sorted[j].ID
	})

	if sorted[0].ID != 0 || sorted[0].Parent != 0 {
		return nil, errors.New("Root node is invalid")
	}

	nodes := make([]*Node, len(sorted))
	for i, rec := range sorted {
		if rec.ID != i {
			return nil, errors.New("Record id mismatch or non-contiguous")
		}
		if i > 0 && rec.Parent >= rec.ID {
			return nil, errors.New("Parent id must be less than id")
		}
		nodes[i] = &Node{ID: rec.ID, Children: []*Node{}}
	}

	for i := 1; i < len(sorted); i++ {
		rec := sorted[i]
		nodes[rec.Parent].Children = append(nodes[rec.Parent].Children, nodes[i])
	}

	return nodes[0], nil
}
