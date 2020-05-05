var express = require('express');
var app = express();
var fs = require('fs');

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index')
});

app.listen(8080, function() {
    console.log('Listening on Port 8080');
});