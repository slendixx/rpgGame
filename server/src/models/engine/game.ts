import { Stage } from "../stages/stage";
import { EffectManager } from "../effects/effect";
import { Player } from "../actors/player";

class Game {
  protected stages: Stage[];
  protected currentStage: number;
  protected previousTime: number;

  private players: Player[];

  static DEFAULT_STAGE = 0;

  constructor() {
    this.stages = [];
    this.currentStage = Game.DEFAULT_STAGE;
    this.previousTime = Date.now();
    this.players = [];
  }

  public init() {
    //init game stages
    const mainStage = new Stage("mainStage");

    this.stages.push(mainStage);
    //init event handlers and emitters
  }
  public loop() {
    const currentTime = Date.now();
    const deltaTime = currentTime - this.previousTime;

    this.stages[this.currentStage].act(deltaTime);
  }
  public cleanup() {}

  public handleAddPlayer(socket: any) {}
}

export default Game;
