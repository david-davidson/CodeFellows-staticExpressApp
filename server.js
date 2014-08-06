// Dependencies
var express = require('express');
var http = require('http');
var app = express();

// Serve up the /static dir
app.use(express.static(__dirname + '/views'));

app.get('/test', function(req, res) {
    res.sendFile(__dirname + '/views/test.html');
});

var server = http.createServer(app);
server.listen(3000, function() {
	console.log('Lookin legit on port 3000');
});