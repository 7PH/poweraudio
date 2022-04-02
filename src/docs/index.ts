import { PowerAudio } from '../lib';


const start = () => {
    document.removeEventListener('click', start);

    // Hide initial message
    (document.querySelector('#start-info') as HTMLElement).remove();

    // Get a reference to the audio element
    const audio = document.querySelector('audio') as HTMLAudioElement;

    // Show audio element with controls
    audio.style.display = 'block';

    // Start viz
    new PowerAudio.Viz({
        container: '#visualization',
        source: audio,
    });

    // Start audio
    audio.play();
};

window.onload = () => {

    // Need a document interaction before we can start audio
    document.addEventListener('click', start);
};
