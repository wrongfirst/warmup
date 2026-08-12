def saddle_points(matrix):
    if not matrix or not matrix[0]:
        return []
    
    rows = len(matrix)
    cols = len(matrix[0])
    
    points = []
    for r in range(rows):
        row_max = max(matrix[r])
        for c in range(cols):
            val = matrix[r][c]
            if val == row_max:
                col_vals = [matrix[k][c] for k in range(rows)]
                if val == min(col_vals):
                    points.append({"row": r + 1, "column": c + 1})
    return points
