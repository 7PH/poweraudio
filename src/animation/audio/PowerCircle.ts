import {DisplayObject} from "../engine/DisplayObject";
import AudioHandler from "../../audio/AudioHandler";
import {Stage} from "../engine/Stage";
import BlurFilter = PIXI.filters.BlurFilter;
import {Point} from "../engine/Point";

export class PowerCircle extends DisplayObject {

    /**
     * Circle line width in pixels
     */
    public lineWidth: number = 1;

    /**
     * Radius when no music is there in pixels
     */
    public baseRadius: number;

    /**
     * Current radius in pixels
     */
    public radius: number;

    /**
     * Whether the eyes are closed
     */
    public eyesClosed: boolean = false;

    /**
     * Position where the circle should be (there is an interpolation)
     */
    public targetPosition: PIXI.Point = new PIXI.Point(0, 0);

    /**
     * Rotation acceleration
     */
    public rotationAcceleration: number = 0;

    /**
     * Rotation velocity
     */
    public rotationVelocity: number = 0;

    /**
     * Target random rotation
     */
    public targetRotation: number = 0;

    /**
     * Base rotation (based on current spin count)
     */
    public targetBaseRotation: number = 0;

    /**
     * Timestamp of the last position update in ms
     */
    public lastUpdateRandomPosition: number = 0;

    /**
     * Timestamp of the last random rotation update
     */
    public lastUpdateRandomRotation: number = 0;

    /**
     * Random angle
     */
    public randomAngle: number = 0;

    /**
     * Circle filter
     */
    public readonly filter: BlurFilter;

    /**
     *
     * @param stage
     * @param centerX
     * @param centerY
     */
    constructor(stage: Stage, private centerX: number, private centerY: number) {
        super(stage);

        this.baseRadius = Math.min(stage.getWidth(), stage.getHeight()) / 12;
        this.radius = this.baseRadius;

        this.filter = new PIXI.filters.BlurFilter();
        this.filters = [this.filter];

        this.setFriction(1);

        this.position.x = centerX;
        this.position.y = centerY;
    }

    /**
     *
     * @param delta
     */
    public update(delta: number) {
        super.update(delta);

        this.eyesClosed = Math.floor(10 * Date.now() / 1000) % 30 === 0;
        this.lineWidth = 1 + AudioHandler.linearAverage * 8;
        this.filter.blur = Math.floor(0.2 + 4 * Math.exp(- 24 * AudioHandler.linearAverage));
        this.radius = this.baseRadius + 100 * AudioHandler.linearAverage;

        this.setForce("main", {
            x: (this.targetPosition.x - this.position.x) * AudioHandler.firstOrderAverage * 16,
            y: (this.targetPosition.y - this.position.y) * AudioHandler.firstOrderAverage * 16,
        });

        // update shift from center
        if (Date.now() > 800 + this.lastUpdateRandomPosition) {
            this.randomAngle = Math.random() * 2 * Math.PI;
            this.lastUpdateRandomPosition = Date.now();
        }

        // update rotation
        if (Date.now() > 1400 + this.lastUpdateRandomRotation) {
            this.targetRotation = AudioHandler.firstOrderAverage * 2 *(Math.random() - .5);

            if (Math.random() < 0.05 && AudioHandler.firstOrderAverage >= .25) {
                this.targetBaseRotation -= Math.PI * 2;
            }
            this.lastUpdateRandomRotation = Date.now();
        }

        // rotation
        this.rotationAcceleration = (this.targetRotation + this.targetBaseRotation - this.rotation) * AudioHandler.firstOrderAverage * 16;
        this.rotationAcceleration += - this.rotationVelocity * 2;
        this.rotationVelocity += this.rotationAcceleration * delta;
        this.rotation += this.rotationVelocity * delta;

        // get circle closer to target location
        this.updatePosition();

        // redraw
        this.redraw();
    }

    /**
     * Interpolate this circle to the target position and update its radius
     */
    private updatePosition() {

        const radius: number = AudioHandler.firstOrderAverage * 256;
        const x: number = Math.cos(this.randomAngle) * radius;
        const y: number = Math.sin(this.randomAngle) * radius;

        const mousePos = this.stage.renderer.plugins.interaction.mouse.global;
        const mouseVectorLength = Math.min(radius, Point.distance(mousePos, this.position));
        const mouseAngle: number = Math.atan2(
            mousePos.y - this.position.x,
            mousePos.x - this.position.y
        );
        const mouseVectorX = Math.cos(mouseAngle) * mouseVectorLength;
        const mouseVectorY = Math.sin(mouseAngle) * mouseVectorLength;

        this.targetPosition.x = this.centerX + x + mouseVectorX;
        this.targetPosition.y = this.centerY + y + mouseVectorY;
    }

    /**
     * Redraw the circle
     */
    private redraw() {

        if (typeof this.graphics === "undefined") {
            return;
        }

        this.graphics.clear();

        // draw waveform
        const wave: Float32Array = AudioHandler.firstOrderWaveform;
        const waveAverage: number = wave.reduce((acc, v) => acc + v, 0) / wave.length;
        const waveMinimum: number = wave.reduce((acc, v) => Math.min(acc, v), wave[0]);
        const maxAmplitude: number = this.radius;
        // first
        const points: Array<{x: number, y: number}> = [];
        const points2: Array<{x: number, y: number}> = [];
        for (let i: number = 0, angle: number = Math.PI / 2 - 0.5 * Math.PI / wave.length; i < wave.length; ++ i, angle += Math.PI / wave.length) {
            const amplitude: number = Math.max(0, wave[i] - waveMinimum);
            const x: number = Math.cos(angle) * (this.radius + maxAmplitude * amplitude);
            const y: number = Math.sin(angle) * (this.radius + maxAmplitude * amplitude);
            const amplitude2: number = Math.max(0, wave[i] - waveAverage);
            const x2: number = Math.cos(angle) * (5 + this.radius + maxAmplitude * amplitude2);
            const y2: number = Math.sin(angle) * (5 + this.radius + maxAmplitude * amplitude2);
            points.push({x, y});
            points2.push({x: x2, y: y2});
        }
        for (let i: number = points.length - 1; i >= 0; -- i) {
            points.push({x: - points[i].x, y: points[i].y});
            points2.push({x: - points2[i].x, y: points2[i].y});
        }
        // outlined waveform
        this.graphics.beginFill(0xFFFFFF, 0.02);
        this.graphics.lineStyle(this.lineWidth, 0xFFFFFF, 0.2);
        this.graphics.moveTo(points[0].x, points[0].y);
        for (const point of points) {
            this.graphics.lineTo(point.x, point.y);
        }
        // filled waveform
        this.graphics.beginFill(0xFFFFFF, 0.2);
        this.graphics.lineStyle(this.lineWidth, 0xFFFFFF, 1);
        this.graphics.moveTo(points2[0].x, points2[0].y);
        for (const point of points2) {
            this.graphics.lineTo(point.x, point.y);
        }

        // disk
        this.graphics.beginFill(0x111111, 1);
        this.graphics.lineStyle(this.lineWidth, 0xFFFFFF);
        this.graphics.drawCircle(0, 0, this.radius);
        this.graphics.endFill();

        // circle
        this.graphics.lineStyle(this.lineWidth, 0xFFFFFF);
        this.graphics.drawCircle(0, 0, this.radius);

        // eyes
        // 1 blink of 100ms every 3s
        const eyesSize: number = this.eyesClosed ? this.radius * 0.02 : this.radius * 0.1;
        const eyesY: number = -this.radius * 0.3;
        this.graphics.lineStyle(1, 0xFFFFFF);
        this.graphics.beginFill(0xFFFFFF, 1);
        this.graphics.drawRect(- eyesSize * 0.5, eyesY - eyesSize * 0.5, eyesSize, eyesSize);
        this.graphics.drawRect(this.radius * 0.3 - eyesSize * 0.5, eyesY - eyesSize * 0.5, eyesSize, eyesSize);
    }
}
