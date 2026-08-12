class BowlingGame:
    def __init__(self):
        self._rolls = []

    def roll(self, pins: int):
        if pins < 0 or pins > 10:
            raise ValueError("Pins must have a value from 0 to 10")
        if self._is_complete():
            raise ValueError("Cannot roll after game is over")

        rolls_so_far = self._rolls + [pins]
        frame = 1
        idx = 0

        while idx < len(rolls_so_far) and frame <= 10:
            if frame < 10:
                if rolls_so_far[idx] == 10:
                    idx += 1
                    frame += 1
                else:
                    if idx + 1 < len(rolls_so_far):
                        if rolls_so_far[idx] + rolls_so_far[idx + 1] > 10:
                            raise ValueError("Pin count exceeds 10 in a frame")
                        idx += 2
                        frame += 1
                    else:
                        idx += 1
            else:
                r1 = rolls_so_far[idx]
                r2 = rolls_so_far[idx + 1] if idx + 1 < len(rolls_so_far) else None
                r3 = rolls_so_far[idx + 2] if idx + 2 < len(rolls_so_far) else None

                if r1 != 10 and r2 is not None and r1 + r2 > 10:
                    raise ValueError("Pin count exceeds 10 in a frame")
                if r1 == 10 and r2 is not None and r2 != 10 and r3 is not None and r2 + r3 > 10:
                    raise ValueError("Pin count exceeds 10 in a frame")
                idx = len(rolls_so_far)

        self._rolls.append(pins)

    def _is_complete(self) -> bool:
        frame = 1
        idx = 0
        while idx < len(self._rolls) and frame <= 10:
            if frame < 10:
                if self._rolls[idx] == 10:
                    idx += 1
                else:
                    idx += 2
                frame += 1
            else:
                if len(self._rolls) - idx < 2:
                    return False
                r1 = self._rolls[idx]
                r2 = self._rolls[idx + 1]

                if r1 == 10 or r1 + r2 == 10:
                    return len(self._rolls) - idx == 3
                return len(self._rolls) - idx == 2
        return False

    def score(self) -> int:
        if not self._is_complete():
            raise ValueError("Score cannot be taken until the end of the game")

        total = 0
        idx = 0

        for frame in range(1, 11):
            if self._rolls[idx] == 10:
                total += 10 + self._rolls[idx + 1] + self._rolls[idx + 2]
                idx += 1
            elif self._rolls[idx] + self._rolls[idx + 1] == 10:
                total += 10 + self._rolls[idx + 2]
                idx += 2
            else:
                total += self._rolls[idx] + self._rolls[idx + 1]
                idx += 2

        return total
