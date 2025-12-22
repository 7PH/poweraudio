import { Stage } from "./animation/engine/Stage";


export interface VizOptions {

    /**
     * Container for the visualization. Must be a query selector or an HTML element
     */
    container: string | HTMLElement,

    /**
     * Audio object used as source (for HTML audio element mode)
     */
    source?: HTMLAudioElement,

    /**
     * External analyser node (for system audio mode in desktop app)
     * When provided, the Viz will use this analyser instead of creating its own
     */
    externalAnalyser?: AnalyserNode,

    /**
     * Whether to start audio analysis now (default: true)
     */
    startAnalysis?: boolean,
};

/**
 * Entry point to create a visualization.
 */
export class Viz {

    public static readonly BIN_COUNT = 256;

    public readonly options: VizOptions;

    public context!: AudioContext;

    public gain!: GainNode;

    public audio!: HTMLAudioElement;

    public analyser!: AnalyserNode;

    public readonly stage: Stage;

    public waveform: {
        timeDomainData: Float32Array,
        timeDomainDataSmooth: Float32Array,
        minimumGain: number,
        maximumGain: number,
        averageGain: number,
        averageGainLinearized: number,
        averageGainFirstOrder: number,
    };

    public lastUpdateDate!: Date;

    constructor(options: VizOptions) {

        // Store options
        this.options = options;

        // Waveform data
        this.waveform = {
            timeDomainData: new Float32Array(Viz.BIN_COUNT),
            timeDomainDataSmooth: new Float32Array(Viz.BIN_COUNT),
            minimumGain: 0,
            maximumGain: 0,
            averageGain: 0,
            averageGainLinearized: 0,
            averageGainFirstOrder: 0,
        };

        // Get reference to the container object
        let canvasContainer;
        if (typeof options.container === "string") {
            canvasContainer = document.querySelector(options.container) as HTMLElement;
        } else {
            canvasContainer = options.container;
        }
        if (! canvasContainer) {
            throw new Error("Container not found");
        }

        // Start stage
        this.stage = new Stage(canvasContainer, this);
        this.stage.start();

        // Listen for container size changes
        new ResizeObserver((entries: ResizeObserverEntry[]) => this.onContainerResized()).observe(canvasContainer);

        if (options.startAnalysis !== false) {
            this.start();
        }
    }

    start() {
        // Check if we're using an external analyser (system audio mode)
        if (this.options.externalAnalyser) {
            this.analyser = this.options.externalAnalyser;
            this.analyser.fftSize = Viz.BIN_COUNT;

            // Start periodical analysis
            this.lastUpdateDate = new Date();
            this.updateStats();
            return;
        }

        // Original HTML audio element mode
        if (!this.options.source) {
            throw new Error("Either 'source' or 'externalAnalyser' must be provided");
        }

        // Audio context
        this.context = new AudioContext();

        // Gain Node
        this.gain = this.context.createGain();

        // Audio
        this.audio = this.options.source;

        // Source
        const audioSource = this.context.createMediaElementSource(this.audio);

        // Analyzer
        this.analyser = this.context.createAnalyser();
        this.analyser.fftSize = Viz.BIN_COUNT;

        // Connect nodes
        // audio source -> gain -> analyser -> destination
        audioSource.connect(this.gain);
        this.gain.connect(this.analyser);
        this.analyser.connect(this.context.destination);

        // Start periodical analysis
        this.lastUpdateDate = new Date();
        this.updateStats();
    }

    /**
     * Update waveform data
     */
    private updateStats() {
        // Delta time, in seconds
        const delta = (Date.now() - this.lastUpdateDate.getTime()) / 1000;

        // If delta is too big (>1s), we skip the update
        if (delta > 1.0) {
            this.lastUpdateDate = new Date();
            requestAnimationFrame(this.updateStats.bind(this));
            return;
        }

        // Analyze waveform data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.analyser.getFloatTimeDomainData(this.waveform.timeDomainData as any);
        this.waveform.averageGain = this.waveform.timeDomainData.reduce((prev, curr) => prev + Math.abs(curr), 0) / this.analyser.frequencyBinCount;
        this.waveform.minimumGain = this.waveform.timeDomainData.reduce((a, b) => Math.min(a, b), this.waveform.timeDomainData[0]);
        this.waveform.maximumGain = this.waveform.timeDomainData.reduce((a, b) => Math.max(a, b), this.waveform.timeDomainData[0]);
        this.waveform.averageGainLinearized += delta * (this.waveform.averageGain > this.waveform.averageGainLinearized ? 1 : -1);
        this.waveform.averageGainFirstOrder += (this.waveform.averageGain - this.waveform.averageGainFirstOrder) * 0.5 * delta;
        for (let index = 0; index < this.waveform.timeDomainData.length; ++ index) {
            const value = this.waveform.timeDomainData[index];

            if (value > this.waveform.timeDomainDataSmooth[index])
                this.waveform.timeDomainDataSmooth[index] = value;
            else
                this.waveform.timeDomainDataSmooth[index] += (value - this.waveform.timeDomainDataSmooth[index]) * 0.5 * delta;
        };

        // Loop
        this.lastUpdateDate = new Date();
        requestAnimationFrame(this.updateStats.bind(this));
    }

    private onContainerResized() {
        this.stage.resize();
    }

    /**
     * Make the PowerCircle flip
     */
    flip() {
        const powerCircle = this.stage.powerCircle;
        if (! powerCircle) {
            throw new Error('Unable to make the PowerCircle flip');
        }
        powerCircle.flip();
    }
}
