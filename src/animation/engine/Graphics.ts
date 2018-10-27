import {Stage} from "./Stage";

/**
 *
 */
export class Graphics extends PIXI.Graphics {

    private stage: Stage;

    constructor (stage: Stage) {
        super();

        this.stage = stage;
    }
}
