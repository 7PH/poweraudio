import { Viz } from '../../src/lib/Viz';
import { createSystemAudioAnalyser } from './audio-bridge';

async function main() {
    console.log('PowerAudio Desktop starting...');

    try {
        // Create the system audio analyser that receives audio from Rust
        const analyser = await createSystemAudioAnalyser();
        console.log('System audio analyser created');

        // Create the visualization with the external analyser
        const viz = new Viz({
            container: '#visualizer',
            externalAnalyser: analyser,
        });

        console.log('PowerAudio visualization initialized');

        // Expose viz to window for debugging
        (window as any).viz = viz;
    } catch (error) {
        console.error('Failed to initialize PowerAudio:', error);
    }
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', main);
} else {
    main();
}
