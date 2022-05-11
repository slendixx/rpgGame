import { Actor } from "../actors/actor";
export class Stage {
  protected id: string;
  protected actors: Actor[];
  constructor(id: string) {
    this.id = id;
    this.actors = [];
  }

  public getId() {
    return this.id;
  }
  public act(deltaTime: number) {
    //make all actors act
    this.actors.forEach((actor) => {
      actor.act(deltaTime);
    });

    //emmit stateUpdate event
  }
}
