export class Clock {
  private totalMinutes: number;

  constructor(hour: number, minute: number = 0) {
    let total = (hour * 60 + minute) % 1440;
    if (total < 0) total += 1440;
    this.totalMinutes = total;
  }

  public toString(): string {
    const h = Math.floor(this.totalMinutes / 60);
    const m = this.totalMinutes % 60;
    const hh = String(h).padStart(2, "0");
    const mm = String(m).padStart(2, "0");
    return `${hh}:${mm}`;
  }

  public plus(minutes: number): Clock {
    return new Clock(0, this.totalMinutes + minutes);
  }

  public minus(minutes: number): Clock {
    return new Clock(0, this.totalMinutes - minutes);
  }

  public equals(other: Clock): boolean {
    return this.toString() === other.toString();
  }
}
