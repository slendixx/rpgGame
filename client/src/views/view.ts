abstract class View {
  private parent: Element;
  private visible: boolean;

  constructor(parent: Element, visible: boolean) {
    this.parent = parent;
    this.visible = visible;

    this.registerEventListeners();
  }

  public setVisible(visible: boolean) {
    this.visible = visible;
  }
  public getVisible() {
    return this.visible;
  }
  public setParent(parent: Element) {
    this.parent = parent;
  }
  public getParent() {
    return this.parent;
  }

  public registerEventListeners() {}
  public abstract update(): void;
  public abstract render(): void;
}

export default View;
