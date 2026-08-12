export type Direction = "north" | "east" | "south" | "west";
export type Coordinates = [number, number];

export class Robot {
  public get bearing(): Direction {
    // Your code here
    return "north";
  }

  public get coordinates(): Coordinates {
    // Your code here
    return [0, 0];
  }

  public place(position: { x: number; y: number; direction: Direction }): void {
    // Your code here
  }

  public evaluate(instructions: string): void {
    // Your code here
  }
}
