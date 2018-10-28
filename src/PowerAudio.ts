import {Stage} from "./animation/engine/Stage";
import AudioHandler from "./audio/AudioHandler";

/**
 *
 */
export class PowerAudio {

    /**
     *
     */
    public readonly stage: Stage;

    /**
     *
     * @param canvasID
     */
    constructor(canvasID: string) {

        this.stage = new Stage(canvasID);
        this.stage.start();
    }

    /**
     *
     */
    public async play(musicSrc: string) {

        if (typeof AudioHandler.song !== "undefined") {
            AudioHandler.song.pause();
            AudioHandler.song.currentTime = 0;
        }

        AudioHandler.init(musicSrc);
        await AudioHandler.play();
    }
}
