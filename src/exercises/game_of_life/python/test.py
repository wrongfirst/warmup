if 'tick' not in globals():
    raise Exception("tick function is not defined")

Tests.equal_check("empty matrix", [], tick([]))
Tests.equal_check("live cells with zero neighbors die", [[0,0,0],[0,0,0],[0,0,0]], tick([[0,0,0],[0,1,0],[0,0,0]]))
Tests.equal_check("live cells with one neighbor die", [[0,0,0],[0,0,0],[0,0,0]], tick([[0,0,0],[0,1,0],[0,1,0]]))
Tests.equal_check("live cells with two neighbors stay alive", [[0,0,0],[1,0,1],[0,0,0]], tick([[1,0,1],[1,0,1],[1,0,1]]))
Tests.equal_check("live cells with three neighbors stay alive", [[0,0,0],[1,0,0],[1,1,0]], tick([[0,1,0],[1,0,0],[1,1,0]]))
Tests.equal_check("dead cells with three neighbors become alive", [[0,0,0],[1,1,0],[0,0,0]], tick([[1,1,0],[0,0,0],[1,0,0]]))
