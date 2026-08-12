def count(lines: list[str]) -> int:
    if not lines or not lines[0]:
        return 0

    rows = len(lines)
    cols = len(lines[0])
    total = 0

    for r1 in range(rows):
        for c1 in range(cols):
            if lines[r1][c1] != '+':
                continue

            for r2 in range(r1 + 1, rows):
                for c2 in range(c1 + 1, cols):
                    if (lines[r1][c2] == '+' and
                        lines[r2][c1] == '+' and
                        lines[r2][c2] == '+'):

                        valid = True
                        for c in range(c1 + 1, c2):
                            if lines[r1][c] not in ('-', '+') or lines[r2][c] not in ('-', '+'):
                                valid = False
                                break

                        if not valid:
                            continue

                        for r in range(r1 + 1, r2):
                            if lines[r][c1] not in ('|', '+') or lines[r][c2] not in ('|', '+'):
                                valid = False
                                break

                        if valid:
                            total += 1

    return total
