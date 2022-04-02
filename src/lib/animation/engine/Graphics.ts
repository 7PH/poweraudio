import {Stage} from "./Stage";
import * as PIXI from "pixi.js";

/**
 * Adapter for the PIXI Graphics element which has a reference to the stage
 */
export class Graphics extends PIXI.Graphics {

    protected stage: Stage;

    constructor (stage: Stage) {
        super();

        this.stage = stage;
    }
}
