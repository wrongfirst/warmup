SMALLS = [
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
    "seventeen", "eighteen", "nineteen",
]

TENS = [
    "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety",
]

SCALES = ["", "thousand", "million", "billion"]

def spell_three_digits(n: int) -> str:
    parts = []
    hundred = n // 100
    remainder = n % 100

    if hundred > 0:
        parts.append(f"{SMALLS[hundred]} hundred")

    if remainder > 0:
        if remainder < 20:
            parts.append(SMALLS[remainder])
        else:
            ten = remainder // 10
            unit = remainder % 10
            if unit > 0:
                parts.append(f"{TENS[ten]}-{SMALLS[unit]}")
            else:
                parts.append(TENS[ten])

    return " ".join(parts)

def say(number: int) -> str:
    if number < 0 or number >= 1000000000000:
        raise ValueError("input out of range")
    if number == 0:
        return "zero"

    num = number
    scale_idx = 0
    parts = []

    while num > 0:
        chunk = num % 1000
        if chunk > 0:
            spelled = spell_three_digits(chunk)
            scale = SCALES[scale_idx]
            if scale:
                parts.insert(0, f"{spelled} {scale}")
            else:
                parts.insert(0, spelled)
        num //= 1000
        scale_idx += 1

    return " ".join(parts)
