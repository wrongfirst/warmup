from collections import Counter

GROUP_COSTS = {
    0: 0,
    1: 800,
    2: 1520,
    3: 2160,
    4: 2560,
    5: 3000,
}

def total(basket: list[int]) -> int:
    if not basket:
        return 0

    counts = Counter(basket)
    initial_counts = tuple(sorted(counts.values(), reverse=True))

    memo = {}

    def solve(state: tuple[int, ...]) -> int:
        active = tuple(sorted((c for c in state if c > 0), reverse=True))
        if not active:
            return 0

        if active in memo:
            return memo[active]

        min_cost = float("inf")
        num_unique = len(active)

        for size in range(1, num_unique + 1):
            next_state = list(active)
            for i in range(size):
                next_state[i] -= 1
            cost = GROUP_COSTS[size] + solve(tuple(next_state))
            if cost < min_cost:
                min_cost = cost

        memo[active] = int(min_cost)
        return int(min_cost)

    return solve(initial_counts)
