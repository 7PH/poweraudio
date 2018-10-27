import {Stage} from "../..";
import {DisplayObject} from "../engine/DisplayObject";
import {DisplayObjectContainer} from "../engine/DisplayObjectContainer";
import {Point} from "../engine/Point";
import {Node} from "./Node";

export class NodeLinker extends DisplayObject {

    private target: DisplayObjectContainer;

    private readonly centerPosition: PIXI.Point;

    constructor(stage: Stage, nodes: DisplayObjectContainer) {
        super(stage);

        this.target = nodes;

        this.centerPosition = new PIXI.Point(
            this.stage.getWidth() / 2,
            6 * this.stage.getHeight() / 10,
        );
    }

    /**
     *
     */
    public redraw() {

        if (typeof this.graphics === "undefined") {
            return;
        }

        this.graphics.clear();
        this.graphics.lineStyle(1, 0xFFFFFF, 0.2);

        const N: number = this.target.children.length;
        for (let i = 0; i < N; ++ i) {

            const node: Node = this.target.children[i] as Node;
            const distance: number = Point.distance(node.position, this.centerPosition);
            if (distance > this.stage.getWidth() / 10) {
                continue;
            }

            // node is close to the center
            this.graphics.moveTo(node.position.x, node.position.y);
            this.graphics.lineTo(this.centerPosition.x, this.centerPosition.y);
        }
    }

    /**
     * O(n^2)
     * @TODO this can be optimized but it does seem to run correctly on most devices
     * @param delta
     */
    public update(delta: number) {
        super.update(delta);

        const N: number = this.target.children.length;

        // foreach node
        for (let i = 0; i < N; i++) {
            const node = this.target.children[i] as Node;

            const angle: number = Math.atan2(
                node.position.y - this.centerPosition.y,
                node.position.x - this.centerPosition.x,
            );
            const dist = Point.distance(node.position, this.centerPosition);
            const fx: number = - Math.cos(angle) * 100000 / dist;
            const fy: number = - Math.sin(angle) * 100000 / dist;
            node.setForce("tocenter", {x: fx, y: fy});

            // foreach other node
            for (let k = i + 1; k < N; k++) {
                const otherNode: Node = this.target.children[k] as Node;

                const dist2 = Point.distance(
                    node.position,
                    otherNode.position,
                );

                if (dist2 > 300) {
                    node.clearForce("node_" + otherNode.id);
                    otherNode.clearForce("node_" + node.id);
                    continue;
                }

                const a: number = Math.atan2(
                    node.position.y - otherNode.position.y,
                    node.position.x - otherNode.position.x,
                );
                let fx2: number = 0;
                let fy2: number = 0;
                if (dist2 !== 0) {
                    fx2 = Math.cos(a) * 10000 / dist2;
                    fy2 = Math.sin(a) * 10000 / dist2;
                }

                node.setForce("node_" + otherNode.id, new PIXI.Point(- fx2, - fy2));
                otherNode.setForce("node_" + node.id, new PIXI.Point(fx2, fy2));
            }
        }

        this.redraw();
    }
}
