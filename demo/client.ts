import {Stage} from "../src/animation/engine/Stage";
import AudioHandler from "../src/audio/AudioHandler";

let stage: Stage;

/**
 * To run only once
 */
async function init() {


    // start song
    await restartSong();

    // animation
    stage = new Stage("poweraudio");
    stage.start();

    (document.getElementById("start-button") as any).remove();
    document.removeEventListener("click", init);
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

document.addEventListener("click", init.bind(window));
