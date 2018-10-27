import {AnimatedBackground} from "../audio/AnimatedBackground";
import {AverageCircle} from "../audio/AverageCircle";
import {NodeContainer} from "../audio/NodeContainer";
import {DisplayObject} from "./DisplayObject";
import {DisplayObjectContainer} from "./DisplayObjectContainer";

/**
 *
 */
export class Stage extends DisplayObjectContainer {

    public canvasContainerID: string;

    public canvasContainer: HTMLDivElement;

    public lastDelta: number;

    public renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer;

    public lastUpdateDelta: number;

    public readonly mouse: { position: PIXI.Point };

    constructor(canvasID: string) {

        // we want the stage typed as 'Stage'
        //  even if it is null on the Stage itself.
        super(null as any as Stage);

        this.canvasContainerID = canvasID;
        this.canvasContainer = document.getElementById(canvasID) as HTMLDivElement;
        this.lastDelta = 0;

        this.renderer = PIXI.autoDetectRenderer(
            window.innerWidth,
            window.innerHeight,
        );
        this.canvasContainer.appendChild(this.renderer.view);
        this.renderer.render(this);

        this.mouse = {
            position: new PIXI.Point(0, 0),
        };
        this.on("mousemove", (e: any) => {
            this.mouse.position.set(
                e.data.global.x,
                e.data.global.y,
            );
        });

        this.lastUpdateDelta = 0;
    }

    /**
     *
     */
    public start() {

        while (this.children.length > 0) {
            this.removeChildAt(0);
        }

        const nodeContainer: NodeContainer = new NodeContainer(this);
        nodeContainer.populate();
        this.addChild(nodeContainer);

        // average circle
        const avgCircle: DisplayObject = new AverageCircle(
            this,
            this.getWidth() / 2,
            6 * this.getHeight() / 10);
        this.addChild(avgCircle);

        this.addChildAt(new AnimatedBackground(this), 0);

        this.run();
    }

    public getWidth() {
        return this.canvasContainer.clientWidth;
    }

    public getHeight() {
        return this.canvasContainer.clientHeight;
    }

    public update() {
        const t = Date.now() / 1000;
        this.lastDelta = t - this.lastUpdateDelta;
        this.lastUpdateDelta = t;
        if (this.lastDelta > 1) { this.lastDelta = 0; }
        super.update(this.lastDelta);

        this.renderer.render(this);
        requestAnimationFrame(this.update.bind(this));
    }

    public run() {
        this.lastUpdateDelta = Date.now() / 1000;
        requestAnimationFrame(this.update.bind(this));
    }
}
