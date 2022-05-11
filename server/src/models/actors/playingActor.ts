import Actor from "./actor";
import Ability from "../abilities/ability";
import { Affectable } from "../effects/effect";

class PlayingActor extends Actor implements Affectable {
  protected hp: number;
  protected abilities: Ability[];

  constructor(id: string, hp: number, abilities: Ability[]) {
    super(id);
    this.hp = hp;
    this.abilities = abilities;
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

  /**
   * @implements
   */
  applyDamage(magnitude: number) {
    const newHp = this.hp - magnitude;
    if (newHp < 0) this.hp = 0;
    else this.hp = newHp;
  }
}

export default PlayingActor;
