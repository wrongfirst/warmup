from collections import deque

def measure(bucket_one: int, bucket_two: int, goal: int, start_bucket: str) -> dict:
    if goal > max(bucket_one, bucket_two):
        return {"error": "impossible"}

    b1 = bucket_one if start_bucket == "one" else 0
    b2 = bucket_two if start_bucket == "two" else 0

    forbidden = (0, bucket_two) if start_bucket == "one" else (bucket_one, 0)

    visited = {(0, 0), (b1, b2), forbidden}
    queue = deque([(b1, b2, 1)])

    while queue:
        c1, c2, moves = queue.popleft()

        if c1 == goal:
            return {"moves": moves, "goalBucket": "one", "otherBucket": c2}
        if c2 == goal:
            return {"moves": moves, "goalBucket": "two", "otherBucket": c1}

        pour1to2 = min(c1, bucket_two - c2)
        pour2to1 = min(c2, bucket_one - c1)

        next_states = [
            (bucket_one, c2),
            (c1, bucket_two),
            (0, c2),
            (c1, 0),
            (c1 - pour1to2, c2 + pour1to2),
            (c1 + pour2to1, c2 - pour2to1)
        ]

        for state in next_states:
            if state not in visited:
                visited.add(state)
                queue.append((state[0], state[1], moves + 1))

    return {"error": "impossible"}
