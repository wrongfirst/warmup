package main

func DegreeOfSeparation(familyTree map[string][]string, personA, personB string) int {
	if personA == personB {
		return 0
	}

	adj := make(map[string]map[string]bool)

	addEdge := func(u, v string) {
		if adj[u] == nil {
			adj[u] = make(map[string]bool)
		}
		if adj[v] == nil {
			adj[v] = make(map[string]bool)
		}
		adj[u][v] = true
		adj[v][u] = true
	}

	for parent, children := range familyTree {
		for _, child := range children {
			addEdge(parent, child)
		}
		for i := 0; i < len(children); i++ {
			for j := i + 1; j < len(children); j++ {
				addEdge(children[i], children[j])
			}
		}
	}

	if adj[personA] == nil || adj[personB] == nil {
		return -1
	}

	visited := make(map[string]bool)
	type node struct {
		name string
		dist int
	}

	queue := []node{{name: personA, dist: 0}}
	visited[personA] = true

	for len(queue) > 0 {
		curr := queue[0]
		queue = queue[1:]

		if curr.name == personB {
			return curr.dist
		}

		for neighbor := range adj[curr.name] {
			if !visited[neighbor] {
				visited[neighbor] = true
				queue = append(queue, node{name: neighbor, dist: curr.dist + 1})
			}
		}
	}

	return -1
}
