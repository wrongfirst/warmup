class Clock:
    def __init__(self, hour: int, minute: int = 0):
        # Your code here
        pass

    def __repr__(self) -> str:
        return "00:00"

    def __eq__(self, other: object) -> bool:
        return False

    def __add__(self, minutes: int) -> "Clock":
        return self

    def __sub__(self, minutes: int) -> "Clock":
        return self
