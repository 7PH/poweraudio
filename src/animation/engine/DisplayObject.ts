import Graphics = PIXI.Graphics;
import {Stage} from "./Stage";


export class DisplayObject extends PIXI.Container {

    private static ID: number = 1;

    public readonly id: number;
    public stage: Stage;
    public graphics?: Graphics;
    public velocity: PIXI.Point;
    public acceleration: PIXI.Point;
    public friction: PIXI.Point;
    public forces: {[forceId: string]: {x: number, y: number}};
    public mass: number;

    constructor (stage: Stage, appendGraphics?: boolean) {
        super();
        // params
        appendGraphics = typeof(appendGraphics) == 'undefined' ? true : appendGraphics;

        this.id = DisplayObject.ID ++;

        this.stage = stage;
        this.graphics = undefined;
        this.velocity = new PIXI.Point(0, 0);
        this.acceleration = new PIXI.Point(0, 0);
        this.friction = new PIXI.Point(0, 0);
        this.forces = {};
        this.mass = 1;

        // this.graphics
        if (appendGraphics) {
            this.graphics = new Graphics();
            this.addChild(this.graphics);
        }
    }

    setForce (name: string, vector: PIXI.Point | {x: number , y: number}) {
        this.forces[name] = {
            x: vector.x,
            y: vector.y
        };
    }

    clearForce (name: string) {
        delete this.forces[name];
    }

    setFriction (value: number | PIXI.Point | {x: number, y: number}) {
        if (typeof value === "number")
            this.friction = new PIXI.Point(value, value);
        else
            this.friction.set(value.x, value.y);
    }

    /** Updates the DisplayObject position, velocity & acceleration */
    update(delta: number) {
        // friction
        this.setForce('friction', new PIXI.Point(
            - this.friction.x * this.velocity.x,
            - this.friction.y * this.velocity.y
        ));

        // acceleration
        this.acceleration.set(0, 0);
        for (const forceName in this.forces) {
            this.acceleration.x += this.forces[forceName].x;
            this.acceleration.y += this.forces[forceName].y;
        }
        this.acceleration.x /= this.mass;
        this.acceleration.y /= this.mass;

        // velocity
        this.velocity.x += delta * this.acceleration.x;
        this.velocity.y += delta * this.acceleration.y;

        // position
        this.position.x += delta * this.velocity.x;
        this.position.y += delta * this.velocity.y;
    }
}

