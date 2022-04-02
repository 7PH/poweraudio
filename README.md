# Power Audio

<img src="https://travis-ci.com/7PH/power-audio.svg?branch=master">


An intense audio viz you can integrate on the web

<img src="src/assets/banner.png" style="width: 100%">

## Add PowerAudio to your project

#### Using npm

1. Add this library into your project
```bash
npm i --save power-audio
```

2. Import the PowerAudio object from the lib
```javascript
// JS ES5
const PowerAudio = require('power-audio');
// JS ES6/TypeScript
import { PowerAudio } from 'power-audio';
```

#### Using direct web import

1. Import power-audio.js in your html

```html
<script src="https://raw.githubusercontent.com/7PH/power-audio/master/dist/power-audio.js"></script>
```

2. That's it, you now have a global `PowerAudio` object registered to `window`

## Start a viz

To start a viz, it is as simple as instantiating a new PowerAudio.Viz object. You have to specify the following options:
- container: Query selector for where to put the visualization
- source: Audio source element (HTMLAudioElement)

```javascript
// Create audio element
const audio = new Audio('music.mp3');
// Alternatively: Get audio element from the DOM
//const audio = document.querySelector('audio')

// Start viz in container with id `viz`
new PowerAudio({
    container: '#viz',
    source: audio,
});

// Play audio
audio.play();
```

## Examples

Find examples below:
- [TypeScript, Full screen](https://github.com/7PH/power-audio/tree/master/src/docs)
