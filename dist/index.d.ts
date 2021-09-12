import { Vec2 } from "wtc-math";
declare class Grid {
    #private;
    static defaults: {
        size: Vec2;
        cellSize: Vec2;
        fill: any;
    };
    constructor(settings: any);
    addChild(child: any, i: any): void;
    addChildAtPosition(child: any, pos: any): void;
    addChildAtGridPosition(child: any, gridPos: any): void;
    getChild(i: any): any;
    getChildAtPosition(pos: any): any;
    getChildAtGridPosition(gridPos: any): any;
    getGridPositionForIndex(i: any): Vec2;
    getArrayPositionFromGridPos(gpos: any): any;
    getArrayPosition(realPos: any): any;
    getGridPos(realPos: any): Vec2;
    getSubPos(realPos: any): Vec2;
    getRealPos(gridPos: any): Vec2;
    get size(): any;
    get gridSize(): any;
    get cellSize(): any;
    get length(): number;
}
export { Grid };
