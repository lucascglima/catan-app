import { Resources } from '@catan-mvp/types';

export class ResourcesVO implements Resources {
  constructor(
    public readonly wood: number,
    public readonly brick: number,
    public readonly sheep: number,
    public readonly wheat: number,
    public readonly ore: number
  ) {
    if (wood < 0 || brick < 0 || sheep < 0 || wheat < 0 || ore < 0) {
      throw new Error('Resources cannot be negative');
    }
  }

  add(other: ResourcesVO): ResourcesVO {
    return new ResourcesVO(
      this.wood + other.wood,
      this.brick + other.brick,
      this.sheep + other.sheep,
      this.wheat + other.wheat,
      this.ore + other.ore
    );
  }

  subtract(other: ResourcesVO): ResourcesVO {
    const result = new ResourcesVO(
      this.wood - other.wood,
      this.brick - other.brick,
      this.sheep - other.sheep,
      this.wheat - other.wheat,
      this.ore - other.ore
    );

    if (result.wood < 0 || result.brick < 0 || result.sheep < 0 || result.wheat < 0 || result.ore < 0) {
      throw new Error('Insufficient resources');
    }

    return result;
  }

  hasEnough(required: ResourcesVO): boolean {
    return (
      this.wood >= required.wood &&
      this.brick >= required.brick &&
      this.sheep >= required.sheep &&
      this.wheat >= required.wheat &&
      this.ore >= required.ore
    );
  }

  total(): number {
    return this.wood + this.brick + this.sheep + this.wheat + this.ore;
  }

  static empty(): ResourcesVO {
    return new ResourcesVO(0, 0, 0, 0, 0);
  }
}
