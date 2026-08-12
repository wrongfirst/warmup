class Clock:
    def __init__(self, hour: int, minute: int = 0):
        total = (hour * 60 + minute) % 1440
        if total < 0:
            total += 1440
        self.total_minutes = total

    def __repr__(self) -> str:
        h = self.total_minutes // 60
        m = self.total_minutes % 60
        return f"{h:02d}:{m:02d}"

    def __str__(self) -> str:
        return repr(self)

    def __eq__(self, other: object) -> bool:
        if not isinstance(other, Clock):
            return False
        return self.total_minutes == other.total_minutes

    def __add__(self, minutes: int) -> "Clock":
        return Clock(0, self.total_minutes + minutes)

    def __sub__(self, minutes: int) -> "Clock":
        return Clock(0, self.total_minutes - minutes)
