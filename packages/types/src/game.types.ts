export enum GameType {
  SINGLE_PLAYER = 'single',
  MULTIPLAYER = 'multiplayer',
}

export enum GameStatus {
  WAITING = 'waiting',
  IN_PROGRESS = 'in_progress',
  FINISHED = 'finished',
}

export interface Game {
  id: string;
  roomCode?: string;
  gameType: GameType;
  isPrivate: boolean;
  maxPlayers: number;
  currentPlayers: number;
  status: GameStatus;
  winnerId?: string;
  createdAt: Date;
  startedAt?: Date;
  finishedAt?: Date;
}
