
/**
 *
 */
export class Point {

    static distance (
        point1: {x: number, y: number} | PIXI.Point,
        point2: {x: number, y: number} | PIXI.Point
    ) {
        return Math.sqrt(
            Math.pow(point1.x - point2.x, 2) +
            Math.pow(point1.y - point2.y, 2)
        );
    }
}
