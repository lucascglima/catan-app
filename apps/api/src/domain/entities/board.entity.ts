import { Board, HexTile, Building, Position } from '@catan-mvp/types';

export class BoardEntity implements Board {
  constructor(
    public hexagons: HexTile[],
    public buildings: Building[],
    public robberPosition: Position
  ) {}

  getHexagonAt(position: Position): HexTile | undefined {
    return this.hexagons.find(hex => hex.position.q === position.q && hex.position.r === position.r);
  }

  addBuilding(building: Building): void {
    this.buildings.push(building);
  }

  moveRobber(position: Position): void {
    const hex = this.getHexagonAt(position);
    if (!hex) {
      throw new Error('Invalid robber position');
    }

    // Remove robber from old position
    this.hexagons.forEach(h => (h.hasRobber = false));

    // Set new robber position
    hex.hasRobber = true;
    this.robberPosition = position;
  }

  getBuildingsForPlayer(playerId: string): Building[] {
    return this.buildings.filter(b => b.playerId === playerId);
  }
}
