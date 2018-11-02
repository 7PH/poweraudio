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
}

/**
 *
 */
async function restartSong() {

    if (typeof AudioHandler.song !== "undefined") {
        AudioHandler.song.pause();
        AudioHandler.song.currentTime = 0;
    }

    AudioHandler.init("/music.mp3?" + Date.now());
    await AudioHandler.play();
}

window.onload = () => init();
