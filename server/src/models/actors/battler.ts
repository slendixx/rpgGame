import { Ability } from "../abilities/ability";
import { Actor } from "./actor";

export class Battler extends Actor {
  protected hp: number;
  protected abilities: Ability[];

  constructor(id: string, hp: number) {
    super(id);
    this.hp = hp;
    this.abilities = [];
  }

  public getHp() {
    return this.hp;
  }
  public setHp(hp: number) {
    this.hp = hp;
  }

  public getAbilities() {
    return this.abilities;
  }
  public addAbility(ability: Ability) {
    this.abilities.push(ability);
  }

  /**
   * @implements
   */
  applyDamage(magnitude: number) {
    const newHp = this.hp - magnitude;
    if (newHp < 0) this.hp = 0;
    else this.hp = newHp;
  }
}
