import math

def classify(number: int) -> str:
    if number <= 0:
        raise ValueError("Classification is only possible for natural numbers.")

    if number == 1:
        return "deficient"

    aliquot_sum = 1
    limit = int(math.isqrt(number))

    for i in range(2, limit + 1):
        if number % i == 0:
            aliquot_sum += i
            other = number // i
            if other != i:
                aliquot_sum += other

    if aliquot_sum == number:
        return "perfect"
    if aliquot_sum > number:
        return "abundant"
    return "deficient"
