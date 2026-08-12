def best_hands(hands):
    def hand_rank(hand):
        ranks = "--2345678910JQKA"
        cards = hand.split()
        r = sorted([ranks.find(c[:-1]) for c in cards], reverse=True)
        if r == [14, 5, 4, 3, 2]:
            r = [5, 4, 3, 2, 1]
        suits = [c[-1] for c in cards]
        is_flush = len(set(suits)) == 1
        is_straight = len(set(r)) == 5 and (max(r) - min(r) == 4)
        
        counts = [(r.count(x), x) for x in set(r)]
        counts.sort(reverse=True)
        counts_only = tuple(c[0] for c in counts)
        ranks_only = tuple(c[1] for c in counts)
        
        category = 0
        if is_straight and is_flush: category = 8
        elif counts_only == (4, 1): category = 7
        elif counts_only == (3, 2): category = 6
        elif is_flush: category = 5
        elif is_straight: category = 4
        elif counts_only == (3, 1, 1): category = 3
        elif counts_only == (2, 2, 1): category = 2
        elif counts_only == (2, 1, 1, 1): category = 1
        
        return (category, ranks_only)

    max_rank = max(hand_rank(h) for h in hands)
    return [h for h in hands if hand_rank(h) == max_rank]
