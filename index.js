var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Welcome to Movie Recommendations App');
});

app.listen(8080, function() {
    console.log('Listening on Port 8080');
});