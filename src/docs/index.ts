import { PowerAudio } from '../lib';


const start = () => {
    document.removeEventListener('click', start);

    // Hide initial message
    (document.querySelector('#start-info') as HTMLElement).remove();

    // Show audio element
    const audio = document.querySelector('audio') as HTMLAudioElement;

    // Show it
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
