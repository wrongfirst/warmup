export type Direction = "north" | "east" | "south" | "west";
export type Coordinates = [number, number];

const DIRECTIONS: Direction[] = ["north", "east", "south", "west"];

export class Robot {
  private x: number = 0;
  private y: number = 0;
  private dirIdx: number = 0;

  public get bearing(): Direction {
    return DIRECTIONS[this.dirIdx];
  }

  public get coordinates(): Coordinates {
    return [this.x, this.y];
  }

  public place(position: { x: number; y: number; direction: Direction }): void {
    this.x = position.x;
    this.y = position.y;
    const idx = DIRECTIONS.indexOf(position.direction);
    if (idx !== -1) {
      this.dirIdx = idx;
    }
  }

  public turnRight(): void {
    this.dirIdx = (this.dirIdx + 1) % 4;
  }

  public turnLeft(): void {
    this.dirIdx = (this.dirIdx + 3) % 4;
  }

  public advance(): void {
    const dir = this.bearing;
    if (dir === "north") this.y++;
    else if (dir === "east") this.x++;
    else if (dir === "south") this.y--;
    else if (dir === "west") this.x--;
  }

  public evaluate(instructions: string): void {
    for (const char of instructions) {
      if (char === "R") this.turnRight();
      else if (char === "L") this.turnLeft();
      else if (char === "A") this.advance();
    }
  }
}
