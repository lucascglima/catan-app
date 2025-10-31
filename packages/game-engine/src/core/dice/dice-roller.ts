export class DiceRoller {
  /**
   * Roll two 6-sided dice
   * @returns Sum of two dice (2-12)
   */
  static roll(): number {
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    return die1 + die2;
  }

  /**
   * Roll with a seed for deterministic testing
   */
  static rollWithSeed(seed: number): number {
    const random = Math.sin(seed) * 10000;
    const die1 = Math.floor((random - Math.floor(random)) * 6) + 1;
    const die2 = Math.floor((random * 2 - Math.floor(random * 2)) * 6) + 1;
    return die1 + die2;
  }
}
