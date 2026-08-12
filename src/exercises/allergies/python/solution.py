ALLERGENS = [
    'eggs',
    'peanuts',
    'shellfish',
    'strawberries',
    'tomatoes',
    'chocolate',
    'pollen',
    'cats'
]

def allergic_to(item: str, score: int) -> bool:
    if item not in ALLERGENS:
        return False
    index = ALLERGENS.index(item)
    return bool(score & (1 << index))

def list_allergies(score: int) -> list[str]:
    return [item for i, item in enumerate(ALLERGENS) if score & (1 << i)]
