import {DisplayObject} from "../engine/DisplayObject";
import AudioHandler from "../../audio/AudioHandler";
import {Stage} from "../engine/Stage";
import BlurFilter = PIXI.filters.BlurFilter;


/**
 * Nodes are the small dots that run over the PowerCircle
 */
export class Node extends DisplayObject {

    /**
     * This node color
     */
    public color: number;

    /**
     * This node radius in pixels
     */
    public radius: number = 2 + Math.random() * 4;

    /**
     * Creates a new node
     * @param stage
     */
    constructor (stage: Stage) {
        super(stage);

        this.color = 0xFFFFFF * (Math.random()*.5 + .5);
        this.setFriction(1);
    }

    /**
     * Update this node
     * @param delta
     */
    update(delta: number) {
        super.update(delta);

        // get coef according to the current music amplitude
        const coef: number = Math.max(0.1, AudioHandler.average * 8);
        this.position.x += delta * this.velocity.x * (coef - 1);
        this.position.y += delta * this.velocity.y * (coef - 1);

        // handle node getting out of screen
        if (this.x < 0) this.x = this.stage.getWidth();
        else if (this.x > this.stage.getWidth()) this.x = 0;

        if (this.y < 0) this.y = this.stage.getHeight();
        else if (this.y > this.stage.getHeight()) this.y = 0;

        // redraw this node
        this.redraw();
    }

    /**
     * Redraw this node
     */
    redraw() {

        if (typeof this.graphics === 'undefined')
            return;

        // chose color
        let avg: number = 0.5 + Math.min(8, 64 * AudioHandler.average) / 16;
        let value: number = avg * 0xFF | 0;
        let grayscale: number = parseInt('0x' + ((value << 16) | (value << 8) | value).toString(16), 16);

        // draw node
        this.graphics.clear();
        // aura
        const auraRadius = (this.radius + AudioHandler.firstOrderAverage * 4) * 6 * (1 - Math.exp(- 3 * AudioHandler.average));
        this.graphics.lineStyle(4, AudioHandler.average > 0.15 ? this.color : grayscale, 0.3);
        this.graphics.drawCircle(0, 0, auraRadius);
        // node
        this.graphics.lineStyle(0);
        this.graphics.beginFill(AudioHandler.average > 0.15 ? this.color : grayscale);
        this.graphics.drawCircle(0, 0, this.radius + AudioHandler.firstOrderAverage * 4);
        this.graphics.endFill();
    }
}
