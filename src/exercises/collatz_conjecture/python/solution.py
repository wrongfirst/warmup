def steps(number: int) -> int:
    if number <= 0:
        raise ValueError("Only positive integers are allowed")

    count = 0
    curr = number

    while curr != 1:
        if curr % 2 == 0:
            curr //= 2
        else:
            curr = 3 * curr + 1
        count += 1

    return count
