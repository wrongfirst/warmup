if 'Graph' not in globals():
    raise Exception("Graph class is not defined")

empty_g = Graph()
Tests.equal_check("empty graph nodes", 0, len(empty_g.nodes))
Tests.equal_check("empty graph edges", 0, len(empty_g.edges))

g = Graph([
    (ATTR, "bgcolor", "yellow"),
    (NODE, "a", {"color": "red"}),
    (NODE, "b", {"color": "blue"}),
    (EDGE, "a", "b", {"color": "green"}),
])

Tests.equal_check("graph attrs", "yellow", g.attrs["bgcolor"])
Tests.equal_check("graph nodes count", 2, len(g.nodes))
Tests.equal_check("graph node a attr", "red", g.nodes[0].attrs["color"])
Tests.equal_check("graph edges count", 1, len(g.edges))
Tests.equal_check("graph edge a-b attr", "green", g.edges[0].attrs["color"])
