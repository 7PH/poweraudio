# Power Audio

<img src="https://travis-ci.com/7PH/power-audio.svg?branch=master">


A very cool audio visualization library you can integrate on the web

<img src="doc/banner.png" style="width: 100%">

## Download

You need to:
1. Download the files in the dist folder
2. Include `pixi.js` library & `power-audio.js` file in the your html head
3. Use `new PowerAudio('canvas-id').play('path-to-music.mp3')` to start the visualization

### Example

Here is a very simple example that will play the visualization fullscreen

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src='https://cdnjs.cloudflare.com/ajax/libs/pixi.js/4.8.1/pixi.min.js'></script>
    <script src="../../dist/power-audio.js"></script>
    <style>
        body { margin: 0; overflow: hidden; }
        #poweraudio, canvas { width: 100%; height: 100%; }
    </style>
</head>
<body>
    <div id="poweraudio"></div>
    <script>
        window.onload = () => {
            new PowerAudio('poweraudio')
                .play('music.mp3');
        };
    </script>
</body>
</html>
```

## Run locally

Clone this repository, install dependencies, then run `npm start`
```bash
git clone https://github.com/7PH/power-audio.git;
cd power-audio;
npm install;
npm start;
```

The demo will run on `localhost:3000`

