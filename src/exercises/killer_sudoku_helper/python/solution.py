def combinations(target: int, size: int, exclude: list[int]) -> list[list[int]]:
    excluded_set = set(exclude or [])
    result = []

    def backtrack(start_digit: int, current_combo: list[int], current_sum: int):
        if len(current_combo) == size:
            if current_sum == target:
                result.append(list(current_combo))
            return

        for digit in range(start_digit, 10):
            if digit in excluded_set:
                continue
            if current_sum + digit > target:
                break

            current_combo.append(digit)
            backtrack(digit + 1, current_combo, current_sum + digit)
            current_combo.pop()

    backtrack(1, [], 0)
    return result
