// @ts-nocheck
if (typeof Build !== "function") {
  throw new Error("Build function is not defined");
}

Tests.equalCheck("empty list", null, Build([]));
Tests.equalCheck("one node", 0, Build([{ id: 0, parent: 0 }])!.id);

const tree = Build([
  { id: 0, parent: 0 },
  { id: 1, parent: 0 },
  { id: 2, parent: 0 },
]);
Tests.equalCheck("root id", 0, tree!.id);
Tests.equalCheck("root children count", 2, tree!.children.length);

let caught = false;
try {
  Build([{ id: 0, parent: 1 }]);
} catch {
  caught = true;
}
Tests.boolCheck("invalid root parent error", caught);
