package main

import (
	"fmt"
	"sort"
	"strings"
)

type TeamStats struct {
	Name string
	W    int
	D    int
	L    int
}

func Tally(input []string) []string {
	header := "Team                           | MP |  W |  D |  L |  P"
	teams := make(map[string]*TeamStats)

	getTeam := func(name string) *TeamStats {
		if _, ok := teams[name]; !ok {
			teams[name] = &TeamStats{Name: name}
		}
		return teams[name]
	}

	for _, line := range input {
		parts := strings.Split(line, ";")
		if len(parts) != 3 {
			continue
		}
		teamA, teamB, result := parts[0], parts[1], parts[2]

		a := getTeam(teamA)
		b := getTeam(teamB)

		switch result {
		case "win":
			a.W++
			b.L++
		case "loss":
			a.L++
			b.W++
		case "draw":
			a.D++
			b.D++
		}
	}

	var list []*TeamStats
	for _, t := range teams {
		list = append(list, t)
	}

	sort.Slice(list, func(i, j int) bool {
		p1 := list[i].W*3 + list[i].D
		p2 := list[j].W*3 + list[j].D
		if p1 != p2 {
			return p1 > p2
		}
		return list[i].Name < list[j].Name
	})

	resultRows := []string{header}
	for _, t := range list {
		mp := t.W + t.D + t.L
		p := t.W*3 + t.D
		row := fmt.Sprintf("%-31s| %2d | %2d | %2d | %2d | %2d", t.Name, mp, t.W, t.D, t.L, p)
		resultRows = append(resultRows, row)
	}

	return resultRows
}
