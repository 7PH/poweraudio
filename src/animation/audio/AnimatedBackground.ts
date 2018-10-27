import {DisplayObject} from "../engine/DisplayObject";
import AudioHandler from "../../audio/AudioHandler";
import {Stage} from "../engine/Stage";


export class AnimatedBackground extends DisplayObject {

    constructor (stage: Stage) {
        super(stage);

        this.setFriction(1);
    }

    redraw() {

        if (typeof this.graphics === 'undefined')
            return;

        // chose color
        let ratio: number = Math.min(50, 256 * AudioHandler.firstOrderAverage) / 50;
        let value: number = ratio * 0x11 | 0;
        let grayscale: number = parseInt('0x' + ((value << 16) | (value << 8) | value).toString(16), 16);

        this.graphics.clear();
        this.graphics.beginFill(grayscale);
        this.graphics.drawRect(0, 0, this.stage.getWidth(), this.stage.getHeight());
        this.graphics.endFill();
    }
}
