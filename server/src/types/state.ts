import Actor from "../models/actors/actor";

/**
 * State is an abstraction for all values required by the client to render a game frame
 */
class State {
  private actors: Actor[];
  private deltaTime: number;

  constructor(deltaTime: number, actors: Actor[]) {
    this.actors = actors;
    this.deltaTime = deltaTime;
  }

  toJSON() {
    return {
      deltaTime: this.deltaTime,
      actors: this.actors,
    };
  }
}

export default State;
