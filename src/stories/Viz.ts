import './viz.css';
import { PowerAudio } from '../lib/index';

export interface VizProps {

}

/**
 * Primary UI component for user interaction
 */
export const createViz = ({

}: VizProps) => {

    const div = document.createElement('div');
    div.innerHTML = `
        <div class="viz">
            <div class="controls">
                <button class="start-button">Start</button>
                <div class="viz-controls" style="display: none">
                    <button class="flip-button">Flip</button>
                </div>
            </div>
            <div class="viz-container">

            </div>
        </div>
    `;

    let viz;

    div.getElementsByClassName('start-button')[0].addEventListener('click', event => {

        // Hide button
        (event.currentTarget as HTMLButtonElement).style.display = 'none';

        // Start viz
        const audio = new Audio('music.mp3');
        const container = div.getElementsByClassName('viz-container')[0] as HTMLDivElement;
        viz = new PowerAudio.Viz({
            container,
            source: audio,
        });
        audio.play();

        // Add audio controls
        const vizControls = div.getElementsByClassName('viz-controls')[0] as HTMLDivElement;
        vizControls.appendChild(audio);
        audio.controls = true;
        vizControls.style.display = 'block';
    });

    div.getElementsByClassName('flip-button')[0].addEventListener('click', event => {
        viz.flip();
    });
    return div;
};
