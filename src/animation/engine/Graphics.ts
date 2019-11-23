import {Stage} from "./Stage";

/**
 * Adapter for the PIXI Graphics element which has a reference to the stage
 */
export class Graphics extends PIXI.Graphics {

    private stage: Stage;

    constructor (stage: Stage) {
        super();

        this.stage = stage;
    }
}
