import { Game } from '../entities/game.entity';

export interface IGameRepository {
  create(game: Game): Promise<Game>;
  findById(id: string): Promise<Game | null>;
  findByRoomCode(roomCode: string): Promise<Game | null>;
  findAll(): Promise<Game[]>;
  findAvailable(): Promise<Game[]>;
  update(game: Game): Promise<void>;
  delete(id: string): Promise<void>;
}
