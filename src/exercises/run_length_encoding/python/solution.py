import re

def encode(string: str) -> str:
    if not string:
        return ""
    res = []
    count = 1
    for i in range(len(string)):
        if i + 1 < len(string) and string[i] == string[i + 1]:
            count += 1
        else:
            res.append(f"{count if count > 1 else ''}{string[i]}")
            count = 1
    return "".join(res)

def decode(string: str) -> str:
    if not string:
        return ""
    res = []
    count_str = ""
    for char in string:
        if char.isdigit():
            count_str += char
        else:
            count = int(count_str) if count_str else 1
            res.append(char * count)
            count_str = ""
    return "".join(res)
