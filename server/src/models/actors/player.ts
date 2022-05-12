import { Battler } from "./battler";
import { Ability } from "../abilities/ability";
import { Effect, EffectIds, DurationType } from "../effects/effect";

export class Player {
  private socket: any;
  private battlerActor: Battler;

  constructor(socket: any) {
    this.socket = socket;
    //get data for the player's battler actor

    this.battlerActor = new Battler(socket.id, 100);
  }
}
