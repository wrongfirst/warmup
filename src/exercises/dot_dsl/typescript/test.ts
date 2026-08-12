// @ts-nocheck
if (typeof Graph !== "function") {
  throw new Error("Graph class is not defined");
}

const emptyGraph = new Graph();
Tests.equalCheck("empty graph nodes", 0, emptyGraph.nodes.length);
Tests.equalCheck("empty graph edges", 0, emptyGraph.edges.length);

const g = new Graph([
  new Attr("bgcolor", "yellow"),
  new Node("a", { color: "red" }),
  new Node("b", { color: "blue" }),
  new Edge("a", "b", { color: "green" }),
]);

Tests.equalCheck("graph attrs", "yellow", g.attrs["bgcolor"]);
Tests.equalCheck("graph nodes count", 2, g.nodes.length);
Tests.equalCheck("graph node a attr", "red", g.nodes[0].attrs["color"]);
Tests.equalCheck("graph edges count", 1, g.edges.length);
Tests.equalCheck("graph edge a-b attr", "green", g.edges[0].attrs["color"]);
