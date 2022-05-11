export class Actor {
  protected id: string;
  protected posX: number;
  protected posY: number;

  static DEFAULT_POS_X = 0.0;
  static DEFAULT_POS_Y = 0.0;

  constructor(id: string) {
    this.id = id;
    this.posX = Actor.DEFAULT_POS_X;
    this.posY = Actor.DEFAULT_POS_Y;
  }

  public getId() {
    return this.id;
  }

  public act(deltaTime: number) {
    //
  }
}
export default Actor;
