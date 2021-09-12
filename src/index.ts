import { Vec2 } from "wtc-math";

class Grid {
  static defaults = {
    size: new Vec2(512, 512),
    cellSize: new Vec2(50, 50),
    fill: null,
  };
  #grid = [];
  #size;
  #cellSize;

  constructor(settings) {
    settings = Object.assign({}, Grid.defaults, settings);
    this.#size = Vec2.interpolate(settings.size) || Grid.defaults.size;
    this.#cellSize =
      Vec2.interpolate(settings.cellSize) || Grid.defaults.cellSize;
    this.#grid.length = this.gridSize.area;
    this.#grid.fill(settings.fill || Grid.defaults.fill);
  }

  addChild(child, i) {
    this.#grid[i] = child;
  }
  addChildAtPosition(child, pos) {
    this.#grid[this.getArrayPosition(pos)] = child;
  }
  addChildAtGridPosition(child, gridPos) {
    this.#grid[this.getArrayPositionFromGridPos(gridPos)] = child;
  }

  getChild(i) {
    return this.#grid[i];
  }
  getChildAtPosition(pos) {
    return this.#grid[this.getArrayPosition(pos)];
  }
  getChildAtGridPosition(gridPos) {
    return this.#grid[this.getArrayPositionFromGridPos(gridPos)];
  }

  getGridPositionForIndex(i) {
    const gsize = this.gridSize;
    return new Vec2(i % gsize.x, Math.floor(i / gsize.x));
  }

  getArrayPositionFromGridPos(gpos) {
    const gsize = this.gridSize;
    if (gpos.x < 0 || gpos.x >= gsize.x || gpos.y < 0 || gpos.y >= gsize.y)
      return null;

    gpos.x = gpos.x % gsize.x;
    const arraypos = gpos.x + gpos.y * gsize.x;
    return arraypos;
  }

  getArrayPosition(realPos) {
    const gpos = this.getGridPos(realPos);
    return this.getArrayPositionFromGridPos(gpos);
  }

  getGridPos(realPos) {
    if (realPos instanceof Vec2) {
      return realPos.divideNew(this.#cellSize).floor();
    }
    // Throw an error
  }
  getSubPos(realPos) {
    if (realPos instanceof Vec2) {
      return realPos.modNew(this.#cellSize);
    }
    // Throw an error
  }
  getRealPos(gridPos) {
    if (gridPos instanceof Vec2) {
      return gridPos.multiplyNew(this.#cellSize);
    }
    // Throw an error
  }

  get size() {
    return this.#size;
  }
  get gridSize() {
    return this.#size.divideNew(this.#cellSize).floor();
  }
  get cellSize() {
    return this.#cellSize;
  }
  get length() {
    return this.#grid.length;
  }
}

export { Grid }