// @ts-nocheck
if (typeof Tree !== "function") {
  throw new Error("Tree class is not defined");
}

const leaf = new Tree("x");
Tests.equalCheck("singleton fromPov", "x", leaf.fromPov("x").value);

const t = new Tree("parent", [new Tree("x"), new Tree("y")]);
const reparented = t.fromPov("x");
Tests.equalCheck("x is new root", "x", reparented.value);
Tests.equalCheck("x has parent as child", "parent", reparented.children[0].value);

Tests.equalCheck("pathTo simple", JSON.stringify(["x", "parent", "y"]), JSON.stringify(t.pathTo("x", "y")));
