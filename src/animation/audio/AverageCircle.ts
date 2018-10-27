import {DisplayObject} from "../engine/DisplayObject";
import AudioHandler from "../../audio/AudioHandler";
import {Stage} from "../engine/Stage";
import BlurFilter = PIXI.filters.BlurFilter;

export class AverageCircle extends DisplayObject {

    public lineWidth: number = 1;

    public baseRadius: number;

    public radius: number;

    public eyesClosed: boolean = false;

    public readonly filter: BlurFilter;

    constructor(stage: Stage) {
        super(stage);

        this.baseRadius = Math.min(stage.getWidth(), stage.getHeight()) / 12;
        this.radius = this.baseRadius;

        this.filter = new PIXI.filters.BlurFilter();
        this.filters = [this.filter];
    }

    redraw() {

        if (typeof this.graphics === 'undefined')
            return;

        this.graphics.clear();

        // draw waveform
        const wave: Float32Array = AudioHandler.firstOrderWaveform;
        const waveAverage: number = wave.reduce((acc, v) => acc + v, 0) / wave.length;
        const maxAmplitude: number = 100; // in pixels
        let points: {x: number, y: number}[] = [];
        for (let i: number = 0, angle: number = Math.PI / 2; i < wave.length; ++ i, angle += Math.PI / wave.length) {
            const amplitude: number = Math.max(0, wave[i] - waveAverage);
            const x: number = Math.cos(angle) * (this.radius + maxAmplitude * amplitude);
            const y: number = Math.sin(angle) * (this.radius + maxAmplitude * amplitude);
            points.push({x, y});
        }
        let n: number = points.length;
        for (let i: number = n - 1; i >= 0; -- i)
            points.push({x: - points[i].x, y: points[i].y})
        this.graphics.beginFill(0xFFFFFF, 0.2);
        this.graphics.lineStyle(this.lineWidth, 0xFFFFFF);
        this.graphics.moveTo(points[0].x, points[0].y);
        for (let i: number = 0; i < points.length; ++ i) {
            const point = points[i];
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
        this.eyesClosed = Math.floor(10 * Date.now() / 1000) % 30 == 0;
        let eyesSize: number;
        if (this.eyesClosed) {
            eyesSize = this.radius * 0.02;
        } else {
            // eyes open
            eyesSize = this.radius * 0.1;
        }
        let eyesY: number = -this.radius * 0.3;
        this.graphics.lineStyle(1, 0xFFFFFF);
        this.graphics.beginFill(0xFFFFFF, 1);
        this.graphics.drawRect(- eyesSize * 0.5, eyesY - eyesSize * 0.5, eyesSize, eyesSize);
        this.graphics.drawRect(this.radius * 0.3 - eyesSize * 0.5, eyesY - eyesSize * 0.5, eyesSize, eyesSize);
    }

    update(delta: number) {
        super.update(delta);

        this.lineWidth = 1 + AudioHandler.linearAverage * 8;
        this.filter.blur = 0.2 + 8 * Math.exp(- 16 * AudioHandler.linearAverage);
        this.radius = this.baseRadius + 100 * AudioHandler.linearAverage;

        this.redraw();
    }
}
