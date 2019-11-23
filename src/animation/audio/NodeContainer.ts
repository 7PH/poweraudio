import {DisplayObjectContainer} from "../engine/DisplayObjectContainer";
import {Stage} from "../engine/Stage";
import {Node} from "./Node";
import {NodeLinker} from "./NodeLinker";
import {PowerCircle} from "./PowerCircle";


/**
 * The node container is a container for all the nodes gravitating around the PowerCircle
 */
export class NodeContainer extends DisplayObjectContainer {

    /**
     * Reference to the container of all nodes
     */
    public readonly nodes: DisplayObjectContainer;

    /**
     * Reference to the PowerCircle
     */
    public readonly circle: PowerCircle;

    /**
     * Creates a new NodeContainer
     * @param stage
     * @param circle
     */
    constructor (stage: Stage, circle: PowerCircle) {
        super(stage);

        this.nodes = new DisplayObjectContainer(this.stage);
        this.addChild(this.nodes);
        this.addChildAt(new NodeLinker(this.stage, this.nodes), 0);

        this.circle = circle;
    }

    /**
     * Populate this container (to call once)
     */
    public populate() {
        for (let x = 10; x < this.stage.getWidth(); x += 200)
            for (let y = 10; y < this.stage.getHeight(); y += 200)
                this.addNode(x + 12 * Math.random(), y + 12 * Math.random(), 0, 0);
    }

    /**
     * Append a new node
     * @param x X position
     * @param y Y position
     * @param vx Init velocity x
     * @param vy Init velocity y
     */
    public addNode(x: number, y: number, vx: number, vy: number) {
        const node = new Node(this.stage);
        node.position.set(x, y);
        node.velocity.set(vx, vy);
        this.nodes.addChild(node);
    }

}
