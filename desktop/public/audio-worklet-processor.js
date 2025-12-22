/**
 * AudioWorklet processor that receives PCM samples from the main thread
 * and outputs them to the audio graph for analysis.
 */
class PCMReceiverProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.buffer = [];
    this.port.onmessage = (event) => {
      // Receive samples from main thread (sent from Rust via Tauri)
      const samples = event.data;
      if (Array.isArray(samples)) {
        this.buffer.push(...samples);
      }
    };
  }

  process(inputs, outputs, parameters) {
    const output = outputs[0];
    if (output.length > 0) {
      const channel = output[0];
      const needed = channel.length;

      if (this.buffer.length >= needed) {
        // Fill output with buffered samples
        for (let i = 0; i < needed; i++) {
          channel[i] = this.buffer[i];
        }
        this.buffer = this.buffer.slice(needed);
      } else {
        // Not enough samples, output silence and use what we have
        const available = this.buffer.length;
        for (let i = 0; i < available; i++) {
          channel[i] = this.buffer[i];
        }
        for (let i = available; i < needed; i++) {
          channel[i] = 0;
        }
        this.buffer = [];
      }
    }

    return true; // Keep processor alive
  }
}

registerProcessor('pcm-receiver', PCMReceiverProcessor);
