import Timer = NodeJS.Timer;


export default class AudioHandler {

    /**
     * Size of the FFT
     */
    static readonly FFT_SIZE: number = 512;

    /**
     * Interval for computing audio statistics (updating the waveform)
     */
    static readonly STATS_UPDATE_INTERVAL: number = 1000 / 60;

    /**
     * Audio context
     */
    static context: AudioContext;

    /**
     * Audio analyser
     */
    static analyser: AnalyserNode;

    /**
     * Audio gain handler
     */
    static gain: GainNode;

    /**
     * HTML audio element
     */
    static song: HTMLAudioElement;

    /**
     * Current waveform
     */
    static waveform: Float32Array;

    /**
     * Interpolated waveform
     */
    static firstOrderWaveform: Float32Array;

    /**
     * Current average
     */
    static average: number = 0;

    /**
     * Flattened average (1st order)
     */
    static firstOrderAverage: number = 0;

    /**
     * Flattened average (linear)
     */
    static linearAverage: number = 0;

    /**
     * Current minimum amplitude on the FFT
     */
    static minimum: number = 0;

    /**
     * Current minimum amplitude on the FFT
     */
    static maximum: number = 0;

    /**
     * Whether the music is currently playing
     */
    static isPlaying: boolean;

    /**
     * Date of the last update
     */
    private static lastUpdateDelta: number = 0;

    /**
     * Timer for the stats interval update
     */
    private static updateStatsInterval: Timer;

    /**
     *
     * @param {string} src
     */
    static init(src: string) {

        // context
        this.context = new (AudioContext || (<any>window)['webkitAudioContext'])();

        // gain
        this.gain = AudioHandler.context.createGain();
        this.gain.connect(this.context.destination);

        // song
        this.song = new Audio(src);
        this.song.crossOrigin = 'anonymous';
        this.isPlaying = false;

        // source
        const songSource = this.context.createMediaElementSource(this.song);
        songSource.connect(this.gain);

        // setup analyser
        this.analyser = this.context.createAnalyser();
        this.gain.connect(this.analyser);
        this.analyser.fftSize = AudioHandler.FFT_SIZE;
        this.waveform = new Float32Array(this.analyser.frequencyBinCount);
        this.firstOrderWaveform = new Float32Array(this.analyser.frequencyBinCount);
        this.analyser.getFloatTimeDomainData(this.waveform);

        this.lastUpdateDelta = Date.now();
        this.updateStatsInterval = setInterval(() => this.updateStats(), AudioHandler.STATS_UPDATE_INTERVAL);
    }

    /**
     * @TODO optimize. functional javascript gives poor performances. loops should be mutualized.
     */
    static updateStats() {

        const delta: number = (Date.now() - this.lastUpdateDelta) / 1000;

        this.analyser.getFloatTimeDomainData(this.waveform);
        this.average = this.waveform.reduce((prev, curr) => prev + Math.abs(curr), 0) / this.analyser.frequencyBinCount;
        this.minimum = this.waveform.reduce((a, b) => Math.min(a, b), this.waveform[0]);
        this.maximum = this.waveform.reduce((a, b) => Math.max(a, b), this.waveform[0]);
        this.firstOrderAverage += (this.average - this.firstOrderAverage) * 0.5 * delta;
        this.linearAverage += delta * (this.average > this.linearAverage ? 1 : -1);
        this.waveform.forEach((value, index) => {
            if (value > this.firstOrderWaveform[index])
                this.firstOrderWaveform[index] = value;
            else
                this.firstOrderWaveform[index] += (value - this.firstOrderWaveform[index]) * 0.5 * delta;
        });

        this.lastUpdateDelta = Date.now();
    }

    /**
     *
     * @returns {Promise<void>}
     */
    static async play() {

        await this.song.play();

        this.isPlaying = true;

        this.updateStats();
    }
}
