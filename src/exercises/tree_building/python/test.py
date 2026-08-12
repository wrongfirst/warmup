if 'Build' not in globals():
    raise Exception("Build function is not defined")

Tests.equal_check("empty list", None, Build([]))
Tests.equal_check("one node", 0, Build([Record(0, 0)]).node_id)

tree = Build([Record(0, 0), Record(1, 0), Record(2, 0)])
Tests.equal_check("root id", 0, tree.node_id)
Tests.equal_check("root children count", 2, len(tree.children))

caught = False
try:
    Build([Record(0, 1)])
except ValueError:
    caught = True
Tests.bool_check("invalid root parent error", caught)
