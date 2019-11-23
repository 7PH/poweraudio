import {Graphics} from "pixi.js"
import {Stage} from "./Stage";


/**
 * A DisplayObject is the base class for "something that can be displayed".
 * It can handle a list of forces applied to it and move accordingly.
 */
export class DisplayObject extends PIXI.Container {

    private static ID: number = 1;

    /**
     * unique id for every display object
     */
    public readonly id: number;

    /**
     * Reference to the parent stage
     */
    public stage: Stage;

    /**
     * Reference to the underlying Graphics element
     */
    public graphics?: Graphics;

    /**
     * Current velocity vector in pixels/second
     */
    public velocity: PIXI.Point;

    /**
     * Current acceleration vector in pixels/second^2
     */
    public acceleration: PIXI.Point;

    /**
     * Friction vector
     */
    public friction: PIXI.Point;

    /**
     * All the forces applied to this DisplayObject
     */
    public forces: {[forceId: string]: {x: number, y: number}};

    /**
     * Mass of the DisplayObject
     */
    public mass: number;

    /**
     * Creates a new DisplayObject
     * @param stage
     * @param appendGraphics Whether to append a Graphics element to this DisplayObject
     */
    constructor (stage: Stage, appendGraphics?: boolean) {
        super();

        // normalize parameter value
        appendGraphics = typeof(appendGraphics) == 'undefined' ? true : appendGraphics;

        // create an unique id
        this.id = DisplayObject.ID ++;

        // set-up defaults
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

    /**
     * Set a force to this DisplayObject
     * @param name Name of the force
     * @param vector Force vector, both values in pixels/second2
     */
    setForce (name: string, vector: PIXI.Point | {x: number , y: number}) {
        this.forces[name] = {
            x: vector.x,
            y: vector.y
        };
    }

    /**
     * Unregister a force by its name
     * @param name
     */
    clearForce (name: string) {
        delete this.forces[name];
    }

    /**
     * Clear all registered forces on this DisplayObject
     */
    clearForces () {
        this.forces = {};
    }

    /**
     * Set the friction vector
     * @param value
     */
    setFriction (value: number | PIXI.Point | {x: number, y: number}) {
        if (typeof value === "number")
            this.friction = new PIXI.Point(value, value);
        else
            this.friction.set(value.x, value.y);
    }

    /**
     * Updates the DisplayObject position, velocity & acceleration.
     * This method is called by the Stage but should also be applied in subclasses overriding this method.
     * @param delta
     */
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

