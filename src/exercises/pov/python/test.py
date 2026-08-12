if 'Tree' not in globals():
    raise Exception("Tree class is not defined")

leaf = Tree("x")
Tests.equal_check("singleton fromPov", "x", leaf.from_pov("x").label)

t = Tree("parent", [Tree("x"), Tree("y")])
reparented = t.from_pov("x")
Tests.equal_check("x is new root", "x", reparented.label)
Tests.equal_check("x has parent as child", "parent", reparented.children[0].label)

Tests.equal_check("pathTo simple", ["x", "parent", "y"], t.path_to("x", "y"))
