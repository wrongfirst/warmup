def gamestate(board: list[str]) -> str:
    count_x = sum(row.count('X') for row in board)
    count_o = sum(row.count('O') for row in board)

    if count_o > count_x or count_x > count_o + 1:
        raise ValueError("Wrong turn order")

    lines = [
        [board[0][0], board[0][1], board[0][2]],
        [board[1][0], board[1][1], board[1][2]],
        [board[2][0], board[2][1], board[2][2]],
        [board[0][0], board[1][0], board[2][0]],
        [board[0][1], board[1][1], board[2][1]],
        [board[0][2], board[1][2], board[2][2]],
        [board[0][0], board[1][1], board[2][2]],
        [board[0][2], board[1][1], board[2][0]]
    ]

    x_wins = any(line == ['X', 'X', 'X'] for line in lines)
    o_wins = any(line == ['O', 'O', 'O'] for line in lines)

    if x_wins and o_wins:
        raise ValueError("Impossible board: game should have ended after win")
    if x_wins and count_x == count_o:
        raise ValueError("Impossible board: game should have ended after win")
    if o_wins and count_x > count_o:
        raise ValueError("Impossible board: game should have ended after win")

    if x_wins or o_wins:
        return "win"
    if count_x + count_o == 9:
        return "draw"
    return "ongoing"
