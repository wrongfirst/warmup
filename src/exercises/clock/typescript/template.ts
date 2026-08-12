export class Clock {
  constructor(hour: number, minute: number = 0) {
    // Your code here
  }

  public toString(): string {
    // Your code here
    return "00:00";
  }

  public plus(minutes: number): Clock {
    // Your code here
    return this;
  }

  public minus(minutes: number): Clock {
    // Your code here
    return this;
  }

  public equals(other: Clock): boolean {
    // Your code here
    return false;
  }
}
