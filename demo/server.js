const express = require('express');
const app = express();
const os = require('os');

app.use('/build', express.static(__dirname + '/../build'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/style.css', function(req, res){
    res.sendFile(__dirname + '/style.css');
});

app.get('/music', function(req, res){
    res.sendFile(__dirname + '/music.mp3');
});

app.get('/dist/client-bundle.js', function(req, res){
    res.sendFile(__dirname + '/dist/client-bundle.js');
});

const
    port = process.env.PORT || 3000,
    host = os.platform() === 'win32' ? '127.0.0.1' : '0.0.0.0';

console.log('App listening to http://' + host + ':' + port);
app.listen(port, host);
