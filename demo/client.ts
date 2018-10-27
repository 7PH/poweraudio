import {Stage} from "../src";
import AudioHandler from "../src/audio/AudioHandler";

let stage: Stage;

/**
 * To run only once
 */
async function init() {

    // fps counter
    setInterval(() => {
        const fps = (1 / stage.lastDelta);
        let el = document.getElementById('fps');
        if (el === null)
            return;
        el.innerHTML = Math.floor(fps).toString();
    }, 1000);

    // start song
    await restartSong();

    // animation
    stage = new Stage('poweraudio');
    stage.start();
}

/**
 *
 */
async function restartSong() {

    if (typeof AudioHandler.song !== 'undefined') {
        AudioHandler.song.pause();
        AudioHandler.song.currentTime = 0;
    }

    AudioHandler.init("/music");
    await AudioHandler.play();
}

window.onload = () => init();
