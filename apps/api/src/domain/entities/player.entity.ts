export class Player {
  constructor(
    public readonly id: string,
    public username: string,
    public email: string,
    public avatarUrl: string | undefined,
    public totalGames: number = 0,
    public wins: number = 0,
    public createdAt: Date = new Date()
  ) {}

  incrementGames(): void {
    this.totalGames++;
  }

  incrementWins(): void {
    this.wins++;
    this.incrementGames();
  }

  getWinRate(): number {
    if (this.totalGames === 0) return 0;
    return (this.wins / this.totalGames) * 100;
  }
}
