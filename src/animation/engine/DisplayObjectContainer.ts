import {DisplayObject} from "./DisplayObject";
import {Stage} from "./Stage";


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
