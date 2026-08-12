import re

def abbreviate(words: str) -> str:
    cleaned = words.replace("_", "").replace("-", " ")
    tokens = re.findall(r"[A-Za-z0-9]+", cleaned)
    return "".join(token[0].upper() for token in tokens)
