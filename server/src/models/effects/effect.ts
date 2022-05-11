import { Ability } from "../abilities/ability";
/**
 * Implemented by those classes that you can apply effects to
 */
export interface Affectable {
  applyDamage: (magnitude: number) => void;
}

export enum DurationType {
  INSTANT,
}

export enum TargetType {
  SINGLE,
  GROUP,
}
export enum EffectIds {
  DAMAGE,
}

export class Effect {
  protected id: EffectIds;
  protected durationType: DurationType;
  protected magnitude: number;

  constructor(id: EffectIds, durationType: DurationType, magnitude: number) {
    this.id = id;
    this.durationType = durationType;
    this.magnitude = magnitude;
  }
  public getId() {
    return this.id;
  }
  public getMagnitude() {
    return this.magnitude;
  }
}

export class EffectManager {
  private static appliedEffectsQueue: AppliedEffect[] = [];

  public static queueAbilityEffects(ability: Ability, targets: Affectable[]) {
    ability.getEffects().forEach((effect) => {
      this.appliedEffectsQueue.push(new AppliedEffect(effect, targets));
    });
  }

  public static applyEffects() {
    this.appliedEffectsQueue.forEach((appliedEffect) => {
      const effect = appliedEffect.getEffect();
      const targets = appliedEffect.getTargets();

      targets.forEach((affected) => {
        switch (effect.getId()) {
          case EffectIds.DAMAGE:
            affected.applyDamage(effect.getMagnitude());
            break;
        }
      });
    });

    //once all effects are applied, reset the queue
    this.appliedEffectsQueue = [];
  }
}

export class AppliedEffect {
  private targets: Affectable[];
  private effect: Effect;

  constructor(effect: Effect, targets: Affectable[]) {
    this.effect = effect;
    this.targets = targets;
  }
  public getTargets() {
    return this.targets;
  }
  public getEffect() {
    return this.effect;
  }
}
