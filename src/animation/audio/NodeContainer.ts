import {DisplayObjectContainer} from "../engine/DisplayObjectContainer";
import {Stage} from "../engine/Stage";
import {Node} from "./Node";
import {NodeLinker} from "./NodeLinker";

/**
 *
 */
export class NodeContainer extends DisplayObjectContainer {

    public nodes: DisplayObjectContainer;

    constructor (stage: Stage) {
        super(stage);

        this.nodes = new DisplayObjectContainer(this.stage);
        this.addChild(this.nodes);
        this.addChildAt(new NodeLinker(this.stage, this.nodes), 0);

    }

    /**
     *
     */
    public populate() {
        for (let x = 10; x < this.stage.getWidth(); x += 200)
            for (let y = 10; y < this.stage.getHeight(); y += 200)
                this.addNode(x + 12 * Math.random(), y + 12 * Math.random(), 0, 0);
    }

    /**
     *
     * @param x
     * @param y
     * @param vx
     * @param vy
     */
    public addNode(x: number, y: number, vx: number, vy: number) {
        const node = new Node(this.stage);
        node.position.set(x, y);
        node.velocity.set(vx, vy);
        this.nodes.addChild(node);
    }

}
