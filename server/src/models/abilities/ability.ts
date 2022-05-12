import { Effect } from "../effects/effect";
export class Ability {
  protected effects: Effect[];
  protected castTime: number;
  protected cooldownTime: number;
  protected magnitude: number;

  constructor(castTime: number, cooldownTime: number, magnitude: number) {
    this.effects = [];
    this.castTime = castTime;
    this.cooldownTime = cooldownTime;
    this.magnitude = magnitude;
  }

  public getEffects() {
    return this.effects;
  }
  public addEffect(effect: Effect) {
    this.effects.push(effect);
  }
}
