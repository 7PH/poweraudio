# PowerAudio

A beautiful real-time audio visualizer for Windows — visualize any sound playing on your system.

<img src="src/assets/banner.gif" style="width: 100%">

## Download

**[Download for Windows](https://github.com/7PH/poweraudio/releases)** (Windows 10/11)

Or build from source — see [Development](#development) below.

## Features

- **System Audio Capture** — Visualizes any audio playing on your computer (Spotify, YouTube, games, etc.)
- **Real-time Visualization** — Smooth 60fps animations that react to your music
- **Lightweight** — Small footprint (~15MB), minimal CPU usage
- **No Configuration** — Just launch and enjoy

## How It Works

PowerAudio captures your system's audio output using Windows WASAPI loopback and renders a real-time visualization featuring:

- A central animated character ("PowerCircle") that reacts to audio intensity
- Orbiting particles with physics-based movement
- Dynamic waveform display
- Responsive background that pulses with the beat

---

## Library Usage

PowerAudio is also available as an npm library for embedding audio visualizations in your own web projects.

### Installation

```bash
npm install poweraudio
```

### Quick Start

```html
<audio id="audio" src="your-audio.mp3" controls></audio>
<div id="visualizer" style="width: 100%; height: 400px;"></div>

<script type="module">
  import { Viz } from 'poweraudio';

  const audio = document.getElementById('audio');
  const viz = new Viz({
    container: '#visualizer',
    source: audio,
  });
</script>
```

### API

```typescript
interface VizOptions {
  // Container element or selector
  container: string | HTMLElement;

  // Audio source (HTML audio element)
  source?: HTMLAudioElement;

  // External AnalyserNode (for advanced use cases)
  externalAnalyser?: AnalyserNode;

  // Auto-start analysis (default: true)
  startAnalysis?: boolean;
}
```

### Documentation

For full documentation and interactive examples, visit [https://7ph.github.io/poweraudio](https://7ph.github.io/poweraudio/)

---

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Rust](https://rustup.rs/) (for desktop app)

### Building the Desktop App

```bash
# Clone the repo
git clone https://github.com/7PH/poweraudio.git
cd poweraudio

# Install dependencies
npm install

# Run in development mode
cd desktop
npm install
npm run tauri dev

# Build for production
npm run tauri build
```

### Building the Library

```bash
npm install
npm run build
```

---

## Tech Stack

**Desktop App:**
- [Tauri](https://tauri.app/) — Rust-based desktop framework
- [WASAPI](https://docs.microsoft.com/en-us/windows/win32/coreaudio/wasapi) — Windows audio capture via [cpal](https://github.com/RustAudio/cpal)
- WebView2 — Native Windows webview

**Visualization:**
- [PixiJS](https://pixijs.com/) — 2D WebGL renderer
- Web Audio API — Audio analysis
- TypeScript

---

## License

MIT

## Author

Benjamin Raymond — [@7PH](https://github.com/7PH)
