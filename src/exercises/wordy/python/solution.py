import re

def answer(question: str) -> int:
    if not question.startswith("What is ") or not question.endswith("?"):
        raise ValueError("syntax error")

    expr = question[8:-1].strip()
    if not expr:
        raise ValueError("syntax error")

    normalized = expr.replace("multiplied by", "multiplied_by").replace("divided by", "divided_by")
    tokens = normalized.split()

    if not tokens:
        raise ValueError("syntax error")

    acc = None
    op = None

    for token in tokens:
        if re.match(r"^-?\d+$", token):
            num = int(token)
            if acc is None:
                if op is not None:
                    raise ValueError("syntax error")
                acc = num
            else:
                if op is None:
                    raise ValueError("syntax error")
                if op == "plus":
                    acc += num
                elif op == "minus":
                    acc -= num
                elif op == "multiplied_by":
                    acc *= num
                elif op == "divided_by":
                    acc //= num
                else:
                    raise ValueError("unknown operation")
                op = None
        elif token in ("plus", "minus", "multiplied_by", "divided_by"):
            if acc is None or op is not None:
                raise ValueError("syntax error")
            op = token
        else:
            if re.match(r"^\d+$", token):
                raise ValueError("syntax error")
            raise ValueError("unknown operation")

    if acc is None or op is not None:
        raise ValueError("syntax error")

    return acc
