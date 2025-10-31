export enum PlayerColor {
  RED = 'red',
  BLUE = 'blue',
  WHITE = 'white',
  ORANGE = 'orange',
}

export interface Player {
  id: string;
  username: string;
  email: string;
  avatarUrl?: string;
  totalGames: number;
  wins: number;
  createdAt: Date;
}

export interface GamePlayer {
  id: string;
  gameId: string;
  playerId: string;
  isBot: boolean;
  playerOrder: number;
  color: PlayerColor;
  victoryPoints: number;
  resources: Resources;
  developmentCards: DevelopmentCard[];
  joinedAt: Date;
}

export interface Resources {
  wood: number;
  brick: number;
  sheep: number;
  wheat: number;
  ore: number;
}

export enum DevelopmentCardType {
  KNIGHT = 'knight',
  VICTORY_POINT = 'victory_point',
  ROAD_BUILDING = 'road_building',
  YEAR_OF_PLENTY = 'year_of_plenty',
  MONOPOLY = 'monopoly',
}

export interface DevelopmentCard {
  type: DevelopmentCardType;
  played: boolean;
}
