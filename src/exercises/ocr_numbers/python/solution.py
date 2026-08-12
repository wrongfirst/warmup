PATTERNS = {
    " _ | ||_|   ": "0",
    "     |  |   ": "1",
    " _  _||_    ": "2",
    " _  _| _|   ": "3",
    "   |_|  |   ": "4",
    " _ |_  _|   ": "5",
    " _ |_ |_|   ": "6",
    " _   |  |   ": "7",
    " _ |_||_|   ": "8",
    " _ |_| _|   ": "9",
}

def convert(input_grid: list[str]) -> str:
    if len(input_grid) % 4 != 0:
        raise ValueError("Number of input lines is not a multiple of four")

    num_cols = len(input_grid[0])
    for row in input_grid:
        if len(row) != num_cols:
            raise ValueError("Inconsistent line lengths")
    if num_cols % 3 != 0:
        raise ValueError("Number of input columns is not a multiple of three")

    grid_row_results = []

    for grid_row in range(0, len(input_grid), 4):
        line_result = []
        for col in range(0, num_cols, 3):
            cell_pattern = "".join(input_grid[grid_row + r][col:col + 3] for r in range(4))
            line_result.append(PATTERNS.get(cell_pattern, "?"))
        grid_row_results.append("".join(line_result))

    return ",".join(grid_row_results)
