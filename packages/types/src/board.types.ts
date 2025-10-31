export enum ResourceType {
  WOOD = 'wood',
  BRICK = 'brick',
  SHEEP = 'sheep',
  WHEAT = 'wheat',
  ORE = 'ore',
  DESERT = 'desert',
}

export interface HexTile {
  id: number;
  resourceType: ResourceType;
  diceNumber?: number; // 2-12, undefined for desert
  position: { q: number; r: number }; // Cube coordinates
  hasRobber: boolean;
}

export enum BuildingType {
  ROAD = 'road',
  SETTLEMENT = 'settlement',
  CITY = 'city',
}

export interface Building {
  type: BuildingType;
  playerId: string;
  position: Position;
}

export interface Position {
  q: number;
  r: number;
  s?: number;
}

export interface Board {
  hexagons: HexTile[];
  buildings: Building[];
  robberPosition: Position;
}
