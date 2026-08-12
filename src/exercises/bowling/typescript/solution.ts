export class Bowling {
  private rolls: number[] = [];

  public roll(pins: number): void {
    if (pins < 0 || pins > 10) {
      throw new Error("Pins must have a value from 0 to 10");
    }
    if (this.isComplete()) {
      throw new Error("Cannot roll after game is over");
    }

    const rollsSoFar = [...this.rolls, pins];
    let frame = 1;
    let idx = 0;

    while (idx < rollsSoFar.length && frame <= 10) {
      if (frame < 10) {
        if (rollsSoFar[idx] === 10) {
          idx++;
          frame++;
        } else {
          if (idx + 1 < rollsSoFar.length) {
            if (rollsSoFar[idx] + rollsSoFar[idx + 1] > 10) {
              throw new Error("Pin count exceeds 10 in a frame");
            }
            idx += 2;
            frame++;
          } else {
            idx++;
          }
        }
      } else {
        const r1 = rollsSoFar[idx];
        const r2 = idx + 1 < rollsSoFar.length ? rollsSoFar[idx + 1] : null;
        const r3 = idx + 2 < rollsSoFar.length ? rollsSoFar[idx + 2] : null;

        if (r1 !== 10 && r2 !== null && r1 + r2 > 10) {
          throw new Error("Pin count exceeds 10 in a frame");
        }
        if (r1 === 10 && r2 !== null && r2 !== 10 && r3 !== null && r2 + r3 > 10) {
          throw new Error("Pin count exceeds 10 in a frame");
        }
        idx = rollsSoFar.length;
      }
    }

    this.rolls.push(pins);
  }

  private isComplete(): boolean {
    let frame = 1;
    let idx = 0;
    while (idx < this.rolls.length && frame <= 10) {
      if (frame < 10) {
        if (this.rolls[idx] === 10) {
          idx++;
        } else {
          idx += 2;
        }
        frame++;
      } else {
        if (this.rolls.length - idx < 2) return false;
        const r1 = this.rolls[idx];
        const r2 = this.rolls[idx + 1];

        if (r1 === 10 || r1 + r2 === 10) {
          return this.rolls.length - idx === 3;
        }
        return this.rolls.length - idx === 2;
      }
    }
    return false;
  }

  public score(): number | { error: string } {
    try {
      if (!this.isComplete()) {
        return { error: "Score cannot be taken until the end of the game" };
      }

      let totalScore = 0;
      let idx = 0;

      for (let frame = 1; frame <= 10; frame++) {
        if (this.rolls[idx] === 10) {
          totalScore += 10 + this.rolls[idx + 1] + this.rolls[idx + 2];
          idx++;
        } else if (this.rolls[idx] + this.rolls[idx + 1] === 10) {
          totalScore += 10 + this.rolls[idx + 2];
          idx += 2;
        } else {
          totalScore += this.rolls[idx] + this.rolls[idx + 1];
          idx += 2;
        }
      }

      return totalScore;
    } catch (err: any) {
      return { error: err.message };
    }
  }
}
