def keep(seq, predicate):
    result = []
    for item in seq:
        if predicate(item):
            result.append(item)
    return result

def discard(seq, predicate):
    result = []
    for item in seq:
        if not predicate(item):
            result.append(item)
    return result
