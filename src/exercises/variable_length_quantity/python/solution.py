def encode(numbers: list[int]) -> list[int]:
    result = []
    for n in numbers:
        n &= 0xFFFFFFFF
        bytes_list = []
        bytes_list.append(n & 0x7F)
        n >>= 7
        while n > 0:
            bytes_list.append((n & 0x7F) | 0x80)
            n >>= 7
        bytes_list.reverse()
        result.extend(bytes_list)
    return result

def decode(bytes_seq: list[int]) -> list[int]:
    result = []
    current = 0
    in_sequence = False
    for b in bytes_seq:
        current = ((current << 7) | (b & 0x7F)) & 0xFFFFFFFF
        in_sequence = True
        if not (b & 0x80):
            result.append(current)
            current = 0
            in_sequence = False
    if in_sequence:
        raise ValueError("incomplete sequence")
    return result
