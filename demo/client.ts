import {Stage} from "../src/animation/engine/Stage";
import AudioHandler from "../src/audio/AudioHandler";

let stage: Stage;

/**
 * To run only once
 */
async function init() {

    document.removeEventListener("click", init);

    // start song
    await restartSong();

    // animation
    stage = new Stage("poweraudio");
    stage.start();

    (document.getElementById("start-button") as any).remove();
}

/**
 *
 */
async function restartSong() {

    if (typeof AudioHandler.song !== "undefined") {
        AudioHandler.song.pause();
        AudioHandler.song.currentTime = 0;
    }

    AudioHandler.init("music.mp3?" + Date.now());
    await AudioHandler.play();
}

document.addEventListener("click", init);
