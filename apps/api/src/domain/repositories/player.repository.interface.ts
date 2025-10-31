import { Player } from '../entities/player.entity';

export interface IPlayerRepository {
  create(player: Player): Promise<Player>;
  findById(id: string): Promise<Player | null>;
  findByEmail(email: string): Promise<Player | null>;
  findByUsername(username: string): Promise<Player | null>;
  update(player: Player): Promise<void>;
  delete(id: string): Promise<void>;
}
