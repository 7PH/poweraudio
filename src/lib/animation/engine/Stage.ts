import {DisplayObjectContainer} from "./DisplayObjectContainer";
import {NodeContainer} from "../audio/NodeContainer";
import {PowerCircle} from "../audio/PowerCircle";
import {AnimatedBackground} from "../audio/AnimatedBackground";
import { Viz } from "../../Viz";
import * as PIXI from "pixi.js";

/**
 * Base container of every object on the scene
 */
export class Stage extends DisplayObjectContainer {

    /**
     * Associated visualiation
     */
    public readonly viz: Viz;

    /**
     * Reference to the canvas container
     */
    public canvasContainer: HTMLElement;

    /**
     * PIXI renderer
     */
    public renderer: PIXI.Renderer;

    /**
     * Date of the last call to update
     */
    public lastUpdateDelta: number = 0;

    /**
     * Last delta value (seconds)
     */
    public lastDelta: number = 0;

    /**
     * Reference to the PowerCircle
     */
    public powerCircle: PowerCircle | undefined;

    constructor(canvasSelector: string, viz: Viz) {

        // we want the stage typed as 'Stage'
        //  even if it is null on the Stage itself.
        super(null as any);

        this.viz = viz;

        // init container
        this.canvasContainer = document.querySelector(canvasSelector) as HTMLElement;

        // create renderer
        this.renderer = PIXI.autoDetectRenderer({
            width: this.canvasContainer.clientWidth,
            height: this.canvasContainer.clientHeight,
        });
        this.canvasContainer.appendChild(this.renderer.view);
        this.renderer.render(this);
    }

    /**
     * Get the stage width
     */
    getWidth() {
        return this.canvasContainer.clientWidth;
    }

    /**
     * Get the stage height
     */
    getHeight() {
        return this.canvasContainer.clientHeight;
    }

    /**
     * Update every DisplayObject on stage
     */
    update() {
        const currentDateMs = Date.now() / 1000;
        this.lastDelta = currentDateMs - this.lastUpdateDelta;
        this.lastUpdateDelta = currentDateMs;
        if (this.lastDelta > 1) {
            this.lastDelta = 0;
        }
        super.update(this.lastDelta);

        this.renderer.render(this);
        requestAnimationFrame(this.update.bind(this));
    }

    /**
     *
     */
    public start() {

        while (this.children.length > 0) {
            this.removeChildAt(0);
        }

        // average circle
        this.powerCircle = new PowerCircle(
            this,
            this.getWidth() / 2,
            6 * this.getHeight() / 10
        );
        this.addChild(this.powerCircle);

        // node container
        const nodeContainer: NodeContainer = new NodeContainer(this, this.powerCircle);
        nodeContainer.populate();
        this.addChildAt(nodeContainer, 0);

        this.addChildAt(new AnimatedBackground(this), 0);

        this.run();
    }

    /**
     * Run the stage
     */
    run() {
        this.lastUpdateDelta = Date.now() / 1000;
        requestAnimationFrame(this.update.bind(this));
    }
}
