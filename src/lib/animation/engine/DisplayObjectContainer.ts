import {DisplayObject} from "./DisplayObject";
import {Stage} from "./Stage";


/**
 * A DisplayObjectContainer is a container for DisplayObject,
 *  his job is to update every children of his when updated itself.
 */
export class DisplayObjectContainer extends DisplayObject {

    constructor (stage: Stage) {
        super(stage, false);

    }

    update (delta: number) {
        super.update(delta);

        for (let i = 0, j = this.children.length; i < j; ++i) {
            const child: DisplayObject = this.children[i] as DisplayObject;

            if (child.update)
                child.update(delta);
        }
    }
}
