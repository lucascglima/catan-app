import { GameType, GameStatus } from '@catan-mvp/types';

export class Game {
  constructor(
    public readonly id: string,
    public roomCode: string,
    public gameType: GameType,
    public isPrivate: boolean,
    public maxPlayers: number,
    public currentPlayers: number,
    public status: GameStatus,
    public winnerId?: string,
    public createdAt: Date = new Date(),
    public startedAt?: Date,
    public finishedAt?: Date
  ) {}

  canStart(): boolean {
    return this.currentPlayers >= 3 && this.status === GameStatus.WAITING;
  }

  isFull(): boolean {
    return this.currentPlayers >= this.maxPlayers;
  }

  start(): void {
    if (!this.canStart()) {
      throw new Error('Game cannot be started');
    }
    this.status = GameStatus.IN_PROGRESS;
    this.startedAt = new Date();
  }

  finish(winnerId: string): void {
    this.status = GameStatus.FINISHED;
    this.winnerId = winnerId;
    this.finishedAt = new Date();
  }

  addPlayer(): void {
    if (this.isFull()) {
      throw new Error('Game is full');
    }
    this.currentPlayers++;
  }

  removePlayer(): void {
    if (this.currentPlayers > 0) {
      this.currentPlayers--;
    }
  }
}
