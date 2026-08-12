from collections import Counter

def score(dice: list[int], category: str) -> int:
    counts = Counter(dice)
    cat = category.lower()
    
    if cat == "ones": return counts[1] * 1
    if cat == "twos": return counts[2] * 2
    if cat == "threes": return counts[3] * 3
    if cat == "fours": return counts[4] * 4
    if cat == "fives": return counts[5] * 5
    if cat == "sixes": return counts[6] * 6
    if cat == "choice": return sum(dice)
    if cat == "yacht": return 50 if len(counts) == 1 else 0
    if cat == "full house":
        values = sorted(counts.values())
        return sum(dice) if values == [2, 3] else 0
    if cat == "four of a kind":
        for val, count in counts.items():
            if count >= 4: return val * 4
        return 0
    sorted_dice = sorted(dice)
    if cat == "little straight":
        return 30 if sorted_dice == [1, 2, 3, 4, 5] else 0
    if cat == "big straight":
        return 30 if sorted_dice == [2, 3, 4, 5, 6] else 0
    return 0
