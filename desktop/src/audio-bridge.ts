import { listen } from '@tauri-apps/api/event';

/**
 * Creates an AnalyserNode that receives system audio from the Rust backend.
 * Uses an AudioWorklet to bridge Tauri events to the Web Audio API.
 */
export async function createSystemAudioAnalyser(): Promise<AnalyserNode> {
    const ctx = new AudioContext();

    // Create analyser with the same settings as PowerAudio
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 256;

    // Load the AudioWorklet processor
    await ctx.audioWorklet.addModule('/audio-worklet-processor.js');

    // Create worklet node that receives samples
    const worklet = new AudioWorkletNode(ctx, 'pcm-receiver');

    // Connect worklet output to analyser
    worklet.connect(analyser);

    // Listen for audio samples from Rust and forward to worklet
    await listen<number[]>('audio-samples', (event) => {
        worklet.port.postMessage(event.payload);
    });

    console.log('System audio analyser initialized');
    return analyser;
}
