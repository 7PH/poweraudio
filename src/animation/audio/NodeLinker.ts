import {DisplayObject} from "../engine/DisplayObject";
import {Point} from "../engine/Point";
import {DisplayObjectContainer} from "../engine/DisplayObjectContainer";
import {Stage} from "../engine/Stage";
import {Node} from "./Node";
import AudioHandler from "../../audio/AudioHandler";
import {NodeContainer} from "./NodeContainer";


/**
 * The node linker handle interactions between nodes and forces applied on them
 */
export class NodeLinker extends DisplayObject {

    /**
     * Node container
     */
    private nodeParent: DisplayObjectContainer;

    /**
     * Nodes will be attracted to this point
     */
    private readonly centerPosition: PIXI.Point;

    /**
     * Create a node linker
     * @param stage
     * @param nodes
     */
    constructor (stage: Stage, nodes: DisplayObjectContainer) {
        super(stage);

        this.nodeParent = nodes;
        this.centerPosition = new PIXI.Point(0, 0);
    }

    /**
     * O(n^2)
     * @TODO this can be optimized but it does seem to run correctly on most devices
     * @param delta
     */
    update (delta: number) {
        super.update(delta);

        const N: number = this.nodeParent.children.length;
        const nodeContainer: NodeContainer = this.parent as NodeContainer;
        this.centerPosition.x = nodeContainer.circle.position.x;
        this.centerPosition.y = nodeContainer.circle.position.y;

        // foreach node
        for (let i = 0; i < N; i++) {
            const node = this.nodeParent.children[i] as Node;

            const angle: number = Math.atan2(
                node.position.y - this.centerPosition.y,
                node.position.x - this.centerPosition.x
            );
            const dist = Point.distance(node.position, this.centerPosition);
            const fx: number = - Math.cos(angle) * 100000 / dist;
            const fy: number = - Math.sin(angle) * 100000 / dist;
            node.setForce('tocenter', {x: fx, y: fy});

            // foreach other node
            for (let k = i + 1; k < N; k++) {
                const otherNode: Node = this.nodeParent.children[k] as Node;

                const dist = Point.distance(
                    node.position,
                    otherNode.position
                );

                if (dist > 300) {
                    node.clearForce('node_' + otherNode.id);
                    otherNode.clearForce('node_' + node.id);
                    continue;
                }

                const a: number = Math.atan2(
                    node.position.y - otherNode.position.y,
                    node.position.x - otherNode.position.x
                );
                let fx = 0, fy = 0;
                if (dist != 0) {
                    fx = Math.cos(a) * 10000 / dist;
                    fy = Math.sin(a) * 10000 / dist;
                }

                node.setForce('node_' + otherNode.id, new PIXI.Point(- fx, - fy));
                otherNode.setForce('node_' + node.id, new PIXI.Point(fx, fy));
            }
        }

        this.redraw();
    }

    /**
     *
     */
    redraw() {

        if (typeof this.graphics === 'undefined')
            return;

        this.graphics.clear();
        this.graphics.lineStyle(1, 0xFFFFFF, 0.2);

        const N: number = this.nodeParent.children.length;
        for (let i = 0; i < N; ++ i) {

            const node: Node = this.nodeParent.children[i] as Node;
            const distance: number = Point.distance(node.position, this.centerPosition);
            if (distance > (this.parent as NodeContainer).circle.radius * 2)
                continue;

            // node is close to the center
            this.graphics.moveTo(node.position.x, node.position.y);
            this.graphics.lineTo(this.centerPosition.x, this.centerPosition.y);
        }
    }
}
