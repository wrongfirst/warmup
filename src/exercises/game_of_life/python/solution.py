def tick(matrix: list[list[int]]) -> list[list[int]]:
    if not matrix or not matrix[0]:
        return []

    rows = len(matrix)
    cols = len(matrix[0])
    result = [[0] * cols for _ in range(rows)]

    for r in range(rows):
        for c in range(cols):
            live_neighbors = 0
            for dr in (-1, 0, 1):
                for dc in (-1, 0, 1):
                    if dr == 0 and dc == 0:
                        continue
                    nr, nc = r + dr, c + dc
                    if 0 <= nr < rows and 0 <= nc < cols:
                        if matrix[nr][nc] == 1:
                            live_neighbors += 1

            if matrix[r][c] == 1:
                result[r][c] = 1 if live_neighbors in (2, 3) else 0
            else:
                result[r][c] = 1 if live_neighbors == 3 else 0

    return result
