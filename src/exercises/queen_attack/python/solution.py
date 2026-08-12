def create(queen: dict):
    pos = queen.get("position", {})
    row = pos.get("row", 0)
    column = pos.get("column", 0)
    if row < 0:
        return {"error": "row not positive"}
    if row > 7:
        return {"error": "row not on board"}
    if column < 0:
        return {"error": "column not positive"}
    if column > 7:
        return {"error": "column not on board"}
    return 0

def can_attack(white_queen: dict, black_queen: dict) -> bool:
    w = white_queen.get("position", {})
    b = black_queen.get("position", {})
    w_row, w_col = w.get("row", 0), w.get("column", 0)
    b_row, b_col = b.get("row", 0), b.get("column", 0)
    return w_row == b_row or w_col == b_col or abs(w_row - b_row) == abs(w_col - b_col)
