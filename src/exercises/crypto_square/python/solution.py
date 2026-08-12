import math
import re

def cipher_text(plain_text: str) -> str:
    normalized = re.sub(r"[^a-z0-9]", "", plain_text.lower())
    if not normalized:
        return ""

    length = len(normalized)
    c = math.ceil(math.sqrt(length))
    r = c - 1 if (c - 1) * c >= length else c

    padded = normalized.ljust(r * c, " ")

    columns = []
    for col in range(c):
        col_str = "".join(padded[row * c + col] for row in range(r))
        columns.append(col_str)

    return " ".join(columns)
