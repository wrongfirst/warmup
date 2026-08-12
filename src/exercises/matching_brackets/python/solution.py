def is_paired(input_string: str) -> bool:
    stack = []
    pairs = {"]": "[", "}": "{", ")": "("}
    opens = {"[", "{", "("}

    for char in input_string:
        if char in opens:
            stack.append(char)
        elif char in pairs:
            if not stack or stack.pop() != pairs[char]:
                return False

    return len(stack) == 0
