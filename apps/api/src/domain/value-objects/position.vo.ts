import { Position } from '@catan-mvp/types';

export class PositionVO implements Position {
  public readonly s: number;

  constructor(
    public readonly q: number,
    public readonly r: number
  ) {
    // Calculate s coordinate (cube coordinate system: q + r + s = 0)
    this.s = -q - r;
  }

  equals(other: PositionVO): boolean {
    return this.q === other.q && this.r === other.r && this.s === other.s;
  }

  distance(other: PositionVO): number {
    return (Math.abs(this.q - other.q) + Math.abs(this.r - other.r) + Math.abs(this.s - other.s)) / 2;
  }

  isAdjacent(other: PositionVO): boolean {
    return this.distance(other) === 1;
  }

  getNeighbors(): PositionVO[] {
    return [
      new PositionVO(this.q + 1, this.r),
      new PositionVO(this.q + 1, this.r - 1),
      new PositionVO(this.q, this.r - 1),
      new PositionVO(this.q - 1, this.r),
      new PositionVO(this.q - 1, this.r + 1),
      new PositionVO(this.q, this.r + 1),
    ];
  }

  toString(): string {
    return `(${this.q}, ${this.r}, ${this.s})`;
  }
}
